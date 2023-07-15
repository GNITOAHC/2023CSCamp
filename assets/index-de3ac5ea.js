(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();function Ht(n,t){const s=Object.create(null),o=n.split(",");for(let l=0;l<o.length;l++)s[o[l]]=!0;return t?l=>!!s[l.toLowerCase()]:l=>!!s[l]}const je=Object.freeze({}),Ms=Object.freeze([]),An=()=>{},vu=()=>!1,Zf=/^on[^a-z]/,No=n=>Zf.test(n),wl=n=>n.startsWith("onUpdate:"),Ne=Object.assign,Xa=(n,t)=>{const s=n.indexOf(t);s>-1&&n.splice(s,1)},Qf=Object.prototype.hasOwnProperty,ke=(n,t)=>Qf.call(n,t),ce=Array.isArray,us=n=>Ho(n)==="[object Map]",Bu=n=>Ho(n)==="[object Set]",Xf=n=>Ho(n)==="[object RegExp]",ye=n=>typeof n=="function",He=n=>typeof n=="string",ei=n=>typeof n=="symbol",Me=n=>n!==null&&typeof n=="object",ni=n=>Me(n)&&ye(n.then)&&ye(n.catch),bu=Object.prototype.toString,Ho=n=>bu.call(n),ti=n=>Ho(n).slice(8,-1),Du=n=>Ho(n)==="[object Object]",si=n=>He(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ml=Ht(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),eh=Ht("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Ql=n=>{const t=Object.create(null);return s=>t[s]||(t[s]=n(s))},nh=/-(\w)/g,lt=Ql(n=>n.replace(nh,(t,s)=>s?s.toUpperCase():"")),th=/\B([A-Z])/g,_t=Ql(n=>n.replace(th,"-$1").toLowerCase()),_s=Ql(n=>n.charAt(0).toUpperCase()+n.slice(1)),Xt=Ql(n=>n?`on${_s(n)}`:""),wo=(n,t)=>!Object.is(n,t),ns=(n,t)=>{for(let s=0;s<n.length;s++)n[s](t)},kl=(n,t,s)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:s})},sh=n=>{const t=parseFloat(n);return isNaN(t)?n:t},oh=n=>{const t=He(n)?Number(n):NaN;return isNaN(t)?n:t};let ec;const xl=()=>ec||(ec=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xe(n){if(ce(n)){const t={};for(let s=0;s<n.length;s++){const o=n[s],l=He(o)?ih(o):Xe(o);if(l)for(const r in l)t[r]=l[r]}return t}else{if(He(n))return n;if(Me(n))return n}}const lh=/;(?![^(]*\))/g,rh=/:([^]+)/,ah=/\/\*[^]*?\*\//g;function ih(n){const t={};return n.replace(ah,"").split(lh).forEach(s=>{if(s){const o=s.split(rh);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Le(n){let t="";if(He(n))t=n;else if(ce(n))for(let s=0;s<n.length;s++){const o=Le(n[s]);o&&(t+=o+" ")}else if(Me(n))for(const s in n)n[s]&&(t+=s+" ");return t.trim()}function O(n){if(!n)return null;let{class:t,style:s}=n;return t&&!He(t)&&(n.class=Le(t)),s&&(n.style=Xe(s)),n}const ch="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",ph="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Su=Ht(ch),uh=Ht(ph),dh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yh=Ht(dh);function wu(n){return!!n||n===""}const At=n=>He(n)?n:n==null?"":ce(n)||Me(n)&&(n.toString===bu||!ye(n.toString))?JSON.stringify(n,ku,2):String(n),ku=(n,t)=>t&&t.__v_isRef?ku(n,t.value):us(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[o,l])=>(s[`${o} =>`]=l,s),{})}:Bu(t)?{[`Set(${t.size})`]:[...t.values()]}:Me(t)&&!ce(t)&&!Du(t)?String(t):t;function El(n,...t){console.warn(`[Vue warn] ${n}`,...t)}let Dn;class xu{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dn,!t&&Dn&&(this.index=(Dn.scopes||(Dn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const s=Dn;try{return Dn=this,t()}finally{Dn=s}}else El("cannot run an inactive effect scope.")}on(){Dn=this}off(){Dn=this.parent}stop(t){if(this._active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function fh(n){return new xu(n)}function hh(n,t=Dn){t&&t.active&&t.effects.push(n)}function oi(){return Dn}function Eu(n){Dn?Dn.cleanups.push(n):El("onScopeDispose() is called when there is no active effect scope to be associated with.")}const li=n=>{const t=new Set(n);return t.w=0,t.n=0,t},Fu=n=>(n.w&Gt)>0,Pu=n=>(n.n&Gt)>0,mh=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=Gt},gh=n=>{const{deps:t}=n;if(t.length){let s=0;for(let o=0;o<t.length;o++){const l=t[o];Fu(l)&&!Pu(l)?l.delete(n):t[s++]=l,l.w&=~Gt,l.n&=~Gt}t.length=s}},Fl=new WeakMap;let ro=0,Gt=1;const Zr=30;let yn;const ds=Symbol("iterate"),Qr=Symbol("Map key iterate");class ri{constructor(t,s=null,o){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,hh(this,o)}run(){if(!this.active)return this.fn();let t=yn,s=Tt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=yn,yn=this,Tt=!0,Gt=1<<++ro,ro<=Zr?mh(this):nc(this),this.fn()}finally{ro<=Zr&&gh(this),Gt=1<<--ro,yn=this.parent,Tt=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){yn===this?this.deferStop=!0:this.active&&(nc(this),this.onStop&&this.onStop(),this.active=!1)}}function nc(n){const{deps:t}=n;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(n);t.length=0}}let Tt=!0;const Tu=[];function vs(){Tu.push(Tt),Tt=!1}function Bs(){const n=Tu.pop();Tt=n===void 0?!0:n}function an(n,t,s){if(Tt&&yn){let o=Fl.get(n);o||Fl.set(n,o=new Map);let l=o.get(s);l||o.set(s,l=li()),$u(l,{effect:yn,target:n,type:t,key:s})}}function $u(n,t){let s=!1;ro<=Zr?Pu(n)||(n.n|=Gt,s=!Fu(n)):s=!n.has(yn),s&&(n.add(yn),yn.deps.push(n),yn.onTrack&&yn.onTrack(Ne({effect:yn},t)))}function rt(n,t,s,o,l,r){const i=Fl.get(n);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(s==="length"&&ce(n)){const u=Number(o);i.forEach((d,y)=>{(y==="length"||y>=u)&&c.push(d)})}else switch(s!==void 0&&c.push(i.get(s)),t){case"add":ce(n)?si(s)&&c.push(i.get("length")):(c.push(i.get(ds)),us(n)&&c.push(i.get(Qr)));break;case"delete":ce(n)||(c.push(i.get(ds)),us(n)&&c.push(i.get(Qr)));break;case"set":us(n)&&c.push(i.get(ds));break}const p={target:n,type:t,key:s,newValue:o,oldValue:l,oldTarget:r};if(c.length===1)c[0]&&Xr(c[0],p);else{const u=[];for(const d of c)d&&u.push(...d);Xr(li(u),p)}}function Xr(n,t){const s=ce(n)?n:[...n];for(const o of s)o.computed&&tc(o,t);for(const o of s)o.computed||tc(o,t)}function tc(n,t){(n!==yn||n.allowRecurse)&&(n.onTrigger&&n.onTrigger(Ne({effect:n},t)),n.scheduler?n.scheduler():n.run())}function Ch(n,t){var s;return(s=Fl.get(n))==null?void 0:s.get(t)}const _h=Ht("__proto__,__v_isRef,__isVue"),Mu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ei)),Ah=Xl(),vh=Xl(!1,!0),Bh=Xl(!0),bh=Xl(!0,!0),sc=Dh();function Dh(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...s){const o=ge(this);for(let r=0,i=this.length;r<i;r++)an(o,"get",r+"");const l=o[t](...s);return l===-1||l===!1?o[t](...s.map(ge)):l}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...s){vs();const o=ge(this)[t].apply(this,s);return Bs(),o}}),n}function Sh(n){const t=ge(this);return an(t,"has",n),t.hasOwnProperty(n)}function Xl(n=!1,t=!1){return function(o,l,r){if(l==="__v_isReactive")return!n;if(l==="__v_isReadonly")return n;if(l==="__v_isShallow")return t;if(l==="__v_raw"&&r===(n?t?qu:ju:t?Gu:Ru).get(o))return o;const i=ce(o);if(!n){if(i&&ke(sc,l))return Reflect.get(sc,l,r);if(l==="hasOwnProperty")return Sh}const c=Reflect.get(o,l,r);return(ei(l)?Mu.has(l):_h(l))||(n||an(o,"get",l),t)?c:$e(c)?i&&si(l)?c:c.value:Me(c)?n?Vn(c):We(c):c}}const wh=Uu(),kh=Uu(!0);function Uu(n=!1){return function(s,o,l,r){let i=s[o];if(jt(i)&&$e(i)&&!$e(l))return!1;if(!n&&(!Pl(l)&&!jt(l)&&(i=ge(i),l=ge(l)),!ce(s)&&$e(i)&&!$e(l)))return i.value=l,!0;const c=ce(s)&&si(o)?Number(o)<s.length:ke(s,o),p=Reflect.set(s,o,l,r);return s===ge(r)&&(c?wo(l,i)&&rt(s,"set",o,l,i):rt(s,"add",o,l)),p}}function xh(n,t){const s=ke(n,t),o=n[t],l=Reflect.deleteProperty(n,t);return l&&s&&rt(n,"delete",t,void 0,o),l}function Eh(n,t){const s=Reflect.has(n,t);return(!ei(t)||!Mu.has(t))&&an(n,"has",t),s}function Fh(n){return an(n,"iterate",ce(n)?"length":ds),Reflect.ownKeys(n)}const Iu={get:Ah,set:wh,deleteProperty:xh,has:Eh,ownKeys:Fh},Ou={get:Bh,set(n,t){return El(`Set operation on key "${String(t)}" failed: target is readonly.`,n),!0},deleteProperty(n,t){return El(`Delete operation on key "${String(t)}" failed: target is readonly.`,n),!0}},Ph=Ne({},Iu,{get:vh,set:kh}),Th=Ne({},Ou,{get:bh}),ai=n=>n,er=n=>Reflect.getPrototypeOf(n);function Xo(n,t,s=!1,o=!1){n=n.__v_raw;const l=ge(n),r=ge(t);s||(t!==r&&an(l,"get",t),an(l,"get",r));const{has:i}=er(l),c=o?ai:s?ii:ko;if(i.call(l,t))return c(n.get(t));if(i.call(l,r))return c(n.get(r));n!==l&&n.get(t)}function el(n,t=!1){const s=this.__v_raw,o=ge(s),l=ge(n);return t||(n!==l&&an(o,"has",n),an(o,"has",l)),n===l?s.has(n):s.has(n)||s.has(l)}function nl(n,t=!1){return n=n.__v_raw,!t&&an(ge(n),"iterate",ds),Reflect.get(n,"size",n)}function oc(n){n=ge(n);const t=ge(this);return er(t).has.call(t,n)||(t.add(n),rt(t,"add",n,n)),this}function lc(n,t){t=ge(t);const s=ge(this),{has:o,get:l}=er(s);let r=o.call(s,n);r?Lu(s,o,n):(n=ge(n),r=o.call(s,n));const i=l.call(s,n);return s.set(n,t),r?wo(t,i)&&rt(s,"set",n,t,i):rt(s,"add",n,t),this}function rc(n){const t=ge(this),{has:s,get:o}=er(t);let l=s.call(t,n);l?Lu(t,s,n):(n=ge(n),l=s.call(t,n));const r=o?o.call(t,n):void 0,i=t.delete(n);return l&&rt(t,"delete",n,void 0,r),i}function ac(){const n=ge(this),t=n.size!==0,s=us(n)?new Map(n):new Set(n),o=n.clear();return t&&rt(n,"clear",void 0,void 0,s),o}function tl(n,t){return function(o,l){const r=this,i=r.__v_raw,c=ge(i),p=t?ai:n?ii:ko;return!n&&an(c,"iterate",ds),i.forEach((u,d)=>o.call(l,p(u),p(d),r))}}function sl(n,t,s){return function(...o){const l=this.__v_raw,r=ge(l),i=us(r),c=n==="entries"||n===Symbol.iterator&&i,p=n==="keys"&&i,u=l[n](...o),d=s?ai:t?ii:ko;return!t&&an(r,"iterate",p?Qr:ds),{next(){const{value:y,done:f}=u.next();return f?{value:y,done:f}:{value:c?[d(y[0]),d(y[1])]:d(y),done:f}},[Symbol.iterator](){return this}}}}function bt(n){return function(...t){{const s=t[0]?`on key "${t[0]}" `:"";console.warn(`${_s(n)} operation ${s}failed: target is readonly.`,ge(this))}return n==="delete"?!1:this}}function $h(){const n={get(r){return Xo(this,r)},get size(){return nl(this)},has:el,add:oc,set:lc,delete:rc,clear:ac,forEach:tl(!1,!1)},t={get(r){return Xo(this,r,!1,!0)},get size(){return nl(this)},has:el,add:oc,set:lc,delete:rc,clear:ac,forEach:tl(!1,!0)},s={get(r){return Xo(this,r,!0)},get size(){return nl(this,!0)},has(r){return el.call(this,r,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:tl(!0,!1)},o={get(r){return Xo(this,r,!0,!0)},get size(){return nl(this,!0)},has(r){return el.call(this,r,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:tl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=sl(r,!1,!1),s[r]=sl(r,!0,!1),t[r]=sl(r,!1,!0),o[r]=sl(r,!0,!0)}),[n,s,t,o]}const[Mh,Uh,Ih,Oh]=$h();function nr(n,t){const s=t?n?Oh:Ih:n?Uh:Mh;return(o,l,r)=>l==="__v_isReactive"?!n:l==="__v_isReadonly"?n:l==="__v_raw"?o:Reflect.get(ke(s,l)&&l in o?s:o,l,r)}const Lh={get:nr(!1,!1)},Rh={get:nr(!1,!0)},Gh={get:nr(!0,!1)},jh={get:nr(!0,!0)};function Lu(n,t,s){const o=ge(s);if(o!==s&&t.call(n,o)){const l=ti(n);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Ru=new WeakMap,Gu=new WeakMap,ju=new WeakMap,qu=new WeakMap;function qh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nh(n){return n.__v_skip||!Object.isExtensible(n)?0:qh(ti(n))}function We(n){return jt(n)?n:tr(n,!1,Iu,Lh,Ru)}function Nu(n){return tr(n,!1,Ph,Rh,Gu)}function Vn(n){return tr(n,!0,Ou,Gh,ju)}function ao(n){return tr(n,!0,Th,jh,qu)}function tr(n,t,s,o,l){if(!Me(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=l.get(n);if(r)return r;const i=Nh(n);if(i===0)return n;const c=new Proxy(n,i===2?o:s);return l.set(n,c),c}function ys(n){return jt(n)?ys(n.__v_raw):!!(n&&n.__v_isReactive)}function jt(n){return!!(n&&n.__v_isReadonly)}function Pl(n){return!!(n&&n.__v_isShallow)}function Tl(n){return ys(n)||jt(n)}function ge(n){const t=n&&n.__v_raw;return t?ge(t):n}function sr(n){return kl(n,"__v_skip",!0),n}const ko=n=>Me(n)?We(n):n,ii=n=>Me(n)?Vn(n):n;function ci(n){Tt&&yn&&(n=ge(n),$u(n.dep||(n.dep=li()),{target:n,type:"get",key:"value"}))}function pi(n,t){n=ge(n);const s=n.dep;s&&Xr(s,{target:n,type:"set",key:"value",newValue:t})}function $e(n){return!!(n&&n.__v_isRef===!0)}function Q(n){return Hu(n,!1)}function at(n){return Hu(n,!0)}function Hu(n,t){return $e(n)?n:new Hh(n,t)}class Hh{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:ge(t),this._value=s?t:ko(t)}get value(){return ci(this),this._value}set value(t){const s=this.__v_isShallow||Pl(t)||jt(t);t=s?t:ge(t),wo(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:ko(t),pi(this,t))}}function L(n){return $e(n)?n.value:n}const Wh={get:(n,t,s)=>L(Reflect.get(n,t,s)),set:(n,t,s,o)=>{const l=n[t];return $e(l)&&!$e(s)?(l.value=s,!0):Reflect.set(n,t,s,o)}};function Wu(n){return ys(n)?n:new Proxy(n,Wh)}class Vh{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=t(()=>ci(this),()=>pi(this));this._get=s,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function ui(n){return new Vh(n)}function zh(n){Tl(n)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=ce(n)?new Array(n.length):{};for(const s in n)t[s]=Vu(n,s);return t}class Kh{constructor(t,s,o){this._object=t,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Ch(ge(this._object),this._key)}}class Yh{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Jh(n,t,s){return $e(n)?n:ye(n)?new Yh(n):Me(n)&&arguments.length>1?Vu(n,t,s):Q(n)}function Vu(n,t,s){const o=n[t];return $e(o)?o:new Kh(n,t,s)}class Zh{constructor(t,s,o,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ri(t,()=>{this._dirty||(this._dirty=!0,pi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const t=ge(this);return ci(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Qh(n,t,s=!1){let o,l;const r=ye(n);r?(o=n,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=n.get,l=n.set);const i=new Zh(o,l,r||!l,s);return t&&!s&&(i.effect.onTrack=t.onTrack,i.effect.onTrigger=t.onTrigger),i}const fs=[];function gl(n){fs.push(n)}function Cl(){fs.pop()}function V(n,...t){vs();const s=fs.length?fs[fs.length-1].component:null,o=s&&s.appContext.config.warnHandler,l=Xh();if(o)gt(o,s,11,[n+t.join(""),s&&s.proxy,l.map(({vnode:r})=>`at <${yr(s,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${n}`,...t];l.length&&r.push(`
`,...em(l)),console.warn(...r)}Bs()}function Xh(){let n=fs[fs.length-1];if(!n)return[];const t=[];for(;n;){const s=t[0];s&&s.vnode===n?s.recurseCount++:t.push({vnode:n,recurseCount:0});const o=n.component&&n.component.parent;n=o&&o.vnode}return t}function em(n){const t=[];return n.forEach((s,o)=>{t.push(...o===0?[]:[`
`],...nm(s))}),t}function nm({vnode:n,recurseCount:t}){const s=t>0?`... (${t} recursive calls)`:"",o=n.component?n.component.parent==null:!1,l=` at <${yr(n.component,n.type,o)}`,r=">"+s;return n.props?[l,...tm(n.props),r]:[l+r]}function tm(n){const t=[],s=Object.keys(n);return s.slice(0,3).forEach(o=>{t.push(...zu(o,n[o]))}),s.length>3&&t.push(" ..."),t}function zu(n,t,s){return He(t)?(t=JSON.stringify(t),s?t:[`${n}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?s?t:[`${n}=${t}`]:$e(t)?(t=zu(n,ge(t.value),!0),s?t:[`${n}=Ref<`,t,">"]):ye(t)?[`${n}=fn${t.name?`<${t.name}>`:""}`]:(t=ge(t),s?t:[`${n}=`,t])}function sm(n,t){n!==void 0&&(typeof n!="number"?V(`${t} is not a valid number - got ${JSON.stringify(n)}.`):isNaN(n)&&V(`${t} is NaN - the duration expression might be incorrect.`))}const di={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function gt(n,t,s,o){let l;try{l=o?n(...o):n()}catch(r){or(r,t,s)}return l}function On(n,t,s,o){if(ye(n)){const r=gt(n,t,s,o);return r&&ni(r)&&r.catch(i=>{or(i,t,s)}),r}const l=[];for(let r=0;r<n.length;r++)l.push(On(n[r],t,s,o));return l}function or(n,t,s,o=!0){const l=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,c=di[s];for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,i,c)===!1)return}r=r.parent}const p=t.appContext.config.errorHandler;if(p){gt(p,null,10,[n,i,c]);return}}om(n,s,l,o)}function om(n,t,s,o=!0){{const l=di[t];if(s&&gl(s),V(`Unhandled error${l?` during execution of ${l}`:""}`),s&&Cl(),o)throw n;console.error(n)}}let xo=!1,ea=!1;const sn=[];let et=0;const Us=[];let Xn=null,kt=0;const Ku=Promise.resolve();let yi=null;const lm=100;function on(n){const t=yi||Ku;return n?t.then(this?n.bind(this):n):t}function rm(n){let t=et+1,s=sn.length;for(;t<s;){const o=t+s>>>1;Eo(sn[o])<n?t=o+1:s=o}return t}function lr(n){(!sn.length||!sn.includes(n,xo&&n.allowRecurse?et+1:et))&&(n.id==null?sn.push(n):sn.splice(rm(n.id),0,n),Yu())}function Yu(){!xo&&!ea&&(ea=!0,yi=Ku.then(Qu))}function am(n){const t=sn.indexOf(n);t>et&&sn.splice(t,1)}function Ju(n){ce(n)?Us.push(...n):(!Xn||!Xn.includes(n,n.allowRecurse?kt+1:kt))&&Us.push(n),Yu()}function ic(n,t=xo?et+1:0){for(n=n||new Map;t<sn.length;t++){const s=sn[t];if(s&&s.pre){if(fi(n,s))continue;sn.splice(t,1),t--,s()}}}function Zu(n){if(Us.length){const t=[...new Set(Us)];if(Us.length=0,Xn){Xn.push(...t);return}for(Xn=t,n=n||new Map,Xn.sort((s,o)=>Eo(s)-Eo(o)),kt=0;kt<Xn.length;kt++)fi(n,Xn[kt])||Xn[kt]();Xn=null,kt=0}}const Eo=n=>n.id==null?1/0:n.id,im=(n,t)=>{const s=Eo(n)-Eo(t);if(s===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return s};function Qu(n){ea=!1,xo=!0,n=n||new Map,sn.sort(im);const t=s=>fi(n,s);try{for(et=0;et<sn.length;et++){const s=sn[et];if(s&&s.active!==!1){if(t(s))continue;gt(s,null,14)}}}finally{et=0,sn.length=0,Zu(n),xo=!1,yi=null,(sn.length||Us.length)&&Qu(n)}}function fi(n,t){if(!n.has(t))n.set(t,1);else{const s=n.get(t);if(s>lm){const o=t.ownerInstance,l=o&&To(o.type);return V(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else n.set(t,s+1)}}let $t=!1;const Ts=new Set;xl().__VUE_HMR_RUNTIME__={createRecord:_r(Xu),rerender:_r(um),reload:_r(dm)};const As=new Map;function cm(n){const t=n.type.__hmrId;let s=As.get(t);s||(Xu(t,n.type),s=As.get(t)),s.instances.add(n)}function pm(n){As.get(n.type.__hmrId).instances.delete(n)}function Xu(n,t){return As.has(n)?!1:(As.set(n,{initialDef:fo(t),instances:new Set}),!0)}function fo(n){return Pd(n)?n.__vccOpts:n}function um(n,t){const s=As.get(n);s&&(s.initialDef.render=t,[...s.instances].forEach(o=>{t&&(o.render=t,fo(o.type).render=t),o.renderCache=[],$t=!0,o.update(),$t=!1}))}function dm(n,t){const s=As.get(n);if(!s)return;t=fo(t),cc(s.initialDef,t);const o=[...s.instances];for(const l of o){const r=fo(l.type);Ts.has(r)||(r!==s.initialDef&&cc(r,t),Ts.add(r)),l.appContext.propsCache.delete(l.type),l.appContext.emitsCache.delete(l.type),l.appContext.optionsCache.delete(l.type),l.ceReload?(Ts.add(r),l.ceReload(t.styles),Ts.delete(r)):l.parent?lr(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Ju(()=>{for(const l of o)Ts.delete(fo(l.type))})}function cc(n,t){Ne(n,t);for(const s in n)s!=="__file"&&!(s in t)&&delete n[s]}function _r(n){return(t,s)=>{try{return n(t,s)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let nt,io=[],na=!1;function Wo(n,...t){nt?nt.emit(n,...t):na||io.push({event:n,args:t})}function ed(n,t){var s,o;nt=n,nt?(nt.enabled=!0,io.forEach(({event:l,args:r})=>nt.emit(l,...r)),io=[]):typeof window<"u"&&window.HTMLElement&&!((o=(s=window.navigator)==null?void 0:s.userAgent)!=null&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{ed(r,t)}),setTimeout(()=>{nt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,na=!0,io=[])},3e3)):(na=!0,io=[])}function ym(n,t){Wo("app:init",n,t,{Fragment:Pe,Text:zo,Comment:fn,Static:_l})}function fm(n){Wo("app:unmount",n)}const ta=hi("component:added"),nd=hi("component:updated"),hm=hi("component:removed"),mm=n=>{nt&&typeof nt.cleanupBuffer=="function"&&!nt.cleanupBuffer(n)&&hm(n)};function hi(n){return t=>{Wo(n,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const gm=td("perf:start"),Cm=td("perf:end");function td(n){return(t,s,o)=>{Wo(n,t.appContext.app,t.uid,t,s,o)}}function _m(n,t,s){Wo("component:emit",n.appContext.app,n,t,s)}function Am(n,t,...s){if(n.isUnmounted)return;const o=n.vnode.props||je;{const{emitsOptions:d,propsOptions:[y]}=n;if(d)if(!(t in d))(!y||!(Xt(t)in y))&&V(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Xt(t)}" prop.`);else{const f=d[t];ye(f)&&(f(...s)||V(`Invalid event arguments: event validation failed for event "${t}".`))}}let l=s;const r=t.startsWith("update:"),i=r&&t.slice(7);if(i&&i in o){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:y,trim:f}=o[d]||je;f&&(l=s.map(m=>He(m)?m.trim():m)),y&&(l=s.map(sh))}_m(n,t,l);{const d=t.toLowerCase();d!==t&&o[Xt(d)]&&V(`Event "${d}" is emitted in component ${yr(n,n.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${_t(t)}" instead of "${t}".`)}let c,p=o[c=Xt(t)]||o[c=Xt(lt(t))];!p&&r&&(p=o[c=Xt(_t(t))]),p&&On(p,n,6,l);const u=o[c+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,On(u,n,6,l)}}function sd(n,t,s=!1){const o=t.emitsCache,l=o.get(n);if(l!==void 0)return l;const r=n.emits;let i={},c=!1;if(!ye(n)){const p=u=>{const d=sd(u,t,!0);d&&(c=!0,Ne(i,d))};!s&&t.mixins.length&&t.mixins.forEach(p),n.extends&&p(n.extends),n.mixins&&n.mixins.forEach(p)}return!r&&!c?(Me(n)&&o.set(n,null),null):(ce(r)?r.forEach(p=>i[p]=null):Ne(i,r),Me(n)&&o.set(n,i),i)}function rr(n,t){return!n||!No(t)?!1:(t=t.slice(2).replace(/Once$/,""),ke(n,t[0].toLowerCase()+t.slice(1))||ke(n,_t(t))||ke(n,t))}let Qe=null,ar=null;function $l(n){const t=Qe;return Qe=n,ar=n&&n.type.__scopeId||null,t}function yL(n){ar=n}function fL(){ar=null}function _(n,t=Qe,s){if(!t||n._n)return n;const o=(...l)=>{o._d&&bc(-1);const r=$l(t);let i;try{i=n(...l)}finally{$l(r),o._d&&bc(1)}return nd(t),i};return o._n=!0,o._c=!0,o._d=!0,o}let sa=!1;function Ml(){sa=!0}function Ar(n){const{type:t,vnode:s,proxy:o,withProxy:l,props:r,propsOptions:[i],slots:c,attrs:p,emit:u,render:d,renderCache:y,data:f,setupState:m,ctx:g,inheritAttrs:B}=n;let D,S;const w=$l(n);sa=!1;try{if(s.shapeFlag&4){const T=l||o;D=Wn(d.call(T,T,y,r,m,f,g)),S=p}else{const T=t;p===r&&Ml(),D=Wn(T.length>1?T(r,{get attrs(){return Ml(),p},slots:c,emit:u}):T(r,null)),S=t.props?p:Bm(p)}}catch(T){ho.length=0,or(T,n,1),D=U(fn)}let v=D,P;if(D.patchFlag>0&&D.patchFlag&2048&&([v,P]=vm(D)),S&&B!==!1){const T=Object.keys(S),{shapeFlag:M}=v;if(T.length){if(M&7)i&&T.some(wl)&&(S=bm(S,i)),v=it(v,S);else if(!sa&&v.type!==fn){const W=Object.keys(p),G=[],K=[];for(let re=0,de=W.length;re<de;re++){const X=W[re];No(X)?wl(X)||G.push(X[2].toLowerCase()+X.slice(3)):K.push(X)}K.length&&V(`Extraneous non-props attributes (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),G.length&&V(`Extraneous non-emits event listeners (${G.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(pc(v)||V("Runtime directive used on component with non-element root node. The directives will not function as intended."),v=it(v),v.dirs=v.dirs?v.dirs.concat(s.dirs):s.dirs),s.transition&&(pc(v)||V("Component inside <Transition> renders non-element root node that cannot be animated."),v.transition=s.transition),P?P(v):D=v,$l(w),D}const vm=n=>{const t=n.children,s=n.dynamicChildren,o=od(t);if(!o)return[n,void 0];const l=t.indexOf(o),r=s?s.indexOf(o):-1,i=c=>{t[l]=c,s&&(r>-1?s[r]=c:c.patchFlag>0&&(n.dynamicChildren=[...s,c]))};return[Wn(o),i]};function od(n){let t;for(let s=0;s<n.length;s++){const o=n[s];if(qt(o)){if(o.type!==fn||o.children==="v-if"){if(t)return;t=o}}else return}return t}const Bm=n=>{let t;for(const s in n)(s==="class"||s==="style"||No(s))&&((t||(t={}))[s]=n[s]);return t},bm=(n,t)=>{const s={};for(const o in n)(!wl(o)||!(o.slice(9)in t))&&(s[o]=n[o]);return s},pc=n=>n.shapeFlag&7||n.type===fn;function Dm(n,t,s){const{props:o,children:l,component:r}=n,{props:i,children:c,patchFlag:p}=t,u=r.emitsOptions;if((l||c)&&$t||t.dirs||t.transition)return!0;if(s&&p>=0){if(p&1024)return!0;if(p&16)return o?uc(o,i,u):!!i;if(p&8){const d=t.dynamicProps;for(let y=0;y<d.length;y++){const f=d[y];if(i[f]!==o[f]&&!rr(u,f))return!0}}}else return(l||c)&&(!c||!c.$stable)?!0:o===i?!1:o?i?uc(o,i,u):!0:!!i;return!1}function uc(n,t,s){const o=Object.keys(t);if(o.length!==Object.keys(n).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(t[r]!==n[r]&&!rr(s,r))return!0}return!1}function Sm({vnode:n,parent:t},s){for(;t&&t.subTree===n;)(n=t.vnode).el=s,t=t.parent}const ld=n=>n.__isSuspense;function wm(n,t){t&&t.pendingBranch?ce(n)?t.effects.push(...n):t.effects.push(n):Ju(n)}function bs(n,t){return mi(n,null,t)}const ol={};function Ae(n,t,s){return ye(t)||V("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),mi(n,t,s)}function mi(n,t,{immediate:s,deep:o,flush:l,onTrack:r,onTrigger:i}=je){var c;t||(s!==void 0&&V('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&V('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const p=T=>{V("Invalid watch source: ",T,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=oi()===((c=Ze)==null?void 0:c.scope)?Ze:null;let d,y=!1,f=!1;if($e(n)?(d=()=>n.value,y=Pl(n)):ys(n)?(d=()=>n,o=!0):ce(n)?(f=!0,y=n.some(T=>ys(T)||Pl(T)),d=()=>n.map(T=>{if($e(T))return T.value;if(ys(T))return is(T);if(ye(T))return gt(T,u,2);p(T)})):ye(n)?t?d=()=>gt(n,u,2):d=()=>{if(!(u&&u.isUnmounted))return m&&m(),On(n,u,3,[g])}:(d=An,p(n)),t&&o){const T=d;d=()=>is(T())}let m,g=T=>{m=v.onStop=()=>{gt(T,u,4)}},B;if(Po)if(g=An,t?s&&On(t,u,3,[d(),f?[]:void 0,g]):d(),l==="sync"){const T=M8();B=T.__watcherHandles||(T.__watcherHandles=[])}else return An;let D=f?new Array(n.length).fill(ol):ol;const S=()=>{if(v.active)if(t){const T=v.run();(o||y||(f?T.some((M,W)=>wo(M,D[W])):wo(T,D)))&&(m&&m(),On(t,u,3,[T,D===ol?void 0:f&&D[0]===ol?[]:D,g]),D=T)}else v.run()};S.allowRecurse=!!t;let w;l==="sync"?w=S:l==="post"?w=()=>nn(S,u&&u.suspense):(S.pre=!0,u&&(S.id=u.uid),w=()=>lr(S));const v=new ri(d,w);v.onTrack=r,v.onTrigger=i,t?s?S():D=v.run():l==="post"?nn(v.run.bind(v),u&&u.suspense):v.run();const P=()=>{v.stop(),u&&u.scope&&Xa(u.scope.effects,v)};return B&&B.push(P),P}function km(n,t,s){const o=this.proxy,l=He(n)?n.includes(".")?rd(o,n):()=>o[n]:n.bind(o,o);let r;ye(t)?r=t:(r=t.handler,s=t);const i=Ze;Gs(this);const c=mi(l,r.bind(o),s);return i?Gs(i):ms(),c}function rd(n,t){const s=t.split(".");return()=>{let o=n;for(let l=0;l<s.length&&o;l++)o=o[s[l]];return o}}function is(n,t){if(!Me(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),$e(n))is(n.value,t);else if(ce(n))for(let s=0;s<n.length;s++)is(n[s],t);else if(Bu(n)||us(n))n.forEach(s=>{is(s,t)});else if(Du(n))for(const s in n)is(n[s],t);return n}function ad(n){eh(n)&&V("Do not use built-in directive ids as custom directive id: "+n)}function id(n,t){const s=Qe;if(s===null)return V("withDirectives can only be used inside render functions."),n;const o=dr(s)||s.proxy,l=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[i,c,p,u=je]=t[r];i&&(ye(i)&&(i={mounted:i,updated:i}),i.deep&&is(c),l.push({dir:i,instance:o,value:c,oldValue:void 0,arg:p,modifiers:u}))}return n}function Kt(n,t,s,o){const l=n.dirs,r=t&&t.dirs;for(let i=0;i<l.length;i++){const c=l[i];r&&(c.oldValue=r[i].value);let p=c.dir[o];p&&(vs(),On(p,s,8,[n.el,c,n,t]),Bs())}}function xm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wt(()=>{n.isMounted=!0}),Vo(()=>{n.isUnmounting=!0}),n}const $n=[Function,Array],Em={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$n,onEnter:$n,onAfterEnter:$n,onEnterCancelled:$n,onBeforeLeave:$n,onLeave:$n,onAfterLeave:$n,onLeaveCancelled:$n,onBeforeAppear:$n,onAppear:$n,onAfterAppear:$n,onAppearCancelled:$n};function Fm(n,t){const{leavingVNodes:s}=n;let o=s.get(t.type);return o||(o=Object.create(null),s.set(t.type,o)),o}function oa(n,t,s,o){const{appear:l,mode:r,persisted:i=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:y,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:B,onAppear:D,onAfterAppear:S,onAppearCancelled:w}=t,v=String(n.key),P=Fm(s,n),T=(G,K)=>{G&&On(G,o,9,K)},M=(G,K)=>{const re=K[1];T(G,K),ce(G)?G.every(de=>de.length<=1)&&re():G.length<=1&&re()},W={mode:r,persisted:i,beforeEnter(G){let K=c;if(!s.isMounted)if(l)K=B||c;else return;G._leaveCb&&G._leaveCb(!0);const re=P[v];re&&ts(n,re)&&re.el._leaveCb&&re.el._leaveCb(),T(K,[G])},enter(G){let K=p,re=u,de=d;if(!s.isMounted)if(l)K=D||p,re=S||u,de=w||d;else return;let X=!1;const Ce=G._enterCb=ve=>{X||(X=!0,ve?T(de,[G]):T(re,[G]),W.delayedLeave&&W.delayedLeave(),G._enterCb=void 0)};K?M(K,[G,Ce]):Ce()},leave(G,K){const re=String(n.key);if(G._enterCb&&G._enterCb(!0),s.isUnmounting)return K();T(y,[G]);let de=!1;const X=G._leaveCb=Ce=>{de||(de=!0,K(),Ce?T(g,[G]):T(m,[G]),G._leaveCb=void 0,P[re]===n&&delete P[re])};P[re]=n,f?M(f,[G,X]):X()},clone(G){return oa(G,t,s,o)}};return W}function Ul(n,t){n.shapeFlag&6&&n.component?Ul(n.component.subTree,t):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function cd(n,t=!1,s){let o=[],l=0;for(let r=0;r<n.length;r++){let i=n[r];const c=s==null?i.key:String(s)+String(i.key!=null?i.key:r);i.type===Pe?(i.patchFlag&128&&l++,o=o.concat(cd(i.children,t,c))):(t||i.type!==fn)&&o.push(c!=null?it(i,{key:c}):i)}if(l>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function Ee(n,t){return ye(n)?(()=>Ne({name:n.name},t,{setup:n}))():n}const Is=n=>!!n.type.__asyncLoader,gi=n=>n.type.__isKeepAlive,Pm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:t}){const s=Fn(),o=s.ctx;if(!o.renderer)return()=>{const w=t.default&&t.default();return w&&w.length===1?w[0]:w};const l=new Map,r=new Set;let i=null;s.__v_cache=l;const c=s.suspense,{renderer:{p,m:u,um:d,o:{createElement:y}}}=o,f=y("div");o.activate=(w,v,P,T,M)=>{const W=w.component;u(w,v,P,0,c),p(W.vnode,w,v,P,W,c,T,w.slotScopeIds,M),nn(()=>{W.isDeactivated=!1,W.a&&ns(W.a);const G=w.props&&w.props.onVnodeMounted;G&&Mn(G,W.parent,w)},c),ta(W)},o.deactivate=w=>{const v=w.component;u(w,f,null,1,c),nn(()=>{v.da&&ns(v.da);const P=w.props&&w.props.onVnodeUnmounted;P&&Mn(P,v.parent,w),v.isDeactivated=!0},c),ta(v)};function m(w){vr(w),d(w,s,c,!0)}function g(w){l.forEach((v,P)=>{const T=To(v.type);T&&(!w||!w(T))&&B(P)})}function B(w){const v=l.get(w);!i||!ts(v,i)?m(v):i&&vr(i),l.delete(w),r.delete(w)}Ae(()=>[n.include,n.exclude],([w,v])=>{w&&g(P=>co(w,P)),v&&g(P=>!co(v,P))},{flush:"post",deep:!0});let D=null;const S=()=>{D!=null&&l.set(D,Br(s.subTree))};return Wt(S),cr(S),Vo(()=>{l.forEach(w=>{const{subTree:v,suspense:P}=s,T=Br(v);if(w.type===T.type&&w.key===T.key){vr(T);const M=T.component.da;M&&nn(M,P);return}m(w)})}),()=>{if(D=null,!t.default)return null;const w=t.default(),v=w[0];if(w.length>1)return V("KeepAlive should contain exactly one component child."),i=null,w;if(!qt(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return i=null,v;let P=Br(v);const T=P.type,M=To(Is(P)?P.type.__asyncResolved||{}:T),{include:W,exclude:G,max:K}=n;if(W&&(!M||!co(W,M))||G&&M&&co(G,M))return i=P,v;const re=P.key==null?T:P.key,de=l.get(re);return P.el&&(P=it(P),v.shapeFlag&128&&(v.ssContent=P)),D=re,de?(P.el=de.el,P.component=de.component,P.transition&&Ul(P,P.transition),P.shapeFlag|=512,r.delete(re),r.add(re)):(r.add(re),K&&r.size>parseInt(K,10)&&B(r.values().next().value)),P.shapeFlag|=256,i=P,ld(v.type)?v:P}}},pd=Pm;function co(n,t){return ce(n)?n.some(s=>co(s,t)):He(n)?n.split(",").includes(t):Xf(n)?n.test(t):!1}function ud(n,t){yd(n,"a",t)}function dd(n,t){yd(n,"da",t)}function yd(n,t,s=Ze){const o=n.__wdc||(n.__wdc=()=>{let l=s;for(;l;){if(l.isDeactivated)return;l=l.parent}return n()});if(ir(t,o,s),s){let l=s.parent;for(;l&&l.parent;)gi(l.parent.vnode)&&Tm(o,t,s,l),l=l.parent}}function Tm(n,t,s,o){const l=ir(t,n,o,!0);pr(()=>{Xa(o[t],l)},s)}function vr(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function Br(n){return n.shapeFlag&128?n.ssContent:n}function ir(n,t,s=Ze,o=!1){if(s){const l=s[n]||(s[n]=[]),r=t.__weh||(t.__weh=(...i)=>{if(s.isUnmounted)return;vs(),Gs(s);const c=On(t,s,n,i);return ms(),Bs(),c});return o?l.unshift(r):l.push(r),r}else{const l=Xt(di[n].replace(/ hook$/,""));V(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Bt=n=>(t,s=Ze)=>(!Po||n==="sp")&&ir(n,(...o)=>t(...o),s),$m=Bt("bm"),Wt=Bt("m"),Mm=Bt("bu"),cr=Bt("u"),Vo=Bt("bum"),pr=Bt("um"),Um=Bt("sp"),Im=Bt("rtg"),Om=Bt("rtc");function Lm(n,t=Ze){ir("ec",n,t)}const la="components";function Rs(n,t){return Gm(la,n,!0,t)||n}const Rm=Symbol.for("v-ndc");function Gm(n,t,s=!0,o=!1){const l=Qe||Ze;if(l){const r=l.type;if(n===la){const c=To(r,!1);if(c&&(c===t||c===lt(t)||c===_s(lt(t))))return r}const i=dc(l[n]||r[n],t)||dc(l.appContext[n],t);if(!i&&o)return r;if(s&&!i){const c=n===la?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";V(`Failed to resolve ${n.slice(0,-1)}: ${t}${c}`)}return i}else V(`resolve${_s(n.slice(0,-1))} can only be used in render() or setup().`)}function dc(n,t){return n&&(n[t]||n[lt(t)]||n[_s(lt(t))])}function Ds(n,t,s,o){let l;const r=s&&s[o];if(ce(n)||He(n)){l=new Array(n.length);for(let i=0,c=n.length;i<c;i++)l[i]=t(n[i],i,void 0,r&&r[i])}else if(typeof n=="number"){Number.isInteger(n)||V(`The v-for range expect an integer value but got ${n}.`),l=new Array(n);for(let i=0;i<n;i++)l[i]=t(i+1,i,void 0,r&&r[i])}else if(Me(n))if(n[Symbol.iterator])l=Array.from(n,(i,c)=>t(i,c,void 0,r&&r[c]));else{const i=Object.keys(n);l=new Array(i.length);for(let c=0,p=i.length;c<p;c++){const u=i[c];l[c]=t(n[u],u,c,r&&r[c])}}else l=[];return s&&(s[o]=l),l}function mn(n,t,s={},o,l){if(Qe.isCE||Qe.parent&&Is(Qe.parent)&&Qe.parent.isCE)return t!=="default"&&(s.name=t),U("slot",s,o&&o());let r=n[t];r&&r.length>1&&(V("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),h();const i=r&&fd(r(s)),c=x(Pe,{key:s.key||i&&i.key||`_${t}`},i||(o?o():[]),i&&n._===1?64:-2);return!l&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),r&&r._c&&(r._d=!0),c}function fd(n){return n.some(t=>qt(t)?!(t.type===fn||t.type===Pe&&!fd(t.children)):!0)?n:null}const ra=n=>n?xd(n)?dr(n)||n.proxy:ra(n.parent):null,hs=Ne(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>ao(n.props),$attrs:n=>ao(n.attrs),$slots:n=>ao(n.slots),$refs:n=>ao(n.refs),$parent:n=>ra(n.parent),$root:n=>ra(n.root),$emit:n=>n.emit,$options:n=>_i(n),$forceUpdate:n=>n.f||(n.f=()=>lr(n.update)),$nextTick:n=>n.n||(n.n=on.bind(n.proxy)),$watch:n=>km.bind(n)}),Ci=n=>n==="_"||n==="$",br=(n,t)=>n!==je&&!n.__isScriptSetup&&ke(n,t),hd={get({_:n},t){const{ctx:s,setupState:o,data:l,props:r,accessCache:i,type:c,appContext:p}=n;if(t==="__isVue")return!0;let u;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return l[t];case 4:return s[t];case 3:return r[t]}else{if(br(o,t))return i[t]=1,o[t];if(l!==je&&ke(l,t))return i[t]=2,l[t];if((u=n.propsOptions[0])&&ke(u,t))return i[t]=3,r[t];if(s!==je&&ke(s,t))return i[t]=4,s[t];aa&&(i[t]=0)}}const d=hs[t];let y,f;if(d)return t==="$attrs"?(an(n,"get",t),Ml()):t==="$slots"&&an(n,"get",t),d(n);if((y=c.__cssModules)&&(y=y[t]))return y;if(s!==je&&ke(s,t))return i[t]=4,s[t];if(f=p.config.globalProperties,ke(f,t))return f[t];Qe&&(!He(t)||t.indexOf("__v")!==0)&&(l!==je&&Ci(t[0])&&ke(l,t)?V(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):n===Qe&&V(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:n},t,s){const{data:o,setupState:l,ctx:r}=n;return br(l,t)?(l[t]=s,!0):l.__isScriptSetup&&ke(l,t)?(V(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==je&&ke(o,t)?(o[t]=s,!0):ke(n.props,t)?(V(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in n?(V(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in n.appContext.config.globalProperties?Object.defineProperty(r,t,{enumerable:!0,configurable:!0,value:s}):r[t]=s,!0)},has({_:{data:n,setupState:t,accessCache:s,ctx:o,appContext:l,propsOptions:r}},i){let c;return!!s[i]||n!==je&&ke(n,i)||br(t,i)||(c=r[0])&&ke(c,i)||ke(o,i)||ke(hs,i)||ke(l.config.globalProperties,i)},defineProperty(n,t,s){return s.get!=null?n._.accessCache[t]=0:ke(s,"value")&&this.set(n,t,s.value,null),Reflect.defineProperty(n,t,s)}};hd.ownKeys=n=>(V("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(n));function jm(n){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>n}),Object.keys(hs).forEach(s=>{Object.defineProperty(t,s,{configurable:!0,enumerable:!1,get:()=>hs[s](n),set:An})}),t}function qm(n){const{ctx:t,propsOptions:[s]}=n;s&&Object.keys(s).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>n.props[o],set:An})})}function Nm(n){const{ctx:t,setupState:s}=n;Object.keys(ge(s)).forEach(o=>{if(!s.__isScriptSetup){if(Ci(o[0])){V(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s[o],set:An})}})}function Hm(){return Wm().slots}function Wm(){const n=Fn();return n||V("useContext() called without active instance."),n.setupContext||(n.setupContext=Fd(n))}function yc(n){return ce(n)?n.reduce((t,s)=>(t[s]=null,t),{}):n}function Vm(){const n=Object.create(null);return(t,s)=>{n[s]?V(`${t} property "${s}" is already defined in ${n[s]}.`):n[s]=t}}let aa=!0;function zm(n){const t=_i(n),s=n.proxy,o=n.ctx;aa=!1,t.beforeCreate&&fc(t.beforeCreate,n,"bc");const{data:l,computed:r,methods:i,watch:c,provide:p,inject:u,created:d,beforeMount:y,mounted:f,beforeUpdate:m,updated:g,activated:B,deactivated:D,beforeDestroy:S,beforeUnmount:w,destroyed:v,unmounted:P,render:T,renderTracked:M,renderTriggered:W,errorCaptured:G,serverPrefetch:K,expose:re,inheritAttrs:de,components:X,directives:Ce,filters:ve}=t,be=Vm();{const[oe]=n.propsOptions;if(oe)for(const pe in oe)be("Props",pe)}if(u&&Km(u,o,be),i)for(const oe in i){const pe=i[oe];ye(pe)?(Object.defineProperty(o,oe,{value:pe.bind(s),configurable:!0,enumerable:!0,writable:!0}),be("Methods",oe)):V(`Method "${oe}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(l){ye(l)||V("The data option must be a function. Plain object usage is no longer supported.");const oe=l.call(s,s);if(ni(oe)&&V("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Me(oe))V("data() should return an object.");else{n.data=We(oe);for(const pe in oe)be("Data",pe),Ci(pe[0])||Object.defineProperty(o,pe,{configurable:!0,enumerable:!0,get:()=>oe[pe],set:An})}}if(aa=!0,r)for(const oe in r){const pe=r[oe],we=ye(pe)?pe.bind(s,s):ye(pe.get)?pe.get.bind(s,s):An;we===An&&V(`Computed property "${oe}" has no getter.`);const Ie=!ye(pe)&&ye(pe.set)?pe.set.bind(s):()=>{V(`Write operation failed: computed property "${oe}" is readonly.`)},Pn=R({get:we,set:Ie});Object.defineProperty(o,oe,{enumerable:!0,configurable:!0,get:()=>Pn.value,set:tn=>Pn.value=tn}),be("Computed",oe)}if(c)for(const oe in c)md(c[oe],o,s,oe);if(p){const oe=ye(p)?p.call(s):p;Reflect.ownKeys(oe).forEach(pe=>{Sn(pe,oe[pe])})}d&&fc(d,n,"c");function Re(oe,pe){ce(pe)?pe.forEach(we=>oe(we.bind(s))):pe&&oe(pe.bind(s))}if(Re($m,y),Re(Wt,f),Re(Mm,m),Re(cr,g),Re(ud,B),Re(dd,D),Re(Lm,G),Re(Om,M),Re(Im,W),Re(Vo,w),Re(pr,P),Re(Um,K),ce(re))if(re.length){const oe=n.exposed||(n.exposed={});re.forEach(pe=>{Object.defineProperty(oe,pe,{get:()=>s[pe],set:we=>s[pe]=we})})}else n.exposed||(n.exposed={});T&&n.render===An&&(n.render=T),de!=null&&(n.inheritAttrs=de),X&&(n.components=X),Ce&&(n.directives=Ce)}function Km(n,t,s=An){ce(n)&&(n=ia(n));for(const o in n){const l=n[o];let r;Me(l)?"default"in l?r=k(l.from||o,l.default,!0):r=k(l.from||o):r=k(l),$e(r)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[o]=r,s("Inject",o)}}function fc(n,t,s){On(ce(n)?n.map(o=>o.bind(t.proxy)):n.bind(t.proxy),t,s)}function md(n,t,s,o){const l=o.includes(".")?rd(s,o):()=>s[o];if(He(n)){const r=t[n];ye(r)?Ae(l,r):V(`Invalid watch handler specified by key "${n}"`,r)}else if(ye(n))Ae(l,n.bind(s));else if(Me(n))if(ce(n))n.forEach(r=>md(r,t,s,o));else{const r=ye(n.handler)?n.handler.bind(s):t[n.handler];ye(r)?Ae(l,r,n):V(`Invalid watch handler specified by key "${n.handler}"`,r)}else V(`Invalid watch option: "${o}"`,n)}function _i(n){const t=n.type,{mixins:s,extends:o}=t,{mixins:l,optionsCache:r,config:{optionMergeStrategies:i}}=n.appContext,c=r.get(t);let p;return c?p=c:!l.length&&!s&&!o?p=t:(p={},l.length&&l.forEach(u=>Il(p,u,i,!0)),Il(p,t,i)),Me(t)&&r.set(t,p),p}function Il(n,t,s,o=!1){const{mixins:l,extends:r}=t;r&&Il(n,r,s,!0),l&&l.forEach(i=>Il(n,i,s,!0));for(const i in t)if(o&&i==="expose")V('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=Ym[i]||s&&s[i];n[i]=c?c(n[i],t[i]):t[i]}return n}const Ym={data:hc,props:mc,emits:mc,methods:po,computed:po,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:po,directives:po,watch:Zm,provide:hc,inject:Jm};function hc(n,t){return t?n?function(){return Ne(ye(n)?n.call(this,this):n,ye(t)?t.call(this,this):t)}:t:n}function Jm(n,t){return po(ia(n),ia(t))}function ia(n){if(ce(n)){const t={};for(let s=0;s<n.length;s++)t[n[s]]=n[s];return t}return n}function pn(n,t){return n?[...new Set([].concat(n,t))]:t}function po(n,t){return n?Ne(Object.create(null),n,t):t}function mc(n,t){return n?ce(n)&&ce(t)?[...new Set([...n,...t])]:Ne(Object.create(null),yc(n),yc(t??{})):t}function Zm(n,t){if(!n)return t;if(!t)return n;const s=Ne(Object.create(null),n);for(const o in t)s[o]=pn(n[o],t[o]);return s}function gd(){return{app:null,config:{isNativeTag:vu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qm=0;function Xm(n,t){return function(o,l=null){ye(o)||(o=Ne({},o)),l!=null&&!Me(l)&&(V("root props passed to app.mount() must be an object."),l=null);const r=gd();Object.defineProperty(r.config,"unwrapInjectedRef",{get(){return!0},set(){V("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const i=new Set;let c=!1;const p=r.app={_uid:Qm++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:Gl,get config(){return r.config},set config(u){V("app.config cannot be replaced. Modify individual options instead.")},use(u,...d){return i.has(u)?V("Plugin has already been applied to target app."):u&&ye(u.install)?(i.add(u),u.install(p,...d)):ye(u)?(i.add(u),u(p,...d)):V('A plugin must either be a function or an object with an "install" function.'),p},mixin(u){return r.mixins.includes(u)?V("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),p},component(u,d){return ya(u,r.config),d?(r.components[u]&&V(`Component "${u}" has already been registered in target app.`),r.components[u]=d,p):r.components[u]},directive(u,d){return ad(u),d?(r.directives[u]&&V(`Directive "${u}" has already been registered in target app.`),r.directives[u]=d,p):r.directives[u]},mount(u,d,y){if(c)V("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&V("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=U(o,l);return f.appContext=r,r.reload=()=>{n(it(f),u,y)},d&&t?t(f,u):n(f,u,y),c=!0,p._container=u,u.__vue_app__=p,p._instance=f.component,ym(p,Gl),dr(f.component)||f.component.proxy}},unmount(){c?(n(null,p._container),p._instance=null,fm(p),delete p._container.__vue_app__):V("Cannot unmount an app that is not mounted.")},provide(u,d){return u in r.provides&&V(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=d,p},runWithContext(u){Ol=p;try{return u()}finally{Ol=null}}};return p}}let Ol=null;function Sn(n,t){if(!Ze)V("provide() can only be used inside setup().");else{let s=Ze.provides;const o=Ze.parent&&Ze.parent.provides;o===s&&(s=Ze.provides=Object.create(o)),s[n]=t}}function k(n,t,s=!1){const o=Ze||Qe;if(o||Ol){const l=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:Ol._context.provides;if(l&&n in l)return l[n];if(arguments.length>1)return s&&ye(t)?t.call(o&&o.proxy):t;V(`injection "${String(n)}" not found.`)}else V("inject() can only be used inside setup() or functional components.")}function e8(n,t,s,o=!1){const l={},r={};kl(r,ur,1),n.propsDefaults=Object.create(null),Cd(n,t,l,r);for(const i in n.propsOptions[0])i in l||(l[i]=void 0);Ad(t||{},l,n),s?n.props=o?l:Nu(l):n.type.props?n.props=l:n.props=r,n.attrs=r}function n8(n){for(;n;){if(n.type.__hmrId)return!0;n=n.parent}}function t8(n,t,s,o){const{props:l,attrs:r,vnode:{patchFlag:i}}=n,c=ge(l),[p]=n.propsOptions;let u=!1;if(!n8(n)&&(o||i>0)&&!(i&16)){if(i&8){const d=n.vnode.dynamicProps;for(let y=0;y<d.length;y++){let f=d[y];if(rr(n.emitsOptions,f))continue;const m=t[f];if(p)if(ke(r,f))m!==r[f]&&(r[f]=m,u=!0);else{const g=lt(f);l[g]=ca(p,c,g,m,n,!1)}else m!==r[f]&&(r[f]=m,u=!0)}}}else{Cd(n,t,l,r)&&(u=!0);let d;for(const y in c)(!t||!ke(t,y)&&((d=_t(y))===y||!ke(t,d)))&&(p?s&&(s[y]!==void 0||s[d]!==void 0)&&(l[y]=ca(p,c,y,void 0,n,!0)):delete l[y]);if(r!==c)for(const y in r)(!t||!ke(t,y))&&(delete r[y],u=!0)}u&&rt(n,"set","$attrs"),Ad(t||{},l,n)}function Cd(n,t,s,o){const[l,r]=n.propsOptions;let i=!1,c;if(t)for(let p in t){if(ml(p))continue;const u=t[p];let d;l&&ke(l,d=lt(p))?!r||!r.includes(d)?s[d]=u:(c||(c={}))[d]=u:rr(n.emitsOptions,p)||(!(p in o)||u!==o[p])&&(o[p]=u,i=!0)}if(r){const p=ge(s),u=c||je;for(let d=0;d<r.length;d++){const y=r[d];s[y]=ca(l,p,y,u[y],n,!ke(u,y))}}return i}function ca(n,t,s,o,l,r){const i=n[s];if(i!=null){const c=ke(i,"default");if(c&&o===void 0){const p=i.default;if(i.type!==Function&&!i.skipFactory&&ye(p)){const{propsDefaults:u}=l;s in u?o=u[s]:(Gs(l),o=u[s]=p.call(null,t),ms())}else o=p}i[0]&&(r&&!c?o=!1:i[1]&&(o===""||o===_t(s))&&(o=!0))}return o}function _d(n,t,s=!1){const o=t.propsCache,l=o.get(n);if(l)return l;const r=n.props,i={},c=[];let p=!1;if(!ye(n)){const d=y=>{p=!0;const[f,m]=_d(y,t,!0);Ne(i,f),m&&c.push(...m)};!s&&t.mixins.length&&t.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!r&&!p)return Me(n)&&o.set(n,Ms),Ms;if(ce(r))for(let d=0;d<r.length;d++){He(r[d])||V("props must be strings when using array syntax.",r[d]);const y=lt(r[d]);gc(y)&&(i[y]=je)}else if(r){Me(r)||V("invalid props options",r);for(const d in r){const y=lt(d);if(gc(y)){const f=r[d],m=i[y]=ce(f)||ye(f)?{type:f}:Ne({},f);if(m){const g=_c(Boolean,m.type),B=_c(String,m.type);m[0]=g>-1,m[1]=B<0||g<B,(g>-1||ke(m,"default"))&&c.push(y)}}}}const u=[i,c];return Me(n)&&o.set(n,u),u}function gc(n){return n[0]!=="$"?!0:(V(`Invalid prop name: "${n}" is a reserved property.`),!1)}function pa(n){const t=n&&n.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:n===null?"null":""}function Cc(n,t){return pa(n)===pa(t)}function _c(n,t){return ce(t)?t.findIndex(s=>Cc(s,n)):ye(t)&&Cc(t,n)?0:-1}function Ad(n,t,s){const o=ge(t),l=s.propsOptions[0];for(const r in l){let i=l[r];i!=null&&s8(r,o[r],i,!ke(n,r)&&!ke(n,_t(r)))}}function s8(n,t,s,o){const{type:l,required:r,validator:i,skipCheck:c}=s;if(r&&o){V('Missing required prop: "'+n+'"');return}if(!(t==null&&!r)){if(l!=null&&l!==!0&&!c){let p=!1;const u=ce(l)?l:[l],d=[];for(let y=0;y<u.length&&!p;y++){const{valid:f,expectedType:m}=l8(t,u[y]);d.push(m||""),p=f}if(!p){V(r8(n,t,d));return}}i&&!i(t)&&V('Invalid prop: custom validator check failed for prop "'+n+'".')}}const o8=Ht("String,Number,Boolean,Function,Symbol,BigInt");function l8(n,t){let s;const o=pa(t);if(o8(o)){const l=typeof n;s=l===o.toLowerCase(),!s&&l==="object"&&(s=n instanceof t)}else o==="Object"?s=Me(n):o==="Array"?s=ce(n):o==="null"?s=n===null:s=n instanceof t;return{valid:s,expectedType:o}}function r8(n,t,s){let o=`Invalid prop: type check failed for prop "${n}". Expected ${s.map(_s).join(" | ")}`;const l=s[0],r=ti(t),i=Ac(t,l),c=Ac(t,r);return s.length===1&&vc(l)&&!a8(l,r)&&(o+=` with value ${i}`),o+=`, got ${r} `,vc(r)&&(o+=`with value ${c}.`),o}function Ac(n,t){return t==="String"?`"${n}"`:t==="Number"?`${Number(n)}`:`${n}`}function vc(n){return["string","number","boolean"].some(s=>n.toLowerCase()===s)}function a8(...n){return n.some(t=>t.toLowerCase()==="boolean")}const vd=n=>n[0]==="_"||n==="$stable",Ai=n=>ce(n)?n.map(Wn):[Wn(n)],i8=(n,t,s)=>{if(t._n)return t;const o=_((...l)=>(Ze&&V(`Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Ai(t(...l))),s);return o._c=!1,o},Bd=(n,t,s)=>{const o=n._ctx;for(const l in n){if(vd(l))continue;const r=n[l];if(ye(r))t[l]=i8(l,r,o);else if(r!=null){V(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const i=Ai(r);t[l]=()=>i}}},bd=(n,t)=>{gi(n.vnode)||V("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=Ai(t);n.slots.default=()=>s},c8=(n,t)=>{if(n.vnode.shapeFlag&32){const s=t._;s?(n.slots=ge(t),kl(t,"_",s)):Bd(t,n.slots={})}else n.slots={},t&&bd(n,t);kl(n.slots,ur,1)},p8=(n,t,s)=>{const{vnode:o,slots:l}=n;let r=!0,i=je;if(o.shapeFlag&32){const c=t._;c?$t?(Ne(l,t),rt(n,"set","$slots")):s&&c===1?r=!1:(Ne(l,t),!s&&c===1&&delete l._):(r=!t.$stable,Bd(t,l)),i=t}else t&&(bd(n,t),i={default:1});if(r)for(const c in l)!vd(c)&&!(c in i)&&delete l[c]};function ua(n,t,s,o,l=!1){if(ce(n)){n.forEach((f,m)=>ua(f,t&&(ce(t)?t[m]:t),s,o,l));return}if(Is(o)&&!l)return;const r=o.shapeFlag&4?dr(o.component)||o.component.proxy:o.el,i=l?null:r,{i:c,r:p}=n;if(!c){V("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=t&&t.r,d=c.refs===je?c.refs={}:c.refs,y=c.setupState;if(u!=null&&u!==p&&(He(u)?(d[u]=null,ke(y,u)&&(y[u]=null)):$e(u)&&(u.value=null)),ye(p))gt(p,c,12,[i,d]);else{const f=He(p),m=$e(p);if(f||m){const g=()=>{if(n.f){const B=f?ke(y,p)?y[p]:d[p]:p.value;l?ce(B)&&Xa(B,r):ce(B)?B.includes(r)||B.push(r):f?(d[p]=[r],ke(y,p)&&(y[p]=d[p])):(p.value=[r],n.k&&(d[n.k]=p.value))}else f?(d[p]=i,ke(y,p)&&(y[p]=i)):m?(p.value=i,n.k&&(d[n.k]=i)):V("Invalid template ref type:",p,`(${typeof p})`)};i?(g.id=-1,nn(g,s)):g()}else V("Invalid template ref type:",p,`(${typeof p})`)}}let zs,Ft;function ut(n,t){n.appContext.config.performance&&Ll()&&Ft.mark(`vue-${t}-${n.uid}`),gm(n,t,Ll()?Ft.now():Date.now())}function dt(n,t){if(n.appContext.config.performance&&Ll()){const s=`vue-${t}-${n.uid}`,o=s+":end";Ft.mark(o),Ft.measure(`<${yr(n,n.type)}> ${t}`,s,o),Ft.clearMarks(s),Ft.clearMarks(o)}Cm(n,t,Ll()?Ft.now():Date.now())}function Ll(){return zs!==void 0||(typeof window<"u"&&window.performance?(zs=!0,Ft=window.performance):zs=!1),zs}function u8(){const n=[];if(n.length){const t=n.length>1;console.warn(`Feature flag${t?"s":""} ${n.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const nn=wm;function d8(n){return y8(n)}function y8(n,t){u8();const s=xl();s.__VUE__=!0,ed(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:o,remove:l,patchProp:r,createElement:i,createText:c,createComment:p,setText:u,setElementText:d,parentNode:y,nextSibling:f,setScopeId:m=An,insertStaticContent:g}=n,B=(C,A,$,N=null,q=null,J=null,ee=!1,Y=null,Z=$t?!1:!!A.dynamicChildren)=>{if(C===A)return;C&&!ts(C,A)&&(N=ne(C),gn(C,q,J,!0),C=null),A.patchFlag===-2&&(Z=!1,A.dynamicChildren=null);const{type:z,ref:ie,shapeFlag:ae}=A;switch(z){case zo:D(C,A,$,N);break;case fn:S(C,A,$,N);break;case _l:C==null?w(A,$,N,ee):v(C,A,$,ee);break;case Pe:Ce(C,A,$,N,q,J,ee,Y,Z);break;default:ae&1?M(C,A,$,N,q,J,ee,Y,Z):ae&6?ve(C,A,$,N,q,J,ee,Y,Z):ae&64||ae&128?z.process(C,A,$,N,q,J,ee,Y,Z,le):V("Invalid VNode type:",z,`(${typeof z})`)}ie!=null&&q&&ua(ie,C&&C.ref,J,A||C,!A)},D=(C,A,$,N)=>{if(C==null)o(A.el=c(A.children),$,N);else{const q=A.el=C.el;A.children!==C.children&&u(q,A.children)}},S=(C,A,$,N)=>{C==null?o(A.el=p(A.children||""),$,N):A.el=C.el},w=(C,A,$,N)=>{[C.el,C.anchor]=g(C.children,A,$,N,C.el,C.anchor)},v=(C,A,$,N)=>{if(A.children!==C.children){const q=f(C.anchor);T(C),[A.el,A.anchor]=g(A.children,$,q,N)}else A.el=C.el,A.anchor=C.anchor},P=({el:C,anchor:A},$,N)=>{let q;for(;C&&C!==A;)q=f(C),o(C,$,N),C=q;o(A,$,N)},T=({el:C,anchor:A})=>{let $;for(;C&&C!==A;)$=f(C),l(C),C=$;l(A)},M=(C,A,$,N,q,J,ee,Y,Z)=>{ee=ee||A.type==="svg",C==null?W(A,$,N,q,J,ee,Y,Z):re(C,A,q,J,ee,Y,Z)},W=(C,A,$,N,q,J,ee,Y)=>{let Z,z;const{type:ie,props:ae,shapeFlag:ue,transition:me,dirs:xe}=C;if(Z=C.el=i(C.type,J,ae&&ae.is,ae),ue&8?d(Z,C.children):ue&16&&K(C.children,Z,null,N,q,J&&ie!=="foreignObject",ee,Y),xe&&Kt(C,null,N,"created"),G(Z,C,C.scopeId,ee,N),ae){for(const Ge in ae)Ge!=="value"&&!ml(Ge)&&r(Z,Ge,null,ae[Ge],J,C.children,N,q,j);"value"in ae&&r(Z,"value",null,ae.value),(z=ae.onVnodeBeforeMount)&&Mn(z,N,C)}Object.defineProperty(Z,"__vnode",{value:C,enumerable:!1}),Object.defineProperty(Z,"__vueParentComponent",{value:N,enumerable:!1}),xe&&Kt(C,null,N,"beforeMount");const qe=(!q||q&&!q.pendingBranch)&&me&&!me.persisted;qe&&me.beforeEnter(Z),o(Z,A,$),((z=ae&&ae.onVnodeMounted)||qe||xe)&&nn(()=>{z&&Mn(z,N,C),qe&&me.enter(Z),xe&&Kt(C,null,N,"mounted")},q)},G=(C,A,$,N,q)=>{if($&&m(C,$),N)for(let J=0;J<N.length;J++)m(C,N[J]);if(q){let J=q.subTree;if(J.patchFlag>0&&J.patchFlag&2048&&(J=od(J.children)||J),A===J){const ee=q.vnode;G(C,ee,ee.scopeId,ee.slotScopeIds,q.parent)}}},K=(C,A,$,N,q,J,ee,Y,Z=0)=>{for(let z=Z;z<C.length;z++){const ie=C[z]=Y?xt(C[z]):Wn(C[z]);B(null,ie,A,$,N,q,J,ee,Y)}},re=(C,A,$,N,q,J,ee)=>{const Y=A.el=C.el;let{patchFlag:Z,dynamicChildren:z,dirs:ie}=A;Z|=C.patchFlag&16;const ae=C.props||je,ue=A.props||je;let me;$&&Yt($,!1),(me=ue.onVnodeBeforeUpdate)&&Mn(me,$,A,C),ie&&Kt(A,C,$,"beforeUpdate"),$&&Yt($,!0),$t&&(Z=0,ee=!1,z=null);const xe=q&&A.type!=="foreignObject";if(z?(de(C.dynamicChildren,z,Y,$,N,xe,J),Rl(C,A)):ee||we(C,A,Y,null,$,N,xe,J,!1),Z>0){if(Z&16)X(Y,A,ae,ue,$,N,q);else if(Z&2&&ae.class!==ue.class&&r(Y,"class",null,ue.class,q),Z&4&&r(Y,"style",ae.style,ue.style,q),Z&8){const qe=A.dynamicProps;for(let Ge=0;Ge<qe.length;Ge++){const ze=qe[Ge],qn=ae[ze],ks=ue[ze];(ks!==qn||ze==="value")&&r(Y,ze,qn,ks,q,C.children,$,N,j)}}Z&1&&C.children!==A.children&&d(Y,A.children)}else!ee&&z==null&&X(Y,A,ae,ue,$,N,q);((me=ue.onVnodeUpdated)||ie)&&nn(()=>{me&&Mn(me,$,A,C),ie&&Kt(A,C,$,"updated")},N)},de=(C,A,$,N,q,J,ee)=>{for(let Y=0;Y<A.length;Y++){const Z=C[Y],z=A[Y],ie=Z.el&&(Z.type===Pe||!ts(Z,z)||Z.shapeFlag&70)?y(Z.el):$;B(Z,z,ie,null,N,q,J,ee,!0)}},X=(C,A,$,N,q,J,ee)=>{if($!==N){if($!==je)for(const Y in $)!ml(Y)&&!(Y in N)&&r(C,Y,$[Y],null,ee,A.children,q,J,j);for(const Y in N){if(ml(Y))continue;const Z=N[Y],z=$[Y];Z!==z&&Y!=="value"&&r(C,Y,z,Z,ee,A.children,q,J,j)}"value"in N&&r(C,"value",$.value,N.value)}},Ce=(C,A,$,N,q,J,ee,Y,Z)=>{const z=A.el=C?C.el:c(""),ie=A.anchor=C?C.anchor:c("");let{patchFlag:ae,dynamicChildren:ue,slotScopeIds:me}=A;($t||ae&2048)&&(ae=0,Z=!1,ue=null),me&&(Y=Y?Y.concat(me):me),C==null?(o(z,$,N),o(ie,$,N),K(A.children,$,ie,q,J,ee,Y,Z)):ae>0&&ae&64&&ue&&C.dynamicChildren?(de(C.dynamicChildren,ue,$,q,J,ee,Y),Rl(C,A)):we(C,A,$,ie,q,J,ee,Y,Z)},ve=(C,A,$,N,q,J,ee,Y,Z)=>{A.slotScopeIds=Y,C==null?A.shapeFlag&512?q.ctx.activate(A,$,N,ee,Z):be(A,$,N,q,J,ee,Z):Re(C,A,Z)},be=(C,A,$,N,q,J,ee)=>{const Y=C.component=D8(C,N,q);if(Y.type.__hmrId&&cm(Y),gl(C),ut(Y,"mount"),gi(C)&&(Y.ctx.renderer=le),ut(Y,"init"),w8(Y),dt(Y,"init"),Y.asyncDep){if(q&&q.registerDep(Y,oe),!C.el){const Z=Y.subTree=U(fn);S(null,Z,A,$)}return}oe(Y,C,A,$,q,J,ee),Cl(),dt(Y,"mount")},Re=(C,A,$)=>{const N=A.component=C.component;if(Dm(C,A,$))if(N.asyncDep&&!N.asyncResolved){gl(A),pe(N,A,$),Cl();return}else N.next=A,am(N.update),N.update();else A.el=C.el,N.vnode=A},oe=(C,A,$,N,q,J,ee)=>{const Y=()=>{if(C.isMounted){let{next:ie,bu:ae,u:ue,parent:me,vnode:xe}=C,qe=ie,Ge;gl(ie||C.vnode),Yt(C,!1),ie?(ie.el=xe.el,pe(C,ie,ee)):ie=xe,ae&&ns(ae),(Ge=ie.props&&ie.props.onVnodeBeforeUpdate)&&Mn(Ge,me,ie,xe),Yt(C,!0),ut(C,"render");const ze=Ar(C);dt(C,"render");const qn=C.subTree;C.subTree=ze,ut(C,"patch"),B(qn,ze,y(qn.el),ne(qn),C,q,J),dt(C,"patch"),ie.el=ze.el,qe===null&&Sm(C,ze.el),ue&&nn(ue,q),(Ge=ie.props&&ie.props.onVnodeUpdated)&&nn(()=>Mn(Ge,me,ie,xe),q),nd(C),Cl()}else{let ie;const{el:ae,props:ue}=A,{bm:me,m:xe,parent:qe}=C,Ge=Is(A);if(Yt(C,!1),me&&ns(me),!Ge&&(ie=ue&&ue.onVnodeBeforeMount)&&Mn(ie,qe,A),Yt(C,!0),ae&&Oe){const ze=()=>{ut(C,"render"),C.subTree=Ar(C),dt(C,"render"),ut(C,"hydrate"),Oe(ae,C.subTree,C,q,null),dt(C,"hydrate")};Ge?A.type.__asyncLoader().then(()=>!C.isUnmounted&&ze()):ze()}else{ut(C,"render");const ze=C.subTree=Ar(C);dt(C,"render"),ut(C,"patch"),B(null,ze,$,N,C,q,J),dt(C,"patch"),A.el=ze.el}if(xe&&nn(xe,q),!Ge&&(ie=ue&&ue.onVnodeMounted)){const ze=A;nn(()=>Mn(ie,qe,ze),q)}(A.shapeFlag&256||qe&&Is(qe.vnode)&&qe.vnode.shapeFlag&256)&&C.a&&nn(C.a,q),C.isMounted=!0,ta(C),A=$=N=null}},Z=C.effect=new ri(Y,()=>lr(z),C.scope),z=C.update=()=>Z.run();z.id=C.uid,Yt(C,!0),Z.onTrack=C.rtc?ie=>ns(C.rtc,ie):void 0,Z.onTrigger=C.rtg?ie=>ns(C.rtg,ie):void 0,z.ownerInstance=C,z()},pe=(C,A,$)=>{A.component=C;const N=C.vnode.props;C.vnode=A,C.next=null,t8(C,A.props,N,$),p8(C,A.children,$),vs(),ic(),Bs()},we=(C,A,$,N,q,J,ee,Y,Z=!1)=>{const z=C&&C.children,ie=C?C.shapeFlag:0,ae=A.children,{patchFlag:ue,shapeFlag:me}=A;if(ue>0){if(ue&128){Pn(z,ae,$,N,q,J,ee,Y,Z);return}else if(ue&256){Ie(z,ae,$,N,q,J,ee,Y,Z);return}}me&8?(ie&16&&j(z,q,J),ae!==z&&d($,ae)):ie&16?me&16?Pn(z,ae,$,N,q,J,ee,Y,Z):j(z,q,J,!0):(ie&8&&d($,""),me&16&&K(ae,$,N,q,J,ee,Y,Z))},Ie=(C,A,$,N,q,J,ee,Y,Z)=>{C=C||Ms,A=A||Ms;const z=C.length,ie=A.length,ae=Math.min(z,ie);let ue;for(ue=0;ue<ae;ue++){const me=A[ue]=Z?xt(A[ue]):Wn(A[ue]);B(C[ue],me,$,null,q,J,ee,Y,Z)}z>ie?j(C,q,J,!0,!1,ae):K(A,$,N,q,J,ee,Y,Z,ae)},Pn=(C,A,$,N,q,J,ee,Y,Z)=>{let z=0;const ie=A.length;let ae=C.length-1,ue=ie-1;for(;z<=ae&&z<=ue;){const me=C[z],xe=A[z]=Z?xt(A[z]):Wn(A[z]);if(ts(me,xe))B(me,xe,$,null,q,J,ee,Y,Z);else break;z++}for(;z<=ae&&z<=ue;){const me=C[ae],xe=A[ue]=Z?xt(A[ue]):Wn(A[ue]);if(ts(me,xe))B(me,xe,$,null,q,J,ee,Y,Z);else break;ae--,ue--}if(z>ae){if(z<=ue){const me=ue+1,xe=me<ie?A[me].el:N;for(;z<=ue;)B(null,A[z]=Z?xt(A[z]):Wn(A[z]),$,xe,q,J,ee,Y,Z),z++}}else if(z>ue)for(;z<=ae;)gn(C[z],q,J,!0),z++;else{const me=z,xe=z,qe=new Map;for(z=xe;z<=ue;z++){const cn=A[z]=Z?xt(A[z]):Wn(A[z]);cn.key!=null&&(qe.has(cn.key)&&V("Duplicate keys found during update:",JSON.stringify(cn.key),"Make sure keys are unique."),qe.set(cn.key,z))}let Ge,ze=0;const qn=ue-xe+1;let ks=!1,Zi=0;const Vs=new Array(qn);for(z=0;z<qn;z++)Vs[z]=0;for(z=me;z<=ae;z++){const cn=C[z];if(ze>=qn){gn(cn,q,J,!0);continue}let Qn;if(cn.key!=null)Qn=qe.get(cn.key);else for(Ge=xe;Ge<=ue;Ge++)if(Vs[Ge-xe]===0&&ts(cn,A[Ge])){Qn=Ge;break}Qn===void 0?gn(cn,q,J,!0):(Vs[Qn-xe]=z+1,Qn>=Zi?Zi=Qn:ks=!0,B(cn,A[Qn],$,null,q,J,ee,Y,Z),ze++)}const Qi=ks?f8(Vs):Ms;for(Ge=Qi.length-1,z=qn-1;z>=0;z--){const cn=xe+z,Qn=A[cn],Xi=cn+1<ie?A[cn+1].el:N;Vs[z]===0?B(null,Qn,$,Xi,q,J,ee,Y,Z):ks&&(Ge<0||z!==Qi[Ge]?tn(Qn,$,Xi,2):Ge--)}}},tn=(C,A,$,N,q=null)=>{const{el:J,type:ee,transition:Y,children:Z,shapeFlag:z}=C;if(z&6){tn(C.component.subTree,A,$,N);return}if(z&128){C.suspense.move(A,$,N);return}if(z&64){ee.move(C,A,$,le);return}if(ee===Pe){o(J,A,$);for(let ae=0;ae<Z.length;ae++)tn(Z[ae],A,$,N);o(C.anchor,A,$);return}if(ee===_l){P(C,A,$);return}if(N!==2&&z&1&&Y)if(N===0)Y.beforeEnter(J),o(J,A,$),nn(()=>Y.enter(J),q);else{const{leave:ae,delayLeave:ue,afterLeave:me}=Y,xe=()=>o(J,A,$),qe=()=>{ae(J,()=>{xe(),me&&me()})};ue?ue(J,xe,qe):qe()}else o(J,A,$)},gn=(C,A,$,N=!1,q=!1)=>{const{type:J,props:ee,ref:Y,children:Z,dynamicChildren:z,shapeFlag:ie,patchFlag:ae,dirs:ue}=C;if(Y!=null&&ua(Y,null,$,C,!0),ie&256){A.ctx.deactivate(C);return}const me=ie&1&&ue,xe=!Is(C);let qe;if(xe&&(qe=ee&&ee.onVnodeBeforeUnmount)&&Mn(qe,A,C),ie&6)Tn(C.component,$,N);else{if(ie&128){C.suspense.unmount($,N);return}me&&Kt(C,null,A,"beforeUnmount"),ie&64?C.type.remove(C,A,$,q,le,N):z&&(J!==Pe||ae>0&&ae&64)?j(z,A,$,!1,!0):(J===Pe&&ae&384||!q&&ie&16)&&j(Z,A,$),N&&Zn(C)}(xe&&(qe=ee&&ee.onVnodeUnmounted)||me)&&nn(()=>{qe&&Mn(qe,A,C),me&&Kt(C,null,A,"unmounted")},$)},Zn=C=>{const{type:A,el:$,anchor:N,transition:q}=C;if(A===Pe){C.patchFlag>0&&C.patchFlag&2048&&q&&!q.persisted?C.children.forEach(ee=>{ee.type===fn?l(ee.el):Zn(ee)}):zt($,N);return}if(A===_l){T(C);return}const J=()=>{l($),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(C.shapeFlag&1&&q&&!q.persisted){const{leave:ee,delayLeave:Y}=q,Z=()=>ee($,J);Y?Y(C.el,J,Z):Z()}else J()},zt=(C,A)=>{let $;for(;C!==A;)$=f(C),l(C),C=$;l(A)},Tn=(C,A,$)=>{C.type.__hmrId&&pm(C);const{bum:N,scope:q,update:J,subTree:ee,um:Y}=C;N&&ns(N),q.stop(),J&&(J.active=!1,gn(ee,C,A,$)),Y&&nn(Y,A),nn(()=>{C.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve()),mm(C)},j=(C,A,$,N=!1,q=!1,J=0)=>{for(let ee=J;ee<C.length;ee++)gn(C[ee],A,$,N,q)},ne=C=>C.shapeFlag&6?ne(C.component.subTree):C.shapeFlag&128?C.suspense.next():f(C.anchor||C.el),te=(C,A,$)=>{C==null?A._vnode&&gn(A._vnode,null,null,!0):B(A._vnode||null,C,A,null,null,null,$),ic(),Zu(),A._vnode=C},le={p:B,um:gn,m:tn,r:Zn,mt:be,mc:K,pc:we,pbc:de,n:ne,o:n};let Se,Oe;return t&&([Se,Oe]=t(le)),{render:te,hydrate:Se,createApp:Xm(te,Se)}}function Yt({effect:n,update:t},s){n.allowRecurse=t.allowRecurse=s}function Rl(n,t,s=!1){const o=n.children,l=t.children;if(ce(o)&&ce(l))for(let r=0;r<o.length;r++){const i=o[r];let c=l[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=l[r]=xt(l[r]),c.el=i.el),s||Rl(i,c)),c.type===zo&&(c.el=i.el),c.type===fn&&!c.el&&(c.el=i.el)}}function f8(n){const t=n.slice(),s=[0];let o,l,r,i,c;const p=n.length;for(o=0;o<p;o++){const u=n[o];if(u!==0){if(l=s[s.length-1],n[l]<u){t[o]=l,s.push(o);continue}for(r=0,i=s.length-1;r<i;)c=r+i>>1,n[s[c]]<u?r=c+1:i=c;u<n[s[r]]&&(r>0&&(t[o]=s[r-1]),s[r]=o)}}for(r=s.length,i=s[r-1];r-- >0;)s[r]=i,i=t[i];return s}const h8=n=>n.__isTeleport,Os=n=>n&&(n.disabled||n.disabled===""),Bc=n=>typeof SVGElement<"u"&&n instanceof SVGElement,da=(n,t)=>{const s=n&&n.to;if(He(s))if(t){const o=t(s);return o||V(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return V("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!Os(n)&&V(`Invalid Teleport target: ${s}`),s},m8={__isTeleport:!0,process(n,t,s,o,l,r,i,c,p,u){const{mc:d,pc:y,pbc:f,o:{insert:m,querySelector:g,createText:B,createComment:D}}=u,S=Os(t.props);let{shapeFlag:w,children:v,dynamicChildren:P}=t;if($t&&(p=!1,P=null),n==null){const T=t.el=D("teleport start"),M=t.anchor=D("teleport end");m(T,s,o),m(M,s,o);const W=t.target=da(t.props,g),G=t.targetAnchor=B("");W?(m(G,W),i=i||Bc(W)):S||V("Invalid Teleport target on mount:",W,`(${typeof W})`);const K=(re,de)=>{w&16&&d(v,re,de,l,r,i,c,p)};S?K(s,M):W&&K(W,G)}else{t.el=n.el;const T=t.anchor=n.anchor,M=t.target=n.target,W=t.targetAnchor=n.targetAnchor,G=Os(n.props),K=G?s:M,re=G?T:W;if(i=i||Bc(M),P?(f(n.dynamicChildren,P,K,l,r,i,c),Rl(n,t,!0)):p||y(n,t,K,re,l,r,i,c,!1),S)G||ll(t,s,T,u,1);else if((t.props&&t.props.to)!==(n.props&&n.props.to)){const de=t.target=da(t.props,g);de?ll(t,de,null,u,0):V("Invalid Teleport target on update:",M,`(${typeof M})`)}else G&&ll(t,M,W,u,1)}Dd(t)},remove(n,t,s,o,{um:l,o:{remove:r}},i){const{shapeFlag:c,children:p,anchor:u,targetAnchor:d,target:y,props:f}=n;if(y&&r(d),(i||!Os(f))&&(r(u),c&16))for(let m=0;m<p.length;m++){const g=p[m];l(g,t,s,!0,!!g.dynamicChildren)}},move:ll,hydrate:g8};function ll(n,t,s,{o:{insert:o},m:l},r=2){r===0&&o(n.targetAnchor,t,s);const{el:i,anchor:c,shapeFlag:p,children:u,props:d}=n,y=r===2;if(y&&o(i,t,s),(!y||Os(d))&&p&16)for(let f=0;f<u.length;f++)l(u[f],t,s,2);y&&o(c,t,s)}function g8(n,t,s,o,l,r,{o:{nextSibling:i,parentNode:c,querySelector:p}},u){const d=t.target=da(t.props,p);if(d){const y=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Os(t.props))t.anchor=u(i(n),t,c(n),s,o,l,r),t.targetAnchor=y;else{t.anchor=i(n);let f=y;for(;f;)if(f=i(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,d._lpa=t.targetAnchor&&i(t.targetAnchor);break}u(y,t,d,s,o,l,r)}Dd(t)}return t.anchor&&i(t.anchor)}const C8=m8;function Dd(n){const t=n.ctx;if(t&&t.ut){let s=n.children[0].el;for(;s!==n.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",t.uid),s=s.nextSibling;t.ut()}}const Pe=Symbol.for("v-fgt"),zo=Symbol.for("v-txt"),fn=Symbol.for("v-cmt"),_l=Symbol.for("v-stc"),ho=[];let zn=null;function h(n=!1){ho.push(zn=n?null:[])}function _8(){ho.pop(),zn=ho[ho.length-1]||null}let Fo=1;function bc(n){Fo+=n}function Sd(n){return n.dynamicChildren=Fo>0?zn||Ms:null,_8(),Fo>0&&zn&&zn.push(n),n}function b(n,t,s,o,l,r){return Sd(e(n,t,s,o,l,r,!0))}function x(n,t,s,o,l){return Sd(U(n,t,s,o,l,!0))}function qt(n){return n?n.__v_isVNode===!0:!1}function ts(n,t){return t.shapeFlag&6&&Ts.has(t.type)?(n.shapeFlag&=-257,t.shapeFlag&=-513,!1):n.type===t.type&&n.key===t.key}const A8=(...n)=>v8(...n),ur="__vInternal",wd=({key:n})=>n??null,Al=({ref:n,ref_key:t,ref_for:s})=>(typeof n=="number"&&(n=""+n),n!=null?He(n)||$e(n)||ye(n)?{i:Qe,r:n,k:t,f:!!s}:n:null);function e(n,t=null,s=null,o=0,l=null,r=n===Pe?0:1,i=!1,c=!1){const p={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&wd(t),ref:t&&Al(t),scopeId:ar,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Qe};return c?(vi(p,s),r&128&&n.normalize(p)):s&&(p.shapeFlag|=He(s)?8:16),p.key!==p.key&&V("VNode created with invalid key (NaN). VNode type:",p.type),Fo>0&&!i&&zn&&(p.patchFlag>0||r&6)&&p.patchFlag!==32&&zn.push(p),p}const U=A8;function v8(n,t=null,s=null,o=0,l=null,r=!1){if((!n||n===Rm)&&(n||V(`Invalid vnode type when creating vnode: ${n}.`),n=fn),qt(n)){const c=it(n,t,!0);return s&&vi(c,s),Fo>0&&!r&&zn&&(c.shapeFlag&6?zn[zn.indexOf(n)]=c:zn.push(c)),c.patchFlag|=-2,c}if(Pd(n)&&(n=n.__vccOpts),t){t=I(t);let{class:c,style:p}=t;c&&!He(c)&&(t.class=Le(c)),Me(p)&&(Tl(p)&&!ce(p)&&(p=Ne({},p)),t.style=Xe(p))}const i=He(n)?1:ld(n)?128:h8(n)?64:Me(n)?4:ye(n)?2:0;return i&4&&Tl(n)&&(n=ge(n),V("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,n)),e(n,t,s,o,l,i,r,!0)}function I(n){return n?Tl(n)||ur in n?Ne({},n):n:null}function it(n,t,s=!1){const{props:o,ref:l,patchFlag:r,children:i}=n,c=t?se(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&wd(c),ref:t&&t.ref?s&&l?ce(l)?l.concat(Al(t)):[l,Al(t)]:Al(t):l,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:r===-1&&ce(i)?i.map(kd):i,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Pe?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&it(n.ssContent),ssFallback:n.ssFallback&&it(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function kd(n){const t=it(n);return ce(n.children)&&(t.children=n.children.map(kd)),t}function a(n=" ",t=0){return U(zo,null,n,t)}function _e(n="",t=!1){return t?(h(),x(fn,null,n)):U(fn,null,n)}function Wn(n){return n==null||typeof n=="boolean"?U(fn):ce(n)?U(Pe,null,n.slice()):typeof n=="object"?xt(n):U(zo,null,String(n))}function xt(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:it(n)}function vi(n,t){let s=0;const{shapeFlag:o}=n;if(t==null)t=null;else if(ce(t))s=16;else if(typeof t=="object")if(o&65){const l=t.default;l&&(l._c&&(l._d=!1),vi(n,l()),l._c&&(l._d=!0));return}else{s=32;const l=t._;!l&&!(ur in t)?t._ctx=Qe:l===3&&Qe&&(Qe.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else ye(t)?(t={default:t,_ctx:Qe},s=32):(t=String(t),o&64?(s=16,t=[a(t)]):s=8);n.children=t,n.shapeFlag|=s}function se(...n){const t={};for(let s=0;s<n.length;s++){const o=n[s];for(const l in o)if(l==="class")t.class!==o.class&&(t.class=Le([t.class,o.class]));else if(l==="style")t.style=Xe([t.style,o.style]);else if(No(l)){const r=t[l],i=o[l];i&&r!==i&&!(ce(r)&&r.includes(i))&&(t[l]=r?[].concat(r,i):i)}else l!==""&&(t[l]=o[l])}return t}function Mn(n,t,s,o=null){On(n,t,7,[s,o])}const B8=gd();let b8=0;function D8(n,t,s){const o=n.type,l=(t?t.appContext:n.appContext)||B8,r={uid:b8++,vnode:n,type:o,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new xu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_d(o,l),emitsOptions:sd(o,l),emit:null,emitted:null,propsDefaults:je,inheritAttrs:o.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=jm(r),r.root=t?t.root:r,r.emit=Am.bind(null,r),n.ce&&n.ce(r),r}let Ze=null;const Fn=()=>Ze||Qe;let Bi,xs,Dc="__VUE_INSTANCE_SETTERS__";(xs=xl()[Dc])||(xs=xl()[Dc]=[]),xs.push(n=>Ze=n),Bi=n=>{xs.length>1?xs.forEach(t=>t(n)):xs[0](n)};const Gs=n=>{Bi(n),n.scope.on()},ms=()=>{Ze&&Ze.scope.off(),Bi(null)},S8=Ht("slot,component");function ya(n,t){const s=t.isNativeTag||vu;(S8(n)||s(n))&&V("Do not use built-in or reserved HTML elements as component id: "+n)}function xd(n){return n.vnode.shapeFlag&4}let Po=!1;function w8(n,t=!1){Po=t;const{props:s,children:o}=n.vnode,l=xd(n);e8(n,s,l,t),c8(n,o);const r=l?k8(n,t):void 0;return Po=!1,r}function k8(n,t){var s;const o=n.type;{if(o.name&&ya(o.name,n.appContext.config),o.components){const r=Object.keys(o.components);for(let i=0;i<r.length;i++)ya(r[i],n.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let i=0;i<r.length;i++)ad(r[i])}o.compilerOptions&&x8()&&V('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}n.accessCache=Object.create(null),n.proxy=sr(new Proxy(n.ctx,hd)),qm(n);const{setup:l}=o;if(l){const r=n.setupContext=l.length>1?Fd(n):null;Gs(n),vs();const i=gt(l,n,0,[ao(n.props),r]);if(Bs(),ms(),ni(i)){if(i.then(ms,ms),t)return i.then(c=>{Sc(n,c,t)}).catch(c=>{or(c,n,0)});if(n.asyncDep=i,!n.suspense){const c=(s=o.name)!=null?s:"Anonymous";V(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Sc(n,i,t)}else Ed(n,t)}function Sc(n,t,s){ye(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Me(t)?(qt(t)&&V("setup() should not return VNodes directly - return a render function instead."),n.devtoolsRawSetupState=t,n.setupState=Wu(t),Nm(n)):t!==void 0&&V(`setup() should return an object. Received: ${t===null?"null":typeof t}`),Ed(n,s)}let fa;const x8=()=>!fa;function Ed(n,t,s){const o=n.type;if(!n.render){if(!t&&fa&&!o.render){const l=o.template||_i(n).template;if(l){ut(n,"compile");const{isCustomElement:r,compilerOptions:i}=n.appContext.config,{delimiters:c,compilerOptions:p}=o,u=Ne(Ne({isCustomElement:r,delimiters:c},i),p);o.render=fa(l,u),dt(n,"compile")}}n.render=o.render||An}Gs(n),vs(),zm(n),Bs(),ms(),!o.render&&n.render===An&&!t&&(o.template?V('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):V("Component is missing template or render function."))}function E8(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(t,s){return Ml(),an(n,"get","$attrs"),t[s]},set(){return V("setupContext.attrs is readonly."),!1},deleteProperty(){return V("setupContext.attrs is readonly."),!1}}))}function F8(n){return n.slotsProxy||(n.slotsProxy=new Proxy(n.slots,{get(t,s){return an(n,"get","$slots"),t[s]}}))}function Fd(n){return Object.freeze({get attrs(){return E8(n)},get slots(){return F8(n)},get emit(){return(s,...o)=>n.emit(s,...o)},expose:s=>{if(n.exposed&&V("expose() should be called only once per setup()."),s!=null){let o=typeof s;o==="object"&&(ce(s)?o="array":$e(s)&&(o="ref")),o!=="object"&&V(`expose() should be passed a plain object, received ${o}.`)}n.exposed=s||{}}})}function dr(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Wu(sr(n.exposed)),{get(t,s){if(s in t)return t[s];if(s in hs)return hs[s](n)},has(t,s){return s in t||s in hs}}))}const P8=/(?:^|[-_])(\w)/g,T8=n=>n.replace(P8,t=>t.toUpperCase()).replace(/[-_]/g,"");function To(n,t=!0){return ye(n)?n.displayName||n.name:n.name||t&&n.__name}function yr(n,t,s=!1){let o=To(t);if(!o&&t.__file){const l=t.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&n&&n.parent){const l=r=>{for(const i in r)if(r[i]===t)return i};o=l(n.components||n.parent.type.components)||l(n.appContext.components)}return o?T8(o):s?"App":"Anonymous"}function Pd(n){return ye(n)&&"__vccOpts"in n}const R=(n,t)=>Qh(n,t,Po);function kn(n,t,s){const o=arguments.length;return o===2?Me(t)&&!ce(t)?qt(t)?U(n,null,[t]):U(n,t):U(n,null,t):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&qt(s)&&(s=[s]),U(n,t,s))}const $8=Symbol.for("v-scx"),M8=()=>{{const n=k($8);return n||V("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),n}};function Dr(n){return!!(n&&n.__v_isShallow)}function U8(){if(typeof window>"u")return;const n={style:"color:#3ba776"},t={style:"color:#0b1bc9"},s={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(y){return Me(y)?y.__isVue?["div",n,"VueInstance"]:$e(y)?["div",{},["span",n,d(y)],"<",c(y.value),">"]:ys(y)?["div",{},["span",n,Dr(y)?"ShallowReactive":"Reactive"],"<",c(y),`>${jt(y)?" (readonly)":""}`]:jt(y)?["div",{},["span",n,Dr(y)?"ShallowReadonly":"Readonly"],"<",c(y),">"]:null:null},hasBody(y){return y&&y.__isVue},body(y){if(y&&y.__isVue)return["div",{},...r(y.$)]}};function r(y){const f=[];y.type.props&&y.props&&f.push(i("props",ge(y.props))),y.setupState!==je&&f.push(i("setup",y.setupState)),y.data!==je&&f.push(i("data",ge(y.data)));const m=p(y,"computed");m&&f.push(i("computed",m));const g=p(y,"inject");return g&&f.push(i("injected",g)),f.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:y}]]),f}function i(y,f){return f=Ne({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},y],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(m=>["div",{},["span",o,m+": "],c(f[m],!1)])]]:["span",{}]}function c(y,f=!0){return typeof y=="number"?["span",t,y]:typeof y=="string"?["span",s,JSON.stringify(y)]:typeof y=="boolean"?["span",o,y]:Me(y)?["object",{object:f?ge(y):y}]:["span",s,String(y)]}function p(y,f){const m=y.type;if(ye(m))return;const g={};for(const B in y.ctx)u(m,B,f)&&(g[B]=y.ctx[B]);return g}function u(y,f,m){const g=y[m];if(ce(g)&&g.includes(f)||Me(g)&&f in g||y.extends&&u(y.extends,f,m)||y.mixins&&y.mixins.some(B=>u(B,f,m)))return!0}function d(y){return Dr(y)?"ShallowRef":y.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const Gl="3.3.4",I8="http://www.w3.org/2000/svg",ss=typeof document<"u"?document:null,wc=ss&&ss.createElement("template"),O8={insert:(n,t,s)=>{t.insertBefore(n,s||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,s,o)=>{const l=t?ss.createElementNS(I8,n):ss.createElement(n,s?{is:s}:void 0);return n==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:n=>ss.createTextNode(n),createComment:n=>ss.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ss.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,s,o,l,r){const i=s?s.previousSibling:t.lastChild;if(l&&(l===r||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),s),!(l===r||!(l=l.nextSibling)););else{wc.innerHTML=o?`<svg>${n}</svg>`:n;const c=wc.content;if(o){const p=c.firstChild;for(;p.firstChild;)c.appendChild(p.firstChild);c.removeChild(p)}t.insertBefore(c,s)}return[i?i.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function L8(n,t,s){const o=n._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?n.removeAttribute("class"):s?n.setAttribute("class",t):n.className=t}function R8(n,t,s){const o=n.style,l=He(s);if(s&&!l){if(t&&!He(t))for(const r in t)s[r]==null&&ha(o,r,"");for(const r in s)ha(o,r,s[r])}else{const r=o.display;l?t!==s&&(o.cssText=s):t&&n.removeAttribute("style"),"_vod"in n&&(o.display=r)}}const G8=/[^\\];\s*$/,kc=/\s*!important$/;function ha(n,t,s){if(ce(s))s.forEach(o=>ha(n,t,o));else if(s==null&&(s=""),G8.test(s)&&V(`Unexpected semicolon at the end of '${t}' style value: '${s}'`),t.startsWith("--"))n.setProperty(t,s);else{const o=j8(n,t);kc.test(s)?n.setProperty(_t(o),s.replace(kc,""),"important"):n[o]=s}}const xc=["Webkit","Moz","ms"],Sr={};function j8(n,t){const s=Sr[t];if(s)return s;let o=lt(t);if(o!=="filter"&&o in n)return Sr[t]=o;o=_s(o);for(let l=0;l<xc.length;l++){const r=xc[l]+o;if(r in n)return Sr[t]=r}return t}const Ec="http://www.w3.org/1999/xlink";function q8(n,t,s,o,l){if(o&&t.startsWith("xlink:"))s==null?n.removeAttributeNS(Ec,t.slice(6,t.length)):n.setAttributeNS(Ec,t,s);else{const r=yh(t);s==null||r&&!wu(s)?n.removeAttribute(t):n.setAttribute(t,r?"":s)}}function N8(n,t,s,o,l,r,i){if(t==="innerHTML"||t==="textContent"){o&&i(o,l,r),n[t]=s??"";return}const c=n.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){n._value=s;const u=c==="OPTION"?n.getAttribute("value"):n.value,d=s??"";u!==d&&(n.value=d),s==null&&n.removeAttribute(t);return}let p=!1;if(s===""||s==null){const u=typeof n[t];u==="boolean"?s=wu(s):s==null&&u==="string"?(s="",p=!0):u==="number"&&(s=0,p=!0)}try{n[t]=s}catch(u){p||V(`Failed setting prop "${t}" on <${c.toLowerCase()}>: value ${s} is invalid.`,u)}p&&n.removeAttribute(t)}function H8(n,t,s,o){n.addEventListener(t,s,o)}function W8(n,t,s,o){n.removeEventListener(t,s,o)}function V8(n,t,s,o,l=null){const r=n._vei||(n._vei={}),i=r[t];if(o&&i)i.value=o;else{const[c,p]=z8(t);if(o){const u=r[t]=J8(o,l);H8(n,c,u,p)}else i&&(W8(n,c,i,p),r[t]=void 0)}}const Fc=/(?:Once|Passive|Capture)$/;function z8(n){let t;if(Fc.test(n)){t={};let o;for(;o=n.match(Fc);)n=n.slice(0,n.length-o[0].length),t[o[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):_t(n.slice(2)),t]}let wr=0;const K8=Promise.resolve(),Y8=()=>wr||(K8.then(()=>wr=0),wr=Date.now());function J8(n,t){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;On(Z8(o,s.value),t,5,[o])};return s.value=n,s.attached=Y8(),s}function Z8(n,t){if(ce(t)){const s=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0},t.map(o=>l=>!l._stopped&&o&&o(l))}else return t}const Pc=/^on[a-z]/,Q8=(n,t,s,o,l=!1,r,i,c,p)=>{t==="class"?L8(n,o,l):t==="style"?R8(n,s,o):No(t)?wl(t)||V8(n,t,s,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):X8(n,t,o,l))?N8(n,t,o,r,i,c,p):(t==="true-value"?n._trueValue=o:t==="false-value"&&(n._falseValue=o),q8(n,t,o,l))};function X8(n,t,s,o){return o?!!(t==="innerHTML"||t==="textContent"||t in n&&Pc.test(t)&&ye(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||Pc.test(t)&&He(s)?!1:t in n}const Dt="transition",Ks="animation",Td={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},eg=Ne({},Em,Td),Jt=(n,t=[])=>{ce(n)?n.forEach(s=>s(...t)):n&&n(...t)},Tc=n=>n?ce(n)?n.some(t=>t.length>1):n.length>1:!1;function ng(n){const t={};for(const X in n)X in Td||(t[X]=n[X]);if(n.css===!1)return t;const{name:s="v",type:o,duration:l,enterFromClass:r=`${s}-enter-from`,enterActiveClass:i=`${s}-enter-active`,enterToClass:c=`${s}-enter-to`,appearFromClass:p=r,appearActiveClass:u=i,appearToClass:d=c,leaveFromClass:y=`${s}-leave-from`,leaveActiveClass:f=`${s}-leave-active`,leaveToClass:m=`${s}-leave-to`}=n,g=tg(l),B=g&&g[0],D=g&&g[1],{onBeforeEnter:S,onEnter:w,onEnterCancelled:v,onLeave:P,onLeaveCancelled:T,onBeforeAppear:M=S,onAppear:W=w,onAppearCancelled:G=v}=t,K=(X,Ce,ve)=>{wt(X,Ce?d:c),wt(X,Ce?u:i),ve&&ve()},re=(X,Ce)=>{X._isLeaving=!1,wt(X,y),wt(X,m),wt(X,f),Ce&&Ce()},de=X=>(Ce,ve)=>{const be=X?W:w,Re=()=>K(Ce,X,ve);Jt(be,[Ce,Re]),$c(()=>{wt(Ce,X?p:r),yt(Ce,X?d:c),Tc(be)||Mc(Ce,o,B,Re)})};return Ne(t,{onBeforeEnter(X){Jt(S,[X]),yt(X,r),yt(X,i)},onBeforeAppear(X){Jt(M,[X]),yt(X,p),yt(X,u)},onEnter:de(!1),onAppear:de(!0),onLeave(X,Ce){X._isLeaving=!0;const ve=()=>re(X,Ce);yt(X,y),Md(),yt(X,f),$c(()=>{X._isLeaving&&(wt(X,y),yt(X,m),Tc(P)||Mc(X,o,D,ve))}),Jt(P,[X,ve])},onEnterCancelled(X){K(X,!1),Jt(v,[X])},onAppearCancelled(X){K(X,!0),Jt(G,[X])},onLeaveCancelled(X){re(X),Jt(T,[X])}})}function tg(n){if(n==null)return null;if(Me(n))return[kr(n.enter),kr(n.leave)];{const t=kr(n);return[t,t]}}function kr(n){const t=oh(n);return sm(t,"<transition> explicit duration"),t}function yt(n,t){t.split(/\s+/).forEach(s=>s&&n.classList.add(s)),(n._vtc||(n._vtc=new Set)).add(t)}function wt(n,t){t.split(/\s+/).forEach(o=>o&&n.classList.remove(o));const{_vtc:s}=n;s&&(s.delete(t),s.size||(n._vtc=void 0))}function $c(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let sg=0;function Mc(n,t,s,o){const l=n._endId=++sg,r=()=>{l===n._endId&&o()};if(s)return setTimeout(r,s);const{type:i,timeout:c,propCount:p}=$d(n,t);if(!i)return o();const u=i+"end";let d=0;const y=()=>{n.removeEventListener(u,f),r()},f=m=>{m.target===n&&++d>=p&&y()};setTimeout(()=>{d<p&&y()},c+1),n.addEventListener(u,f)}function $d(n,t){const s=window.getComputedStyle(n),o=g=>(s[g]||"").split(", "),l=o(`${Dt}Delay`),r=o(`${Dt}Duration`),i=Uc(l,r),c=o(`${Ks}Delay`),p=o(`${Ks}Duration`),u=Uc(c,p);let d=null,y=0,f=0;t===Dt?i>0&&(d=Dt,y=i,f=r.length):t===Ks?u>0&&(d=Ks,y=u,f=p.length):(y=Math.max(i,u),d=y>0?i>u?Dt:Ks:null,f=d?d===Dt?r.length:p.length:0);const m=d===Dt&&/\b(transform|all)(,|$)/.test(o(`${Dt}Property`).toString());return{type:d,timeout:y,propCount:f,hasTransform:m}}function Uc(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((s,o)=>Ic(s)+Ic(n[o])))}function Ic(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function Md(){return document.body.offsetHeight}const Ud=new WeakMap,Id=new WeakMap,Od={name:"TransitionGroup",props:Ne({},eg,{tag:String,moveClass:String}),setup(n,{slots:t}){const s=Fn(),o=xm();let l,r;return cr(()=>{if(!l.length)return;const i=n.moveClass||`${n.name||"v"}-move`;if(!cg(l[0].el,s.vnode.el,i))return;l.forEach(rg),l.forEach(ag);const c=l.filter(ig);Md(),c.forEach(p=>{const u=p.el,d=u.style;yt(u,i),d.transform=d.webkitTransform=d.transitionDuration="";const y=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",y),u._moveCb=null,wt(u,i))};u.addEventListener("transitionend",y)})}),()=>{const i=ge(n),c=ng(i);let p=i.tag||Pe;l=r,r=t.default?cd(t.default()):[];for(let u=0;u<r.length;u++){const d=r[u];d.key!=null?Ul(d,oa(d,c,o,s)):V("<TransitionGroup> children must be keyed.")}if(l)for(let u=0;u<l.length;u++){const d=l[u];Ul(d,oa(d,c,o,s)),Ud.set(d,d.el.getBoundingClientRect())}return U(p,null,r)}}},og=n=>delete n.mode;Od.props;const lg=Od;function rg(n){const t=n.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ag(n){Id.set(n,n.el.getBoundingClientRect())}function ig(n){const t=Ud.get(n),s=Id.get(n),o=t.left-s.left,l=t.top-s.top;if(o||l){const r=n.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",n}}function cg(n,t,s){const o=n.cloneNode();n._vtc&&n._vtc.forEach(i=>{i.split(/\s+/).forEach(c=>c&&o.classList.remove(c))}),s.split(/\s+/).forEach(i=>i&&o.classList.add(i)),o.style.display="none";const l=t.nodeType===1?t:t.parentNode;l.appendChild(o);const{hasTransform:r}=$d(o);return l.removeChild(o),r}const pg=["ctrl","shift","alt","meta"],ug={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>pg.some(s=>n[`${s}Key`]&&!t.includes(s))},dg=(n,t)=>(s,...o)=>{for(let l=0;l<t.length;l++){const r=ug[t[l]];if(r&&r(s,t))return}return n(s,...o)},yg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},rl=(n,t)=>s=>{if(!("key"in s))return;const o=_t(s.key);if(t.some(l=>l===o||yg[l]===o))return n(s)},Ld={beforeMount(n,{value:t},{transition:s}){n._vod=n.style.display==="none"?"":n.style.display,s&&t?s.beforeEnter(n):Ys(n,t)},mounted(n,{value:t},{transition:s}){s&&t&&s.enter(n)},updated(n,{value:t,oldValue:s},{transition:o}){!t!=!s&&(o?t?(o.beforeEnter(n),Ys(n,!0),o.enter(n)):o.leave(n,()=>{Ys(n,!1)}):Ys(n,t))},beforeUnmount(n,{value:t}){Ys(n,t)}};function Ys(n,t){n.style.display=t?n._vod:"none"}const fg=Ne({patchProp:Q8},O8);let Oc;function hg(){return Oc||(Oc=d8(fg))}const mg=(...n)=>{const t=hg().createApp(...n);gg(t),Cg(t);const{mount:s}=t;return t.mount=o=>{const l=_g(o);if(!l)return;const r=t._component;!ye(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const i=s(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),i},t};function gg(n){Object.defineProperty(n.config,"isNativeTag",{value:t=>Su(t)||uh(t),writable:!1})}function Cg(n){{const t=n.config.isCustomElement;Object.defineProperty(n.config,"isCustomElement",{get(){return t},set(){V("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=n.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(n.config,"compilerOptions",{get(){return V(o),s},set(){V(o)}})}}function _g(n){if(He(n)){const t=document.querySelector(n);return t||V(`Failed to mount app: mount target selector "${n}" returned null.`),t}return window.ShadowRoot&&n instanceof window.ShadowRoot&&n.mode==="closed"&&V('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),n}function Ag(){U8()}Ag();function ma(n,t={},s){for(const o in n){const l=n[o],r=s?`${s}:${o}`:o;typeof l=="object"&&l!==null?ma(l,t,r):typeof l=="function"&&(t[r]=l)}return t}const vg={run:n=>n()},Bg=()=>vg,Rd=typeof console.createTask<"u"?console.createTask:Bg;function bg(n,t){const s=t.shift(),o=Rd(s);return n.reduce((l,r)=>l.then(()=>o.run(()=>r(...t))),Promise.resolve())}function Dg(n,t){const s=t.shift(),o=Rd(s);return Promise.all(n.map(l=>o.run(()=>l(...t))))}function xr(n,t){for(const s of[...n])s(t)}class Sg{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,s,o={}){if(!t||typeof s!="function")return()=>{};const l=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!o.allowDeprecated){let i=r.message;i||(i=`${l} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}if(!s.name)try{Object.defineProperty(s,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(s),()=>{s&&(this.removeHook(t,s),s=void 0)}}hookOnce(t,s){let o,l=(...r)=>(typeof o=="function"&&o(),o=void 0,l=void 0,s(...r));return o=this.hook(t,l),o}removeHook(t,s){if(this._hooks[t]){const o=this._hooks[t].indexOf(s);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,s){this._deprecatedHooks[t]=typeof s=="string"?{to:s}:s;const o=this._hooks[t]||[];delete this._hooks[t];for(const l of o)this.hook(t,l)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const s in t)this.deprecateHook(s,t[s])}addHooks(t){const s=ma(t),o=Object.keys(s).map(l=>this.hook(l,s[l]));return()=>{for(const l of o.splice(0,o.length))l()}}removeHooks(t){const s=ma(t);for(const o in s)this.removeHook(o,s[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...s){return s.unshift(t),this.callHookWith(bg,t,...s)}callHookParallel(t,...s){return s.unshift(t),this.callHookWith(Dg,t,...s)}callHookWith(t,s,...o){const l=this._before||this._after?{name:s,args:o,context:{}}:void 0;this._before&&xr(this._before,l);const r=t(s in this._hooks?[...this._hooks[s]]:[],o);return r instanceof Promise?r.finally(()=>{this._after&&l&&xr(this._after,l)}):(this._after&&l&&xr(this._after,l),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const s=this._before.indexOf(t);s!==-1&&this._before.splice(s,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const s=this._after.indexOf(t);s!==-1&&this._after.splice(s,1)}}}}function wg(){return new Sg}function kg(n){return Array.isArray(n)?n:[n]}const Gd=["title","script","style","noscript"],jd=["base","meta","link","style","script","noscript"],xg=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Eg=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Fg=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function qd(n){let t=9;for(let s=0;s<n.length;)t=Math.imul(t^n.charCodeAt(s++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ga(n){return qd(`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([t,s])=>`${t}:${String(s)}`).join(",")}`)}function Pg(n){let t=9;for(const s of n)for(let o=0;o<s.length;)t=Math.imul(t^s.charCodeAt(o++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Nd(n,t){const{props:s,tag:o}=n;if(Eg.includes(o))return o;if(o==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";const l=["id"];o==="meta"&&l.push("name","property","http-equiv");for(const r of l)if(typeof s[r]<"u"){const i=String(s[r]);return t&&!t(i)?!1:`${o}:${r}:${i}`}return!1}function Lc(n,t){return n==null?t||null:typeof n=="function"?n(t):n}function al(n,t=!1,s){const{tag:o,$el:l}=n;l&&(Object.entries(o.props).forEach(([r,i])=>{i=String(i);const c=`attr:${r}`;if(r==="class"){if(!i)return;for(const p of i.split(" ")){const u=`${c}:${p}`;s&&s(n,u,()=>l.classList.remove(p)),l.classList.contains(p)||l.classList.add(p)}return}s&&!r.startsWith("data-h-")&&s(n,c,()=>l.removeAttribute(r)),(t||l.getAttribute(r)!==i)&&l.setAttribute(r,i)}),Gd.includes(o.tag)&&(o.textContent&&o.textContent!==l.textContent?l.textContent=o.textContent:o.innerHTML&&o.innerHTML!==l.innerHTML&&(l.innerHTML=o.innerHTML)))}let Js=!1;async function Hd(n,t={}){var f,m;const s={shouldRender:!0};if(await n.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const o=t.document||n.resolvedOptions.document||window.document,l=(await n.resolveTags()).map(c);if(n.resolvedOptions.experimentalHashHydration&&(Js=Js||n._hash||!1,Js)){const g=Pg(l.map(B=>B.tag._h));if(Js===g)return;Js=g}const r=n._popSideEffectQueue();n.headEntries().map(g=>g._sde).forEach(g=>{Object.entries(g).forEach(([B,D])=>{r[B]=D})});const i=(g,B,D)=>{B=`${g.renderId}:${B}`,g.entry&&(g.entry._sde[B]=D),delete r[B]};function c(g){const B=n.headEntries().find(S=>S._i===g._e),D={renderId:g._d||ga(g),$el:null,shouldRender:!0,tag:g,entry:B,markSideEffect:(S,w)=>i(D,S,w)};return D}const p=[],u={body:[],head:[]},d=g=>{n._elMap[g.renderId]=g.$el,p.push(g),i(g,"el",()=>{var B;(B=g.$el)==null||B.remove(),delete n._elMap[g.renderId]})};for(const g of l){if(await n.hooks.callHook("dom:beforeRenderTag",g),!g.shouldRender)continue;const{tag:B}=g;if(B.tag==="title"){o.title=B.textContent||"",p.push(g);continue}if(B.tag==="htmlAttrs"||B.tag==="bodyAttrs"){g.$el=o[B.tag==="htmlAttrs"?"documentElement":"body"],al(g,!1,i),p.push(g);continue}if(g.$el=n._elMap[g.renderId],!g.$el&&B.key&&(g.$el=o.querySelector(`${(f=B.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${B.tag}[data-h-${B._h}]`)),g.$el){g.tag._d&&al(g),d(g);continue}u[(m=B.tagPosition)!=null&&m.startsWith("body")?"body":"head"].push(g)}const y={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([g,B])=>{var S;if(!B.length)return;const D=(S=o==null?void 0:o[g])==null?void 0:S.children;if(D){for(const w of[...D].reverse()){const v=w.tagName.toLowerCase();if(!jd.includes(v))continue;const P=w.getAttributeNames().reduce((G,K)=>({...G,[K]:w.getAttribute(K)}),{}),T={tag:v,props:P};w.innerHTML&&(T.innerHTML=w.innerHTML);const M=ga(T);let W=B.findIndex(G=>(G==null?void 0:G.renderId)===M);if(W===-1){const G=Nd(T);W=B.findIndex(K=>(K==null?void 0:K.tag._d)&&K.tag._d===G)}if(W!==-1){const G=B[W];G.$el=w,al(G),d(G),delete B[W]}}B.forEach(w=>{const v=w.tag.tagPosition||"head";y[v]=y[v]||o.createDocumentFragment(),w.$el||(w.$el=o.createElement(w.tag.tag),al(w,!0)),y[v].appendChild(w.$el),d(w)})}}),y.head&&o.head.appendChild(y.head),y.bodyOpen&&o.body.insertBefore(y.bodyOpen,o.body.firstChild),y.bodyClose&&o.body.appendChild(y.bodyClose);for(const g of p)await n.hooks.callHook("dom:renderTag",g);Object.values(r).forEach(g=>g())}let Er=null;async function Wd(n,t={}){function s(){return Er=null,Hd(n,t)}const o=t.delayFn||(l=>setTimeout(l,10));return Er=Er||new Promise(l=>o(()=>l(s())))}function Tg(n){return{hooks:{"entries:updated":function(t){if(typeof(n==null?void 0:n.document)>"u"&&typeof window>"u")return;let s=n==null?void 0:n.delayFn;!s&&typeof requestAnimationFrame<"u"&&(s=requestAnimationFrame),Wd(t,{document:(n==null?void 0:n.document)||window.document,delayFn:s})}}}}function $g(n){var t;return((t=n==null?void 0:n.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const Rc={base:-1,title:1},Gc={critical:-8,high:-1,low:2};function jl(n){let t=10;const s=n.tagPriority;return typeof s=="number"?s:(n.tag==="meta"?(n.props.charset&&(t=-2),n.props["http-equiv"]==="content-security-policy"&&(t=0)):n.tag in Rc&&(t=Rc[n.tag]),typeof s=="string"&&s in Gc?t+Gc[s]:t)}const Mg=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Ug(){return{hooks:{"tags:resolve":n=>{const t=s=>{var o;return(o=n.tags.find(l=>l._d===s))==null?void 0:o._p};for(const{prefix:s,offset:o}of Mg)for(const l of n.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(s))){const r=t(l.tagPriority.replace(s,""));typeof r<"u"&&(l._p=r+o)}n.tags.sort((s,o)=>s._p-o._p).sort((s,o)=>jl(s)-jl(o))}}}}function Ig(){return{hooks:{"tags:resolve":n=>{const{tags:t}=n;let s=t.findIndex(l=>l.tag==="titleTemplate");const o=t.findIndex(l=>l.tag==="title");if(o!==-1&&s!==-1){const l=Lc(t[s].textContent,t[o].textContent);l!==null?t[o].textContent=l||t[o].textContent:delete t[o]}else if(s!==-1){const l=Lc(t[s].textContent);l!==null&&(t[s].textContent=l,t[s].tag="title",s=-1)}s!==-1&&delete t[s],n.tags=t.filter(Boolean)}}}}function Og(){return{hooks:{"tag:normalise":function({tag:n}){typeof n.props.body<"u"&&(n.tagPosition="bodyClose",delete n.props.body)}}}}const Lg=["link","style","script","noscript"];function Rg(){return{hooks:{"tag:normalise":({tag:n,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(n._h=ga(n)),n.key&&Lg.includes(n.tag)&&(n._h=qd(n.key),n.props[`data-h-${n._h}`]="")}}}}const jc=["script","link","bodyAttrs"];function Gg(){const n=(t,s)=>{const o={},l={};Object.entries(s.props).forEach(([i,c])=>{i.startsWith("on")&&typeof c=="function"?l[i]=c:o[i]=c});let r;return t==="dom"&&s.tag==="script"&&typeof o.src=="string"&&typeof l.onload<"u"&&(r=o.src,delete o.src),{props:o,eventHandlers:l,delayedSrc:r}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(s=>(!jc.includes(s.tag)||!Object.entries(s.props).find(([o,l])=>o.startsWith("on")&&typeof l=="function")||(s.props=n("ssr",s).props),s))},"dom:beforeRenderTag":function(t){if(!jc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([r,i])=>r.startsWith("on")&&typeof i=="function"))return;const{props:s,eventHandlers:o,delayedSrc:l}=n("dom",t.tag);Object.keys(o).length&&(t.tag.props=s,t.tag._eventHandlers=o,t.tag._delayedSrc=l)},"dom:renderTag":function(t){const s=t.$el;if(!t.tag._eventHandlers||!s)return;const o=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:s;Object.entries(t.tag._eventHandlers).forEach(([l,r])=>{const i=`${t.tag._d||t.tag._p}:${l}`,c=l.slice(2).toLowerCase(),p=`data-h-${c}`;if(t.markSideEffect(i,()=>{}),s.hasAttribute(p))return;const u=r;s.setAttribute(p,""),o.addEventListener(c,u),t.entry&&(t.entry._sde[i]=()=>{o.removeEventListener(c,u),s.removeAttribute(p)})}),t.tag._delayedSrc&&s.setAttribute("src",t.tag._delayedSrc)}}}}const jg=["templateParams","htmlAttrs","bodyAttrs"];function qg(){return{hooks:{"tag:normalise":function({tag:n}){["hid","vmid","key"].forEach(o=>{n.props[o]&&(n.key=n.props[o],delete n.props[o])});const s=Nd(n)||(n.key?`${n.tag}:${n.key}`:!1);s&&(n._d=s)},"tags:resolve":function(n){const t={};n.tags.forEach(o=>{const l=(o.key?`${o.tag}:${o.key}`:o._d)||o._p,r=t[l];if(r){let c=o==null?void 0:o.tagDuplicateStrategy;if(!c&&jg.includes(o.tag)&&(c="merge"),c==="merge"){const p=r.props;["class","style"].forEach(u=>{o.props[u]&&p[u]&&(u==="style"&&!p[u].endsWith(";")&&(p[u]+=";"),o.props[u]=`${p[u]} ${o.props[u]}`)}),t[l].props={...p,...o.props};return}else if(o._e===r._e){r._duped=r._duped||[],o._d=`${r._d}:${r._duped.length+1}`,r._duped.push(o);return}else if(jl(o)>jl(r))return}const i=Object.keys(o.props).length+(o.innerHTML?1:0)+(o.textContent?1:0);if(jd.includes(o.tag)&&i===0){delete t[l];return}t[l]=o});const s=[];Object.values(t).forEach(o=>{const l=o._duped;delete o._duped,s.push(o),l&&s.push(...l)}),n.tags=s}}}}function Zs(n,t){if(typeof n!="string")return n;function s(i){if(["s","pageTitle"].includes(i))return t.pageTitle;let c;return i.includes(".")?c=i.split(".").reduce((p,u)=>p&&p[u]||void 0,t):c=t[i],typeof c<"u"?c||"":!1}let o=n;try{o=decodeURI(n)}catch{}(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(i=>{const c=s(i.slice(1));typeof c=="string"&&(n=n.replace(new RegExp(`\\${i}(\\W|$)`,"g"),`${c}$1`).trim())});const r=t.separator;return n.includes(r)&&(n.endsWith(r)&&(n=n.slice(0,-r.length).trim()),n.startsWith(r)&&(n=n.slice(r.length).trim()),n=n.replace(new RegExp(`\\${r}\\s*\\${r}`,"g"),r)),n}function Ng(){return{hooks:{"tags:resolve":n=>{var r;const{tags:t}=n,s=(r=t.find(i=>i.tag==="title"))==null?void 0:r.textContent,o=t.findIndex(i=>i.tag==="templateParams"),l=o!==-1?t[o].props:{};l.separator=l.separator||"|",l.pageTitle=Zs(l.pageTitle||s||"",l);for(const i of t)if(["titleTemplate","title"].includes(i.tag)&&typeof i.textContent=="string")i.textContent=Zs(i.textContent,l);else if(i.tag==="meta"&&typeof i.props.content=="string")i.props.content=Zs(i.props.content,l);else if(i.tag==="link"&&typeof i.props.href=="string")i.props.href=Zs(i.props.href,l);else if(i.tag==="script"&&["application/json","application/ld+json"].includes(i.props.type)&&typeof i.innerHTML=="string")try{i.innerHTML=JSON.stringify(JSON.parse(i.innerHTML),(c,p)=>typeof p=="string"?Zs(p,l):p)}catch{}n.tags=t.filter(i=>i.tag!=="templateParams")}}}}const Hg=typeof window<"u";let Vd;function Wg(n){return Vd=n}function Vg(){return Vd}async function zg(n,t){const s={tag:n,props:{}};return t instanceof Promise&&(t=await t),n==="templateParams"?(s.props=t,s):["title","titleTemplate"].includes(n)?(t&&typeof t=="object"?(s.textContent=t.textContent,t.tagPriority&&(s.tagPriority=t.tagPriority)):s.textContent=t,s):typeof t=="string"?["script","noscript","style"].includes(n)?(n==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?s.props.src=t:s.innerHTML=t,s):!1:(s.props=await Yg(n,{...t}),s.props.children&&(s.props.innerHTML=s.props.children),delete s.props.children,Object.keys(s.props).filter(o=>Fg.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||Gd.includes(s.tag))&&(s[o]=s.props[o]),delete s.props[o]}),["innerHTML","textContent"].forEach(o=>{if(s.tag==="script"&&typeof s[o]=="string"&&["application/ld+json","application/json"].includes(s.props.type))try{s[o]=JSON.parse(s[o])}catch{s[o]=""}typeof s[o]=="object"&&(s[o]=JSON.stringify(s[o]))}),s.props.class&&(s.props.class=Kg(s.props.class)),s.props.content&&Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s)}function Kg(n){return typeof n=="object"&&!Array.isArray(n)&&(n=Object.keys(n).filter(t=>n[t])),(Array.isArray(n)?n.join(" "):n).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function Yg(n,t){for(const s of Object.keys(t)){const o=s.startsWith("data-");t[s]instanceof Promise&&(t[s]=await t[s]),String(t[s])==="true"?t[s]=o?"true":"":String(t[s])==="false"&&(o?t[s]="false":delete t[s])}return t}const Jg=10;async function Zg(n){const t=[];return Object.entries(n.resolvedInput).filter(([s,o])=>typeof o<"u"&&xg.includes(s)).forEach(([s,o])=>{const l=kg(o);t.push(...l.map(r=>zg(s,r)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((s,o)=>(s._e=n._i,s._p=(n._i<<Jg)+o,s))}function Qg(){return[qg(),Ug(),Ng(),Ig(),Rg(),Gg(),Og()]}function Xg(n={}){return[Tg({document:n==null?void 0:n.document,delayFn:n==null?void 0:n.domDelayFn})]}function e3(n={}){const t=n3({...n,plugins:[...Xg(n),...(n==null?void 0:n.plugins)||[]]});return n.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=$g(t.resolvedOptions.document)),Wg(t),t}function n3(n={}){let t=[],s={},o=0;const l=wg();n!=null&&n.hooks&&l.addHooks(n.hooks),n.plugins=[...Qg(),...(n==null?void 0:n.plugins)||[]],n.plugins.forEach(c=>c.hooks&&l.addHooks(c.hooks)),n.document=n.document||(Hg?document:void 0);const r=()=>l.callHook("entries:updated",i),i={resolvedOptions:n,headEntries(){return t},get hooks(){return l},use(c){c.hooks&&l.addHooks(c.hooks)},push(c,p){const u={_i:o++,input:c,_sde:{}};return p!=null&&p.mode&&(u._m=p==null?void 0:p.mode),p!=null&&p.transform&&(u._t=p==null?void 0:p.transform),t.push(u),r(),{dispose(){t=t.filter(d=>d._i!==u._i?!0:(s={...s,...d._sde||{}},d._sde={},r(),!1))},patch(d){t=t.map(y=>(y._i===u._i&&(u.input=y.input=d,r()),y))}}},async resolveTags(){const c={tags:[],entries:[...t]};await l.callHook("entries:resolve",c);for(const p of c.entries){const u=p._t||(d=>d);if(p.resolvedInput=u(p.resolvedInput||p.input),p.resolvedInput)for(const d of await Zg(p)){const y={tag:d,entry:p,resolvedOptions:i.resolvedOptions};await l.callHook("tag:normalise",y),c.tags.push(y.tag)}}return await l.callHook("tags:resolve",c),c.tags},_popSideEffectQueue(){const c={...s};return s={},c},_elMap:{}};return i.hooks.callHook("init",i),i}function t3(n){return typeof n=="function"?n():L(n)}function ql(n,t=""){if(n instanceof Promise)return n;const s=t3(n);return!n||!s?s:Array.isArray(s)?s.map(o=>ql(o,t)):typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,l])=>o==="titleTemplate"||o.startsWith("on")?[o,L(l)]:[o,ql(l,o)])):s}const s3=Gl.startsWith("3"),o3=typeof window<"u",zd="usehead";function bi(){return Fn()&&k(zd)||Vg()}function l3(n){return{install(s){s3&&(s.config.globalProperties.$unhead=n,s.config.globalProperties.$head=n,s.provide(zd,n))}}.install}function r3(n={}){const t=e3({...n,domDelayFn:s=>setTimeout(()=>on(()=>s()),10),plugins:[a3(),...(n==null?void 0:n.plugins)||[]]});return t.install=l3(t),t}function a3(){return{hooks:{"entries:resolve":function(n){for(const t of n.entries)t.resolvedInput=ql(t.input)}}}}function i3(n,t={}){const s=bi(),o=Q(!1),l=Q({});bs(()=>{l.value=o.value?{}:ql(n)});const r=s.push(l.value,t);return Ae(l,c=>{r.patch(c)}),Fn()&&(Vo(()=>{r.dispose()}),dd(()=>{o.value=!0}),ud(()=>{o.value=!1})),r}function c3(n,t={}){return bi().push(n,t)}function Kd(n,t={}){var o;const s=bi();if(s){const l=o3||!!((o=s.resolvedOptions)!=null&&o.document);return t.mode==="server"&&l||t.mode==="client"&&!l?void 0:l?i3(n,t):c3(n,t)}}function p3(n,t){const s=r3(t||{}),o={unhead:s,install(l){Gl.startsWith("3")&&(l.config.globalProperties.$head=s,l.provide("usehead",s))},use(l){s.use(l)},resolveTags(){return s.resolveTags()},headEntries(){return s.headEntries()},headTags(){return s.resolveTags()},push(l,r){return s.push(l,r)},addEntry(l,r){return s.push(l,r)},addHeadObjs(l,r){return s.push(l,r)},addReactiveEntry(l,r){const i=Kd(l,r);return typeof i<"u"?i.dispose:()=>{}},removeHeadObjs(){},updateDOM(l,r){r?Hd(s,{document:l}):Wd(s,{delayFn:i=>setTimeout(()=>i(),50),document:l})},internalHooks:s.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return s.addHeadObjs=o.addHeadObjs,s.updateDOM=o.updateDOM,s.hooks.hook("dom:beforeRender",l=>{for(const r of o.hooks["before:dom"])r()===!1&&(l.shouldRender=!1)}),n&&o.addHeadObjs(n),o}const mo=Symbol("v-click-clicks"),os=Symbol("v-click-clicks-elements"),Ca=Symbol("v-click-clicks-order-map"),go=Symbol("v-click-clicks-disabled"),Yd=Symbol("slidev-slide-scale"),E=Symbol("slidev-slidev-context"),u3=Symbol("slidev-route"),d3=Symbol("slidev-slide-context"),es="slidev-vclick-target",Fr="slidev-vclick-hidden",y3="slidev-vclick-fade",Pr="slidev-vclick-hidden-explicitly",Qs="slidev-vclick-current",il="slidev-vclick-prior",f3=["localhost","127.0.0.1"];let h3=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,s)=>(s&=63,s<36?t+=s.toString(36):s<62?t+=(s-26).toString(36).toUpperCase():s>62?t+="-":t+="_",t),"");function m3(n){return n=n??[],Array.isArray(n)?n:[n]}function _a(n,t){if(!n)return!1;const s=n.indexOf(t);return s>=0?(n.splice(s,1),!0):!1}function g3(...n){let t,s,o;n.length===1?(t=0,o=1,[s]=n):[t,s,o=1]=n;const l=[];let r=t;for(;r<s;)l.push(r),r+=o||1;return l}function C3(n){return n!=null}function _3(n,t){return Object.fromEntries(Object.entries(n).map(([s,o])=>t(s,o)).filter(C3))}const uo={theme:"seriph",title:"NCCU 2023CSCamp",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<p>Presentation slides for NCCU 2023 CS Camp.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",hideInToc:!0},Te=uo,Mt=Te.aspectRatio??16/9,Ut=Te.canvasWidth??980,Di=Math.ceil(Ut/Mt),Si=R(()=>_3(Te.themeConfig||{},(n,t)=>[`--slidev-theme-${n}`,t]));function Jd(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Rn(n,t,s){Object.defineProperty(n,t,{value:s,writable:!0,enumerable:!1})}const Ss=We({page:0,clicks:0});let A3=[],v3=[];Rn(Ss,"$syncUp",!0);Rn(Ss,"$syncDown",!0);Rn(Ss,"$paused",!1);Rn(Ss,"$onSet",n=>A3.push(n));Rn(Ss,"$onPatch",n=>v3.push(n));Jd();Rn(Ss,"$patch",async()=>!1);function Zd(n,t,s=!1){const o=[];let l=!1,r=!1,i,c;const p=We(t);function u(m){o.push(m)}function d(m,g){p[m]!==g&&(clearTimeout(i),l=!0,p[m]=g,i=setTimeout(()=>l=!1,0))}function y(m){l||(clearTimeout(c),r=!0,Object.entries(m).forEach(([g,B])=>{p[g]=B}),c=setTimeout(()=>r=!1,0))}function f(m){let g;s?s&&window.addEventListener("storage",D=>{D&&D.key===m&&D.newValue&&y(JSON.parse(D.newValue))}):(g=new BroadcastChannel(m),g.addEventListener("message",D=>y(D.data)));function B(){!s&&g&&!r?g.postMessage(ge(p)):s&&!r&&window.localStorage.setItem(m,JSON.stringify(p)),l||o.forEach(D=>D(p))}if(Ae(p,B,{deep:!0,flush:"sync"}),s){const D=window.localStorage.getItem(m);D&&y(JSON.parse(D))}}return{init:f,onPatch:u,patch:d,state:p}}const{init:B3,onPatch:b3,patch:Xs,state:Tr}=Zd(Ss,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ws=We({});let D3=[],S3=[];Rn(ws,"$syncUp",!0);Rn(ws,"$syncDown",!0);Rn(ws,"$paused",!1);Rn(ws,"$onSet",n=>D3.push(n));Rn(ws,"$onPatch",n=>S3.push(n));Jd();Rn(ws,"$patch",async()=>!1);const{init:w3,onPatch:k3,patch:Qd,state:Nl}=Zd(ws,{},!1),x3="modulepreload",E3=function(n){return"/2023CSCamp/"+n},qc={},It=function(t,s,o){if(!s||s.length===0)return t();const l=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=E3(r),r in qc)return;qc[r]=!0;const i=r.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(!!o)for(let d=l.length-1;d>=0;d--){const y=l[d];if(y.href===r&&(!i||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${c}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":x3,i||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),i)return new Promise((d,y)=>{u.addEventListener("load",d),u.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})};function F3(n,t){let s,o,l;const r=Q(!0),i=()=>{r.value=!0,l()};Ae(n,i,{flush:"sync"});const c=typeof t=="function"?t:t.get,p=typeof t=="function"?void 0:t.set,u=ui((d,y)=>(o=d,l=y,{get(){return r.value&&(s=c(),r.value=!1),o(),s},set(f){p==null||p(f)}}));return Object.isExtensible(u)&&(u.trigger=i),u}function ct(n){return oi()?(Eu(n),!0):!1}function Ke(n){return typeof n=="function"?n():L(n)}function P3(n){if(!$e(n))return We(n);const t=new Proxy({},{get(s,o,l){return L(Reflect.get(n.value,o,l))},set(s,o,l){return $e(n.value[o])&&!$e(l)?n.value[o].value=l:n.value[o]=l,!0},deleteProperty(s,o){return Reflect.deleteProperty(n.value,o)},has(s,o){return Reflect.has(n.value,o)},ownKeys(){return Object.keys(n.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return We(t)}const Kn=typeof window<"u",T3=n=>typeof n<"u",$3=n=>n!=null,M3=Object.prototype.toString,Aa=n=>M3.call(n)==="[object Object]",va=()=>+Date.now(),gs=()=>{},U3=I3();function I3(){var n;return Kn&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function O3(n,t){function s(...o){return new Promise((l,r)=>{Promise.resolve(n(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(l).catch(r)})}return s}const Xd=n=>n();function L3(n=Xd){const t=Q(!0);function s(){t.value=!1}function o(){t.value=!0}const l=(...r)=>{t.value&&n(...r)};return{isActive:Vn(t),pause:s,resume:o,eventFilter:l}}function R3(n,t){var s;if(typeof n=="number")return n+t;const o=((s=n.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",l=n.slice(o.length),r=Number.parseFloat(o)+t;return Number.isNaN(r)?n:r+l}function ey(...n){if(n.length!==1)return Jh(...n);const t=n[0];return typeof t=="function"?Vn(ui(()=>({get:t,set:gs}))):Q(t)}var G3=Object.defineProperty,j3=Object.defineProperties,q3=Object.getOwnPropertyDescriptors,Nc=Object.getOwnPropertySymbols,N3=Object.prototype.hasOwnProperty,H3=Object.prototype.propertyIsEnumerable,Hc=(n,t,s)=>t in n?G3(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,W3=(n,t)=>{for(var s in t||(t={}))N3.call(t,s)&&Hc(n,s,t[s]);if(Nc)for(var s of Nc(t))H3.call(t,s)&&Hc(n,s,t[s]);return n},V3=(n,t)=>j3(n,q3(t));function z3(n){if(!$e(n))return zh(n);const t=Array.isArray(n.value)?new Array(n.value.length):{};for(const s in n.value)t[s]=ui(()=>({get(){return n.value[s]},set(o){if(Array.isArray(n.value)){const l=[...n.value];l[s]=o,n.value=l}else{const l=V3(W3({},n.value),{[s]:o});Object.setPrototypeOf(l,Object.getPrototypeOf(n.value)),n.value=l}}}));return t}function ny(n,t=!0){Fn()?Wt(n):t?n():on(n)}function K3(n){Fn()&&pr(n)}function Y3(n,t=1e3,s={}){const{immediate:o=!0,immediateCallback:l=!1}=s;let r=null;const i=Q(!1);function c(){r&&(clearInterval(r),r=null)}function p(){i.value=!1,c()}function u(){const d=Ke(t);d<=0||(i.value=!0,l&&n(),c(),r=setInterval(n,d))}if(o&&Kn&&u(),$e(t)||typeof t=="function"){const d=Ae(t,()=>{i.value&&Kn&&u()});ct(d)}return ct(p),{isActive:i,pause:p,resume:u}}function J3(n,t,s={}){const{immediate:o=!0}=s,l=Q(!1);let r=null;function i(){r&&(clearTimeout(r),r=null)}function c(){l.value=!1,i()}function p(...u){i(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,n(...u)},Ke(t))}return o&&(l.value=!0,Kn&&p()),ct(c),{isPending:Vn(l),start:p,stop:c}}function ty(n=!1,t={}){const{truthyValue:s=!0,falsyValue:o=!1}=t,l=$e(n),r=Q(n);function i(c){if(arguments.length)return r.value=c,r.value;{const p=Ke(s);return r.value=r.value===p?Ke(o):p,r.value}}return l?i:[r,i]}var Wc=Object.getOwnPropertySymbols,Z3=Object.prototype.hasOwnProperty,Q3=Object.prototype.propertyIsEnumerable,X3=(n,t)=>{var s={};for(var o in n)Z3.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&Wc)for(var o of Wc(n))t.indexOf(o)<0&&Q3.call(n,o)&&(s[o]=n[o]);return s};function eC(n,t,s={}){const o=s,{eventFilter:l=Xd}=o,r=X3(o,["eventFilter"]);return Ae(n,O3(l,t),r)}var nC=Object.defineProperty,tC=Object.defineProperties,sC=Object.getOwnPropertyDescriptors,Hl=Object.getOwnPropertySymbols,sy=Object.prototype.hasOwnProperty,oy=Object.prototype.propertyIsEnumerable,Vc=(n,t,s)=>t in n?nC(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,oC=(n,t)=>{for(var s in t||(t={}))sy.call(t,s)&&Vc(n,s,t[s]);if(Hl)for(var s of Hl(t))oy.call(t,s)&&Vc(n,s,t[s]);return n},lC=(n,t)=>tC(n,sC(t)),rC=(n,t)=>{var s={};for(var o in n)sy.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&Hl)for(var o of Hl(n))t.indexOf(o)<0&&oy.call(n,o)&&(s[o]=n[o]);return s};function aC(n,t,s={}){const o=s,{eventFilter:l}=o,r=rC(o,["eventFilter"]),{eventFilter:i,pause:c,resume:p,isActive:u}=L3(l);return{stop:eC(n,t,lC(oC({},r),{eventFilter:i})),pause:c,resume:p,isActive:u}}function ln(n){var t;const s=Ke(n);return(t=s==null?void 0:s.$el)!=null?t:s}const en=Kn?window:void 0,ly=Kn?window.document:void 0,iC=Kn?window.navigator:void 0;function De(...n){let t,s,o,l;if(typeof n[0]=="string"||Array.isArray(n[0])?([s,o,l]=n,t=en):[t,s,o,l]=n,!t)return gs;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const r=[],i=()=>{r.forEach(d=>d()),r.length=0},c=(d,y,f,m)=>(d.addEventListener(y,f,m),()=>d.removeEventListener(y,f,m)),p=Ae(()=>[ln(t),Ke(l)],([d,y])=>{i(),d&&r.push(...s.flatMap(f=>o.map(m=>c(d,f,m,y))))},{immediate:!0,flush:"post"}),u=()=>{p(),i()};return ct(u),u}let zc=!1;function cC(n,t,s={}){const{window:o=en,ignore:l=[],capture:r=!0,detectIframe:i=!1}=s;if(!o)return;U3&&!zc&&(zc=!0,Array.from(o.document.body.children).forEach(f=>f.addEventListener("click",gs)));let c=!0;const p=f=>l.some(m=>{if(typeof m=="string")return Array.from(o.document.querySelectorAll(m)).some(g=>g===f.target||f.composedPath().includes(g));{const g=ln(m);return g&&(f.target===g||f.composedPath().includes(g))}}),d=[De(o,"click",f=>{const m=ln(n);if(!(!m||m===f.target||f.composedPath().includes(m))){if(f.detail===0&&(c=!p(f)),!c){c=!0;return}t(f)}},{passive:!0,capture:r}),De(o,"pointerdown",f=>{const m=ln(n);m&&(c=!f.composedPath().includes(m)&&!p(f))},{passive:!0}),i&&De(o,"blur",f=>{setTimeout(()=>{var m;const g=ln(n);((m=o.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(g!=null&&g.contains(o.document.activeElement))&&t(f)},0)})].filter(Boolean);return()=>d.forEach(f=>f())}function pC(n){return typeof n=="function"?n:typeof n=="string"?t=>t.key===n:Array.isArray(n)?t=>n.includes(t.key):()=>!0}function uC(...n){let t,s,o={};n.length===3?(t=n[0],s=n[1],o=n[2]):n.length===2?typeof n[1]=="object"?(t=!0,s=n[0],o=n[1]):(t=n[0],s=n[1]):(t=!0,s=n[0]);const{target:l=en,eventName:r="keydown",passive:i=!1,dedupe:c=!1}=o,p=pC(t);return De(l,r,d=>{d.repeat&&Ke(c)||p(d)&&s(d)},i)}function dC(n={}){var t;const{window:s=en}=n,o=(t=n.document)!=null?t:s==null?void 0:s.document,l=F3(()=>null,()=>o==null?void 0:o.activeElement);return s&&(De(s,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),De(s,"focus",l.trigger,!0)),l}function yC(){const n=Q(!1);return Fn()&&Wt(()=>{n.value=!0}),n}function Ko(n){const t=yC();return R(()=>(t.value,!!n()))}function fC(n,t={}){const{immediate:s=!0,window:o=en}=t,l=Q(!1);let r=0,i=null;function c(d){if(!l.value||!o)return;const y=d-(r||d);n({delta:y,timestamp:d}),r=d,i=o.requestAnimationFrame(c)}function p(){!l.value&&o&&(l.value=!0,i=o.requestAnimationFrame(c))}function u(){l.value=!1,i!=null&&o&&(o.cancelAnimationFrame(i),i=null)}return s&&p(),ct(u),{isActive:Vn(l),pause:u,resume:p}}function ls(n,t={}){const{window:s=en}=t,o=Ko(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let l;const r=Q(!1),i=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",c):l.removeListener(c))},c=()=>{o.value&&(i(),l=s.matchMedia(ey(n).value),r.value=!!(l!=null&&l.matches),l&&("addEventListener"in l?l.addEventListener("change",c):l.addListener(c)))};return bs(c),ct(()=>i()),r}const hC={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function mC(n,t={}){function s(c,p){let u=n[c];return p!=null&&(u=R3(u,p)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=en}=t;function l(c){return o?o.matchMedia(c).matches:!1}const r=c=>ls(`(min-width: ${s(c)})`,t),i=Object.keys(n).reduce((c,p)=>(Object.defineProperty(c,p,{get:()=>r(p),enumerable:!0,configurable:!0}),c),{});return Object.assign(i,{greater(c){return ls(`(min-width: ${s(c,.1)})`,t)},greaterOrEqual:r,smaller(c){return ls(`(max-width: ${s(c,-.1)})`,t)},smallerOrEqual(c){return ls(`(max-width: ${s(c)})`,t)},between(c,p){return ls(`(min-width: ${s(c)}) and (max-width: ${s(p,-.1)})`,t)},isGreater(c){return l(`(min-width: ${s(c,.1)})`)},isGreaterOrEqual(c){return l(`(min-width: ${s(c)})`)},isSmaller(c){return l(`(max-width: ${s(c,-.1)})`)},isSmallerOrEqual(c){return l(`(max-width: ${s(c)})`)},isInBetween(c,p){return l(`(min-width: ${s(c)}) and (max-width: ${s(p,-.1)})`)},current(){const c=Object.keys(n).map(p=>[p,r(p)]);return R(()=>c.filter(([,p])=>p.value).map(([p])=>p))}})}function gC(n={}){const{navigator:t=iC,read:s=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=n,i=["copy","cut"],c=Ko(()=>t&&"clipboard"in t),p=R(()=>c.value||r),u=Q(""),d=Q(!1),y=J3(()=>d.value=!1,l);function f(){c.value?t.clipboard.readText().then(D=>{u.value=D}):u.value=B()}if(p.value&&s)for(const D of i)De(D,f);async function m(D=Ke(o)){p.value&&D!=null&&(c.value?await t.clipboard.writeText(D):g(D),u.value=D,d.value=!0,y.start())}function g(D){const S=document.createElement("textarea");S.value=D??"",S.style.position="absolute",S.style.opacity="0",document.body.appendChild(S),S.select(),document.execCommand("copy"),S.remove()}function B(){var D,S,w;return(w=(S=(D=document==null?void 0:document.getSelection)==null?void 0:D.call(document))==null?void 0:S.toString())!=null?w:""}return{isSupported:p,text:u,copied:d,copy:m}}function CC(n){return JSON.parse(JSON.stringify(n))}const cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pl="__vueuse_ssr_handlers__",_C=AC();function AC(){return pl in cl||(cl[pl]=cl[pl]||{}),cl[pl]}function vC(n,t){return _C[n]||t}function BC(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}var bC=Object.defineProperty,Kc=Object.getOwnPropertySymbols,DC=Object.prototype.hasOwnProperty,SC=Object.prototype.propertyIsEnumerable,Yc=(n,t,s)=>t in n?bC(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Jc=(n,t)=>{for(var s in t||(t={}))DC.call(t,s)&&Yc(n,s,t[s]);if(Kc)for(var s of Kc(t))SC.call(t,s)&&Yc(n,s,t[s]);return n};const wC={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},Zc="vueuse-storage";function kC(n,t,s,o={}){var l;const{flush:r="pre",deep:i=!0,listenToStorageChanges:c=!0,writeDefaults:p=!0,mergeDefaults:u=!1,shallow:d,window:y=en,eventFilter:f,onError:m=G=>{console.error(G)}}=o,g=(d?at:Q)(t);if(!s)try{s=vC("getDefaultStorage",()=>{var G;return(G=en)==null?void 0:G.localStorage})()}catch(G){m(G)}if(!s)return g;const B=Ke(t),D=BC(B),S=(l=o.serializer)!=null?l:wC[D],{pause:w,resume:v}=aC(g,()=>P(g.value),{flush:r,deep:i,eventFilter:f});return y&&c&&(De(y,"storage",W),De(y,Zc,M)),W(),g;function P(G){try{if(G==null)s.removeItem(n);else{const K=S.write(G),re=s.getItem(n);re!==K&&(s.setItem(n,K),y&&y.dispatchEvent(new CustomEvent(Zc,{detail:{key:n,oldValue:re,newValue:K,storageArea:s}})))}}catch(K){m(K)}}function T(G){const K=G?G.newValue:s.getItem(n);if(K==null)return p&&B!==null&&s.setItem(n,S.write(B)),B;if(!G&&u){const re=S.read(K);return typeof u=="function"?u(re,B):D==="object"&&!Array.isArray(re)?Jc(Jc({},B),re):re}else return typeof K!="string"?K:S.read(K)}function M(G){W(G.detail)}function W(G){if(!(G&&G.storageArea!==s)){if(G&&G.key==null){g.value=B;return}if(!(G&&G.key!==n)){w();try{g.value=T(G)}catch(K){m(K)}finally{G?on(v):v()}}}}}function xC(n){return ls("(prefers-color-scheme: dark)",n)}var EC=Object.defineProperty,FC=Object.defineProperties,PC=Object.getOwnPropertyDescriptors,Qc=Object.getOwnPropertySymbols,TC=Object.prototype.hasOwnProperty,$C=Object.prototype.propertyIsEnumerable,Xc=(n,t,s)=>t in n?EC(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,MC=(n,t)=>{for(var s in t||(t={}))TC.call(t,s)&&Xc(n,s,t[s]);if(Qc)for(var s of Qc(t))$C.call(t,s)&&Xc(n,s,t[s]);return n},UC=(n,t)=>FC(n,PC(t));function hL(n,t={}){var s,o;const{pointerTypes:l,preventDefault:r,stopPropagation:i,exact:c,onMove:p,onEnd:u,onStart:d,initialValue:y,axis:f="both",draggingElement:m=en,handle:g=n}=t,B=Q((s=Ke(y))!=null?s:{x:0,y:0}),D=Q(),S=M=>l?l.includes(M.pointerType):!0,w=M=>{Ke(r)&&M.preventDefault(),Ke(i)&&M.stopPropagation()},v=M=>{if(!S(M)||Ke(c)&&M.target!==Ke(n))return;const W=Ke(n).getBoundingClientRect(),G={x:M.clientX-W.left,y:M.clientY-W.top};(d==null?void 0:d(G,M))!==!1&&(D.value=G,w(M))},P=M=>{if(!S(M)||!D.value)return;let{x:W,y:G}=B.value;(f==="x"||f==="both")&&(W=M.clientX-D.value.x),(f==="y"||f==="both")&&(G=M.clientY-D.value.y),B.value={x:W,y:G},p==null||p(B.value,M),w(M)},T=M=>{S(M)&&D.value&&(D.value=void 0,u==null||u(B.value,M),w(M))};if(Kn){const M={capture:(o=t.capture)!=null?o:!0};De(g,"pointerdown",v,M),De(m,"pointermove",P,M),De(m,"pointerup",T,M)}return UC(MC({},z3(B)),{position:B,isDragging:R(()=>!!D.value),style:R(()=>`left:${B.value.x}px;top:${B.value.y}px;`)})}var ep=Object.getOwnPropertySymbols,IC=Object.prototype.hasOwnProperty,OC=Object.prototype.propertyIsEnumerable,LC=(n,t)=>{var s={};for(var o in n)IC.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&ep)for(var o of ep(n))t.indexOf(o)<0&&OC.call(n,o)&&(s[o]=n[o]);return s};function RC(n,t,s={}){const o=s,{window:l=en}=o,r=LC(o,["window"]);let i;const c=Ko(()=>l&&"ResizeObserver"in l),p=()=>{i&&(i.disconnect(),i=void 0)},u=R(()=>Array.isArray(n)?n.map(f=>ln(f)):[ln(n)]),d=Ae(u,f=>{if(p(),c.value&&l){i=new ResizeObserver(t);for(const m of f)m&&i.observe(m,r)}},{immediate:!0,flush:"post",deep:!0}),y=()=>{p(),d()};return ct(y),{isSupported:c,stop:y}}function GC(n,t={width:0,height:0},s={}){const{window:o=en,box:l="content-box"}=s,r=R(()=>{var p,u;return(u=(p=ln(n))==null?void 0:p.namespaceURI)==null?void 0:u.includes("svg")}),i=Q(t.width),c=Q(t.height);return RC(n,([p])=>{const u=l==="border-box"?p.borderBoxSize:l==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(o&&r.value){const d=ln(n);if(d){const y=o.getComputedStyle(d);i.value=Number.parseFloat(y.width),c.value=Number.parseFloat(y.height)}}else if(u){const d=Array.isArray(u)?u:[u];i.value=d.reduce((y,{inlineSize:f})=>y+f,0),c.value=d.reduce((y,{blockSize:f})=>y+f,0)}else i.value=p.contentRect.width,c.value=p.contentRect.height},s),Ae(()=>ln(n),p=>{i.value=p?t.width:0,c.value=p?t.height:0}),{width:i,height:c}}function jC(n,t,s={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:i=en,immediate:c=!0}=s,p=Ko(()=>i&&"IntersectionObserver"in i),u=R(()=>{const g=Ke(n);return(Array.isArray(g)?g:[g]).map(ln).filter($3)});let d=gs;const y=Q(c),f=p.value?Ae(()=>[u.value,ln(o),y.value],([g,B])=>{if(d(),!y.value||!g.length)return;const D=new IntersectionObserver(t,{root:ln(B),rootMargin:l,threshold:r});g.forEach(S=>S&&D.observe(S)),d=()=>{D.disconnect(),d=gs}},{immediate:c,flush:"post"}):gs,m=()=>{d(),f(),y.value=!1};return ct(m),{isSupported:p,isActive:y,pause(){d(),y.value=!1},resume(){y.value=!0},stop:m}}const np=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function qC(n,t={}){const{document:s=ly,autoExit:o=!1}=t,l=R(()=>{var S;return(S=ln(n))!=null?S:s==null?void 0:s.querySelector("html")}),r=Q(!1),i=R(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(S=>s&&S in s||l.value&&S in l.value)),c=R(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(S=>s&&S in s||l.value&&S in l.value)),p=R(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(S=>s&&S in s||l.value&&S in l.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(S=>s&&S in s),d=Ko(()=>l.value&&s&&i.value!==void 0&&c.value!==void 0&&p.value!==void 0),y=()=>u?(s==null?void 0:s[u])===l.value:!1,f=()=>{if(p.value){if(s&&s[p.value]!=null)return s[p.value];{const S=l.value;if((S==null?void 0:S[p.value])!=null)return!!S[p.value]}}return!1};async function m(){if(!(!d.value||!r.value)){if(c.value)if((s==null?void 0:s[c.value])!=null)await s[c.value]();else{const S=l.value;(S==null?void 0:S[c.value])!=null&&await S[c.value]()}r.value=!1}}async function g(){if(!d.value||r.value)return;f()&&await m();const S=l.value;i.value&&(S==null?void 0:S[i.value])!=null&&(await S[i.value](),r.value=!0)}async function B(){await(r.value?m():g())}const D=()=>{const S=f();(!S||S&&y())&&(r.value=S)};return De(s,np,D,!1),De(()=>ln(l),np,D,!1),o&&ct(m),{isSupported:d,isFullscreen:r,enter:g,exit:m,toggle:B}}function Yn(n,t,s={}){const{window:o=en}=s;return kC(n,t,o==null?void 0:o.localStorage,s)}const NC={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function HC(n={}){const{reactive:t=!1,target:s=en,aliasMap:o=NC,passive:l=!0,onEventFired:r=gs}=n,i=We(new Set),c={toJSON(){return{}},current:i},p=t?We(c):c,u=new Set,d=new Set;function y(B,D){B in p&&(t?p[B]=D:p[B].value=D)}function f(){i.clear();for(const B of d)y(B,!1)}function m(B,D){var S,w;const v=(S=B.key)==null?void 0:S.toLowerCase(),T=[(w=B.code)==null?void 0:w.toLowerCase(),v].filter(Boolean);v&&(D?i.add(v):i.delete(v));for(const M of T)d.add(M),y(M,D);v==="meta"&&!D?(u.forEach(M=>{i.delete(M),y(M,!1)}),u.clear()):typeof B.getModifierState=="function"&&B.getModifierState("Meta")&&D&&[...i,...T].forEach(M=>u.add(M))}De(s,"keydown",B=>(m(B,!0),r(B)),{passive:l}),De(s,"keyup",B=>(m(B,!1),r(B)),{passive:l}),De("blur",f,{passive:!0}),De("focus",f,{passive:!0});const g=new Proxy(p,{get(B,D,S){if(typeof D!="string")return Reflect.get(B,D,S);if(D=D.toLowerCase(),D in o&&(D=o[D]),!(D in p))if(/[+_-]/.test(D)){const v=D.split(/[+_-]/g).map(P=>P.trim());p[D]=R(()=>v.every(P=>Ke(g[P])))}else p[D]=Q(!1);const w=Reflect.get(B,D,S);return t?Ke(w):w}});return g}const WC={page:n=>[n.pageX,n.pageY],client:n=>[n.clientX,n.clientY],screen:n=>[n.screenX,n.screenY],movement:n=>n instanceof Touch?null:[n.movementX,n.movementY]};function mL(n={}){const{type:t="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=en,target:i=r,eventFilter:c}=n,p=Q(l.x),u=Q(l.y),d=Q(null),y=typeof t=="function"?t:WC[t],f=S=>{const w=y(S);w&&([p.value,u.value]=w,d.value="mouse")},m=S=>{if(S.touches.length>0){const w=y(S.touches[0]);w&&([p.value,u.value]=w,d.value="touch")}},g=()=>{p.value=l.x,u.value=l.y},B=c?S=>c(()=>f(S),{}):S=>f(S),D=c?S=>c(()=>m(S),{}):S=>m(S);return i&&(De(i,"mousemove",B,{passive:!0}),De(i,"dragover",B,{passive:!0}),s&&t!=="movement"&&(De(i,"touchstart",D,{passive:!0}),De(i,"touchmove",D,{passive:!0}),o&&De(i,"touchend",g,{passive:!0}))),{x:p,y:u,sourceType:d}}function VC(n,t={}){const s=ey(n),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:i}=t,c=We({x:0,y:0}),p=(M,W)=>{c.x=M,c.y=W},u=We({x:0,y:0}),d=(M,W)=>{u.x=M,u.y=W},y=R(()=>c.x-u.x),f=R(()=>c.y-u.y),{max:m,abs:g}=Math,B=R(()=>m(g(y.value),g(f.value))>=o),D=Q(!1),S=Q(!1),w=R(()=>B.value?g(y.value)>g(f.value)?y.value>0?"left":"right":f.value>0?"up":"down":"none"),v=M=>{var W,G,K;const re=M.buttons===0,de=M.buttons===1;return(K=(G=(W=t.pointerTypes)==null?void 0:W.includes(M.pointerType))!=null?G:re||de)!=null?K:!0},P=[De(n,"pointerdown",M=>{var W,G;if(!v(M))return;S.value=!0,(G=(W=s.value)==null?void 0:W.style)==null||G.setProperty("touch-action","none");const K=M.target;K==null||K.setPointerCapture(M.pointerId);const{clientX:re,clientY:de}=M;p(re,de),d(re,de),i==null||i(M)}),De(n,"pointermove",M=>{if(!v(M)||!S.value)return;const{clientX:W,clientY:G}=M;d(W,G),!D.value&&B.value&&(D.value=!0),D.value&&(l==null||l(M))}),De(n,"pointerup",M=>{var W,G;v(M)&&(D.value&&(r==null||r(M,w.value)),S.value=!1,D.value=!1,(G=(W=s.value)==null?void 0:W.style)==null||G.setProperty("touch-action","initial"))})],T=()=>P.forEach(M=>M());return{isSwiping:Vn(D),direction:Vn(w),posStart:Vn(c),posEnd:Vn(u),distanceX:y,distanceY:f,stop:T}}let zC=0;function gL(n,t={}){const s=Q(!1),{document:o=ly,immediate:l=!0,manual:r=!1,id:i=`vueuse_styletag_${++zC}`}=t,c=Q(n);let p=()=>{};const u=()=>{if(!o)return;const y=o.getElementById(i)||o.createElement("style");y.isConnected||(y.type="text/css",y.id=i,t.media&&(y.media=t.media),o.head.appendChild(y)),!s.value&&(p=Ae(c,f=>{y.textContent=f},{immediate:!0}),s.value=!0)},d=()=>{!o||!s.value||(p(),o.head.removeChild(o.getElementById(i)),s.value=!1)};return l&&!r&&ny(u),r||ct(d),{id:i,css:c,unload:d,load:u,isLoaded:Vn(s)}}var KC=Object.defineProperty,tp=Object.getOwnPropertySymbols,YC=Object.prototype.hasOwnProperty,JC=Object.prototype.propertyIsEnumerable,sp=(n,t,s)=>t in n?KC(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,ZC=(n,t)=>{for(var s in t||(t={}))YC.call(t,s)&&sp(n,s,t[s]);if(tp)for(var s of tp(t))JC.call(t,s)&&sp(n,s,t[s]);return n};function CL(n={}){const{controls:t=!1,offset:s=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=n,i=Q(va()+s),c=()=>i.value=va()+s,p=r?()=>{c(),r(i.value)}:c,u=l==="requestAnimationFrame"?fC(p,{immediate:o}):Y3(p,l,{immediate:o});return t?ZC({timestamp:i},u):i}function tt(n,t,s,o={}){var l,r,i;const{clone:c=!1,passive:p=!1,eventName:u,deep:d=!1,defaultValue:y,shouldEmit:f}=o,m=Fn(),g=s||(m==null?void 0:m.emit)||((l=m==null?void 0:m.$emit)==null?void 0:l.bind(m))||((i=(r=m==null?void 0:m.proxy)==null?void 0:r.$emit)==null?void 0:i.bind(m==null?void 0:m.proxy));let B=u;t||(t="modelValue"),B=B||`update:${t.toString()}`;const D=v=>c?typeof c=="function"?c(v):CC(v):v,S=()=>T3(n[t])?D(n[t]):y,w=v=>{f?f(v)&&g(B,v):g(B,v)};if(p){const v=S(),P=Q(v);return Ae(()=>n[t],T=>P.value=D(T)),Ae(P,T=>{(T!==n[t]||d)&&w(T)},{deep:d}),P}else return R({get(){return S()},set(v){w(v)}})}function _L({window:n=en}={}){if(!n)return Q(!1);const t=Q(n.document.hasFocus());return De(n,"blur",()=>{t.value=!1}),De(n,"focus",()=>{t.value=!0}),t}function QC(n={}){const{window:t=en,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=n,i=Q(s),c=Q(o),p=()=>{t&&(r?(i.value=t.innerWidth,c.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,c.value=t.document.documentElement.clientHeight))};if(p(),ny(p),De("resize",p,{passive:!0}),l){const u=ls("(orientation: portrait)");Ae(u,()=>p())}return{width:i,height:c}}function XC(){return ry().__VUE_DEVTOOLS_GLOBAL_HOOK__}function ry(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const e_=typeof Proxy=="function",n_="devtools-plugin:setup",t_="plugin:settings:set";let Es,Ba;function s_(){var n;return Es!==void 0||(typeof window<"u"&&window.performance?(Es=!0,Ba=window.performance):typeof global<"u"&&(!((n=global.perf_hooks)===null||n===void 0)&&n.performance)?(Es=!0,Ba=global.perf_hooks.performance):Es=!1),Es}function o_(){return s_()?Ba.now():Date.now()}class l_{constructor(t,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=s;const o={};if(t.settings)for(const i in t.settings){const c=t.settings[i];o[i]=c.defaultValue}const l=`__vue-devtools-plugin-settings__${t.id}`;let r=Object.assign({},o);try{const i=localStorage.getItem(l),c=JSON.parse(i);Object.assign(r,c)}catch{}this.fallbacks={getSettings(){return r},setSettings(i){try{localStorage.setItem(l,JSON.stringify(i))}catch{}r=i},now(){return o_()}},s&&s.on(t_,(i,c)=>{i===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(i,c)=>this.target?this.target.on[c]:(...p)=>{this.onQueue.push({method:c,args:p})}}),this.proxiedTarget=new Proxy({},{get:(i,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...p)=>(this.targetQueue.push({method:c,args:p,resolve:()=>{}}),this.fallbacks[c](...p)):(...p)=>new Promise(u=>{this.targetQueue.push({method:c,args:p,resolve:u})})})}async setRealTarget(t){this.target=t;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function r_(n,t){const s=n,o=ry(),l=XC(),r=e_&&s.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(n_,n,t);else{const i=r?new l_(s,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:t,proxy:i}),i&&t(i.proxiedTarget)}}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ht=typeof window<"u";function a_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Ue=Object.assign;function $r(n,t){const s={};for(const o in t){const l=t[o];s[o]=En(l)?l.map(n):n(l)}return s}const Co=()=>{},En=Array.isArray;function Fe(n){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+n].concat(t))}const i_=/\/$/,c_=n=>n.replace(i_,"");function Mr(n,t,s="/"){let o,l={},r="",i="";const c=t.indexOf("#");let p=t.indexOf("?");return c<p&&c>=0&&(p=-1),p>-1&&(o=t.slice(0,p),r=t.slice(p+1,c>-1?c:t.length),l=n(r)),c>-1&&(o=o||t.slice(0,c),i=t.slice(c,t.length)),o=d_(o??t,s),{fullPath:o+(r&&"?")+r+i,path:o,query:l,hash:i}}function p_(n,t){const s=t.query?n(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function op(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function lp(n,t,s){const o=t.matched.length-1,l=s.matched.length-1;return o>-1&&o===l&&Nt(t.matched[o],s.matched[l])&&ay(t.params,s.params)&&n(t.query)===n(s.query)&&t.hash===s.hash}function Nt(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function ay(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const s in n)if(!u_(n[s],t[s]))return!1;return!0}function u_(n,t){return En(n)?rp(n,t):En(t)?rp(t,n):n===t}function rp(n,t){return En(t)?n.length===t.length&&n.every((s,o)=>s===t[o]):n.length===1&&n[0]===t}function d_(n,t){if(n.startsWith("/"))return n;if(!t.startsWith("/"))return Fe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${n}" from "${t}". It should look like "/${t}".`),n;if(!n)return t;const s=t.split("/"),o=n.split("/"),l=o[o.length-1];(l===".."||l===".")&&o.push("");let r=s.length-1,i,c;for(i=0;i<o.length;i++)if(c=o[i],c!==".")if(c==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+o.slice(i-(i===o.length?1:0)).join("/")}var $o;(function(n){n.pop="pop",n.push="push"})($o||($o={}));var _o;(function(n){n.back="back",n.forward="forward",n.unknown=""})(_o||(_o={}));function y_(n){if(!n)if(ht){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),c_(n)}const f_=/^[^#]+#/;function h_(n,t){return n.replace(f_,"#")+t}function m_(n,t){const s=document.documentElement.getBoundingClientRect(),o=n.getBoundingClientRect();return{behavior:t.behavior,left:o.left-s.left-(t.left||0),top:o.top-s.top-(t.top||0)}}const fr=()=>({left:window.pageXOffset,top:window.pageYOffset});function g_(n){let t;if("el"in n){const s=n.el,o=typeof s=="string"&&s.startsWith("#");if(typeof n.el=="string"&&(!o||!document.getElementById(n.el.slice(1))))try{const r=document.querySelector(n.el);if(o&&r){Fe(`The selector "${n.el}" should be passed as "el: document.querySelector('${n.el}')" because it starts with "#".`);return}}catch{Fe(`The selector "${n.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!l){Fe(`Couldn't find element using selector "${n.el}" returned by scrollBehavior.`);return}t=m_(l,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ap(n,t){return(history.state?history.state.position-t:-1)+n}const ba=new Map;function C_(n,t){ba.set(n,t)}function __(n){const t=ba.get(n);return ba.delete(n),t}let A_=()=>location.protocol+"//"+location.host;function iy(n,t){const{pathname:s,search:o,hash:l}=t,r=n.indexOf("#");if(r>-1){let c=l.includes(n.slice(r))?n.slice(r).length:1,p=l.slice(c);return p[0]!=="/"&&(p="/"+p),op(p,"")}return op(s,n)+o+l}function v_(n,t,s,o){let l=[],r=[],i=null;const c=({state:f})=>{const m=iy(n,location),g=s.value,B=t.value;let D=0;if(f){if(s.value=m,t.value=f,i&&i===g){i=null;return}D=B?f.position-B.position:0}else o(m);l.forEach(S=>{S(s.value,g,{delta:D,type:$o.pop,direction:D?D>0?_o.forward:_o.back:_o.unknown})})};function p(){i=s.value}function u(f){l.push(f);const m=()=>{const g=l.indexOf(f);g>-1&&l.splice(g,1)};return r.push(m),m}function d(){const{history:f}=window;f.state&&f.replaceState(Ue({},f.state,{scroll:fr()}),"")}function y(){for(const f of r)f();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:p,listen:u,destroy:y}}function ip(n,t,s,o=!1,l=!1){return{back:n,current:t,forward:s,replaced:o,position:window.history.length,scroll:l?fr():null}}function B_(n){const{history:t,location:s}=window,o={value:iy(n,s)},l={value:t.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(p,u,d){const y=n.indexOf("#"),f=y>-1?(s.host&&document.querySelector("base")?n:n.slice(y))+p:A_()+n+p;try{t[d?"replaceState":"pushState"](u,"",f),l.value=u}catch(m){Fe("Error with push/replace State",m),s[d?"replace":"assign"](f)}}function i(p,u){const d=Ue({},t.state,ip(l.value.back,p,l.value.forward,!0),u,{position:l.value.position});r(p,d,!0),o.value=p}function c(p,u){const d=Ue({},l.value,t.state,{forward:p,scroll:fr()});t.state||Fe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const y=Ue({},ip(o.value,p,null),{position:d.position+1},u);r(p,y,!1),o.value=p}return{location:o,state:l,push:c,replace:i}}function b_(n){n=y_(n);const t=B_(n),s=v_(n,t.state,t.location,t.replace);function o(r,i=!0){i||s.pauseListeners(),history.go(r)}const l=Ue({location:"",base:n,go:o,createHref:h_.bind(null,n)},t,s);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}function D_(n){return typeof n=="string"||n&&typeof n=="object"}function cy(n){return typeof n=="string"||typeof n=="symbol"}const St={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},py=Symbol("navigation failure");var cp;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(cp||(cp={}));const S_={1({location:n,currentLocation:t}){return`No match for
 ${JSON.stringify(n)}${t?`
while being at
`+JSON.stringify(t):""}`},2({from:n,to:t}){return`Redirected from "${n.fullPath}" to "${k_(t)}" via a navigation guard.`},4({from:n,to:t}){return`Navigation aborted from "${n.fullPath}" to "${t.fullPath}" via a navigation guard.`},8({from:n,to:t}){return`Navigation cancelled from "${n.fullPath}" to "${t.fullPath}" with a new navigation.`},16({from:n,to:t}){return`Avoided redundant navigation to current location: "${n.fullPath}".`}};function js(n,t){return Ue(new Error(S_[n](t)),{type:n,[py]:!0},t)}function pt(n,t){return n instanceof Error&&py in n&&(t==null||!!(n.type&t))}const w_=["params","query","hash"];function k_(n){if(typeof n=="string")return n;if("path"in n)return n.path;const t={};for(const s of w_)s in n&&(t[s]=n[s]);return JSON.stringify(t,null,2)}const pp="[^/]+?",x_={sensitive:!1,strict:!1,start:!0,end:!0},E_=/[.+*?^${}()[\]/\\]/g;function F_(n,t){const s=Ue({},x_,t),o=[];let l=s.start?"^":"";const r=[];for(const u of n){const d=u.length?[]:[90];s.strict&&!u.length&&(l+="/");for(let y=0;y<u.length;y++){const f=u[y];let m=40+(s.sensitive?.25:0);if(f.type===0)y||(l+="/"),l+=f.value.replace(E_,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:B,optional:D,regexp:S}=f;r.push({name:g,repeatable:B,optional:D});const w=S||pp;if(w!==pp){m+=10;try{new RegExp(`(${w})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+P.message)}}let v=B?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;y||(v=D&&u.length<2?`(?:/${v})`:"/"+v),D&&(v+="?"),l+=v,m+=20,D&&(m+=-8),B&&(m+=-20),w===".*"&&(m+=-50)}d.push(m)}o.push(d)}if(s.strict&&s.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}s.strict||(l+="/?"),s.end?l+="$":s.strict&&(l+="(?:/|$)");const i=new RegExp(l,s.sensitive?"":"i");function c(u){const d=u.match(i),y={};if(!d)return null;for(let f=1;f<d.length;f++){const m=d[f]||"",g=r[f-1];y[g.name]=m&&g.repeatable?m.split("/"):m}return y}function p(u){let d="",y=!1;for(const f of n){(!y||!d.endsWith("/"))&&(d+="/"),y=!1;for(const m of f)if(m.type===0)d+=m.value;else if(m.type===1){const{value:g,repeatable:B,optional:D}=m,S=g in u?u[g]:"";if(En(S)&&!B)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=En(S)?S.join("/"):S;if(!w)if(D)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):y=!0);else throw new Error(`Missing required param "${g}"`);d+=w}}return d||"/"}return{re:i,score:o,keys:r,parse:c,stringify:p}}function P_(n,t){let s=0;for(;s<n.length&&s<t.length;){const o=t[s]-n[s];if(o)return o;s++}return n.length<t.length?n.length===1&&n[0]===40+40?-1:1:n.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function T_(n,t){let s=0;const o=n.score,l=t.score;for(;s<o.length&&s<l.length;){const r=P_(o[s],l[s]);if(r)return r;s++}if(Math.abs(l.length-o.length)===1){if(up(o))return 1;if(up(l))return-1}return l.length-o.length}function up(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const $_={type:0,value:""},M_=/[a-zA-Z0-9_]/;function U_(n){if(!n)return[[]];if(n==="/")return[[$_]];if(!n.startsWith("/"))throw new Error(`Route paths should start with a "/": "${n}" should be "/${n}".`);function t(m){throw new Error(`ERR (${s})/"${u}": ${m}`)}let s=0,o=s;const l=[];let r;function i(){r&&l.push(r),r=[]}let c=0,p,u="",d="";function y(){u&&(s===0?r.push({type:0,value:u}):s===1||s===2||s===3?(r.length>1&&(p==="*"||p==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=p}for(;c<n.length;){if(p=n[c++],p==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:p==="/"?(u&&y(),i()):p===":"?(y(),s=1):f();break;case 4:f(),s=o;break;case 1:p==="("?s=2:M_.test(p)?f():(y(),s=0,p!=="*"&&p!=="?"&&p!=="+"&&c--);break;case 2:p===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+p:s=3:d+=p;break;case 3:y(),s=0,p!=="*"&&p!=="?"&&p!=="+"&&c--,d="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${u}"`),y(),i(),l}function I_(n,t,s){const o=F_(U_(n.path),s);{const r=new Set;for(const i of o.keys)r.has(i.name)&&Fe(`Found duplicated params with name "${i.name}" for path "${n.path}". Only the last one will be available on "$route.params".`),r.add(i.name)}const l=Ue(o,{record:n,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function O_(n,t){const s=[],o=new Map;t=fp({strict:!1,end:!0,sensitive:!1},t);function l(d){return o.get(d)}function r(d,y,f){const m=!f,g=L_(d);q_(g,y),g.aliasOf=f&&f.record;const B=fp(t,d),D=[g];if("alias"in d){const v=typeof d.alias=="string"?[d.alias]:d.alias;for(const P of v)D.push(Ue({},g,{components:f?f.record.components:g.components,path:P,aliasOf:f?f.record:g}))}let S,w;for(const v of D){const{path:P}=v;if(y&&P[0]!=="/"){const T=y.record.path,M=T[T.length-1]==="/"?"":"/";v.path=y.record.path+(P&&M+P)}if(v.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(S=I_(v,y,B),y&&P[0]==="/"&&N_(S,y),f?(f.alias.push(S),j_(f,S)):(w=w||S,w!==S&&w.alias.push(S),m&&d.name&&!yp(S)&&i(d.name)),g.children){const T=g.children;for(let M=0;M<T.length;M++)r(T[M],S,f&&f.children[M])}f=f||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&p(S)}return w?()=>{i(w)}:Co}function i(d){if(cy(d)){const y=o.get(d);y&&(o.delete(d),s.splice(s.indexOf(y),1),y.children.forEach(i),y.alias.forEach(i))}else{const y=s.indexOf(d);y>-1&&(s.splice(y,1),d.record.name&&o.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function c(){return s}function p(d){let y=0;for(;y<s.length&&T_(d,s[y])>=0&&(d.record.path!==s[y].record.path||!uy(d,s[y]));)y++;s.splice(y,0,d),d.record.name&&!yp(d)&&o.set(d.record.name,d)}function u(d,y){let f,m={},g,B;if("name"in d&&d.name){if(f=o.get(d.name),!f)throw js(1,{location:d});{const w=Object.keys(d.params||{}).filter(v=>!f.keys.find(P=>P.name===v));w.length&&Fe(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}B=f.record.name,m=Ue(dp(y.params,f.keys.filter(w=>!w.optional).map(w=>w.name)),d.params&&dp(d.params,f.keys.map(w=>w.name))),g=f.stringify(m)}else if("path"in d)g=d.path,g.startsWith("/")||Fe(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),f=s.find(w=>w.re.test(g)),f&&(m=f.parse(g),B=f.record.name);else{if(f=y.name?o.get(y.name):s.find(w=>w.re.test(y.path)),!f)throw js(1,{location:d,currentLocation:y});B=f.record.name,m=Ue({},y.params,d.params),g=f.stringify(m)}const D=[];let S=f;for(;S;)D.unshift(S.record),S=S.parent;return{name:B,path:g,params:m,matched:D,meta:G_(D)}}return n.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:i,getRoutes:c,getRecordMatcher:l}}function dp(n,t){const s={};for(const o of t)o in n&&(s[o]=n[o]);return s}function L_(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:R_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function R_(n){const t={},s=n.props||!1;if("component"in n)t.default=s;else for(const o in n.components)t[o]=typeof s=="object"?s[o]:s;return t}function yp(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function G_(n){return n.reduce((t,s)=>Ue(t,s.meta),{})}function fp(n,t){const s={};for(const o in n)s[o]=o in t?t[o]:n[o];return s}function Da(n,t){return n.name===t.name&&n.optional===t.optional&&n.repeatable===t.repeatable}function j_(n,t){for(const s of n.keys)if(!s.optional&&!t.keys.find(Da.bind(null,s)))return Fe(`Alias "${t.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${s.name}"`);for(const s of t.keys)if(!s.optional&&!n.keys.find(Da.bind(null,s)))return Fe(`Alias "${t.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${s.name}"`)}function q_(n,t){t&&t.record.name&&!n.name&&!n.path&&Fe(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function N_(n,t){for(const s of t.keys)if(!n.keys.find(Da.bind(null,s)))return Fe(`Absolute path "${n.record.path}" must have the exact same param named "${s.name}" as its parent "${t.record.path}".`)}function uy(n,t){return t.children.some(s=>s===n||uy(n,s))}const dy=/#/g,H_=/&/g,W_=/\//g,V_=/=/g,z_=/\?/g,yy=/\+/g,K_=/%5B/g,Y_=/%5D/g,fy=/%5E/g,J_=/%60/g,hy=/%7B/g,Z_=/%7C/g,my=/%7D/g,Q_=/%20/g;function wi(n){return encodeURI(""+n).replace(Z_,"|").replace(K_,"[").replace(Y_,"]")}function X_(n){return wi(n).replace(hy,"{").replace(my,"}").replace(fy,"^")}function Sa(n){return wi(n).replace(yy,"%2B").replace(Q_,"+").replace(dy,"%23").replace(H_,"%26").replace(J_,"`").replace(hy,"{").replace(my,"}").replace(fy,"^")}function e5(n){return Sa(n).replace(V_,"%3D")}function n5(n){return wi(n).replace(dy,"%23").replace(z_,"%3F")}function t5(n){return n==null?"":n5(n).replace(W_,"%2F")}function Mo(n){try{return decodeURIComponent(""+n)}catch{Fe(`Error decoding "${n}". Using original value`)}return""+n}function s5(n){const t={};if(n===""||n==="?")return t;const o=(n[0]==="?"?n.slice(1):n).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(yy," "),i=r.indexOf("="),c=Mo(i<0?r:r.slice(0,i)),p=i<0?null:Mo(r.slice(i+1));if(c in t){let u=t[c];En(u)||(u=t[c]=[u]),u.push(p)}else t[c]=p}return t}function hp(n){let t="";for(let s in n){const o=n[s];if(s=e5(s),o==null){o!==void 0&&(t+=(t.length?"&":"")+s);continue}(En(o)?o.map(r=>r&&Sa(r)):[o&&Sa(o)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+s,r!=null&&(t+="="+r))})}return t}function o5(n){const t={};for(const s in n){const o=n[s];o!==void 0&&(t[s]=En(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return t}const l5=Symbol("router view location matched"),mp=Symbol("router view depth"),ki=Symbol("router"),gy=Symbol("route location"),wa=Symbol("router view location");function eo(){let n=[];function t(o){return n.push(o),()=>{const l=n.indexOf(o);l>-1&&n.splice(l,1)}}function s(){n=[]}return{add:t,list:()=>n.slice(),reset:s}}function Et(n,t,s,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((i,c)=>{const p=y=>{y===!1?c(js(4,{from:s,to:t})):y instanceof Error?c(y):D_(y)?c(js(2,{from:t,to:y})):(r&&o.enterCallbacks[l]===r&&typeof y=="function"&&r.push(y),i())},u=n.call(o&&o.instances[l],t,s,r5(p,t,s));let d=Promise.resolve(u);if(n.length<3&&(d=d.then(p)),n.length>2){const y=`The "next" callback was never called inside of ${n.name?'"'+n.name+'"':""}:
${n.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)d=d.then(f=>p._called?f:(Fe(y),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!p._called){Fe(y),c(new Error("Invalid navigation guard"));return}}d.catch(y=>c(y))})}function r5(n,t,s){let o=0;return function(){o++===1&&Fe(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),n._called=!0,o===1&&n.apply(null,arguments)}}function Ur(n,t,s,o){const l=[];for(const r of n){!r.components&&!r.children.length&&Fe(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const i in r.components){let c=r.components[i];{if(!c||typeof c!="object"&&typeof c!="function")throw Fe(`Component "${i}" in record with path "${r.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){Fe(`Component "${i}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const p=c;c=()=>p}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,Fe(`Component "${i}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!r.instances[i]))if(a5(c)){const u=(c.__vccOpts||c)[t];u&&l.push(Et(u,s,o,r,i))}else{let p=c();"catch"in p||(Fe(`Component "${i}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),p=Promise.resolve(p)),l.push(()=>p.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${r.path}"`));const d=a_(u)?u.default:u;r.components[i]=d;const f=(d.__vccOpts||d)[t];return f&&Et(f,s,o,r,i)()}))}}}return l}function a5(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function gp(n){const t=k(ki),s=k(gy),o=R(()=>t.resolve(L(n.to))),l=R(()=>{const{matched:p}=o.value,{length:u}=p,d=p[u-1],y=s.matched;if(!d||!y.length)return-1;const f=y.findIndex(Nt.bind(null,d));if(f>-1)return f;const m=Cp(p[u-2]);return u>1&&Cp(d)===m&&y[y.length-1].path!==m?y.findIndex(Nt.bind(null,p[u-2])):f}),r=R(()=>l.value>-1&&u5(s.params,o.value.params)),i=R(()=>l.value>-1&&l.value===s.matched.length-1&&ay(s.params,o.value.params));function c(p={}){return p5(p)?t[L(n.replace)?"replace":"push"](L(n.to)).catch(Co):Promise.resolve()}if(ht){const p=Fn();if(p){const u={route:o.value,isActive:r.value,isExactActive:i.value};p.__vrl_devtools=p.__vrl_devtools||[],p.__vrl_devtools.push(u),bs(()=>{u.route=o.value,u.isActive=r.value,u.isExactActive=i.value},{flush:"post"})}}return{route:o,href:R(()=>o.value.href),isActive:r,isExactActive:i,navigate:c}}const i5=Ee({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gp,setup(n,{slots:t}){const s=We(gp(n)),{options:o}=k(ki),l=R(()=>({[_p(n.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[_p(n.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&t.default(s);return n.custom?r:kn("a",{"aria-current":s.isExactActive?n.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:l.value},r)}}}),c5=i5;function p5(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function u5(n,t){for(const s in t){const o=t[s],l=n[s];if(typeof o=="string"){if(o!==l)return!1}else if(!En(l)||l.length!==o.length||o.some((r,i)=>r!==l[i]))return!1}return!0}function Cp(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const _p=(n,t,s)=>n??t??s,d5=Ee({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:s}){f5();const o=k(wa),l=R(()=>n.route||o.value),r=k(mp,0),i=R(()=>{let u=L(r);const{matched:d}=l.value;let y;for(;(y=d[u])&&!y.components;)u++;return u}),c=R(()=>l.value.matched[i.value]);Sn(mp,R(()=>i.value+1)),Sn(l5,c),Sn(wa,l);const p=Q();return Ae(()=>[p.value,c.value,n.name],([u,d,y],[f,m,g])=>{d&&(d.instances[y]=u,m&&m!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!Nt(d,m)||!f)&&(d.enterCallbacks[y]||[]).forEach(B=>B(u))},{flush:"post"}),()=>{const u=l.value,d=n.name,y=c.value,f=y&&y.components[d];if(!f)return Ap(s.default,{Component:f,route:u});const m=y.props[d],g=m?m===!0?u.params:typeof m=="function"?m(u):m:null,D=kn(f,Ue({},g,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(y.instances[d]=null)},ref:p}));if(ht&&D.ref){const S={depth:i.value,name:y.name,path:y.path,meta:y.meta};(En(D.ref)?D.ref.map(v=>v.i):[D.ref.i]).forEach(v=>{v.__vrv_devtools=S})}return Ap(s.default,{Component:D,route:u})||D}}});function Ap(n,t){if(!n)return null;const s=n(t);return s.length===1?s[0]:s}const y5=d5;function f5(){const n=Fn(),t=n.parent&&n.parent.type.name,s=n.parent&&n.parent.subTree&&n.parent.subTree.type;if(t&&(t==="KeepAlive"||t.includes("Transition"))&&typeof s=="object"&&s.name==="RouterView"){const o=t==="KeepAlive"?"keep-alive":"transition";Fe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function no(n,t){const s=Ue({},n,{matched:n.matched.map(o=>b5(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:n.fullPath,tooltip:t,value:s}}}function ul(n){return{_custom:{display:n}}}let h5=0;function m5(n,t,s){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=h5++;r_({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:n},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((d,y)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:no(t.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:d,componentInstance:y})=>{if(y.__vrv_devtools){const f=y.__vrv_devtools;d.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Cy})}En(y.__vrl_devtools)&&(y.__devtoolsApi=l,y.__vrl_devtools.forEach(f=>{let m=vy,g="";f.isExactActive?(m=Ay,g="This is exactly active"):f.isActive&&(m=_y,g="This link is active"),d.tags.push({label:f.route.path,textColor:0,tooltip:g,backgroundColor:m})}))}),Ae(t.currentRoute,()=>{p(),l.notifyComponentUpdate(),l.sendInspectorTree(c),l.sendInspectorState(c)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((d,y)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:y.fullPath,logType:"error",time:l.now(),data:{error:d},groupId:y.meta.__navigationId}})});let i=0;t.beforeEach((d,y)=>{const f={guard:ul("beforeEach"),from:no(y,"Current Location during this navigation"),to:no(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:i++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:d.fullPath,data:f,groupId:d.meta.__navigationId}})}),t.afterEach((d,y,f)=>{const m={guard:ul("afterEach")};f?(m.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},m.status=ul("❌")):m.status=ul("✅"),m.from=no(y,"Current Location during this navigation"),m.to=no(d,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:l.now(),data:m,logType:f?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+o;l.addInspector({id:c,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function p(){if(!u)return;const d=u;let y=s.getRoutes().filter(f=>!f.parent);y.forEach(Dy),d.filter&&(y=y.filter(f=>ka(f,d.filter.toLowerCase()))),y.forEach(f=>by(f,t.currentRoute.value)),d.rootNodes=y.map(By)}let u;l.on.getInspectorTree(d=>{u=d,d.app===n&&d.inspectorId===c&&p()}),l.on.getInspectorState(d=>{if(d.app===n&&d.inspectorId===c){const f=s.getRoutes().find(m=>m.record.__vd_id===d.nodeId);f&&(d.state={options:C5(f)})}}),l.sendInspectorTree(c),l.sendInspectorState(c)})}function g5(n){return n.optional?n.repeatable?"*":"?":n.repeatable?"+":""}function C5(n){const{record:t}=n,s=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&s.push({editable:!1,key:"name",value:t.name}),s.push({editable:!1,key:"regexp",value:n.re}),n.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:n.keys.map(o=>`${o.name}${g5(o)}`).join(" "),tooltip:"Param keys",value:n.keys}}}),t.redirect!=null&&s.push({editable:!1,key:"redirect",value:t.redirect}),n.alias.length&&s.push({editable:!1,key:"aliases",value:n.alias.map(o=>o.record.path)}),Object.keys(n.record.meta).length&&s.push({editable:!1,key:"meta",value:n.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:n.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:n.score}}}),s}const Cy=15485081,_y=2450411,Ay=8702998,_5=2282478,vy=16486972,A5=6710886;function By(n){const t=[],{record:s}=n;s.name!=null&&t.push({label:String(s.name),textColor:0,backgroundColor:_5}),s.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:vy}),n.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:Cy}),n.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Ay}),n.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:_y}),s.redirect&&t.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:A5});let o=s.__vd_id;return o==null&&(o=String(v5++),s.__vd_id=o),{id:o,label:s.path,tags:t,children:n.children.map(By)}}let v5=0;const B5=/^\/(.*)\/([a-z]*)$/;function by(n,t){const s=t.matched.length&&Nt(t.matched[t.matched.length-1],n.record);n.__vd_exactActive=n.__vd_active=s,s||(n.__vd_active=t.matched.some(o=>Nt(o,n.record))),n.children.forEach(o=>by(o,t))}function Dy(n){n.__vd_match=!1,n.children.forEach(Dy)}function ka(n,t){const s=String(n.re).match(B5);if(n.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(t))return n.children.forEach(i=>ka(i,t)),n.record.path!=="/"||t==="/"?(n.__vd_match=n.re.test(t),!0):!1;const l=n.record.path.toLowerCase(),r=Mo(l);return!t.startsWith("/")&&(r.includes(t)||l.includes(t))||r.startsWith(t)||l.startsWith(t)||n.record.name&&String(n.record.name).includes(t)?!0:n.children.some(i=>ka(i,t))}function b5(n,t){const s={};for(const o in n)t.includes(o)||(s[o]=n[o]);return s}function D5(n){const t=O_(n.routes,n),s=n.parseQuery||s5,o=n.stringifyQuery||hp,l=n.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=eo(),i=eo(),c=eo(),p=at(St);let u=St;ht&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=$r.bind(null,j=>""+j),y=$r.bind(null,t5),f=$r.bind(null,Mo);function m(j,ne){let te,le;return cy(j)?(te=t.getRecordMatcher(j),le=ne):le=j,t.addRoute(le,te)}function g(j){const ne=t.getRecordMatcher(j);ne?t.removeRoute(ne):Fe(`Cannot remove non-existent route "${String(j)}"`)}function B(){return t.getRoutes().map(j=>j.record)}function D(j){return!!t.getRecordMatcher(j)}function S(j,ne){if(ne=Ue({},ne||p.value),typeof j=="string"){const A=Mr(s,j,ne.path),$=t.resolve({path:A.path},ne),N=l.createHref(A.fullPath);return N.startsWith("//")?Fe(`Location "${j}" resolved to "${N}". A resolved location cannot start with multiple slashes.`):$.matched.length||Fe(`No match found for location with path "${j}"`),Ue(A,$,{params:f($.params),hash:Mo(A.hash),redirectedFrom:void 0,href:N})}let te;if("path"in j)"params"in j&&!("name"in j)&&Object.keys(j.params).length&&Fe(`Path "${j.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),te=Ue({},j,{path:Mr(s,j.path,ne.path).path});else{const A=Ue({},j.params);for(const $ in A)A[$]==null&&delete A[$];te=Ue({},j,{params:y(A)}),ne.params=y(ne.params)}const le=t.resolve(te,ne),Se=j.hash||"";Se&&!Se.startsWith("#")&&Fe(`A \`hash\` should always start with the character "#". Replace "${Se}" with "#${Se}".`),le.params=d(f(le.params));const Oe=p_(o,Ue({},j,{hash:X_(Se),path:le.path})),C=l.createHref(Oe);return C.startsWith("//")?Fe(`Location "${j}" resolved to "${C}". A resolved location cannot start with multiple slashes.`):le.matched.length||Fe(`No match found for location with path "${"path"in j?j.path:j}"`),Ue({fullPath:Oe,hash:Se,query:o===hp?o5(j.query):j.query||{}},le,{redirectedFrom:void 0,href:C})}function w(j){return typeof j=="string"?Mr(s,j,p.value.path):Ue({},j)}function v(j,ne){if(u!==j)return js(8,{from:ne,to:j})}function P(j){return W(j)}function T(j){return P(Ue(w(j),{replace:!0}))}function M(j){const ne=j.matched[j.matched.length-1];if(ne&&ne.redirect){const{redirect:te}=ne;let le=typeof te=="function"?te(j):te;if(typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=w(le):{path:le},le.params={}),!("path"in le)&&!("name"in le))throw Fe(`Invalid redirect found:
${JSON.stringify(le,null,2)}
 when navigating to "${j.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ue({query:j.query,hash:j.hash,params:"path"in le?{}:j.params},le)}}function W(j,ne){const te=u=S(j),le=p.value,Se=j.state,Oe=j.force,C=j.replace===!0,A=M(te);if(A)return W(Ue(w(A),{state:typeof A=="object"?Ue({},Se,A.state):Se,force:Oe,replace:C}),ne||te);const $=te;$.redirectedFrom=ne;let N;return!Oe&&lp(o,le,te)&&(N=js(16,{to:$,from:le}),Pn(le,le,!0,!1)),(N?Promise.resolve(N):re($,le)).catch(q=>pt(q)?pt(q,2)?q:Ie(q):pe(q,$,le)).then(q=>{if(q){if(pt(q,2))return lp(o,S(q.to),$)&&ne&&(ne._count=ne._count?ne._count+1:1)>30?(Fe(`Detected a possibly infinite redirection in a navigation guard when going from "${le.fullPath}" to "${$.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):W(Ue({replace:C},w(q.to),{state:typeof q.to=="object"?Ue({},Se,q.to.state):Se,force:Oe}),ne||$)}else q=X($,le,!0,C,Se);return de($,le,q),q})}function G(j,ne){const te=v(j,ne);return te?Promise.reject(te):Promise.resolve()}function K(j){const ne=Zn.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(j):j()}function re(j,ne){let te;const[le,Se,Oe]=S5(j,ne);te=Ur(le.reverse(),"beforeRouteLeave",j,ne);for(const A of le)A.leaveGuards.forEach($=>{te.push(Et($,j,ne))});const C=G.bind(null,j,ne);return te.push(C),Tn(te).then(()=>{te=[];for(const A of r.list())te.push(Et(A,j,ne));return te.push(C),Tn(te)}).then(()=>{te=Ur(Se,"beforeRouteUpdate",j,ne);for(const A of Se)A.updateGuards.forEach($=>{te.push(Et($,j,ne))});return te.push(C),Tn(te)}).then(()=>{te=[];for(const A of Oe)if(A.beforeEnter)if(En(A.beforeEnter))for(const $ of A.beforeEnter)te.push(Et($,j,ne));else te.push(Et(A.beforeEnter,j,ne));return te.push(C),Tn(te)}).then(()=>(j.matched.forEach(A=>A.enterCallbacks={}),te=Ur(Oe,"beforeRouteEnter",j,ne),te.push(C),Tn(te))).then(()=>{te=[];for(const A of i.list())te.push(Et(A,j,ne));return te.push(C),Tn(te)}).catch(A=>pt(A,8)?A:Promise.reject(A))}function de(j,ne,te){c.list().forEach(le=>K(()=>le(j,ne,te)))}function X(j,ne,te,le,Se){const Oe=v(j,ne);if(Oe)return Oe;const C=ne===St,A=ht?history.state:{};te&&(le||C?l.replace(j.fullPath,Ue({scroll:C&&A&&A.scroll},Se)):l.push(j.fullPath,Se)),p.value=j,Pn(j,ne,te,C),Ie()}let Ce;function ve(){Ce||(Ce=l.listen((j,ne,te)=>{if(!zt.listening)return;const le=S(j),Se=M(le);if(Se){W(Ue(Se,{replace:!0}),le).catch(Co);return}u=le;const Oe=p.value;ht&&C_(ap(Oe.fullPath,te.delta),fr()),re(le,Oe).catch(C=>pt(C,12)?C:pt(C,2)?(W(C.to,le).then(A=>{pt(A,20)&&!te.delta&&te.type===$o.pop&&l.go(-1,!1)}).catch(Co),Promise.reject()):(te.delta&&l.go(-te.delta,!1),pe(C,le,Oe))).then(C=>{C=C||X(le,Oe,!1),C&&(te.delta&&!pt(C,8)?l.go(-te.delta,!1):te.type===$o.pop&&pt(C,20)&&l.go(-1,!1)),de(le,Oe,C)}).catch(Co)}))}let be=eo(),Re=eo(),oe;function pe(j,ne,te){Ie(j);const le=Re.list();return le.length?le.forEach(Se=>Se(j,ne,te)):(Fe("uncaught error during route navigation:"),console.error(j)),Promise.reject(j)}function we(){return oe&&p.value!==St?Promise.resolve():new Promise((j,ne)=>{be.add([j,ne])})}function Ie(j){return oe||(oe=!j,ve(),be.list().forEach(([ne,te])=>j?te(j):ne()),be.reset()),j}function Pn(j,ne,te,le){const{scrollBehavior:Se}=n;if(!ht||!Se)return Promise.resolve();const Oe=!te&&__(ap(j.fullPath,0))||(le||!te)&&history.state&&history.state.scroll||null;return on().then(()=>Se(j,ne,Oe)).then(C=>C&&g_(C)).catch(C=>pe(C,j,ne))}const tn=j=>l.go(j);let gn;const Zn=new Set,zt={currentRoute:p,listening:!0,addRoute:m,removeRoute:g,hasRoute:D,getRoutes:B,resolve:S,options:n,push:P,replace:T,go:tn,back:()=>tn(-1),forward:()=>tn(1),beforeEach:r.add,beforeResolve:i.add,afterEach:c.add,onError:Re.add,isReady:we,install(j){const ne=this;j.component("RouterLink",c5),j.component("RouterView",y5),j.config.globalProperties.$router=ne,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>L(p)}),ht&&!gn&&p.value===St&&(gn=!0,P(l.location).catch(Se=>{Fe("Unexpected error when starting the router:",Se)}));const te={};for(const Se in St)Object.defineProperty(te,Se,{get:()=>p.value[Se],enumerable:!0});j.provide(ki,ne),j.provide(gy,Nu(te)),j.provide(wa,p);const le=j.unmount;Zn.add(j),j.unmount=function(){Zn.delete(j),Zn.size<1&&(u=St,Ce&&Ce(),Ce=null,p.value=St,gn=!1,oe=!1),le()},ht&&m5(j,ne,t)}};function Tn(j){return j.reduce((ne,te)=>ne.then(()=>K(te)),Promise.resolve())}return zt}function S5(n,t){const s=[],o=[],l=[],r=Math.max(t.matched.length,n.matched.length);for(let i=0;i<r;i++){const c=t.matched[i];c&&(n.matched.find(u=>Nt(u,c))?o.push(c):s.push(c));const p=n.matched[i];p&&(t.matched.find(u=>Nt(u,p))||l.push(p))}return[s,o,l]}const Ir=Q(!1),Ao=Q(!1),$s=Q(!1),w5=Q(!0),xa=mC({xs:460,...hC}),Cs=QC(),Sy=HC(),k5=R(()=>Cs.height.value-Cs.width.value/Mt>180),wy=qC(Kn?document.body:null),Ot=dC(),x5=R(()=>{var n,t;return["INPUT","TEXTAREA"].includes(((n=Ot.value)==null?void 0:n.tagName)||"")||((t=Ot.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),E5=R(()=>{var n;return["BUTTON","A"].includes(((n=Ot.value)==null?void 0:n.tagName)||"")});Yn("slidev-camera","default");Yn("slidev-mic","default");const vl=Yn("slidev-scale",0),un=Yn("slidev-show-overview",!1),Or=Yn("slidev-presenter-cursor",!0),vp=Yn("slidev-show-editor",!1);Yn("slidev-editor-width",Kn?window.innerWidth*.4:100);const ky=ty(un);var F5=Object.defineProperty,Bp=Object.getOwnPropertySymbols,P5=Object.prototype.hasOwnProperty,T5=Object.prototype.propertyIsEnumerable,bp=(n,t,s)=>t in n?F5(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Ea=(n,t)=>{for(var s in t||(t={}))P5.call(t,s)&&bp(n,s,t[s]);if(Bp)for(var s of Bp(t))T5.call(t,s)&&bp(n,s,t[s]);return n},$5=()=>({emit(n,...t){let s=this.events[n]||[];for(let o=0,l=s.length;o<l;o++)s[o](...t)},events:{},on(n,t){var s;return(s=this.events[n])!=null&&s.push(t)||(this.events[n]=[t]),()=>{var o;this.events[n]=(o=this.events[n])==null?void 0:o.filter(l=>t!==l)}}});function Dp(n,t,s,o=l=>l){return n*o(.5-t*(.5-s))}function M5(n){return[-n[0],-n[1]]}function Hn(n,t){return[n[0]+t[0],n[1]+t[1]]}function Un(n,t){return[n[0]-t[0],n[1]-t[1]]}function Nn(n,t){return[n[0]*t,n[1]*t]}function U5(n,t){return[n[0]/t,n[1]/t]}function to(n){return[n[1],-n[0]]}function Sp(n,t){return n[0]*t[0]+n[1]*t[1]}function I5(n,t){return n[0]===t[0]&&n[1]===t[1]}function O5(n){return Math.hypot(n[0],n[1])}function L5(n){return n[0]*n[0]+n[1]*n[1]}function wp(n,t){return L5(Un(n,t))}function xy(n){return U5(n,O5(n))}function R5(n,t){return Math.hypot(n[1]-t[1],n[0]-t[0])}function so(n,t,s){let o=Math.sin(s),l=Math.cos(s),r=n[0]-t[0],i=n[1]-t[1],c=r*l-i*o,p=r*o+i*l;return[c+t[0],p+t[1]]}function Fa(n,t,s){return Hn(n,Nn(Un(t,n),s))}function kp(n,t,s){return Hn(n,Nn(t,s))}var{min:Fs,PI:G5}=Math,xp=.275,oo=G5+1e-4;function j5(n,t={}){let{size:s=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:i=oe=>oe,start:c={},end:p={},last:u=!1}=t,{cap:d=!0,easing:y=oe=>oe*(2-oe)}=c,{cap:f=!0,easing:m=oe=>--oe*oe*oe+1}=p;if(n.length===0||s<=0)return[];let g=n[n.length-1].runningLength,B=c.taper===!1?0:c.taper===!0?Math.max(s,g):c.taper,D=p.taper===!1?0:p.taper===!0?Math.max(s,g):p.taper,S=Math.pow(s*o,2),w=[],v=[],P=n.slice(0,10).reduce((oe,pe)=>{let we=pe.pressure;if(r){let Ie=Fs(1,pe.distance/s),Pn=Fs(1,1-Ie);we=Fs(1,oe+(Pn-oe)*(Ie*xp))}return(oe+we)/2},n[0].pressure),T=Dp(s,l,n[n.length-1].pressure,i),M,W=n[0].vector,G=n[0].point,K=G,re=G,de=K,X=!1;for(let oe=0;oe<n.length;oe++){let{pressure:pe}=n[oe],{point:we,vector:Ie,distance:Pn,runningLength:tn}=n[oe];if(oe<n.length-1&&g-tn<3)continue;if(l){if(r){let le=Fs(1,Pn/s),Se=Fs(1,1-le);pe=Fs(1,P+(Se-P)*(le*xp))}T=Dp(s,l,pe,i)}else T=s/2;M===void 0&&(M=T);let gn=tn<B?y(tn/B):1,Zn=g-tn<D?m((g-tn)/D):1;T=Math.max(.01,T*Math.min(gn,Zn));let zt=(oe<n.length-1?n[oe+1]:n[oe]).vector,Tn=oe<n.length-1?Sp(Ie,zt):1,j=Sp(Ie,W)<0&&!X,ne=Tn!==null&&Tn<0;if(j||ne){let le=Nn(to(W),T);for(let Se=1/13,Oe=0;Oe<=1;Oe+=Se)re=so(Un(we,le),we,oo*Oe),w.push(re),de=so(Hn(we,le),we,oo*-Oe),v.push(de);G=re,K=de,ne&&(X=!0);continue}if(X=!1,oe===n.length-1){let le=Nn(to(Ie),T);w.push(Un(we,le)),v.push(Hn(we,le));continue}let te=Nn(to(Fa(zt,Ie,Tn)),T);re=Un(we,te),(oe<=1||wp(G,re)>S)&&(w.push(re),G=re),de=Hn(we,te),(oe<=1||wp(K,de)>S)&&(v.push(de),K=de),P=pe,W=Ie}let Ce=n[0].point.slice(0,2),ve=n.length>1?n[n.length-1].point.slice(0,2):Hn(n[0].point,[1,1]),be=[],Re=[];if(n.length===1){if(!(B||D)||u){let oe=kp(Ce,xy(to(Un(Ce,ve))),-(M||T)),pe=[];for(let we=1/13,Ie=we;Ie<=1;Ie+=we)pe.push(so(oe,Ce,oo*2*Ie));return pe}}else{if(!(B||D&&n.length===1))if(d)for(let pe=1/13,we=pe;we<=1;we+=pe){let Ie=so(v[0],Ce,oo*we);be.push(Ie)}else{let pe=Un(w[0],v[0]),we=Nn(pe,.5),Ie=Nn(pe,.51);be.push(Un(Ce,we),Un(Ce,Ie),Hn(Ce,Ie),Hn(Ce,we))}let oe=to(M5(n[n.length-1].vector));if(D||B&&n.length===1)Re.push(ve);else if(f){let pe=kp(ve,oe,T);for(let we=1/29,Ie=we;Ie<1;Ie+=we)Re.push(so(pe,ve,oo*3*Ie))}else Re.push(Hn(ve,Nn(oe,T)),Hn(ve,Nn(oe,T*.99)),Un(ve,Nn(oe,T*.99)),Un(ve,Nn(oe,T)))}return w.concat(Re,v.reverse(),be)}function q5(n,t={}){var s;let{streamline:o=.5,size:l=16,last:r=!1}=t;if(n.length===0)return[];let i=.15+(1-o)*.85,c=Array.isArray(n[0])?n:n.map(({x:m,y:g,pressure:B=.5})=>[m,g,B]);if(c.length===2){let m=c[1];c=c.slice(0,-1);for(let g=1;g<5;g++)c.push(Fa(c[0],m,g/4))}c.length===1&&(c=[...c,[...Hn(c[0],[1,1]),...c[0].slice(2)]]);let p=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,y=p[0],f=c.length-1;for(let m=1;m<c.length;m++){let g=r&&m===f?c[m].slice(0,2):Fa(y.point,c[m],i);if(I5(y.point,g))continue;let B=R5(g,y.point);if(d+=B,m<f&&!u){if(d<l)continue;u=!0}y={point:g,pressure:c[m][2]>=0?c[m][2]:.5,vector:xy(Un(y.point,g)),distance:B,runningLength:d},p.push(y)}return p[0].vector=((s=p[1])==null?void 0:s.vector)||[0,0],p}function N5(n,t={}){return j5(q5(n,t),t)}function Wl(n,t){return n-t}function H5(n){return n<0?-1:1}function Vl(n){return[Math.abs(n),H5(n)]}function Ey(){const n=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${n()+n()}-${n()}-${n()}-${n()}-${n()}${n()}${n()}`}var W5=2,mt=W5,Ns=class{constructor(n){this.drauu=n,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(n){}onUnselected(){}onStart(n){}onMove(n){return!1}onEnd(n){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(n){var t,s;const o=this.drauu.el,l=(t=this.drauu.options.coordinateScale)!=null?t:1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(n.pageX-r.left)*l,y:(n.pageY-r.top)*l,pressure:n.pressure}}else{const r=this.drauu.svgPoint;r.x=n.clientX,r.y=n.clientY;const i=r.matrixTransform((s=o.getScreenCTM())==null?void 0:s.inverse());return{x:i.x*l,y:i.y*l,pressure:n.pressure}}}createElement(n,t){var s;const o=document.createElementNS("http://www.w3.org/2000/svg",n),l=t?Ea(Ea({},this.brush),t):this.brush;return o.setAttribute("fill",(s=l.fill)!=null?s:"transparent"),o.setAttribute("stroke",l.color),o.setAttribute("stroke-width",l.size.toString()),o.setAttribute("stroke-linecap","round"),l.dasharray&&o.setAttribute("stroke-dasharray",l.dasharray),o}attr(n,t){this.el.setAttribute(n,typeof t=="string"?t:t.toFixed(mt))}_setEvent(n){this.event=n,this.point=this.getMousePosition(n)}_eventDown(n){return this._setEvent(n),this.start=this.point,this.onStart(this.point)}_eventMove(n){return this._setEvent(n),this.onMove(this.point)}_eventUp(n){return this._setEvent(n),this.onEnd(this.point)}},V5=class extends Ns{constructor(){super(...arguments),this.points=[]}onStart(n){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[n],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&this.points.push(n),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!!n}getSvgData(n){const t=N5(n,Ea({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!t.length)return"";const s=t.reduce((o,[l,r],i,c)=>{const[p,u]=c[(i+1)%c.length];return o.push(l,r,(l+p)/2,(r+u)/2),o},["M",...t[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},z5=class extends Ns{onStart(n){return this.el=this.createElement("ellipse"),this.attr("cx",n.x),this.attr("cy",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,s]=Vl(n.x-this.start.x),[o,l]=Vl(n.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[r,i]=[this.start.x,this.start.x+t*s].sort(Wl),[c,p]=[this.start.y,this.start.y+o*l].sort(Wl);this.attr("cx",(r+i)/2),this.attr("cy",(c+p)/2),this.attr("rx",(i-r)/2),this.attr("ry",(p-c)/2)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function Fy(n,t){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",t),o.setAttribute("id",n),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),s.appendChild(o),s}var K5=class extends Ns{onStart(n){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",n.x),this.attr("y1",n.y),this.attr("x2",n.x),this.attr("y2",n.y),this.brush.arrowEnd){const t=Ey(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Fy(t,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${t})`),s}return this.el}onMove(n){if(!this.el)return!1;let{x:t,y:s}=n;if(this.shiftPressed){const o=n.x-this.start.x,l=n.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(t=this.start.x+l*r,s=this.start.y+l):(t=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-s),this.attr("x2",t),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",s)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||n.getTotalLength()<5)}},Y5=class extends Ns{onStart(n){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",n.x),this.attr("y",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,s]=Vl(n.x-this.start.x),[o,l]=Vl(n.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[r,i]=[this.start.x,this.start.x+t*s].sort(Wl),[c,p]=[this.start.y,this.start.y+o*l].sort(Wl);this.attr("x",r),this.attr("y",c),this.attr("width",i-r),this.attr("height",p-c)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function J5(n,t){const s=n.x-t.x,o=n.y-t.y;return s*s+o*o}function Z5(n,t,s){let o=t.x,l=t.y,r=s.x-o,i=s.y-l;if(r!==0||i!==0){const c=((n.x-o)*r+(n.y-l)*i)/(r*r+i*i);c>1?(o=s.x,l=s.y):c>0&&(o+=r*c,l+=i*c)}return r=n.x-o,i=n.y-l,r*r+i*i}function Q5(n,t){let s=n[0];const o=[s];let l;for(let r=1,i=n.length;r<i;r++)l=n[r],J5(l,s)>t&&(o.push(l),s=l);return s!==l&&l&&o.push(l),o}function Pa(n,t,s,o,l){let r=o,i=0;for(let c=t+1;c<s;c++){const p=Z5(n[c],n[t],n[s]);p>r&&(i=c,r=p)}r>o&&(i-t>1&&Pa(n,t,i,o,l),l.push(n[i]),s-i>1&&Pa(n,i,s,o,l))}function X5(n,t){const s=n.length-1,o=[n[0]];return Pa(n,0,s,t,o),o.push(n[s]),o}function Ep(n,t,s=!1){if(n.length<=2)return n;const o=t!==void 0?t*t:1;return n=s?n:Q5(n,o),n=X5(n,o),n}var e1=class extends Ns{constructor(){super(...arguments),this.points=[],this.count=0}onStart(n){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[n],this.brush.arrowEnd){this.arrowId=Ey();const t=Fy(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&(this.points.push(n),this.count+=1),this.count>5&&(this.points=Ep(this.points,1,!0),this.count=0),this.attr("d",Pp(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||(n.setAttribute("d",Pp(Ep(this.points,1,!0))),!n.getTotalLength()))}};function n1(n,t){const s=t.x-n.x,o=t.y-n.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function Fp(n,t,s,o){const l=t||n,r=s||n,i=.2,c=n1(l,r),p=c.angle+(o?Math.PI:0),u=c.length*i,d=n.x+Math.cos(p)*u,y=n.y+Math.sin(p)*u;return{x:d,y}}function t1(n,t,s){const o=Fp(s[t-1],s[t-2],n),l=Fp(n,s[t-1],s[t+1],!0);return`C ${o.x.toFixed(mt)},${o.y.toFixed(mt)} ${l.x.toFixed(mt)},${l.y.toFixed(mt)} ${n.x.toFixed(mt)},${n.y.toFixed(mt)}`}function Pp(n){return n.reduce((t,s,o,l)=>o===0?`M ${s.x.toFixed(mt)},${s.y.toFixed(mt)}`:`${t} ${t1(s,o,l)}`,"")}var s1=class extends Ns{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(n){const t=(s,o)=>{if(s&&s.length)for(let l=0;l<s.length;l++){const r=s[l];if(r.getTotalLength){const i=r.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const p=r.getPointAtLength(i*c/this.pathSubFactor),u=r.getPointAtLength(i*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:u.x,y1:p.y,y2:u.y,segment:c,element:o||r})}}else r.children&&t(r.children,r)}};n&&t(n.children)}onUnselected(){this.pathFragments=[]}onStart(n){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=n.x,this.svgPointPrevious.y=n.y}onMove(n){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=n.x,this.svgPointCurrent.y=n.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const n=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const s=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),n.push(t))}return n.length&&(this.pathFragments=this.pathFragments.filter((t,s)=>!n.includes(s))),n.length>0}lineLineIntersect(n,t){const s=n.x1,o=n.x2,l=t.x1,r=t.x2,i=n.y1,c=n.y2,p=t.y1,u=t.y2,d=(s-o)*(p-u)-(i-c)*(l-r),y=(s*c-i*o)*(l-r)-(s-o)*(l*u-p*r),f=(s*c-i*o)*(p-u)-(i-c)*(l*u-p*r),m=(g,B,D)=>g>=B&&g<=D?!0:g>=D&&g<=B;if(d===0)return!1;{const g={x:y/d,y:f/d};return m(g.x,s,o)&&m(g.y,i,c)&&m(g.x,l,r)&&m(g.y,p,u)}}};function o1(n){return{draw:new e1(n),stylus:new V5(n),line:new K5(n),rectangle:new Y5(n),ellipse:new z5(n),eraseLine:new s1(n)}}var l1=class{constructor(n={}){this.options=n,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=$5(),this._models=o1(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),n.el&&this.mount(n.el,n.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(n){this._models[this.mode].onUnselected(),this.options.brush.mode=n,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(n){this.options.brush=n}resolveSelector(n){return typeof n=="string"?document.querySelector(n):n||null}mount(n,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(n),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(n=>n()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(n,t){return this._emitter.on(n,t)}undo(){const n=this.el;return n.lastElementChild?(this._undoStack.push(n.lastElementChild.cloneNode(!0)),n.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var n;return!!((n=this.el)!=null&&n.lastElementChild)}eventMove(n){!this.acceptsInput(n)||!this.drawing||this.model._eventMove(n)&&(n.stopPropagation(),n.preventDefault(),this._emitter.emit("changed"))}eventStart(n){this.acceptsInput(n)&&(n.stopPropagation(),n.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(n),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(n){if(!this.acceptsInput(n)||!this.drawing)return;const t=this.model._eventUp(n);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(n){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(n.pointerType)}eventKeyboard(n){this.shiftPressed===n.shiftKey&&this.altPressed===n.altKey||(this.shiftPressed=n.shiftKey,this.altPressed=n.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const n=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",n)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(n){this.clear(),this.el.innerHTML=n}};function r1(n){return new l1(n)}const Ta=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],st=Yn("slidev-drawing-enabled",!1),AL=Yn("slidev-drawing-pinned",!1),a1=Q(!1),i1=Q(!1),c1=Q(!1),Uo=Q(!1),cs=P3(Yn("slidev-drawing-brush",{color:Ta[0],size:4,mode:"stylus"})),Tp=Q("stylus"),Py=R(()=>Te.drawings.syncAll||_n.value);let Io=!1;const lo=R({get(){return Tp.value},set(n){Tp.value=n,n==="arrow"?(cs.mode="line",cs.arrowEnd=!0):(cs.mode=n,cs.arrowEnd=!1)}}),p1=We({brush:cs,acceptsInputTypes:R(()=>st.value&&(!Te.drawings.presenterOnly||_n.value)?void 0:["pen"]),coordinateTransform:!1}),hn=sr(r1(p1));function u1(){hn.clear(),Py.value&&Qd(Ve.value,"")}function xi(){var n;i1.value=hn.canRedo(),a1.value=hn.canUndo(),c1.value=!!((n=hn.el)!=null&&n.children.length)}function d1(n){Io=!0;const t=Nl[n||Ve.value];t!=null?hn.load(t):hn.clear(),xi(),Io=!1}hn.on("changed",()=>{if(xi(),!Io){const n=hn.dump(),t=Ve.value;(Nl[t]||"")!==n&&Py.value&&Qd(t,hn.dump())}});k3(n=>{Io=!0,n[Ve.value]!=null&&hn.load(n[Ve.value]||""),Io=!1,xi()});on(()=>{Ae(Ve,()=>{hn.mounted&&d1()},{immediate:!0})});hn.on("start",()=>Uo.value=!0);hn.on("end",()=>Uo.value=!1);window.addEventListener("keydown",n=>{if(!st.value)return;const t=!n.ctrlKey&&!n.altKey&&!n.shiftKey&&!n.metaKey;let s=!0;n.code==="KeyZ"&&(n.ctrlKey||n.metaKey)?n.shiftKey?hn.redo():hn.undo():n.code==="Escape"?st.value=!1:n.code==="KeyL"&&t?lo.value="line":n.code==="KeyA"&&t?lo.value="arrow":n.code==="KeyS"&&t?lo.value="stylus":n.code==="KeyR"&&t?lo.value="rectangle":n.code==="KeyE"&&t?lo.value="ellipse":n.code==="KeyC"&&t?u1():n.code.startsWith("Digit")&&t&&+n.code[5]<=Ta.length?cs.color=Ta[+n.code[5]-1]:s=!1,s&&(n.preventDefault(),n.stopPropagation())},!1);function Je(...n){return R(()=>n.every(t=>Ke(t)))}function bn(n){return R(()=>!Ke(n))}const $p=xC(),Lr=Yn("slidev-color-schema","auto"),$a=R(()=>Te.colorSchema!=="auto"),Ei=R({get(){return $a.value?Te.colorSchema==="dark":Lr.value==="auto"?$p.value:Lr.value==="dark"},set(n){$a.value||(Lr.value=n===$p.value?"auto":n?"dark":"light")}}),Ty=ty(Ei);Kn&&Ae(Ei,n=>{const t=document.querySelector("html");t.classList.toggle("dark",n),t.classList.toggle("light",!n)},{immediate:!0});const Bl=Q(1),bl=R(()=>Ye.length),xn=Q(0),Fi=Q(0);function y1(){xn.value>Bl.value&&(xn.value-=1)}function f1(){xn.value<bl.value&&(xn.value+=1)}function h1(){if(xn.value>Bl.value){let n=xn.value-Fi.value;n<Bl.value&&(n=Bl.value),xn.value=n}}function m1(){if(xn.value<bl.value){let n=xn.value+Fi.value;n>bl.value&&(n=bl.value),xn.value=n}}function g1(){const{escape:n,space:t,shift:s,left:o,right:l,up:r,down:i,enter:c,d:p,g:u,o:d}=Sy;let y=[{name:"next_space",key:Je(t,bn(s)),fn:Lt,autoRepeat:!0},{name:"prev_space",key:Je(t,s),fn:Rt,autoRepeat:!0},{name:"next_right",key:Je(l,bn(s),bn(un)),fn:Lt,autoRepeat:!0},{name:"prev_left",key:Je(o,bn(s),bn(un)),fn:Rt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Lt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Rt,autoRepeat:!0},{name:"next_down",key:Je(i,bn(un)),fn:Lo,autoRepeat:!0},{name:"prev_up",key:Je(r,bn(un)),fn:()=>Ro(!1),autoRepeat:!0},{name:"next_shift",key:Je(l,s),fn:Lo,autoRepeat:!0},{name:"prev_shift",key:Je(o,s),fn:()=>Ro(!1),autoRepeat:!0},{name:"toggle_dark",key:Je(p,bn(st)),fn:Ty},{name:"toggle_overview",key:Je(d,bn(st)),fn:ky},{name:"hide_overview",key:Je(n,bn(st)),fn:()=>un.value=!1},{name:"goto",key:Je(u,bn(st)),fn:()=>$s.value=!$s.value},{name:"next_overview",key:Je(l,un),fn:f1},{name:"prev_overview",key:Je(o,un),fn:y1},{name:"up_overview",key:Je(r,un),fn:h1},{name:"down_overview",key:Je(i,un),fn:m1},{name:"goto_from_overview",key:Je(c,un),fn:()=>{qs(xn.value),un.value=!1}}];const f=new Set(y.map(g=>g.name));if(y.filter(g=>g.name&&f.has(g.name)).length===0){const g=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(g),console.warn(g)}return y}const $y=Je(bn(x5),bn(E5),w5);function C1(n,t,s=!1){typeof n=="string"&&(n=Sy[n]);const o=Je(n,$y);let l=0,r;const i=()=>{if(clearTimeout(r),!o.value){l=0;return}s&&(r=setTimeout(i,Math.max(1e3-l*250,150)),l++),t()};return Ae(o,i,{flush:"sync"})}function _1(n,t){return uC(n,s=>{$y.value&&(s.repeat||t())})}function A1(){const n=g1();new Map(n.map(s=>[s.key,s])).forEach(s=>{s.fn&&C1(s.key,s.fn,s.autoRepeat)}),_1("f",()=>wy.toggle())}const v1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},B1=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),b1=[B1];function D1(n,t){return h(),b("svg",v1,b1)}const S1={name:"carbon-close",render:D1};function Pi(n,t=""){var l,r;const s=["slidev-page",t],o=(r=(l=n==null?void 0:n.meta)==null?void 0:l.slide)==null?void 0:r.no;return o!=null&&s.push(`slidev-page-${o}`),s.filter(Boolean).join(" ")}const w1=Ee({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(n){const t=n;k(E);const s=Q(),o=GC(s),l=R(()=>t.width?t.width:o.width.value),r=R(()=>t.width?t.width/Mt:o.height.value);t.width&&bs(()=>{s.value&&(s.value.style.width=`${l.value}px`,s.value.style.height=`${r.value}px`)});const i=R(()=>l.value/r.value),c=R(()=>t.scale&&!Ct.value?t.scale:i.value<Mt?l.value/Ut:r.value*Mt/Ut),p=R(()=>({height:`${Di}px`,width:`${Ut}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),u=R(()=>({"select-none":!Te.selectable}));return Sn(Yd,c),(d,y)=>(h(),b("div",{id:"slide-container",ref_key:"root",ref:s,class:Le(u.value)},[e("div",{id:"slide-content",style:Xe(p.value)},[mn(d.$slots,"default")],4),mn(d.$slots,"controls")],2))}});const F=(n,t)=>{const s=n.__vccOpts||n;for(const[o,l]of t)s[o]=l;return s},My=F(w1,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Ti=Ee({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(n,{emit:t}){const s=tt(n,"clicks",t),o=tt(n,"clicksElements",t),l=tt(n,"clicksDisabled",t),r=tt(n,"clicksOrderMap",t);o.value.length=0,Sn(u3,n.route),Sn(d3,n.context),Sn(mo,s),Sn(go,l),Sn(os,o),Sn(Ca,r)},render(){var n,t;return this.$props.is?kn(this.$props.is):(t=(n=this.$slots)==null?void 0:n.default)==null?void 0:t.call(n)}}),k1=["innerHTML"],x1=Ee({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(n){return k(E),(t,s)=>L(Nl)[t.page]?(h(),b("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:L(Nl)[t.page]},null,8,k1)):_e("v-if",!0)}}),Uy=F(x1,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),E1=Object.freeze(Object.defineProperty({__proto__:null,default:Uy},Symbol.toStringTag,{value:"Module"})),F1={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},P1=["onClick"],Rr=4*16*2,Mp=2*16,T1=Ee({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(n,{emit:t}){const s=n;k(E);const o=tt(s,"modelValue",t);function l(){o.value=!1}function r(y){qs(y),l()}function i(y){return y===xn.value}const c=xa.smaller("xs"),p=xa.smaller("sm"),u=R(()=>c.value?Cs.width.value-Rr:p.value?(Cs.width.value-Rr-Mp)/2:300),d=R(()=>Math.floor((Cs.width.value-Rr)/(u.value+Mp)));return bs(()=>{xn.value=Ve.value,Fi.value=d.value}),(y,f)=>{const m=S1;return h(),b(Pe,null,[id(e("div",F1,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Xe(`grid-template-columns: repeat(auto-fit,minmax(${u.value}px,1fr))`)},[(h(!0),b(Pe,null,Ds(L(Ye),(g,B)=>(h(),b("div",{key:g.path,class:"relative"},[e("div",{class:Le(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(B+1),"border-gray-400":!i(B+1)}]),style:Xe(L(Si)),onClick:D=>r(+g.path)},[(h(),x(My,{key:g.path,width:u.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:_(()=>[g!=null&&g.component?(h(),x(L(Ti),{key:0,is:g.component,"clicks-disabled":!0,class:Le(L(Pi)(g)),route:g,context:"overview"},null,8,["is","class","route"])):_e("v-if",!0),U(Uy,{page:+g.path},null,8,["page"])]),_:2},1032,["width"]))],14,P1),e("div",{class:"absolute top-0 opacity-50",style:Xe(`left: ${u.value+5}px`)},At(B+1),5)]))),128))],4)],512),[[Ld,L(o)]]),L(o)?(h(),b("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[U(m)])):_e("v-if",!0)],64)}}});const $1=F(T1,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),M1="/2023CSCamp/assets/logo-b72bde5d.png",U1={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},I1=Ee({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(n,{emit:t}){const s=n;k(E);const o=tt(s,"modelValue",t);function l(){o.value=!1}return(r,i)=>(h(),x(pd,null,[L(o)?(h(),b("div",U1,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=c=>l())}),e("div",{class:Le(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ main"},[mn(r.$slots,"default")],2)])):_e("v-if",!0)],1024))}}),O1=F(I1,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/Modal.vue"]]),L1={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},R1=["innerHTML"],G1=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:M1,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),a("dev ")])])],-1),j1=Ee({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(n,{emit:t}){const s=n;k(E);const o=tt(s,"modelValue",t),l=R(()=>typeof Te.info=="string");return(r,i)=>(h(),x(O1,{modelValue:L(o),"onUpdate:modelValue":i[0]||(i[0]=c=>$e(o)?o.value=c:null),class:"px-6 py-4"},{default:_(()=>[e("div",L1,[l.value?(h(),b("div",{key:0,class:"mb-4",innerHTML:L(Te).info},null,8,R1)):_e("v-if",!0),G1])]),_:1},8,["modelValue"]))}});const q1=F(j1,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function vt(n){return Array.isArray?Array.isArray(n):Ly(n)==="[object Array]"}const N1=1/0;function H1(n){if(typeof n=="string")return n;let t=n+"";return t=="0"&&1/n==-N1?"-0":t}function W1(n){return n==null?"":H1(n)}function ot(n){return typeof n=="string"}function Iy(n){return typeof n=="number"}function V1(n){return n===!0||n===!1||z1(n)&&Ly(n)=="[object Boolean]"}function Oy(n){return typeof n=="object"}function z1(n){return Oy(n)&&n!==null}function wn(n){return n!=null}function Gr(n){return!n.trim().length}function Ly(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}const K1="Incorrect 'index' type",Y1=n=>`Invalid value for key ${n}`,J1=n=>`Pattern length exceeds max of ${n}.`,Z1=n=>`Missing ${n} property in key`,Q1=n=>`Property 'weight' in key '${n}' must be a positive integer`,Up=Object.prototype.hasOwnProperty;class X1{constructor(t){this._keys=[],this._keyMap={};let s=0;t.forEach(o=>{let l=Ry(o);s+=l.weight,this._keys.push(l),this._keyMap[l.id]=l,s+=l.weight}),this._keys.forEach(o=>{o.weight/=s})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ry(n){let t=null,s=null,o=null,l=1,r=null;if(ot(n)||vt(n))o=n,t=Ip(n),s=Ma(n);else{if(!Up.call(n,"name"))throw new Error(Z1("name"));const i=n.name;if(o=i,Up.call(n,"weight")&&(l=n.weight,l<=0))throw new Error(Q1(i));t=Ip(i),s=Ma(i),r=n.getFn}return{path:t,id:s,weight:l,src:o,getFn:r}}function Ip(n){return vt(n)?n:n.split(".")}function Ma(n){return vt(n)?n.join("."):n}function eA(n,t){let s=[],o=!1;const l=(r,i,c)=>{if(wn(r))if(!i[c])s.push(r);else{let p=i[c];const u=r[p];if(!wn(u))return;if(c===i.length-1&&(ot(u)||Iy(u)||V1(u)))s.push(W1(u));else if(vt(u)){o=!0;for(let d=0,y=u.length;d<y;d+=1)l(u[d],i,c+1)}else i.length&&l(u,i,c+1)}};return l(n,ot(t)?t.split("."):t,0),o?s:s[0]}const nA={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},tA={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(n,t)=>n.score===t.score?n.idx<t.idx?-1:1:n.score<t.score?-1:1},sA={location:0,threshold:.6,distance:100},oA={useExtendedSearch:!1,getFn:eA,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var he={...tA,...nA,...sA,...oA};const lA=/[^ ]+/g;function rA(n=1,t=3){const s=new Map,o=Math.pow(10,t);return{get(l){const r=l.match(lA).length;if(s.has(r))return s.get(r);const i=1/Math.pow(r,.5*n),c=parseFloat(Math.round(i*o)/o);return s.set(r,c),c},clear(){s.clear()}}}class $i{constructor({getFn:t=he.getFn,fieldNormWeight:s=he.fieldNormWeight}={}){this.norm=rA(s,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((s,o)=>{this._keysMap[s.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ot(this.docs[0])?this.docs.forEach((t,s)=>{this._addString(t,s)}):this.docs.forEach((t,s)=>{this._addObject(t,s)}),this.norm.clear())}add(t){const s=this.size();ot(t)?this._addString(t,s):this._addObject(t,s)}removeAt(t){this.records.splice(t,1);for(let s=t,o=this.size();s<o;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(t,s){return t[this._keysMap[s]]}size(){return this.records.length}_addString(t,s){if(!wn(t)||Gr(t))return;let o={v:t,i:s,n:this.norm.get(t)};this.records.push(o)}_addObject(t,s){let o={i:s,$:{}};this.keys.forEach((l,r)=>{let i=l.getFn?l.getFn(t):this.getFn(t,l.path);if(wn(i)){if(vt(i)){let c=[];const p=[{nestedArrIndex:-1,value:i}];for(;p.length;){const{nestedArrIndex:u,value:d}=p.pop();if(wn(d))if(ot(d)&&!Gr(d)){let y={v:d,i:u,n:this.norm.get(d)};c.push(y)}else vt(d)&&d.forEach((y,f)=>{p.push({nestedArrIndex:f,value:y})})}o.$[r]=c}else if(ot(i)&&!Gr(i)){let c={v:i,n:this.norm.get(i)};o.$[r]=c}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Gy(n,t,{getFn:s=he.getFn,fieldNormWeight:o=he.fieldNormWeight}={}){const l=new $i({getFn:s,fieldNormWeight:o});return l.setKeys(n.map(Ry)),l.setSources(t),l.create(),l}function aA(n,{getFn:t=he.getFn,fieldNormWeight:s=he.fieldNormWeight}={}){const{keys:o,records:l}=n,r=new $i({getFn:t,fieldNormWeight:s});return r.setKeys(o),r.setIndexRecords(l),r}function dl(n,{errors:t=0,currentLocation:s=0,expectedLocation:o=0,distance:l=he.distance,ignoreLocation:r=he.ignoreLocation}={}){const i=t/n.length;if(r)return i;const c=Math.abs(o-s);return l?i+c/l:c?1:i}function iA(n=[],t=he.minMatchCharLength){let s=[],o=-1,l=-1,r=0;for(let i=n.length;r<i;r+=1){let c=n[r];c&&o===-1?o=r:!c&&o!==-1&&(l=r-1,l-o+1>=t&&s.push([o,l]),o=-1)}return n[r-1]&&r-o>=t&&s.push([o,r-1]),s}const rs=32;function cA(n,t,s,{location:o=he.location,distance:l=he.distance,threshold:r=he.threshold,findAllMatches:i=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,includeMatches:p=he.includeMatches,ignoreLocation:u=he.ignoreLocation}={}){if(t.length>rs)throw new Error(J1(rs));const d=t.length,y=n.length,f=Math.max(0,Math.min(o,y));let m=r,g=f;const B=c>1||p,D=B?Array(y):[];let S;for(;(S=n.indexOf(t,g))>-1;){let W=dl(t,{currentLocation:S,expectedLocation:f,distance:l,ignoreLocation:u});if(m=Math.min(W,m),g=S+d,B){let G=0;for(;G<d;)D[S+G]=1,G+=1}}g=-1;let w=[],v=1,P=d+y;const T=1<<d-1;for(let W=0;W<d;W+=1){let G=0,K=P;for(;G<K;)dl(t,{errors:W,currentLocation:f+K,expectedLocation:f,distance:l,ignoreLocation:u})<=m?G=K:P=K,K=Math.floor((P-G)/2+G);P=K;let re=Math.max(1,f-K+1),de=i?y:Math.min(f+K,y)+d,X=Array(de+2);X[de+1]=(1<<W)-1;for(let ve=de;ve>=re;ve-=1){let be=ve-1,Re=s[n.charAt(be)];if(B&&(D[be]=+!!Re),X[ve]=(X[ve+1]<<1|1)&Re,W&&(X[ve]|=(w[ve+1]|w[ve])<<1|1|w[ve+1]),X[ve]&T&&(v=dl(t,{errors:W,currentLocation:be,expectedLocation:f,distance:l,ignoreLocation:u}),v<=m)){if(m=v,g=be,g<=f)break;re=Math.max(1,2*f-g)}}if(dl(t,{errors:W+1,currentLocation:f,expectedLocation:f,distance:l,ignoreLocation:u})>m)break;w=X}const M={isMatch:g>=0,score:Math.max(.001,v)};if(B){const W=iA(D,c);W.length?p&&(M.indices=W):M.isMatch=!1}return M}function pA(n){let t={};for(let s=0,o=n.length;s<o;s+=1){const l=n.charAt(s);t[l]=(t[l]||0)|1<<o-s-1}return t}class jy{constructor(t,{location:s=he.location,threshold:o=he.threshold,distance:l=he.distance,includeMatches:r=he.includeMatches,findAllMatches:i=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,isCaseSensitive:p=he.isCaseSensitive,ignoreLocation:u=he.ignoreLocation}={}){if(this.options={location:s,threshold:o,distance:l,includeMatches:r,findAllMatches:i,minMatchCharLength:c,isCaseSensitive:p,ignoreLocation:u},this.pattern=p?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(f,m)=>{this.chunks.push({pattern:f,alphabet:pA(f),startIndex:m})},y=this.pattern.length;if(y>rs){let f=0;const m=y%rs,g=y-m;for(;f<g;)d(this.pattern.substr(f,rs),f),f+=rs;if(m){const B=y-rs;d(this.pattern.substr(B),B)}}else d(this.pattern,0)}searchIn(t){const{isCaseSensitive:s,includeMatches:o}=this.options;if(s||(t=t.toLowerCase()),this.pattern===t){let g={isMatch:!0,score:0};return o&&(g.indices=[[0,t.length-1]]),g}const{location:l,distance:r,threshold:i,findAllMatches:c,minMatchCharLength:p,ignoreLocation:u}=this.options;let d=[],y=0,f=!1;this.chunks.forEach(({pattern:g,alphabet:B,startIndex:D})=>{const{isMatch:S,score:w,indices:v}=cA(t,g,B,{location:l+D,distance:r,threshold:i,findAllMatches:c,minMatchCharLength:p,includeMatches:o,ignoreLocation:u});S&&(f=!0),y+=w,S&&v&&(d=[...d,...v])});let m={isMatch:f,score:f?y/this.chunks.length:1};return f&&o&&(m.indices=d),m}}class Vt{constructor(t){this.pattern=t}static isMultiMatch(t){return Op(t,this.multiRegex)}static isSingleMatch(t){return Op(t,this.singleRegex)}search(){}}function Op(n,t){const s=n.match(t);return s?s[1]:null}class uA extends Vt{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const s=t===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class dA extends Vt{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const o=t.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,t.length-1]}}}class yA extends Vt{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const s=t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class fA extends Vt{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const s=!t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class hA extends Vt{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const s=t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class mA extends Vt{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const s=!t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class qy extends Vt{constructor(t,{location:s=he.location,threshold:o=he.threshold,distance:l=he.distance,includeMatches:r=he.includeMatches,findAllMatches:i=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,isCaseSensitive:p=he.isCaseSensitive,ignoreLocation:u=he.ignoreLocation}={}){super(t),this._bitapSearch=new jy(t,{location:s,threshold:o,distance:l,includeMatches:r,findAllMatches:i,minMatchCharLength:c,isCaseSensitive:p,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Ny extends Vt{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let s=0,o;const l=[],r=this.pattern.length;for(;(o=t.indexOf(this.pattern,s))>-1;)s=o+r,l.push([o,s-1]);const i=!!l.length;return{isMatch:i,score:i?0:1,indices:l}}}const Ua=[uA,Ny,yA,fA,mA,hA,dA,qy],Lp=Ua.length,gA=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,CA="|";function _A(n,t={}){return n.split(CA).map(s=>{let o=s.trim().split(gA).filter(r=>r&&!!r.trim()),l=[];for(let r=0,i=o.length;r<i;r+=1){const c=o[r];let p=!1,u=-1;for(;!p&&++u<Lp;){const d=Ua[u];let y=d.isMultiMatch(c);y&&(l.push(new d(y,t)),p=!0)}if(!p)for(u=-1;++u<Lp;){const d=Ua[u];let y=d.isSingleMatch(c);if(y){l.push(new d(y,t));break}}}return l})}const AA=new Set([qy.type,Ny.type]);class vA{constructor(t,{isCaseSensitive:s=he.isCaseSensitive,includeMatches:o=he.includeMatches,minMatchCharLength:l=he.minMatchCharLength,ignoreLocation:r=he.ignoreLocation,findAllMatches:i=he.findAllMatches,location:c=he.location,threshold:p=he.threshold,distance:u=he.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:o,minMatchCharLength:l,findAllMatches:i,ignoreLocation:r,location:c,threshold:p,distance:u},this.pattern=s?t:t.toLowerCase(),this.query=_A(this.pattern,this.options)}static condition(t,s){return s.useExtendedSearch}searchIn(t){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:l}=this.options;t=l?t:t.toLowerCase();let r=0,i=[],c=0;for(let p=0,u=s.length;p<u;p+=1){const d=s[p];i.length=0,r=0;for(let y=0,f=d.length;y<f;y+=1){const m=d[y],{isMatch:g,indices:B,score:D}=m.search(t);if(g){if(r+=1,c+=D,o){const S=m.constructor.type;AA.has(S)?i=[...i,...B]:i.push(B)}}else{c=0,r=0,i.length=0;break}}if(r){let y={isMatch:!0,score:c/r};return o&&(y.indices=i),y}}return{isMatch:!1,score:1}}}const Ia=[];function BA(...n){Ia.push(...n)}function Oa(n,t){for(let s=0,o=Ia.length;s<o;s+=1){let l=Ia[s];if(l.condition(n,t))return new l(n,t)}return new jy(n,t)}const zl={AND:"$and",OR:"$or"},La={PATH:"$path",PATTERN:"$val"},Ra=n=>!!(n[zl.AND]||n[zl.OR]),bA=n=>!!n[La.PATH],DA=n=>!vt(n)&&Oy(n)&&!Ra(n),Rp=n=>({[zl.AND]:Object.keys(n).map(t=>({[t]:n[t]}))});function Hy(n,t,{auto:s=!0}={}){const o=l=>{let r=Object.keys(l);const i=bA(l);if(!i&&r.length>1&&!Ra(l))return o(Rp(l));if(DA(l)){const p=i?l[La.PATH]:r[0],u=i?l[La.PATTERN]:l[p];if(!ot(u))throw new Error(Y1(p));const d={keyId:Ma(p),pattern:u};return s&&(d.searcher=Oa(u,t)),d}let c={children:[],operator:r[0]};return r.forEach(p=>{const u=l[p];vt(u)&&u.forEach(d=>{c.children.push(o(d))})}),c};return Ra(n)||(n=Rp(n)),o(n)}function SA(n,{ignoreFieldNorm:t=he.ignoreFieldNorm}){n.forEach(s=>{let o=1;s.matches.forEach(({key:l,norm:r,score:i})=>{const c=l?l.weight:null;o*=Math.pow(i===0&&c?Number.EPSILON:i,(c||1)*(t?1:r))}),s.score=o})}function wA(n,t){const s=n.matches;t.matches=[],wn(s)&&s.forEach(o=>{if(!wn(o.indices)||!o.indices.length)return;const{indices:l,value:r}=o;let i={indices:l,value:r};o.key&&(i.key=o.key.src),o.idx>-1&&(i.refIndex=o.idx),t.matches.push(i)})}function kA(n,t){t.score=n.score}function xA(n,t,{includeMatches:s=he.includeMatches,includeScore:o=he.includeScore}={}){const l=[];return s&&l.push(wA),o&&l.push(kA),n.map(r=>{const{idx:i}=r,c={item:t[i],refIndex:i};return l.length&&l.forEach(p=>{p(r,c)}),c})}class Hs{constructor(t,s={},o){this.options={...he,...s},this.options.useExtendedSearch,this._keyStore=new X1(this.options.keys),this.setCollection(t,o)}setCollection(t,s){if(this._docs=t,s&&!(s instanceof $i))throw new Error(K1);this._myIndex=s||Gy(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){wn(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const s=[];for(let o=0,l=this._docs.length;o<l;o+=1){const r=this._docs[o];t(r,o)&&(this.removeAt(o),o-=1,l-=1,s.push(r))}return s}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:s=-1}={}){const{includeMatches:o,includeScore:l,shouldSort:r,sortFn:i,ignoreFieldNorm:c}=this.options;let p=ot(t)?ot(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return SA(p,{ignoreFieldNorm:c}),r&&p.sort(i),Iy(s)&&s>-1&&(p=p.slice(0,s)),xA(p,this._docs,{includeMatches:o,includeScore:l})}_searchStringList(t){const s=Oa(t,this.options),{records:o}=this._myIndex,l=[];return o.forEach(({v:r,i,n:c})=>{if(!wn(r))return;const{isMatch:p,score:u,indices:d}=s.searchIn(r);p&&l.push({item:r,idx:i,matches:[{score:u,value:r,norm:c,indices:d}]})}),l}_searchLogical(t){const s=Hy(t,this.options),o=(c,p,u)=>{if(!c.children){const{keyId:y,searcher:f}=c,m=this._findMatches({key:this._keyStore.get(y),value:this._myIndex.getValueForItemAtKeyId(p,y),searcher:f});return m&&m.length?[{idx:u,item:p,matches:m}]:[]}const d=[];for(let y=0,f=c.children.length;y<f;y+=1){const m=c.children[y],g=o(m,p,u);if(g.length)d.push(...g);else if(c.operator===zl.AND)return[]}return d},l=this._myIndex.records,r={},i=[];return l.forEach(({$:c,i:p})=>{if(wn(c)){let u=o(s,c,p);u.length&&(r[p]||(r[p]={idx:p,item:c,matches:[]},i.push(r[p])),u.forEach(({matches:d})=>{r[p].matches.push(...d)}))}}),i}_searchObjectList(t){const s=Oa(t,this.options),{keys:o,records:l}=this._myIndex,r=[];return l.forEach(({$:i,i:c})=>{if(!wn(i))return;let p=[];o.forEach((u,d)=>{p.push(...this._findMatches({key:u,value:i[d],searcher:s}))}),p.length&&r.push({idx:c,item:i,matches:p})}),r}_findMatches({key:t,value:s,searcher:o}){if(!wn(s))return[];let l=[];if(vt(s))s.forEach(({v:r,i,n:c})=>{if(!wn(r))return;const{isMatch:p,score:u,indices:d}=o.searchIn(r);p&&l.push({score:u,key:t,value:r,idx:i,norm:c,indices:d})});else{const{v:r,n:i}=s,{isMatch:c,score:p,indices:u}=o.searchIn(r);c&&l.push({score:p,key:t,value:r,norm:i,indices:u})}return l}}Hs.version="6.6.2";Hs.createIndex=Gy;Hs.parseIndex=aA;Hs.config=he;Hs.parseQuery=Hy;BA(vA);const EA={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},FA=["value","disabled","onKeydown"],PA=["border","onClick"],TA={"w-4":"","text-right":"",op50:"","text-sm":""},$A=Ee({__name:"Goto",setup(n){k(E);const t=Q(),s=Q(),o=Q(),l=Q(),r=Q(""),i=Q(0);function c(v){return v!=null}const p=R(()=>new Hs(Ye.map(v=>{var P;return(P=v.meta)==null?void 0:P.slide}).filter(c),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),u=R(()=>r.value.startsWith("/")?r.value.substring(1):r.value),d=R(()=>p.value.search(u.value).map(v=>v.item)),y=R(()=>!!d.value.length);function f(){if(y.value){const v=d.value.at(i.value||0);v&&qs(v.no)}m()}function m(){r.value="",$s.value=!1}function g(v){v.preventDefault(),i.value++,i.value>=d.value.length&&(i.value=0),D()}function B(v){v.preventDefault(),i.value--,i.value<=-2&&(i.value=d.value.length-1),D()}function D(){var P;const v=(P=l.value)==null?void 0:P[i.value];v&&o.value&&(v.offsetTop+v.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:v.offsetTop+v.offsetHeight-o.value.offsetHeight+1}):v.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:v.offsetTop}))}function S(v){i.value=0,r.value=v.target.value}function w(v){qs(v),m()}return Ae($s,async v=>{var P;v?(r.value="",i.value=0,setTimeout(()=>{var T;return(T=s.value)==null?void 0:T.focus()},0)):(P=s.value)==null||P.blur()}),Ae(Ot,()=>{var v;(v=t.value)!=null&&v.contains(Ot.value)||m()}),(v,P)=>(h(),b("div",{id:"slidev-goto-dialog",ref_key:"container",ref:t,class:Le(["fixed right-5 transition-all",L($s)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[e("div",EA,[e("input",{id:"slidev-goto-input",ref_key:"input",ref:s,value:r.value,type:"text",disabled:!L($s),class:Le(["outline-none bg-transparent",{"text-red-400":!y.value&&r.value}]),placeholder:"Goto...",onKeydown:[rl(f,["enter"]),rl(m,["escape"]),rl(g,["down"]),rl(B,["up"])],onInput:S},null,42,FA)]),d.value.length>0?(h(),b("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(h(!0),b(Pe,null,Ds(d.value,(T,M)=>(h(),b("li",{ref_for:!0,ref_key:"items",ref:l,key:T.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:M===0?"":"t main",class:Le(i.value===M?"bg-active op100":"op80"),onClick:dg(W=>w(T.no),["stop"])},[e("div",TA,At(T.no),1),a(" "+At(T.title),1)],10,PA))),128))],512)):_e("v-if",!0)],2))}});const MA=F($A,[["__scopeId","data-v-f5ee02a7"],["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/Goto.vue"]]),UA=Ee({__name:"Controls",setup(n){k(E);const t=at(),s=at();return(o,l)=>(h(),b(Pe,null,[U($1,{modelValue:L(un),"onUpdate:modelValue":l[0]||(l[0]=r=>$e(un)?un.value=r:null)},null,8,["modelValue"]),U(MA),t.value?(h(),x(L(t),{key:0})):_e("v-if",!0),s.value?(h(),x(L(s),{key:1,modelValue:L(Ir),"onUpdate:modelValue":l[1]||(l[1]=r=>$e(Ir)?Ir.value=r:null)},null,8,["modelValue"])):_e("v-if",!0),L(Te).info?(h(),x(q1,{key:2,modelValue:L(Ao),"onUpdate:modelValue":l[2]||(l[2]=r=>$e(Ao)?Ao.value=r:null)},null,8,["modelValue"])):_e("v-if",!0)],64))}}),IA=F(UA,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/Controls.vue"]]),OA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},LA=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),RA=[LA];function GA(n,t){return h(),b("svg",OA,RA)}const jA={name:"carbon-settings-adjust",render:GA},qA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},NA=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),HA=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),WA=[NA,HA];function VA(n,t){return h(),b("svg",qA,WA)}const zA={name:"carbon-information",render:VA},KA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},YA=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),JA=[YA];function ZA(n,t){return h(),b("svg",KA,JA)}const QA={name:"carbon-download",render:ZA},XA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ev=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),nv=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),tv=[ev,nv];function sv(n,t){return h(),b("svg",XA,tv)}const ov={name:"carbon-user-speaker",render:sv},lv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},rv=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),av=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),iv=[rv,av];function cv(n,t){return h(),b("svg",lv,iv)}const pv={name:"carbon-presentation-file",render:cv},uv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},dv=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),yv=[dv];function fv(n,t){return h(),b("svg",uv,yv)}const hv={name:"carbon-pen",render:fv},mv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},gv=e("g",{fill:"currentColor"},[e("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),e("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),Cv=[gv];function _v(n,t){return h(),b("svg",mv,Cv)}const Av={name:"ph-cursor-duotone",render:_v},vv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Bv=e("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),bv=[Bv];function Dv(n,t){return h(),b("svg",vv,bv)}const Wy={name:"ph-cursor-fill",render:Dv},Sv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},wv=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),kv=[wv];function xv(n,t){return h(),b("svg",Sv,kv)}const Ev={name:"carbon-sun",render:xv},Fv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Pv=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Tv=[Pv];function $v(n,t){return h(),b("svg",Fv,Tv)}const Mv={name:"carbon-moon",render:$v},Uv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Iv=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Ov=[Iv];function Lv(n,t){return h(),b("svg",Uv,Ov)}const Rv={name:"carbon-apps",render:Lv},Gv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jv=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),qv=[jv];function Nv(n,t){return h(),b("svg",Gv,qv)}const Vy={name:"carbon-arrow-right",render:Nv},Hv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Wv=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Vv=[Wv];function zv(n,t){return h(),b("svg",Hv,Vv)}const Kv={name:"carbon-arrow-left",render:zv},Yv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jv=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Zv=[Jv];function Qv(n,t){return h(),b("svg",Yv,Zv)}const Xv={name:"carbon-maximize",render:Qv},e0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},n0=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),t0=[n0];function s0(n,t){return h(),b("svg",e0,t0)}const o0={name:"carbon-minimize",render:s0},l0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r0=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),a0=[r0];function i0(n,t){return h(),b("svg",l0,a0)}const c0={name:"carbon-checkmark",render:i0},p0={class:"select-list"},u0={class:"title"},d0={class:"items"},y0=["onClick"],f0=Ee({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(n,{emit:t}){const s=n;k(E);const o=tt(s,"modelValue",t,{passive:!0});return(l,r)=>{const i=c0;return h(),b("div",p0,[e("div",u0,At(n.title),1),e("div",d0,[(h(!0),b(Pe,null,Ds(n.items,c=>(h(),b("div",{key:c.value,class:Le(["item",{active:L(o)===c.value}]),onClick:()=>{var p;o.value=c.value,(p=c.onClick)==null||p.call(c)}},[U(i,{class:Le(["text-green-500",{"opacity-0":L(o)!==c.value}])},null,8,["class"]),a(" "+At(c.display||c.value),1)],10,y0))),128))])])}}});const h0=F(f0,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/SelectList.vue"]]),m0={class:"text-sm"},g0=Ee({__name:"Settings",setup(n){k(E);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(h(),b("div",m0,[U(h0,{modelValue:L(vl),"onUpdate:modelValue":o[0]||(o[0]=l=>$e(vl)?vl.value=l:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),C0=F(g0,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/Settings.vue"]]),_0={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},A0=Ee({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(n,{emit:t}){const s=n;k(E);const o=tt(s,"modelValue",t,{passive:!0}),l=Q();return cC(l,()=>{o.value=!1}),(r,i)=>(h(),b("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:Le({disabled:n.disabled}),onClick:i[0]||(i[0]=c=>o.value=!L(o))},[mn(r.$slots,"button",{class:Le({disabled:n.disabled})})],2),(h(),x(pd,null,[L(o)?(h(),b("div",_0,[mn(r.$slots,"menu")])):_e("v-if",!0)],1024))],512))}}),v0=F(A0,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/MenuButton.vue"]]),B0={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},b0={__name:"VerticalDivider",setup(n){return k(E),(t,s)=>(h(),b("div",B0))}},yl=F(b0,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),D0={render(){return[]}},S0={class:"slidev-icon-btn"},w0={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},k0={class:"my-auto"},x0={class:"opacity-50"},E0=Ee({__name:"NavControls",props:{persist:{default:!1}},setup(n){const t=n;k(E);const s=xa.smaller("md"),{isFullscreen:o,toggle:l}=wy,r=R(()=>ja.value?`?password=${ja.value}`:""),i=R(()=>`/presenter/${Ve.value}${r.value}`),c=R(()=>`/${Ve.value}${r.value}`),p=Q();function u(){p.value&&Ot.value&&p.value.contains(Ot.value)&&Ot.value.blur()}const d=R(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),y=at(),f=at();return It(()=>import("./DrawingControls-f9543b09.js"),[]).then(m=>f.value=m.default),(m,g)=>{const B=o0,D=Xv,S=Kv,w=Vy,v=Rv,P=Mv,T=Ev,M=Wy,W=Av,G=hv,K=pv,re=Rs("RouterLink"),de=ov,X=QA,Ce=zA,ve=jA;return h(),b("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[e("div",{class:Le(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",d.value]),onMouseleave:u},[L(ft)?_e("v-if",!0):(h(),b("button",{key:0,class:"slidev-icon-btn",onClick:g[0]||(g[0]=(...be)=>L(l)&&L(l)(...be))},[L(o)?(h(),x(B,{key:0})):(h(),x(D,{key:1}))])),e("button",{class:Le(["slidev-icon-btn",{disabled:!L(IM)}]),onClick:g[1]||(g[1]=(...be)=>L(Rt)&&L(Rt)(...be))},[U(S)],2),e("button",{class:Le(["slidev-icon-btn",{disabled:!L(UM)}]),title:"Next",onClick:g[2]||(g[2]=(...be)=>L(Lt)&&L(Lt)(...be))},[U(w)],2),L(ft)?_e("v-if",!0):(h(),b("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=be=>L(ky)())},[U(v)])),L($a)?_e("v-if",!0):(h(),b("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=be=>L(Ty)())},[L(Ei)?(h(),x(P,{key:0})):(h(),x(T,{key:1}))])),U(yl),L(ft)?_e("v-if",!0):(h(),b(Pe,{key:3},[!L(_n)&&!L(s)&&y.value?(h(),b(Pe,{key:0},[U(L(y)),U(yl)],64)):_e("v-if",!0),L(_n)?(h(),b("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=be=>Or.value=!L(Or))},[L(Or)?(h(),x(M,{key:0})):(h(),x(W,{key:1,class:"opacity-50"}))])):_e("v-if",!0)],64)),(!L(Te).drawings.presenterOnly||L(_n))&&!L(ft)?(h(),b(Pe,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=be=>st.value=!L(st))},[U(G),L(st)?(h(),b("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Xe({background:L(cs).color})},null,4)):_e("v-if",!0)]),U(yl)],64)):_e("v-if",!0),L(ft)?_e("v-if",!0):(h(),b(Pe,{key:5},[L(_n)?(h(),x(re,{key:0,to:c.value,class:"slidev-icon-btn",title:"Play Mode"},{default:_(()=>[U(K)]),_:1},8,["to"])):_e("v-if",!0),L(FM)?(h(),x(re,{key:1,to:i.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:_(()=>[U(de)]),_:1},8,["to"])):_e("v-if",!0),_e("v-if",!0)],64)),(h(),b(Pe,{key:6},[L(Te).download?(h(),b("button",{key:0,class:"slidev-icon-btn",onClick:g[8]||(g[8]=(...be)=>L(qa)&&L(qa)(...be))},[U(X)])):_e("v-if",!0)],64)),!L(_n)&&L(Te).info&&!L(ft)?(h(),b("button",{key:7,class:"slidev-icon-btn",onClick:g[9]||(g[9]=be=>Ao.value=!L(Ao))},[U(Ce)])):_e("v-if",!0),!L(_n)&&!L(ft)?(h(),x(v0,{key:8},{button:_(()=>[e("button",S0,[U(ve)])]),menu:_(()=>[U(C0)]),_:1})):_e("v-if",!0),L(ft)?_e("v-if",!0):(h(),x(yl,{key:9})),e("div",w0,[e("div",k0,[a(At(L(Ve))+" ",1),e("span",x0,"/ "+At(L(PM)),1)])]),U(L(D0))],34)],512)}}}),F0=F(E0,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/NavControls.vue"]]),zy={render(){return[]}},Ky={render(){return[]}},P0={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},T0=Ee({__name:"PresenterMouse",setup(n){return k(E),(t,s)=>{const o=Wy;return L(Tr).cursor?(h(),b("div",P0,[U(o,{class:"absolute",style:Xe({left:`${L(Tr).cursor.x}%`,top:`${L(Tr).cursor.y}%`})},null,8,["style"])])):_e("v-if",!0)}}}),$0=F(T0,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),M0=Ee({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(n){k(E),Ae(dn,()=>{var o,l;(o=dn.value)!=null&&o.meta&&dn.value.meta.preload!==!1&&(dn.value.meta.__preloaded=!0),(l=jr.value)!=null&&l.meta&&jr.value.meta.preload!==!1&&(jr.value.meta.__preloaded=!0)},{immediate:!0});const t=at();It(()=>import("./DrawingLayer-7a295a27.js"),[]).then(o=>t.value=o.default);const s=R(()=>Ye.filter(o=>{var l;return((l=o.meta)==null?void 0:l.__preloaded)||o===dn.value}));return(o,l)=>(h(),b(Pe,null,[_e(" Global Bottom "),U(L(Ky)),_e(" Slides "),U(lg,se(L(RM),{id:"slideshow",tag:"div"}),{default:_(()=>[(h(!0),b(Pe,null,Ds(s.value,r=>{var i;return id((h(),x(L(Ti),{key:r.path,is:r==null?void 0:r.component,clicks:r===L(dn)?L(In):0,"clicks-elements":((i=r.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:Le(L(Pi)(r)),route:r,context:o.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ld,r===L(dn)]])}),128))]),_:1},16),_e(" Global Top "),U(L(zy)),t.value?(h(),x(L(t),{key:0})):_e("v-if",!0),L(_n)?_e("v-if",!0):(h(),x($0,{key:1}))],64))}});const U0=F(M0,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/SlidesShow.vue"]]),I0=Ee({__name:"PrintStyle",setup(n){k(E);function t(s,{slots:o}){if(o.default)return kn("style",o.default())}return(s,o)=>(h(),x(t,null,{default:_(()=>[a(" @page { size: "+At(L(Ut))+"px "+At(L(Di))+"px; margin: 0px; } ",1)]),_:1}))}}),Yy=F(I0,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/PrintStyle.vue"]]),O0=Ee({__name:"Play",setup(n){k(E),A1();const t=Q();function s(r){var i;vp.value||((i=r.target)==null?void 0:i.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Lt():Rt())}GM(t);const o=R(()=>k5.value||vp.value);at();const l=at();return It(()=>import("./DrawingControls-f9543b09.js"),[]).then(r=>l.value=r.default),(r,i)=>(h(),b(Pe,null,[L(Ct)?(h(),x(Yy,{key:0})):_e("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Xe(L(Si))},[U(My,{class:"w-full h-full",style:Xe({background:"var(--slidev-slide-container-background, black)"}),width:L(Ct)?L(Cs).width.value:void 0,scale:L(vl),onPointerdown:s},{default:_(()=>[U(U0,{context:"slide"})]),controls:_(()=>[e("div",{class:Le(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"opacity-100 right-0":"opacity-0 p-2",L(Uo)?"pointer-events-none":""]])},[U(F0,{class:"m-auto",persist:o.value},null,8,["persist"])],2),!L(Te).drawings.presenterOnly&&!L(ft)&&l.value?(h(),x(L(l),{key:0,class:"ml-0"})):_e("v-if",!0)]),_:1},8,["style","width","scale"]),_e("v-if",!0)],4),U(IA)],64))}}),L0=F(O0,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Jy(n){return typeof n>"u"||n===null}function R0(n){return typeof n=="object"&&n!==null}function G0(n){return Array.isArray(n)?n:Jy(n)?[]:[n]}function j0(n,t){var s,o,l,r;if(t)for(r=Object.keys(t),s=0,o=r.length;s<o;s+=1)l=r[s],n[l]=t[l];return n}function q0(n,t){var s="",o;for(o=0;o<t;o+=1)s+=n;return s}function N0(n){return n===0&&Number.NEGATIVE_INFINITY===1/n}var H0=Jy,W0=R0,V0=G0,z0=q0,K0=N0,Y0=j0,Mi={isNothing:H0,isObject:W0,toArray:V0,repeat:z0,isNegativeZero:K0,extend:Y0};function Zy(n,t){var s="",o=n.reason||"(unknown reason)";return n.mark?(n.mark.name&&(s+='in "'+n.mark.name+'" '),s+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")",!t&&n.mark.snippet&&(s+=`

`+n.mark.snippet),o+" "+s):o}function Oo(n,t){Error.call(this),this.name="YAMLException",this.reason=n,this.mark=t,this.message=Zy(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Oo.prototype=Object.create(Error.prototype);Oo.prototype.constructor=Oo;Oo.prototype.toString=function(t){return this.name+": "+Zy(this,t)};var as=Oo,J0=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Z0=["scalar","sequence","mapping"];function Q0(n){var t={};return n!==null&&Object.keys(n).forEach(function(s){n[s].forEach(function(o){t[String(o)]=s})}),t}function X0(n,t){if(t=t||{},Object.keys(t).forEach(function(s){if(J0.indexOf(s)===-1)throw new as('Unknown option "'+s+'" is met in definition of "'+n+'" YAML type.')}),this.options=t,this.tag=n,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(s){return s},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Q0(t.styleAliases||null),Z0.indexOf(this.kind)===-1)throw new as('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}var rn=X0;function Gp(n,t){var s=[];return n[t].forEach(function(o){var l=s.length;s.forEach(function(r,i){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=i)}),s[l]=o}),s}function e2(){var n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,s;function o(l){l.multi?(n.multi[l.kind].push(l),n.multi.fallback.push(l)):n[l.kind][l.tag]=n.fallback[l.tag]=l}for(t=0,s=arguments.length;t<s;t+=1)arguments[t].forEach(o);return n}function Ga(n){return this.extend(n)}Ga.prototype.extend=function(t){var s=[],o=[];if(t instanceof rn)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(s=s.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new as("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof rn))throw new as("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new as("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new as("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof rn))throw new as("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(Ga.prototype);return l.implicit=(this.implicit||[]).concat(s),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=Gp(l,"implicit"),l.compiledExplicit=Gp(l,"explicit"),l.compiledTypeMap=e2(l.compiledImplicit,l.compiledExplicit),l};var n2=Ga,t2=new rn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),s2=new rn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),o2=new rn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),l2=new n2({explicit:[t2,s2,o2]});function r2(n){if(n===null)return!0;var t=n.length;return t===1&&n==="~"||t===4&&(n==="null"||n==="Null"||n==="NULL")}function a2(){return null}function i2(n){return n===null}var c2=new rn("tag:yaml.org,2002:null",{kind:"scalar",resolve:r2,construct:a2,predicate:i2,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function p2(n){if(n===null)return!1;var t=n.length;return t===4&&(n==="true"||n==="True"||n==="TRUE")||t===5&&(n==="false"||n==="False"||n==="FALSE")}function u2(n){return n==="true"||n==="True"||n==="TRUE"}function d2(n){return Object.prototype.toString.call(n)==="[object Boolean]"}var y2=new rn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:p2,construct:u2,predicate:d2,represent:{lowercase:function(n){return n?"true":"false"},uppercase:function(n){return n?"TRUE":"FALSE"},camelcase:function(n){return n?"True":"False"}},defaultStyle:"lowercase"});function f2(n){return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102}function h2(n){return 48<=n&&n<=55}function m2(n){return 48<=n&&n<=57}function g2(n){if(n===null)return!1;var t=n.length,s=0,o=!1,l;if(!t)return!1;if(l=n[s],(l==="-"||l==="+")&&(l=n[++s]),l==="0"){if(s+1===t)return!0;if(l=n[++s],l==="b"){for(s++;s<t;s++)if(l=n[s],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(s++;s<t;s++)if(l=n[s],l!=="_"){if(!f2(n.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(s++;s<t;s++)if(l=n[s],l!=="_"){if(!h2(n.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;s<t;s++)if(l=n[s],l!=="_"){if(!m2(n.charCodeAt(s)))return!1;o=!0}return!(!o||l==="_")}function C2(n){var t=n,s=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return s*parseInt(t.slice(2),2);if(t[1]==="x")return s*parseInt(t.slice(2),16);if(t[1]==="o")return s*parseInt(t.slice(2),8)}return s*parseInt(t,10)}function _2(n){return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!Mi.isNegativeZero(n)}var A2=new rn("tag:yaml.org,2002:int",{kind:"scalar",resolve:g2,construct:C2,predicate:_2,represent:{binary:function(n){return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)},octal:function(n){return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)},decimal:function(n){return n.toString(10)},hexadecimal:function(n){return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),v2=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function B2(n){return!(n===null||!v2.test(n)||n[n.length-1]==="_")}function b2(n){var t,s;return t=n.replace(/_/g,"").toLowerCase(),s=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:s*parseFloat(t,10)}var D2=/^[-+]?[0-9]+e/;function S2(n,t){var s;if(isNaN(n))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===n)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===n)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Mi.isNegativeZero(n))return"-0.0";return s=n.toString(10),D2.test(s)?s.replace("e",".e"):s}function w2(n){return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||Mi.isNegativeZero(n))}var k2=new rn("tag:yaml.org,2002:float",{kind:"scalar",resolve:B2,construct:b2,predicate:w2,represent:S2,defaultStyle:"lowercase"}),x2=l2.extend({implicit:[c2,y2,A2,k2]}),E2=x2,Qy=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Xy=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function F2(n){return n===null?!1:Qy.exec(n)!==null||Xy.exec(n)!==null}function P2(n){var t,s,o,l,r,i,c,p=0,u=null,d,y,f;if(t=Qy.exec(n),t===null&&(t=Xy.exec(n)),t===null)throw new Error("Date resolve error");if(s=+t[1],o=+t[2]-1,l=+t[3],!t[4])return new Date(Date.UTC(s,o,l));if(r=+t[4],i=+t[5],c=+t[6],t[7]){for(p=t[7].slice(0,3);p.length<3;)p+="0";p=+p}return t[9]&&(d=+t[10],y=+(t[11]||0),u=(d*60+y)*6e4,t[9]==="-"&&(u=-u)),f=new Date(Date.UTC(s,o,l,r,i,c,p)),u&&f.setTime(f.getTime()-u),f}function T2(n){return n.toISOString()}var $2=new rn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:F2,construct:P2,instanceOf:Date,represent:T2});function M2(n){return n==="<<"||n===null}var U2=new rn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:M2}),Ui=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function I2(n){if(n===null)return!1;var t,s,o=0,l=n.length,r=Ui;for(s=0;s<l;s++)if(t=r.indexOf(n.charAt(s)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function O2(n){var t,s,o=n.replace(/[\r\n=]/g,""),l=o.length,r=Ui,i=0,c=[];for(t=0;t<l;t++)t%4===0&&t&&(c.push(i>>16&255),c.push(i>>8&255),c.push(i&255)),i=i<<6|r.indexOf(o.charAt(t));return s=l%4*6,s===0?(c.push(i>>16&255),c.push(i>>8&255),c.push(i&255)):s===18?(c.push(i>>10&255),c.push(i>>2&255)):s===12&&c.push(i>>4&255),new Uint8Array(c)}function L2(n){var t="",s=0,o,l,r=n.length,i=Ui;for(o=0;o<r;o++)o%3===0&&o&&(t+=i[s>>18&63],t+=i[s>>12&63],t+=i[s>>6&63],t+=i[s&63]),s=(s<<8)+n[o];return l=r%3,l===0?(t+=i[s>>18&63],t+=i[s>>12&63],t+=i[s>>6&63],t+=i[s&63]):l===2?(t+=i[s>>10&63],t+=i[s>>4&63],t+=i[s<<2&63],t+=i[64]):l===1&&(t+=i[s>>2&63],t+=i[s<<4&63],t+=i[64],t+=i[64]),t}function R2(n){return Object.prototype.toString.call(n)==="[object Uint8Array]"}var G2=new rn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:I2,construct:O2,predicate:R2,represent:L2}),j2=Object.prototype.hasOwnProperty,q2=Object.prototype.toString;function N2(n){if(n===null)return!0;var t=[],s,o,l,r,i,c=n;for(s=0,o=c.length;s<o;s+=1){if(l=c[s],i=!1,q2.call(l)!=="[object Object]")return!1;for(r in l)if(j2.call(l,r))if(!i)i=!0;else return!1;if(!i)return!1;if(t.indexOf(r)===-1)t.push(r);else return!1}return!0}function H2(n){return n!==null?n:[]}var W2=new rn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:N2,construct:H2}),V2=Object.prototype.toString;function z2(n){if(n===null)return!0;var t,s,o,l,r,i=n;for(r=new Array(i.length),t=0,s=i.length;t<s;t+=1){if(o=i[t],V2.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[t]=[l[0],o[l[0]]]}return!0}function K2(n){if(n===null)return[];var t,s,o,l,r,i=n;for(r=new Array(i.length),t=0,s=i.length;t<s;t+=1)o=i[t],l=Object.keys(o),r[t]=[l[0],o[l[0]]];return r}var Y2=new rn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:z2,construct:K2}),J2=Object.prototype.hasOwnProperty;function Z2(n){if(n===null)return!0;var t,s=n;for(t in s)if(J2.call(s,t)&&s[t]!==null)return!1;return!0}function Q2(n){return n!==null?n:{}}var X2=new rn("tag:yaml.org,2002:set",{kind:"mapping",resolve:Z2,construct:Q2});E2.extend({implicit:[$2,U2],explicit:[G2,W2,Y2,X2]});function jp(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"":n===95?" ":n===76?"\u2028":n===80?"\u2029":""}var eB=new Array(256),nB=new Array(256);for(var Ps=0;Ps<256;Ps++)eB[Ps]=jp(Ps)?1:0,nB[Ps]=jp(Ps);function tB(n){return Array.from(new Set(n))}function qp(...n){let t,s,o;n.length===1?(t=0,o=1,[s]=n):[t,s,o=1]=n;const l=[];let r=t;for(;r<s;)l.push(r),r+=o||1;return l}function ef(n,t){if(!t||t==="all"||t==="*")return qp(1,n+1);const s=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[l,r]=o.split("-",2);s.push(...qp(+l,r?+r+1:n+1))}return tB(s).filter(o=>o<=n).sort((o,l)=>o-l)}function nf(n){const t=R(()=>n.value.path),s=R(()=>Ye.length),o=R(()=>Number.parseInt(t.value.split(/\//g).slice(-1)[0])||1),l=R(()=>hr(o.value)),r=R(()=>Ye.find(f=>f.path===`${o.value}`)),i=R(()=>{var f,m,g;return(g=(m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:g.id}),c=R(()=>{var f,m;return((m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.layout)||(o.value===1?"cover":"default")}),p=R(()=>Ye.find(f=>f.path===`${Math.min(Ye.length,o.value+1)}`)),u=R(()=>Ye.filter(f=>{var m,g;return(g=(m=f.meta)==null?void 0:m.slide)==null?void 0:g.title}).reduce((f,m)=>(Ii(f,m),f),[])),d=R(()=>Oi(u.value,r.value)),y=R(()=>Li(d.value));return{route:n,path:t,total:s,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:i,currentLayout:c,nextRoute:p,rawTree:u,treeWithActiveStatuses:d,tree:y,downloadPDF:qa,next:Lt,nextSlide:Lo,openInEditor:jM,prev:Rt,prevSlide:Ro}}function tf(n,t,s){const o=Q(0);on(()=>{vn.afterEach(async()=>{await on(),o.value+=1})});const l=R(()=>{var p,u;return o.value,((u=(p=t.value)==null?void 0:p.meta)==null?void 0:u.__clicksElements)||[]}),r=R(()=>{var p,u;return+(((u=(p=t.value)==null?void 0:p.meta)==null?void 0:u.clicks)??l.value.length)}),i=R(()=>s.value<Ye.length-1||n.value<r.value),c=R(()=>s.value>1||n.value>0);return{clicks:n,clicksElements:l,clicksTotal:r,hasNext:i,hasPrev:c}}const sB=["id"],oB=Ee({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(n,{emit:t}){const s=n,o=tt(s,"clicksElements",t),l=R(()=>({height:`${Di}px`,width:`${Ut}px`})),r=at();It(()=>Promise.resolve().then(()=>E1),void 0).then(u=>r.value=u.default);const i=R(()=>s.clicks),c=tf(i,s.nav.currentRoute,s.nav.currentPage),p=R(()=>`${s.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return Sn(E,We({nav:{...s.nav,...c},configs:Te,themeConfigs:R(()=>Te.themeConfig)})),(u,d)=>{var y;return h(),b("div",{id:p.value,class:"print-slide-container",style:Xe(l.value)},[U(L(Ky)),U(L(Ti),{is:(y=u.route)==null?void 0:y.component,"clicks-elements":L(o),"onUpdate:clicksElements":d[0]||(d[0]=f=>$e(o)?o.value=f:null),clicks:i.value,"clicks-disabled":!1,class:Le(L(Pi)(u.route)),route:u.route},null,8,["is","clicks-elements","clicks","class","route"]),r.value?(h(),x(L(r),{key:0,page:+u.route.path},null,8,["page"])):_e("v-if",!0),U(L(zy))],12,sB)}}}),Np=F(oB,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),lB=Ee({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(n){var r;const t=n;k(E);const s=Q(((r=t.route.meta)==null?void 0:r.__clicksElements)||[]),o=R(()=>t.route),l=nf(o);return(i,c)=>(h(),b(Pe,null,[U(Np,{"clicks-elements":s.value,"onUpdate:clicksElements":c[0]||(c[0]=p=>s.value=p),clicks:0,nav:L(l),route:o.value},null,8,["clicks-elements","nav","route"]),L(vo)?_e("v-if",!0):(h(!0),b(Pe,{key:0},Ds(s.value.length,p=>(h(),x(Np,{key:p,clicks:p,nav:L(l),route:o.value},null,8,["clicks","nav","route"]))),128))],64))}}),rB=F(lB,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/PrintSlide.vue"]]),aB={id:"print-content"},iB=Ee({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(n){const t=n;k(E);const s=R(()=>t.width),o=R(()=>t.width/Mt),l=R(()=>s.value/o.value),r=R(()=>l.value<Mt?s.value/Ut:o.value*Mt/Ut);let i=Ye;Ln.value.query.range&&(i=ef(i.length,Ln.value.query.range).map(u=>i[u-1]));const c=R(()=>({"select-none":!Te.selectable}));return Sn(Yd,r),(p,u)=>(h(),b("div",{id:"print-container",class:Le(c.value)},[e("div",aB,[(h(!0),b(Pe,null,Ds(L(i),d=>(h(),x(rB,{key:d.path,route:d},null,8,["route"]))),128))]),mn(p.$slots,"controls")],2))}});const cB=F(iB,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/PrintContainer.vue"]]),pB=Ee({__name:"Print",setup(n){return k(E),bs(()=>{Ct?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,s)=>(h(),b(Pe,null,[L(Ct)?(h(),x(Yy,{key:0})):_e("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Xe(L(Si))},[U(cB,{class:"w-full h-full",style:Xe({background:"var(--slidev-slide-container-background, black)"}),width:L(Cs).width.value},null,8,["style","width"])],4)],64))}});const uB=F(pB,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/internals/Print.vue"]]);const dB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},yB=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),fB=[yB];function hB(n,t){return h(),b("svg",dB,fB)}const mB={name:"carbon-logo-github",render:hB};function Hp(n){return n.startsWith("/")?"/2023CSCamp"+n.slice(1):n}function gB(n,t=!1){const s=n&&["#","rgb","hsl"].some(l=>n.indexOf(l)===0),o={background:s?n:void 0,color:n&&!s?"white":void 0,backgroundImage:s?void 0:n?t?`linear-gradient(#0005, #0008), url(${Hp(n)})`:`url("${Hp(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const CB={class:"my-auto w-full"},_B=Ee({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(n){const t=n;k(E);const s=R(()=>gB(t.background,!0));return(o,l)=>(h(),b("div",{class:"slidev-layout cover text-center",style:Xe(s.value)},[e("div",CB,[mn(o.$slots,"default")])],4))}}),AB=F(_B,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),vB=e("h1",null,"Welcome to 2023 Computer Science Summer Camp",-1),BB={class:"pt-12"},bB={class:"abs-br m-6 flex gap-2"},DB={href:"https://github.com/GNITOAHC/2023CSCamp",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},SB={__name:"1",setup(n){const t={theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`Presentation slides for NCCU 2023 CS Camp.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",hideInToc:!0},s=k(E);return(o,l)=>{const r=Vy,i=mB;return h(),x(AB,O(I(t)),{default:_(()=>[vB,e("div",BB,[e("span",{onClick:l[0]||(l[0]=(...c)=>L(s).nav.next&&L(s).nav.next(...c)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[a(" Start "),U(r,{class:"inline"})])]),e("div",bB,[e("a",DB,[U(i)])])]),_:1},16)}}},wB=F(SB,[["__file","/@slidev/slides/1.md"]]),kB=["href","innerHTML"],xB=["href"],EB=Ee({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(n){return k(E),(t,s)=>{const o=Rs("RouterLink");return!L(Ct)&&t.title?(h(),x(o,{key:0,to:String(t.to),onClick:s[0]||(s[0]=l=>l.target.blur()),innerHTML:t.title},null,8,["to","innerHTML"])):!L(Ct)&&!t.title?(h(),x(o,{key:1,to:String(t.to),onClick:s[1]||(s[1]=l=>l.target.blur())},{default:_(()=>[mn(t.$slots,"default")]),_:3},8,["to"])):L(Ct)&&t.title?(h(),b("a",{key:2,href:`#${t.to}`,innerHTML:t.title},null,8,kB)):(h(),b("a",{key:3,href:`#${t.to}`},[mn(t.$slots,"default")],8,xB))}}}),FB=F(EB,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/builtin/Link.vue"]]),PB={key:0},TB={key:1},$B={key:2},MB={key:3},UB={key:4},IB={key:5},OB={key:6},LB={key:7},RB={key:8},GB={key:9},jB={key:10},qB={key:11},NB={key:12},HB={key:13},WB={key:14},VB={key:15},zB={key:16},KB={key:17},YB={key:18},JB={key:19},ZB={key:20},QB={key:21},XB={key:22},e6={key:23},n6={key:24},t6={key:25},s6={key:26},o6={key:27},l6={key:28},r6={key:29},a6={key:30},i6={key:31},c6={key:32},p6={key:33},u6={key:34},d6={key:35},y6={key:36},f6={key:37},h6={key:38},m6={key:39},g6={key:40},C6={key:41},_6={key:42},A6={key:43},v6={key:44},B6={key:45},b6={key:46},D6={key:47},S6={key:48},w6={key:49},k6={key:50},x6={key:51},E6={key:52},F6={key:53},P6={key:54},T6={key:55},$6={key:56},M6={key:57},U6={key:58},I6={key:59},O6={key:60},L6={key:61},R6={key:62},G6={key:63},j6={key:64},q6={key:65},N6={key:66},H6={key:67},W6={key:68},V6={key:69},z6={key:70},K6={key:71},Y6={key:72},J6={key:73},Z6={key:74},Q6={key:75},X6={key:76},e7={key:77},n7={key:78},t7={key:79},s7={key:80},o7={key:81},l7={key:82},r7={key:83},a7={key:84},i7={key:85},c7={key:86},p7={key:87},u7={key:88},d7={key:89},y7={key:90},f7={key:91},h7={key:92},m7={key:93},g7={key:94},C7={key:95},_7={key:96},A7={key:97},v7={key:98},B7={key:99},b7={key:100},D7={key:101},S7={key:102},w7={key:103},k7={key:104},x7={key:105},E7={key:106},F7={key:107},P7={key:108},T7={key:109},$7={key:110},M7={key:111},U7={key:112},I7={key:113},O7={key:114},L7={key:115},R7={key:116},G7={key:117},j7={key:118},q7={key:119},N7={key:120},H7={key:121},W7={key:122},V7={key:123},z7={key:124},K7={key:125},Y7={key:126},J7={key:127},Z7={key:128},Q7={key:129},X7={key:130},eb={key:131},nb={key:132},tb=Ee({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(n){return(t,s)=>(h(),b("div",null,[+t.no==1?(h(),b("p",PB,"NCCU 2023CSCamp")):+t.no==2?(h(),b("p",TB,"undefined")):+t.no==3?(h(),b("p",$B,"C# - 1 Basic")):+t.no==4?(h(),b("p",MB,"Write a Hello World program")):+t.no==5?(h(),b("p",UB,"Basic Programming Concepts 基礎程式觀念")):+t.no==6?(h(),b("p",IB,"Comments 註解")):+t.no==7?(h(),b("p",OB,"Variables & Data types 變數與資料型態")):+t.no==8?(h(),b("p",LB,"int, float & double")):+t.no==9?(h(),b("p",RB,"char & string")):+t.no==10?(h(),b("p",GB,"boolean")):+t.no==11?(h(),b("p",jB,"Array 陣列")):+t.no==12?(h(),b("p",qB,"Array")):+t.no==13?(h(),b("p",NB,"Array")):+t.no==14?(h(),b("p",HB,"Loops 迴圈")):+t.no==15?(h(),b("p",WB,"while")):+t.no==16?(h(),b("p",VB,"do while")):+t.no==17?(h(),b("p",zB,"for")):+t.no==18?(h(),b("p",KB,"A Number Guessing Game")):+t.no==19?(h(),b("p",YB,"A Number Guessing Game")):+t.no==20?(h(),b("p",JB,"A Number Guessing Game")):+t.no==21?(h(),b("p",ZB,"A Number Guessing Game")):+t.no==22?(h(),b("p",QB,"A Number Guessing Game")):+t.no==23?(h(),b("p",XB,"Function")):+t.no==24?(h(),b("p",e6,"Function")):+t.no==25?(h(),b("p",n6,"Function")):+t.no==26?(h(),b("p",t6,"Function")):+t.no==27?(h(),b("p",s6,"Function")):+t.no==28?(h(),b("p",o6,"Function")):+t.no==29?(h(),b("p",l6,"Function")):+t.no==30?(h(),b("p",r6,"Function")):+t.no==31?(h(),b("p",a6,"C# - 2 Class")):+t.no==32?(h(),b("p",i6,"Class (類別)")):+t.no==33?(h(),b("p",c6,"Class (類別)")):+t.no==34?(h(),b("p",p6,"Class (類別)")):+t.no==35?(h(),b("p",u6,"Class(類別)")):+t.no==36?(h(),b("p",d6,"Class(類別)")):+t.no==37?(h(),b("p",y6,"Class(類別)")):+t.no==38?(h(),b("p",f6,"Lab")):+t.no==39?(h(),b("p",h6,"Answer")):+t.no==40?(h(),b("p",m6,"Unity Introduction")):+t.no==41?(h(),b("p",g6,"Download Unity Hub")):+t.no==42?(h(),b("p",C6,"Unity Showcase")):+t.no==43?(h(),b("p",_6,"Install Unity Editor")):+t.no==44?(h(),b("p",A6,"undefined")):+t.no==45?(h(),b("p",v6,"Unity - 1 Player and Platforms")):+t.no==46?(h(),b("p",B6,"Create a Project with Unity Hub")):+t.no==47?(h(),b("p",b6,"undefined")):+t.no==48?(h(),b("p",D6,"Create Platforms")):+t.no==49?(h(),b("p",S6,"undefined")):+t.no==50?(h(),b("p",w6,"Add Player")):+t.no==51?(h(),b("p",k6,"BoxCollider2D")):+t.no==52?(h(),b("p",x6,"undefined")):+t.no==53?(h(),b("p",E6,"undefined")):+t.no==54?(h(),b("p",F6,"RigidBody2D")):+t.no==55?(h(),b("p",P6,"C# Script")):+t.no==56?(h(),b("p",T6,"Unity - 2 PlayerController script")):+t.no==57?(h(),b("p",$6,"Playcontroller Script")):+t.no==58?(h(),b("p",M6,"C# script")):+t.no==59?(h(),b("p",U6,"undefined")):+t.no==60?(h(),b("p",I6,"undefined")):+t.no==61?(h(),b("p",O6,"Input function")):+t.no==62?(h(),b("p",L6,"IsGrounded function")):+t.no==63?(h(),b("p",R6,"Setup Playcontroller Script")):+t.no==64?(h(),b("p",G6,"Add Ground Check")):+t.no==65?(h(),b("p",j6,"undefined")):+t.no==66?(h(),b("p",q6,"Add Ground Layer")):+t.no==67?(h(),b("p",N6,"Drag components for script")):+t.no==68?(h(),b("p",H6,"Unity - 3 PlatformsMovement Script")):+t.no==69?(h(),b("p",W6,"C# Script")):+t.no==70?(h(),b("p",V6,"undefined")):+t.no==71?(h(),b("p",z6,"undefined")):+t.no==72?(h(),b("p",K6,"undefined")):+t.no==73?(h(),b("p",Y6,"Dragging Script and Setting Components")):+t.no==74?(h(),b("p",J6,"undefined")):+t.no==75?(h(),b("p",Z6,"undefined")):+t.no==76?(h(),b("p",Q6,"Stop the Tremble of Player")):+t.no==77?(h(),b("p",X6,"Concept")):+t.no==78?(h(),b("p",e7,"undefined")):+t.no==79?(h(),b("p",n7,"undefined")):+t.no==80?(h(),b("p",t7,"undefined")):+t.no==81?(h(),b("p",s7,"Setup from Unity Editor")):+t.no==82?(h(),b("p",o7,"undefined")):+t.no==83?(h(),b("p",l7,"undefined")):+t.no==84?(h(),b("p",r7,"Unity - 4 ObjectFalling Script")):+t.no==85?(h(),b("p",a7,"ObjectFalling and GameManager")):+t.no==86?(h(),b("p",i7,"Create Triangle Prefab")):+t.no==87?(h(),b("p",c7,"undefined")):+t.no==88?(h(),b("p",p7,"undefined")):+t.no==89?(h(),b("p",u7,"undefined")):+t.no==90?(h(),b("p",d7,"Create the Two Scripts")):+t.no==91?(h(),b("p",y7,"ObjectFalling")):+t.no==92?(h(),b("p",f7,"undefined")):+t.no==93?(h(),b("p",h7,"undefined")):+t.no==94?(h(),b("p",m7,"undefined")):+t.no==95?(h(),b("p",g7,"undefined")):+t.no==96?(h(),b("p",C7,"Unity - 5 UI & UX")):+t.no==97?(h(),b("p",_7,"Create a Canvas for our UI")):+t.no==98?(h(),b("p",A7,"undefined")):+t.no==99?(h(),b("p",v7,"undefined")):+t.no==100?(h(),b("p",B7,"undefined")):+t.no==101?(h(),b("p",b7,"GameManager Script")):+t.no==102?(h(),b("p",D7,"undefined")):+t.no==103?(h(),b("p",S7,"undefined")):+t.no==104?(h(),b("p",w7,"PlayerInteract Script Integration")):+t.no==105?(h(),b("p",k7,"undefined")):+t.no==106?(h(),b("p",x7,"undefined")):+t.no==107?(h(),b("p",E7,"Unity - 6 - Restart")):+t.no==108?(h(),b("p",F7,"Restart Panel")):+t.no==109?(h(),b("p",P7,"undefined")):+t.no==110?(h(),b("p",T7,"undefined")):+t.no==111?(h(),b("p",$7,"Fine Tuning UI - 1")):+t.no==112?(h(),b("p",M7,"undefined")):+t.no==113?(h(),b("p",U7,"Script")):+t.no==114?(h(),b("p",I7,"undefined")):+t.no==115?(h(),b("p",O7,"undefined")):+t.no==116?(h(),b("p",L7,"undefined")):+t.no==117?(h(),b("p",R7,"Scripts Setup")):+t.no==118?(h(),b("p",G7,"undefined")):+t.no==119?(h(),b("p",j7,"Fine Tuning UI - 2")):+t.no==120?(h(),b("p",q7,"undefined")):+t.no==121?(h(),b("p",N7,"Deploy Our game")):+t.no==122?(h(),b("p",H7,"Build Settings")):+t.no==123?(h(),b("p",W7,"undefined")):+t.no==124?(h(),b("p",V7,"undefined")):+t.no==125?(h(),b("p",z7,"undefined")):+t.no==126?(h(),b("p",K7,"undefined")):+t.no==127?(h(),b("p",Y7,"Itch.io deploy")):+t.no==128?(h(),b("p",J7,"undefined")):+t.no==129?(h(),b("p",Z7,"undefined")):+t.no==130?(h(),b("p",Q7,"undefined")):+t.no==131?(h(),b("p",X7,"Final Product")):+t.no==132?(h(),b("p",eb,"Resources")):+t.no==133?(h(),b("p",nb,"Learn More")):_e("v-if",!0)]))}}),sb=F(tb,[["__file","/@slidev/titles.md"]]),ob=Ee({__name:"TocList",props:{level:{type:Number,required:!0,default:1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(n){const t=n;k(E);const s=R(()=>[...m3(t.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${t.level}`]);return(o,l)=>{const r=FB,i=Rs("TocList",!0);return o.list&&o.list.length>0?(h(),b("ol",{key:0,class:Le(s.value)},[(h(!0),b(Pe,null,Ds(o.list,c=>(h(),b("li",{key:c.path,class:Le(["slidev-toc-item",[{"slidev-toc-item-active":c.active},{"slidev-toc-item-parent-active":c.activeParent}]])},[U(r,{to:c.path},{default:_(()=>[U(L(sb),{no:c.path},null,8,["no"])]),_:2},1032,["to"]),c.children.length>0?(h(),x(i,{key:0,level:o.level+1,list:c.children,"list-class":o.listClass},null,8,["level","list","list-class"])):_e("v-if",!0)],2))),128))],2)):_e("v-if",!0)}}});const lb=F(ob,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/builtin/TocList.vue"]]),rb=Ee({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:1/0},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(n){const t=n,s=k(E);function o(c,p=1){if(p>Number(t.maxDepth))return[];if(p<Number(t.minDepth)){const u=c.find(d=>d.active||d.activeParent);return u?o(u.children,p+1):[]}return c.map(u=>({...u,children:o(u.children,p+1)}))}function l(c){return c.filter(p=>p.active||p.activeParent||p.hasActiveParent).map(p=>({...p,children:l(p.children)}))}function r(c){const p=c.some(u=>u.active||u.activeParent||u.hasActiveParent);return c.filter(()=>p).map(u=>({...u,children:r(u.children)}))}const i=R(()=>{const c=s==null?void 0:s.nav.tree;if(!c)return[];let p=o(c);return t.mode==="onlyCurrentTree"?p=l(p):t.mode==="onlySiblings"&&(p=r(p)),p});return(c,p)=>{const u=lb;return h(),b("div",{class:"slidev-toc",style:Xe(`column-count:${c.columns}`)},[U(u,{level:1,list:i.value,"list-class":c.listClass},null,8,["list","list-class"])],4)}}}),Jn=F(rb,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/builtin/Toc.vue"]]),ab={class:"slidev-layout default"},ib={__name:"default",setup(n){return k(E),(t,s)=>(h(),b("div",ab,[mn(t.$slots,"default")]))}},H=F(ib,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/layouts/default.vue"]]),cb={__name:"2",setup(n){const t={};return k(E),(s,o)=>{const l=Jn;return h(),x(H,O(I(t)),{default:_(()=>[U(l,{listClass:"toc",maxDepth:"1",columns:"2"})]),_:1},16)}}},pb=F(cb,[["__file","/@slidev/slides/2.md"]]),ub={class:"slidev-layout center h-full grid place-content-center"},db={class:"my-auto"},yb={__name:"center",setup(n){return k(E),(t,s)=>(h(),b("div",ub,[e("div",db,[mn(t.$slots,"default")])]))}},Gn=F(yb,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/layouts/center.vue"]]),fb=e("h1",null,"C# - 1 Basic",-1),hb={__name:"3",setup(n){const t={layout:"center",hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>(h(),x(Gn,O(I(t)),{default:_(()=>[fb]),_:1},16))}},mb=F(hb,[["__file","/@slidev/slides/3.md"]]),gb={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Cb=e("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),_b=[Cb];function Ab(n,t){return h(),b("svg",gb,_b)}const vb={name:"ph-clipboard",render:Ab},Bb={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},bb=e("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Db=[bb];function Sb(n,t){return h(),b("svg",Bb,Db)}const wb={name:"ph-check-circle",render:Sb},kb=["title"],xb=Ee({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},startLine:{type:Number,default:1},lines:{type:Boolean,default:Te.lineNumbers},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(n){const t=n;k(E);const s=k(mo),o=k(os),l=k(go);function r(y=5){const f=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=m.length;for(let B=0;B<y;B++)f.push(m.charAt(Math.floor(Math.random()*g)));return f.join("")}const i=Q(),c=Fn();Wt(()=>{const y=t.at==null?o==null?void 0:o.value.length:t.at,f=R(()=>l!=null&&l.value?t.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(y||0)),t.ranges.length-1)),m=R(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(l!=null&&l.value)){const g=r(),B=g3(t.ranges.length-1).map(D=>g+D);o!=null&&o.value&&(o.value.push(...B),pr(()=>B.forEach(D=>_a(o.value,D)),c))}bs(()=>{if(!i.value)return;const B=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value],D=t.startLine;for(const S of B){const w=Array.from(S.querySelectorAll(".line")),v=ef(w.length+D-1,m.value);if(w.forEach((P,T)=>{const M=v.includes(T+D);P.classList.toggle(es,!0),P.classList.toggle("highlighted",M),P.classList.toggle("dishonored",!M)}),t.maxHeight){const P=Array.from(S.querySelectorAll(".line.highlighted"));P.reduce((M,W)=>W.offsetHeight+M,0)>i.value.offsetHeight?P[0].scrollIntoView({behavior:"smooth",block:"start"}):P.length>0&&P[Math.round((P.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:u}=gC();function d(){var f,m;const y=(m=(f=i.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:m.textContent;y&&u(y)}return(y,f)=>{const m=wb,g=vb;return h(),b("div",{ref_key:"el",ref:i,class:Le(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":t.lines}]),style:Xe({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0,"--start":t.startLine})},[mn(y.$slots,"default"),L(Te).codeCopy?(h(),b("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:L(p)?"Copied":"Copy",onClick:f[0]||(f[0]=B=>d())},[L(p)?(h(),x(m,{key:0,class:"p-2 w-8 h-8"})):(h(),x(g,{key:1,class:"p-2 w-8 h-8"}))],8,kb)):_e("v-if",!0)],6)}}}),fe=F(xb,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),Eb=e("h2",null,"Write a Hello World program",-1),Fb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Hello World!"'),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Hello World!"'),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),Pb=e("p",null,"output",-1),Tb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Hello"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"World"),e("span",{style:{color:"#CB7676"}},"!")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"Hello"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"World"),e("span",{style:{color:"#AB5959"}},"!")])])])],-1),$b={__name:"4",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[Eb,U(l,se({},{ranges:[""]}),{default:_(()=>[Fb]),_:1},16),Pb,U(l,se({},{ranges:[""]}),{default:_(()=>[Tb]),_:1},16)]),_:1},16)}}},Mb=F($b,[["__file","/@slidev/slides/4.md"]]),Ub=e("h2",null,"Basic Programming Concepts 基礎程式觀念",-1),Ib={__name:"5",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=Jn;return h(),x(H,O(I(t)),{default:_(()=>[Ub,U(l,{listClass:"toc",minDepth:"2",mode:"onlyCurrentTree"})]),_:1},16)}}},Ob=F(Ib,[["__file","/@slidev/slides/5.md"]]),Lb=e("h3",null,"Comments 註解",-1),Rb=e("ul",null,[e("li",null,"Doesn’t affect the functionality of programs"),e("li",null,"Written for the purpose of explaining codes to developers")],-1),Gb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Hello World!"'),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'// This line outputs "Hello World!" to screen')])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Hello World!"'),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'// This line outputs "Hello World!" to screen')])])])],-1),jb=e("p",null,"output",-1),qb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Hello"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"World"),e("span",{style:{color:"#CB7676"}},"!")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"Hello"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"World"),e("span",{style:{color:"#AB5959"}},"!")])])])],-1),Nb={__name:"6",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[Lb,Rb,U(l,se({},{ranges:["all","3"]}),{default:_(()=>[Gb]),_:1},16),jb,U(l,se({},{ranges:[""]}),{default:_(()=>[qb]),_:1},16)]),_:1},16)}}},Hb=F(Nb,[["__file","/@slidev/slides/6.md"]]),Wb=e("h3",null,"Variables & Data types 變數與資料型態",-1),Vb=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"type"),e("th",null,"function"),e("th")])]),e("tbody",null,[e("tr",null,[e("td",null,"int"),e("td",null,"32-bit signed integer"),e("td",null,"整數")]),e("tr",null,[e("td",null,"double"),e("td",null,"64-bit floating point type"),e("td",null,"浮點數")]),e("tr",null,[e("td",null,"float"),e("td",null,"32-bit floating point type"),e("td",null,"浮點數")]),e("tr",null,[e("td",null,"char"),e("td",null,"16-bit single Unicode character"),e("td",null,"字元")]),e("tr",null,[e("td",null,"string"),e("td",null,"A sequence of Unicode characters"),e("td",null,"字串")]),e("tr",null,[e("td",null,"bool"),e("td",null,"8-bit logical true/false value"),e("td",null,"布林值")])])],-1),zb={__name:"7",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[Wb,Vb]),_:1},16))}},Kb=F(zb,[["__file","/@slidev/slides/7.md"]]),Yb=e("h4",null,"int, float & double",-1),Jb=e("ul",null,[e("li",null,"int 整數"),e("li",null,"float, double 浮點數")],-1),Zb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"integer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"integer"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"f_num"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1.5f"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"f_num"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"double"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"d_num"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3.14"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"d_num"),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"integer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"integer"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"f_num"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1.5f"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"f_num"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"double"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"d_num"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"3.14"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"d_num"),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),Qb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"5")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"1.5")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"3.14")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"5")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"1.5")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"3.14")])])])],-1),Xb={__name:"8",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[Yb,Jb,U(l,se({},{ranges:["all","3,4","6,7","9,10"]}),{default:_(()=>[Zb]),_:1},16),a(" output "),U(l,se({},{ranges:[""]}),{default:_(()=>[Qb]),_:1},16)]),_:1},16)}}},eD=F(Xb,[["__file","/@slidev/slides/8.md"]]),nD=e("h4",null,"char & string",-1),tD=e("ul",null,[e("li",null,"char 字元"),e("li",null,"string 字串")],-1),sD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"char"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"gender"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#C98A7D"}},"m"),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"gender"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Alex"'),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"char"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"gender"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#B56959"}},"m"),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"gender"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Alex"'),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),oD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"m")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Alex")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"m")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"Alex")])])])],-1),lD={__name:"9",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[nD,tD,U(l,se({},{ranges:["all","3,4","6,7"]}),{default:_(()=>[sD]),_:1},16),a(" output "),U(l,se({},{ranges:[""]}),{default:_(()=>[oD]),_:1},16)]),_:1},16)}}},rD=F(lD,[["__file","/@slidev/slides/9.md"]]),aD=e("h4",null,"boolean",-1),iD=e("ul",null,[e("li",null,"bool 布林值")],-1),cD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"bool"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"is_student"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"is_student"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Yes"'),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"else")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"No"'),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"bool"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"is_student"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"is_student"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Yes"'),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"else")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"No"'),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),pD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Yes")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"Yes")])])])],-1),uD={__name:"10",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[aD,iD,U(l,se({},{ranges:["all","3","4,5","6,7"]}),{default:_(()=>[cD]),_:1},16),a(" output "),U(l,se({},{ranges:[""]}),{default:_(()=>[pD]),_:1},16)]),_:1},16)}}},dD=F(uD,[["__file","/@slidev/slides/10.md"]]),yD=e("h2",null,"Array 陣列",-1),fD=e("p",null,"What is an array?",-1),hD=e("ul",null,[e("li",null,"An array is a collection of items of same data type stored at contiguous memory locations")],-1),mD=e("p",null,"What is the purpose of using arrays?",-1),gD=e("ul",null,[e("li",null,"To store multiple pieces of data of the same type together")],-1),CD={__name:"11",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[yD,fD,hD,mD,gD]),_:1},16))}},_D=F(CD,[["__file","/@slidev/slides/11.md"]]),AD=e("h3",null,"Array",-1),vD=e("p",null,"Declaration",-1),BD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"type"),e("span",{style:{color:"#858585"}},"[]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"arrayName"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// all elements are initialized with the default value")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"type"),e("span",{style:{color:"#8E8F8B"}},"[]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"arrayName"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// all elements are initialized with the default value")])])])],-1),bD={__name:"12",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[AD,vD,U(l,se({},{ranges:[""]}),{default:_(()=>[BD]),_:1},16)]),_:1},16)}}},DD=F(bD,[["__file","/@slidev/slides/12.md"]]),SD=e("h3",null,"Array",-1),wD=e("p",null,"Example",-1),kD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Declare a single-dimensional array of 5 integers.")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#858585"}},"[]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"arr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},"];")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// arr[0] = 0, arr[1] = 0, arr[2] = 0, arr[3] = 0, arr[4] = 0")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Declare and set array element values")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#858585"}},"[]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"arr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},"};")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// You can also do in this way")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#858585"}},"[]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"arr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#858585"}},"[]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"20"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"30"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"40"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"50"),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Declare a two dimensional array (uses a comma inside bracket)")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"int"),e("span",{style:{color:"#858585"}},"[,]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"arr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},"];")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"//[0, 0] [0, 1] [0, 2]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"//[1, 0] [1, 1] [1, 2]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Declare and set array element values")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#858585"}},"[,]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"arr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},"},"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"6"),e("span",{style:{color:"#858585"}},"}};")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Declare a single-dimensional array of 5 integers.")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#8E8F8B"}},"[]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"arr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},"];")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// arr[0] = 0, arr[1] = 0, arr[2] = 0, arr[3] = 0, arr[4] = 0")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Declare and set array element values")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#8E8F8B"}},"[]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"arr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},"};")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// You can also do in this way")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#8E8F8B"}},"[]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"arr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#8E8F8B"}},"[]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"20"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"30"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"40"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"50"),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Declare a two dimensional array (uses a comma inside bracket)")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"int"),e("span",{style:{color:"#8E8F8B"}},"[,]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"arr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},"];")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"//[0, 0] [0, 1] [0, 2]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"//[1, 0] [1, 1] [1, 2]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Declare and set array element values")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#8E8F8B"}},"[,]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"arr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},"},"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"6"),e("span",{style:{color:"#8E8F8B"}},"}};")])])])],-1),xD={__name:"13",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[SD,wD,U(l,se({},{ranges:["all","1-3","5,6","8,9","11-14","16,17,18"]}),{default:_(()=>[kD]),_:1},16)]),_:1},16)}}},ED=F(xD,[["__file","/@slidev/slides/13.md"]]),FD=e("h2",null,"Loops 迴圈",-1),PD={__name:"14",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=Jn;return h(),x(H,O(I(t)),{default:_(()=>[FD,U(l,{listClass:"toc",minDepth:"2",maxDepth:"3",mode:"onlyCurrentTree"})]),_:1},16)}}},TD=F(PD,[["__file","/@slidev/slides/14.md"]]),$D=e("h3",null,"while",-1),MD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"condition"),e("span",{style:{color:"#858585"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"statement")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"condition"),e("span",{style:{color:"#8E8F8B"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"statement")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),UD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Hello World"'),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"i"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Hello World"'),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ID=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Hello"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"World")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Hello"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"World")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Hello"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"World")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"Hello"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"World")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"Hello"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"World")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"Hello"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"World")])])])],-1),OD={__name:"15",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[$D,U(l,se({},{ranges:[""]}),{default:_(()=>[MD]),_:1},16),a(" example "),U(l,se({},{ranges:["all","3","4,7","4-7"]}),{default:_(()=>[UD]),_:1},16),a(" output "),U(l,se({},{ranges:[""]}),{default:_(()=>[ID]),_:1},16)]),_:1},16)}}},LD=F(OD,[["__file","/@slidev/slides/15.md"]]),RD=e("h3",null,"do while",-1),GD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"do"),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		"),e("span",{style:{color:"#B8A965"}},"statement")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"condition"),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"do"),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		"),e("span",{style:{color:"#8C862B"}},"statement")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"condition"),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),jD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"do"),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"8"),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"i"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"do"),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"8"),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),qD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"5")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"6")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"7")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"8")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"5")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"6")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"7")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"8")])])])],-1),ND={__name:"16",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[RD,U(l,se({},{ranges:[""]}),{default:_(()=>[GD]),_:1},16),a(" example "),U(l,se({},{ranges:["all","3","4,7","4-7"]}),{default:_(()=>[jD]),_:1},16),a(" output "),U(l,se({},{ranges:[""]}),{default:_(()=>[qD]),_:1},16)]),_:1},16)}}},HD=F(ND,[["__file","/@slidev/slides/16.md"]]),WD=e("h3",null,"for",-1),VD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"init"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"state"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"condition"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"expression"),e("span",{style:{color:"#858585"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"statement")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"init"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"state"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"condition"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"expression"),e("span",{style:{color:"#8E8F8B"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"statement")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),zD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"i"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"i"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),KD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"0")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"1")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"2")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"0")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"1")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"2")])])])],-1),YD={__name:"17",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[WD,U(l,se({},{ranges:[""]}),{default:_(()=>[VD]),_:1},16),a(" example "),U(l,se({},{ranges:["all","4,6","3-6"]}),{default:_(()=>[zD]),_:1},16),a(" output "),U(l,se({},{ranges:[""]}),{default:_(()=>[KD]),_:1},16)]),_:1},16)}}},JD=F(YD,[["__file","/@slidev/slides/17.md"]]),ZD=e("h2",null,"A Number Guessing Game",-1),QD=e("ul",null,[e("li",null,"Given an unknown number. Whenever the player makes a guess, the program should tell if it is correct or wrong."),e("li",null,"More specifically, the program should tell the player if the answer is higher or lower.")],-1),XD={__name:"18",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[ZD,QD]),_:1},16))}},e4=F(XD,[["__file","/@slidev/slides/18.md"]]),n4=e("h2",null,"A Number Guessing Game",-1),t4=e("p",null,"Let’s start from game message and input",-1),s4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Enter your guess: "'),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Enter your guess: "'),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),o4=e("p",null,"we have to convert the input to INT datatype",-1),l4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"guess"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"Convert"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"ToInt32"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"ReadLine"),e("span",{style:{color:"#858585"}},"());")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"guess"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"Convert"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"ToInt32"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"ReadLine"),e("span",{style:{color:"#8E8F8B"}},"());")])])])],-1),r4={__name:"19",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[n4,t4,U(l,se({},{ranges:[""]}),{default:_(()=>[s4]),_:1},16),o4,U(l,se({},{ranges:[""]}),{default:_(()=>[l4]),_:1},16)]),_:1},16)}}},a4=F(r4,[["__file","/@slidev/slides/19.md"]]),i4=e("h2",null,"A Number Guessing Game",-1),c4=e("p",null,"Now we check if the number is correct",-1),p4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"answer"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Smaller"'),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"answer"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Bigger"'),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"else")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"BINGO!!!"'),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},">"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"answer"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Smaller"'),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"answer"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Bigger"'),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"else")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"BINGO!!!"'),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),u4={__name:"20",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[i4,c4,U(l,se({},{ranges:[""]}),{default:_(()=>[p4]),_:1},16)]),_:1},16)}}},d4=F(u4,[["__file","/@slidev/slides/20.md"]]),y4=e("h2",null,"A Number Guessing Game",-1),f4=e("p",null,"Lastly, we put all the components in a do while loop",-1),h4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"answer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"20"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"guess"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"answer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"answer"),e("span",{style:{color:"#858585"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Enter your guess: "'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// user input")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Convert"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"ToInt32"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"ReadLine"),e("span",{style:{color:"#858585"}},"());"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// convert string to int")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"answer"),e("span",{style:{color:"#858585"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		"),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Smaller"'),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"answer"),e("span",{style:{color:"#858585"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		"),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Bigger"'),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		"),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"BINGO!!!"'),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		"),e("span",{style:{color:"#4D9375"}},"break"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// exit this loop")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"answer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"20"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"guess"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"answer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"answer"),e("span",{style:{color:"#8E8F8B"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Enter your guess: "'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// user input")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"Convert"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"ToInt32"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"ReadLine"),e("span",{style:{color:"#8E8F8B"}},"());"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// convert string to int")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},">"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"answer"),e("span",{style:{color:"#8E8F8B"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		"),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Smaller"'),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"answer"),e("span",{style:{color:"#8E8F8B"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		"),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Bigger"'),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		"),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"BINGO!!!"'),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		"),e("span",{style:{color:"#1C6B48"}},"break"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// exit this loop")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),m4={__name:"21",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[y4,f4,U(l,se({},{ranges:["all","3,4","5","6,7","9-11","5","6,7","9-11","12-14","5","6,7","9-11","12-14","15-17","18"]}),{default:_(()=>[h4]),_:1},16)]),_:1},16)}}},g4=F(m4,[["__file","/@slidev/slides/21.md"]]),C4=e("h2",null,"A Number Guessing Game",-1),_4=e("h3",null,"Advanced Gameplay",-1),A4=e("ul",null,[e("li",null,"Set limit on guessing tries"),e("li",null,"Choose the answer randomly")],-1),v4={__name:"22",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[C4,_4,A4]),_:1},16))}},B4=F(v4,[["__file","/@slidev/slides/22.md"]]),b4=e("h2",null,"Function",-1),D4=e("p",null,"What is a function?",-1),S4=e("ul",null,[e("li",null,"A technique of wrapping code to perform a certain task")],-1),w4=e("p",null,"Why do we use functions?",-1),k4=e("ul",null,[e("li",null,"Same code can be reused over and over"),e("li",null,"Enables reusability and reduces redundancy"),e("li",null,"The program becomes easy to understand and manage")],-1),x4={__name:"23",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[b4,D4,S4,w4,k4]),_:1},16))}},E4=F(x4,[["__file","/@slidev/slides/23.md"]]),F4=e("h2",null,"Function",-1),P4=e("ul",null,[e("li",null,"How to declare a function?")],-1),T4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#B8A965"}},"Access"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Specifiers"),e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"type"),e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"of"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"the"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"function"),e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"parameters"),e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#B8A965"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"code"),e("span",{style:{color:"#CB7676"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"return"),e("span",{style:{color:"#DBD7CA"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#8C862B"}},"Access"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"Specifiers"),e("span",{style:{color:"#AB5959"}},">"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"type"),e("span",{style:{color:"#AB5959"}},">"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"of"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"the"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"function"),e("span",{style:{color:"#AB5959"}},">"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"parameters"),e("span",{style:{color:"#AB5959"}},">"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#8C862B"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"code"),e("span",{style:{color:"#AB5959"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"return"),e("span",{style:{color:"#393A34"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),$4={__name:"24",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[F4,P4,U(l,se({},{ranges:[""]}),{default:_(()=>[T4]),_:1},16)]),_:1},16)}}},M4=F($4,[["__file","/@slidev/slides/24.md"]]),U4=e("h2",null,"Function",-1),I4=e("p",null,"How to use it?",-1),O4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"square"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"num"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"sq"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"num"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"num"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"sq"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"square"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Calling the function")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"square"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"num"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"sq"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"num"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"num"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"sq"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"square"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Calling the function")])])])],-1),L4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"25")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"25")])])])],-1),R4={__name:"25",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[U4,I4,U(l,se({},{ranges:["all","8,9","2","2-6"]}),{default:_(()=>[O4]),_:1},16),a(" output "),U(l,se({},{ranges:[""]}),{default:_(()=>[L4]),_:1},16)]),_:1},16)}}},G4=F(R4,[["__file","/@slidev/slides/25.md"]]),j4=e("h2",null,"Function",-1),q4=e("p",null,"return type :",-1),N4=e("ul",null,[e("li",null,"defines and constrains the data type of the value returned from a function")],-1),H4={__name:"26",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[j4,q4,N4]),_:1},16))}},W4=F(H4,[["__file","/@slidev/slides/26.md"]]),V4=e("h2",null,"Function",-1),z4=e("p",null,"return type : void",-1),K4=e("ul",null,[e("li",null,"doesn’t return any value")],-1),Y4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"square"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"num"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"sq"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"num"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"num"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"sq"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// Doesn’t provide any return statement")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"square"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"square"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"num"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"sq"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"num"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"num"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"sq"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Doesn’t provide any return statement")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"square"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),J4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"25")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"25")])])])],-1),Z4={__name:"27",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[V4,z4,K4,U(l,se({},{ranges:["all","9","2","2-7","5,6"]}),{default:_(()=>[Y4]),_:1},16),a(" output "),U(l,se({},{ranges:[""]}),{default:_(()=>[J4]),_:1},16)]),_:1},16)}}},Q4=F(Z4,[["__file","/@slidev/slides/27.md"]]),X4=e("h2",null,"Function",-1),eS=e("p",null,"return type : int(or any datatype you want)",-1),nS=e("ul",null,[e("li",null,"returns a value")],-1),tS=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"square"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"num"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"num"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"num"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// return statement")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"square"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},"));")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"square"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"num"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"num"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"num"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// return statement")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"square"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},"));")])])])],-1),sS=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"25")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"25")])])])],-1),oS={__name:"28",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[X4,eS,nS,U(l,se({},{ranges:["all","8","2","4,5","8"]}),{default:_(()=>[tS]),_:1},16),a(" output "),U(l,se({},{ranges:[""]}),{default:_(()=>[sS]),_:1},16)]),_:1},16)}}},lS=F(oS,[["__file","/@slidev/slides/28.md"]]),rS=e("h2",null,"Function",-1),aS=e("p",null,"parameters(參數) :",-1),iS=e("ul",null,[e("li",null,"the data you give to a function")],-1),cS={__name:"29",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[rS,aS,iS]),_:1},16))}},pS=F(cS,[["__file","/@slidev/slides/29.md"]]),uS=e("h2",null,"Function",-1),dS=e("ul",null,[e("li",null,"example")],-1),yS=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"//addition function : 2 parameters")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"plus"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"num1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"num2"),e("span",{style:{color:"#858585"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"num1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"num2"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"//subtraction function : 2 parameters")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"minus"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"num1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"num2"),e("span",{style:{color:"#858585"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"num1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"num2"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"//square function : 1 parameters")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"square"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"num"),e("span",{style:{color:"#858585"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"num"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"num"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"//print function : 1 parameters")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"print"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"times"),e("span",{style:{color:"#858585"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"times"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#858585"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		"),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Hi"'),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"//addition function : 2 parameters")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"plus"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"num1"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"num2"),e("span",{style:{color:"#8E8F8B"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"num1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"num2"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"//subtraction function : 2 parameters")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"minus"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"num1"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"num2"),e("span",{style:{color:"#8E8F8B"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"num1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"num2"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"//square function : 1 parameters")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"square"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"num"),e("span",{style:{color:"#8E8F8B"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"num"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"num"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"//print function : 1 parameters")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"print"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"times"),e("span",{style:{color:"#8E8F8B"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"i"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"times"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#8E8F8B"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		"),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Hi"'),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),fS={__name:"30",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-1.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[uS,dS,U(l,se({},{ranges:["all","1-4","6-9","11-14","16-21"]}),{default:_(()=>[yS]),_:1},16)]),_:1},16)}}},hS=F(fS,[["__file","/@slidev/slides/30.md"]]),mS=e("h1",null,"C# - 2 Class",-1),gS={__name:"31",setup(n){const t={layout:"center",hide:!1,srcSequence:"./pages/CSharp-2.md"};return k(E),(s,o)=>(h(),x(Gn,O(I(t)),{default:_(()=>[mS]),_:1},16))}},CS=F(gS,[["__file","/@slidev/slides/31.md"]]),_S=e("h2",null,"Class (類別)",-1),AS=e("ul",null,[e("li",null,"What is a class?")],-1),vS=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Cat")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"age"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"double"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"health"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Cat"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"age"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		"),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"health"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Meow"),e("span",{style:{color:"#858585"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Cat "'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'" with age:"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#C98A7D"}},'" said meow~"'),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Cat")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"age"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"double"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"health"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Cat"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"age"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		"),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"age"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"age"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"health"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"age"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Meow"),e("span",{style:{color:"#8E8F8B"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Cat "'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'" with age:"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"age"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#B56959"}},'" said meow~"'),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),BS={__name:"32",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-2.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[_S,AS,U(l,se({},{ranges:[""]}),{default:_(()=>[vS]),_:1},16)]),_:1},16)}}},bS=F(BS,[["__file","/@slidev/slides/32.md"]]),DS=e("h2",null,"Class (類別)",-1),SS=e("ul",null,[e("li",null,"Classes are like Data Types, but with more functionality")],-1),wS=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Program")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"static"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Main"),e("span",{style:{color:"#858585"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Cat"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"cat1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Cat"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Leo"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Cat"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"cat2"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Cat"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Steven"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"20"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"cat1"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"Meow"),e("span",{style:{color:"#858585"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"})])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Program")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"static"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Main"),e("span",{style:{color:"#8E8F8B"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Cat"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"cat1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Cat"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Leo"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Cat"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"cat2"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Cat"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Steven"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"20"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"cat1"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"Meow"),e("span",{style:{color:"#8E8F8B"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"})])])],-1),kS={__name:"33",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-2.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[DS,SS,wS]),_:1},16))}},xS=F(kS,[["__file","/@slidev/slides/33.md"]]),ES=e("h2",null,"Class (類別)",-1),FS=e("ul",null,[e("li",null,"Properties")],-1),PS=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Cat")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"age"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"double"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"health"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Cat"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"age"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		"),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"health"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Meow"),e("span",{style:{color:"#858585"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Cat "'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'" with age:"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#C98A7D"}},'" said meow~"'),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Cat")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"age"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"double"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"health"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Cat"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"age"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		"),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"age"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"age"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"health"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"age"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Meow"),e("span",{style:{color:"#8E8F8B"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Cat "'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'" with age:"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"age"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#B56959"}},'" said meow~"'),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),TS={__name:"34",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-2.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[ES,FS,U(l,se({},{ranges:["4-6"]}),{default:_(()=>[PS]),_:1},16)]),_:1},16)}}},$S=F(TS,[["__file","/@slidev/slides/34.md"]]),MS=e("h2",null,"Class(類別)",-1),US=e("ul",null,[e("li",null,"Class Methods")],-1),IS=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Cat")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"age"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"double"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"health"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Cat"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"age"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		"),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"health"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Meow"),e("span",{style:{color:"#858585"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Cat "'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'" with age:"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#C98A7D"}},'" said meow~"'),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Cat")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"age"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"double"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"health"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Cat"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"age"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		"),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"age"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"age"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"health"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"age"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Meow"),e("span",{style:{color:"#8E8F8B"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Cat "'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'" with age:"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"age"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#B56959"}},'" said meow~"'),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),OS={__name:"35",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-2.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[MS,US,U(l,se({},{ranges:["15-18"]}),{default:_(()=>[IS]),_:1},16)]),_:1},16)}}},LS=F(OS,[["__file","/@slidev/slides/35.md"]]),RS=e("h2",null,"Class(類別)",-1),GS=e("ul",null,[e("li",null,"Class Constructor (構造器)")],-1),jS=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Cat")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"age"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"double"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"health"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Cat"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"age"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		"),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"health"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Meow"),e("span",{style:{color:"#858585"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Cat "'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'" with age:"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#C98A7D"}},'" said meow~"'),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Program")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"static"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Main"),e("span",{style:{color:"#858585"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Cat"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"cat"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Cat"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Steven"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"cat"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"Meow"),e("span",{style:{color:"#858585"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Cat")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"age"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"double"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"health"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Cat"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"age"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		"),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"age"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"age"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"health"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"age"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Meow"),e("span",{style:{color:"#8E8F8B"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Cat "'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'" with age:"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"age"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#B56959"}},'" said meow~"'),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Program")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"static"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Main"),e("span",{style:{color:"#8E8F8B"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Cat"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"cat"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Cat"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Steven"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"cat"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"Meow"),e("span",{style:{color:"#8E8F8B"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),qS={__name:"36",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-2.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[RS,GS,U(l,se({},{ranges:["8-13"]}),{default:_(()=>[jS]),_:1},16)]),_:1},16)}}},NS=F(qS,[["__file","/@slidev/slides/36.md"]]),HS=e("h2",null,"Class(類別)",-1),WS=e("ul",null,[e("li",null,"public private modifiers")],-1),VS=e("ol",null,[e("li",null,"Public 會使 Property 跟 Method 變成任何人都可觀看與修改"),e("li",null,"Private 會使 Property 跟 Method 變成只有Class內可觀看與修改")],-1),zS=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"User"),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"password"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"User"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"password"),e("span",{style:{color:"#858585"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"password"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"password"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"SetPassword"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"password"),e("span",{style:{color:"#858585"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"password"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"password"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"GetPassword"),e("span",{style:{color:"#858585"}},"(){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"password"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Program")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"static"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Main"),e("span",{style:{color:"#858585"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"User"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"user"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"User"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"brian"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#C98A7D"}},'"SuperSecretPassword"'),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"user"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"//Works")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"Console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"WriteLine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"user"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"password"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"//Error: password is private")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"user"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"SetPassword"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"123456"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"//Works")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"user"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"GetPassword"),e("span",{style:{color:"#858585"}},"();"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"//Error: GetPassword method is private")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"User"),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"password"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"User"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"password"),e("span",{style:{color:"#8E8F8B"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"password"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"password"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"SetPassword"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"password"),e("span",{style:{color:"#8E8F8B"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"password"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"password"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"GetPassword"),e("span",{style:{color:"#8E8F8B"}},"(){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"password"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Program")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"static"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Main"),e("span",{style:{color:"#8E8F8B"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"User"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"user"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"User"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"brian"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#B56959"}},'"SuperSecretPassword"'),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"user"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"//Works")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"Console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"WriteLine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"user"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"password"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"//Error: password is private")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"user"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"SetPassword"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"123456"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"//Works")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"user"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"GetPassword"),e("span",{style:{color:"#8E8F8B"}},"();"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"//Error: GetPassword method is private")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),KS={__name:"37",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-2.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[HS,WS,VS,U(l,se({},{ranges:[""]}),{default:_(()=>[zS]),_:1},16)]),_:1},16)}}},YS=F(KS,[["__file","/@slidev/slides/37.md"]]),JS=e("h2",null,"Lab",-1),ZS=e("ul",null,[e("li",null,"Make the following code work.")],-1),QS=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Program")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"static"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Main"),e("span",{style:{color:"#858585"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}},"   ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"type"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"strawberry"'),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Food"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"food"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Food"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"type"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"//創建一個type為strawberry的食物")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Jeffery"'),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Person"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"person"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Person"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"//創建一個名字叫Jeffery的人")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"person"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"Feed"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"food"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"//餵食物給Jeffery")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Program")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"static"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Main"),e("span",{style:{color:"#8E8F8B"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}},"   ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"type"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"strawberry"'),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Food"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"food"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Food"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"type"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"//創建一個type為strawberry的食物")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Jeffery"'),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Person"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"person"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Person"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"//創建一個名字叫Jeffery的人")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"person"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"Feed"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"food"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"//餵食物給Jeffery")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),XS=e("p",null,"Output",-1),e9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"Jeffery ate a strawberry")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"Jeffery ate a strawberry")])])])],-1),n9={__name:"38",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-2.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[JS,ZS,U(l,se({},{ranges:[""]}),{default:_(()=>[QS]),_:1},16),XS,e9]),_:1},16)}}},t9=F(n9,[["__file","/@slidev/slides/38.md"]]),s9=e("h2",null,"Answer",-1),o9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Food"),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"type"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Food"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"type"),e("span",{style:{color:"#858585"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"type"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"type"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Person"),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Person"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"name"),e("span",{style:{color:"#858585"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Feed"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"Food"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"food"),e("span",{style:{color:"#858585"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Food"),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"type"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Food"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"type"),e("span",{style:{color:"#8E8F8B"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"type"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"type"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Person"),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Person"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"name"),e("span",{style:{color:"#8E8F8B"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Feed"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"Food"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"food"),e("span",{style:{color:"#8E8F8B"}},"){")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),l9={__name:"39",setup(n){const t={hide:!1,srcSequence:"./pages/CSharp-2.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[s9,U(l,se({},{ranges:[""]}),{default:_(()=>[o9]),_:1},16)]),_:1},16)}}},r9=F(l9,[["__file","/@slidev/slides/39.md"]]),a9=e("h1",null,"Unity Introduction",-1),i9={__name:"40",setup(n){const t={layout:"center",hide:!1,srcSequence:"./pages/Unity-Intro.md"};return k(E),(s,o)=>{const l=Jn;return h(),x(Gn,O(I(t)),{default:_(()=>[a9,U(l,{listClass:"toc",minDepth:"2",mode:"onlyCurrentTree"})]),_:1},16)}}},c9=F(i9,[["__file","/@slidev/slides/40.md"]]),p9=e("h2",null,"Download Unity Hub",-1),u9=e("p",null,[e("a",{href:"https://unity.com/download"},"Unity Hub download")],-1),d9={__name:"41",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-Intro.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[p9,u9]),_:1},16))}},y9=F(d9,[["__file","/@slidev/slides/41.md"]]),f9=e("h2",null,"Unity Showcase",-1),h9=e("ul",null,[e("li",null,"Among Us"),e("li",null,"Arena of Valor"),e("li",null,"Pokemon Go"),e("li",null,"Subway Surfers"),e("li",null,"Temple Run 2"),e("li",null,"Angry Birds 2")],-1),m9={__name:"42",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-Intro.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[f9,h9]),_:1},16))}},g9=F(m9,[["__file","/@slidev/slides/42.md"]]),C9="/2023CSCamp/assets/Install_tab-2397a02e.png",_9=e("h2",null,"Install Unity Editor",-1),A9=e("img",{src:C9,style:{height:"90%"}},null,-1),v9={__name:"43",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-Intro.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[_9,A9]),_:1},16))}},B9=F(v9,[["__file","/@slidev/slides/43.md"]]),b9="/2023CSCamp/assets/Install_editor-431219f2.png",D9=e("p",null,[a("Click on the "),e("code",null,"Install Editor"),a(" and chose one start with "),e("code",null,"2021.3")],-1),S9=e("img",{src:b9,style:{height:"90%"}},null,-1),w9={__name:"44",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-Intro.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[D9,S9]),_:1},16))}},k9=F(w9,[["__file","/@slidev/slides/44.md"]]),x9=e("h1",null,"Unity - 1 Player and Platforms",-1),E9={__name:"45",setup(n){const t={layout:"center",hide:!1,srcSequence:"./pages/Unity-1.md"};return k(E),(s,o)=>{const l=Jn;return h(),x(Gn,O(I(t)),{default:_(()=>[x9,U(l,{listClass:"toc",minDepth:"2",mode:"onlyCurrentTree"})]),_:1},16)}}},F9=F(E9,[["__file","/@slidev/slides/45.md"]]),P9="/2023CSCamp/assets/Unity_hub-01c44922.png",T9=e("h2",null,"Create a Project with Unity Hub",-1),$9=e("img",{src:P9,style:{width:"500px"}},null,-1),M9=e("p",null,[a("Press the "),e("code",null,"New project"),a(" and create a new one.")],-1),U9={__name:"46",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-1.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[T9,$9,M9]),_:1},16))}},I9=F(U9,[["__file","/@slidev/slides/46.md"]]),O9="/2023CSCamp/assets/Editor-4c4dd57e.png",L9=e("img",{src:O9},null,-1),R9={__name:"47",setup(n){const t={layout:"center",hide:!1,srcSequence:"./pages/Unity-1.md"};return k(E),(s,o)=>(h(),x(Gn,O(I(t)),{default:_(()=>[L9]),_:1},16))}},G9=F(R9,[["__file","/@slidev/slides/47.md"]]),j9="/2023CSCamp/assets/Add_Platforms-cd3e7bb8.png",q9=e("h2",null,"Create Platforms",-1),N9=e("img",{src:j9,style:{width:"700px"}},null,-1),H9={__name:"48",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-1.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[q9,N9]),_:1},16))}},W9=F(H9,[["__file","/@slidev/slides/48.md"]]),V9="/2023CSCamp/assets/Add_Box_Collder_2D-2e1679a1.png",z9=e("ol",null,[e("li",null,[a("Add three components "),e("code",null,"2D Object/Sprites/Square"),a(" and rename to "),e("code",null,"Platform Left/Middle/Right"),a(".")]),e("li",null,"Give those platforms Box Collider 2D"),e("li",null,[a("Select and create empty parant as "),e("code",null,"PlatformsManager")])],-1),K9=e("img",{src:V9,style:{width:"600px"}},null,-1),Y9={__name:"49",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-1.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[z9,K9]),_:1},16))}},J9=F(Y9,[["__file","/@slidev/slides/49.md"]]),Z9="/2023CSCamp/assets/Add_player-b70fb87f.png",Q9=e("h2",null,"Add Player",-1),X9=e("ol",null,[e("li",null,[a("Add player components, "),e("code",null,"2D Object/Sprites/Square"),a(" and rename to "),e("code",null,"Player")]),e("li",null,"Add BoxCollider2D"),e("li",null,"Add RigidBody2D")],-1),ew=e("img",{src:Z9,style:{width:"600px"}},null,-1),nw={__name:"50",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-1.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[Q9,X9,ew]),_:1},16))}},tw=F(nw,[["__file","/@slidev/slides/50.md"]]);function Wp(n){return n.startsWith("/")?"/2023CSCamp"+n.slice(1):n}function sw(n,t=!1){const s=n&&(n[0]==="#"||n.startsWith("rgb")),o={background:s?n:void 0,color:n&&!s?"white":void 0,backgroundImage:s?void 0:n?t?`linear-gradient(#0005, #0008), url(${Wp(n)})`:`url("${Wp(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const ow={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},lw=Ee({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(n){const t=n;k(E);const s=R(()=>sw(t.image));return(o,l)=>(h(),b("div",ow,[e("div",{class:Le(["slidev-layout default",t.class])},[mn(o.$slots,"default")],2),e("div",{class:"w-full w-full",style:Xe(s.value)},null,4)]))}}),rw=F(lw,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/layouts/image-right.vue"]]),aw=e("h3",null,"BoxCollider2D",-1),iw=e("p",null,"Box collider is a cuboid-shaped collision(碰撞) primitive(原始物件).",-1),cw=e("p",null,[e("code",null,"Material: No_friction")],-1),pw=e("h4",null,"Generate No_friction",-1),uw=e("p",null,[e("code",null,"Create/2D/Physics Material 2D")],-1),dw={__name:"51",setup(n){const t={layout:"image-right",image:"/sources/Unity-1/Physics_Material_2D.png",hide:!1,srcSequence:"./pages/Unity-1.md"};return k(E),(s,o)=>(h(),x(rw,O(I(t)),{default:_(()=>[aw,iw,cw,pw,uw]),_:1},16))}},yw=F(dw,[["__file","/@slidev/slides/51.md"]]),fw="/2023CSCamp/assets/No_friction-a5a5c608.png",hw=e("img",{src:fw},null,-1),mw={__name:"52",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-1.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[hw]),_:1},16))}},gw=F(mw,[["__file","/@slidev/slides/52.md"]]),Cw="/2023CSCamp/assets/Player_material-3ffedba9.png",_w=e("p",null,[a("Add "),e("code",null,"No_friction"),a(" to "),e("code",null,"Player"),a("’s "),e("code",null,"Material"),a(" section")],-1),Aw=e("img",{src:Cw,style:{width:"550px"}},null,-1),vw={__name:"53",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-1.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[_w,Aw]),_:1},16))}},Bw=F(vw,[["__file","/@slidev/slides/53.md"]]),bw="/2023CSCamp/assets/Player_rigidbody-913b1aa0.png",Dw=Ee({__name:"two-cols",props:{class:{type:String},layoutClass:{type:String}},setup(n){const t=n;return k(E),(s,o)=>(h(),b("div",{class:Le(["slidev-layout two-columns w-full h-full grid grid-cols-2",t.layoutClass])},[e("div",{class:Le(["col-left",t.class])},[mn(s.$slots,"default")],2),e("div",{class:Le(["col-right",t.class])},[mn(s.$slots,"right")],2)],2))}}),jn=F(Dw,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/layouts/two-cols.vue"]]),Sw=e("h3",null,"RigidBody2D",-1),ww=e("p",null,"Control of an object’s position through physics simulation. Adding RigidBody to an object will put its motion under the control of Unity’s physics engine.",-1),kw=e("p",null,[a("Even without any code, a rigidbody object will be "),e("em",null,"pulled downward by gravity"),a(" and and will "),e("em",null,"react to collisions"),a(" with incoming objects if the right Collider component is also present.")],-1),xw=e("p",null,[e("code",null,"Gravity Scale: 3, Collision Detection: Continuous, Sleeping Mode: Never Sleep, Interpolation: Interpolation, Constraints/Freeze Rotation: Freeze Z")],-1),Ew=e("img",{src:bw},null,-1),Fw={__name:"54",setup(n){const t={layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-1.md"};return k(E),(s,o)=>(h(),x(jn,O(I(t)),{right:_(l=>[Ew]),default:_(()=>[Sw,ww,kw,xw]),_:1},16))}},Pw=F(Fw,[["__file","/@slidev/slides/54.md"]]),Tw="/2023CSCamp/assets/PlayerControllerCs-9feb8fd7.png",$w=e("h2",null,"C# Script",-1),Mw=e("p",null,[a("Add script to "),e("code",null,"Scripts"),a(" folder and rename to "),e("code",null,"PlayerController")],-1),Uw=e("img",{src:Tw,style:{height:"500px"}},null,-1),Iw={__name:"55",setup(n){const t={layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-1.md"};return k(E),(s,o)=>(h(),x(jn,O(I(t)),{right:_(l=>[Uw]),default:_(()=>[$w,Mw]),_:1},16))}},Ow=F(Iw,[["__file","/@slidev/slides/55.md"]]),Lw=e("h1",null,"Unity - 2 PlayerController script",-1),Rw={__name:"56",setup(n){const t={layout:"center",hide:!1,srcSequence:"./pages/Unity-2.md"};return k(E),(s,o)=>{const l=Jn;return h(),x(Gn,O(I(t)),{default:_(()=>[Lw,U(l,{listClass:"toc",minDepth:"2",mode:"onlyCurrentTree"})]),_:1},16)}}},Gw=F(Rw,[["__file","/@slidev/slides/56.md"]]),jw="/2023CSCamp/assets/PlayerController_script-49f12558.png",qw=e("h2",null,"Playcontroller Script",-1),Nw=e("p",null,[a("First, drag "),e("code",null,"PlayerController"),a(" to "),e("code",null,"Player"),a(" component, double click the script to edit")],-1),Hw=e("img",{src:jw,style:{height:"300px"}},null,-1),Ww={__name:"57",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-2.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[qw,Nw,Hw]),_:1},16))}},Vw=F(Ww,[["__file","/@slidev/slides/57.md"]]),zw=e("h2",null,"C# script",-1),Kw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#A1B567"}},"Collections"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"           "),e("span",{style:{color:"#758575"}},"// Include toolkit")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#A1B567"}},"Collections"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#A1B567"}},"Generic"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"   "),e("span",{style:{color:"#758575"}},"// Include toolkit")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"UnityEngine"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"                  "),e("span",{style:{color:"#758575"}},"// Include toolkit")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"PlayerController"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"MonoBehaviour")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// Start is called before the first frame update")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Start"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// Update is called once per frame")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Update"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#6C7834"}},"Collections"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"           "),e("span",{style:{color:"#A0ADA0"}},"// Include toolkit")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#6C7834"}},"Collections"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#6C7834"}},"Generic"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"   "),e("span",{style:{color:"#A0ADA0"}},"// Include toolkit")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"UnityEngine"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"                  "),e("span",{style:{color:"#A0ADA0"}},"// Include toolkit")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"PlayerController"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"MonoBehaviour")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Start is called before the first frame update")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Start"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// Update is called once per frame")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Update"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Yw=e("p",null,[e("code",null,"void start()"),a(" is execute once when the script was called. "),e("br"),e("code",null,"void Update()"),a(" is called every frame. "),e("br"),e("code",null,"void FixedUpdate()"),a(" execute once at a fixed interval. (每單位時間)")],-1),Jw={__name:"58",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-2.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[zw,Kw,Yw]),_:1},16))}},Zw=F(Jw,[["__file","/@slidev/slides/58.md"]]),Qw=e("p",null,"Declare our variables",-1),Xw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"horizontal"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// -1, 0 or 1 (horizontal position)")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"speed"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"8f"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"jumpingPower"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"12f"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Reference the rigid body, ground check and ground layer")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"SerializeField"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Rigidbody2D"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"rb"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"SerializeField"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Transform"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"groundCheck"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Check if player touch the ground")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"SerializeField"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"LayerMask"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"groundLayer"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Check if component is ground")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"horizontal"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// -1, 0 or 1 (horizontal position)")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"speed"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"8f"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"jumpingPower"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"12f"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Reference the rigid body, ground check and ground layer")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"SerializeField"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Rigidbody2D"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"rb"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"SerializeField"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Transform"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"groundCheck"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Check if player touch the ground")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"SerializeField"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"LayerMask"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"groundLayer"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Check if component is ground")])])])],-1),ek=e("p",null,[e("code",null,"SerializeField"),a(" will force Unity to serialize a private field. (讓使用者在 UI 對 private variables 做控制)")],-1),nk={__name:"59",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-2.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[Qw,U(l,se({},{ranges:[""]}),{default:_(()=>[Xw]),_:1},16),ek]),_:1},16)}}},tk=F(nk,[["__file","/@slidev/slides/59.md"]]),sk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Update"),e("span",{style:{color:"#858585"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"horizontal"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Input"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"GetAxisRaw"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Horizontal"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// 確認左右")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"Input"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"GetButtonDown"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Jump"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&&"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"IsGrounded"),e("span",{style:{color:"#858585"}},"())"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// 當接觸地面時 向上跳")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"rb"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"velocity"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Vector2"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"rb"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"velocity"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"jumpingPower"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"Input"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"GetButtonUp"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Jump"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&&"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"rb"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"velocity"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"y"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0f"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// 按越久跳越高")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"rb"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"velocity"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Vector2"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"rb"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"velocity"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"rb"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"velocity"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"y"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.5f"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"FixedUpdate"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"rb"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"velocity"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Vector2"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"horizontal"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"speed"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"rb"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"velocity"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"y"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// 左右增加速度")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Update"),e("span",{style:{color:"#8E8F8B"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"horizontal"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"Input"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"GetAxisRaw"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Horizontal"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// 確認左右")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"Input"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"GetButtonDown"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Jump"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&&"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"IsGrounded"),e("span",{style:{color:"#8E8F8B"}},"())"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// 當接觸地面時 向上跳")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"rb"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"velocity"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Vector2"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"rb"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"velocity"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"jumpingPower"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"Input"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"GetButtonUp"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Jump"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&&"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"rb"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"velocity"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"y"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},">"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0f"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// 按越久跳越高")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"rb"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"velocity"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Vector2"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"rb"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"velocity"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"rb"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"velocity"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"y"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.5f"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"FixedUpdate"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"rb"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"velocity"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Vector2"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"horizontal"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"speed"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"rb"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"velocity"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"y"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// 左右增加速度")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ok={__name:"60",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-2.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[U(l,se({},{ranges:["all","3","5-7","9-11","14-16"]}),{default:_(()=>[sk]),_:1},16)]),_:1},16)}}},lk=F(ok,[["__file","/@slidev/slides/60.md"]]),rk=e("h3",null,"Input function",-1),ak=e("br",null,null,-1),ik=e("blockquote",null,[e("p",null,[a("Input method and settings are defined in "),e("code",null,"Edit > Project Settings > Input Manager")])],-1),ck=e("br",null,null,-1),pk=e("h3",null,"Input.GetAxisRaw",-1),uk=e("p",null,[e("code",null,'Input.GetAxisRaw("axisName")'),a(" will either be -1, 0 or 1.")],-1),dk=e("h3",null,"Input.GetButtonDown",-1),yk=e("p",null,[e("code",null,'Input.GetButtonDown("Button Name")'),a(" returns true the first frame the user releases the virtual button.")],-1),fk={__name:"61",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-2.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[rk,ak,ik,ck,pk,uk,dk,yk]),_:1},16))}},hk=F(fk,[["__file","/@slidev/slides/61.md"]]),mk=e("h3",null,"IsGrounded function",-1),gk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"bool"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"IsGrounded"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// 確認是否著地")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Physics2D"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"OverlapCircle"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"groundCheck"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"position"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.2f"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"groundLayer"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"bool"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"IsGrounded"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// 確認是否著地")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"Physics2D"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"OverlapCircle"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"groundCheck"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"position"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.2f"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"groundLayer"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Ck={__name:"62",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-2.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[mk,U(l,se({},{ranges:[""]}),{default:_(()=>[gk]),_:1},16)]),_:1},16)}}},_k=F(Ck,[["__file","/@slidev/slides/62.md"]]),Ak="/2023CSCamp/assets/Script_inform-6c84267c.png",vk=e("h2",null,"Setup Playcontroller Script",-1),Bk=e("p",null,"Open the script information",-1),bk=e("img",{src:Ak},null,-1),Dk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"Rb: Player")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"Ground Check: GroundCheck")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"Ground Layer: Ground")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"Rb: Player")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"Ground Check: GroundCheck")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"Ground Layer: Ground")])])])],-1),Sk={__name:"63",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-2.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[vk,Bk,bk,U(l,se({},{ranges:[""]}),{default:_(()=>[Dk]),_:1},16)]),_:1},16)}}},wk=F(Sk,[["__file","/@slidev/slides/63.md"]]),kk="/2023CSCamp/assets/Create_GroundCheck-8e3aae8e.png",xk=e("h3",null,"Add Ground Check",-1),Ek=e("p",null,"Add GroundCheck components (child component of Player)",-1),Fk=e("img",{src:kk,style:{width:"500pt"}},null,-1),Pk={__name:"64",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-2.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[xk,Ek,Fk]),_:1},16))}},Tk=F(Pk,[["__file","/@slidev/slides/64.md"]]),$k="/2023CSCamp/assets/Move_GroundCheck-6f894537.png",Mk=e("p",null,[a("Move "),e("code",null,"GroundCheck"),a(" a little bit lower than "),e("code",null,"Player"),a(" to check if the "),e("code",null,"Player"),a(" touch the ground")],-1),Uk=e("img",{src:$k,style:{width:"500pt"}},null,-1),Ik={__name:"65",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-2.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[Mk,Uk]),_:1},16))}},Ok=F(Ik,[["__file","/@slidev/slides/65.md"]]),Lk="/2023CSCamp/assets/Add_layer-cc4421ed.png",Rk="/2023CSCamp/assets/Ground_layer-22e546a2.png",Gk=e("h3",null,"Add Ground Layer",-1),jk=e("p",null,[a("First, add "),e("code",null,"Ground"),a(" layer. "),e("img",{src:Lk,style:{height:"150pt"}})],-1),qk=e("p",null,[a("Second, choose "),e("code",null,"Ground"),a(" layer for three platforms. "),e("img",{src:Rk,style:{height:"150pt"}})],-1),Nk={__name:"66",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-2.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[Gk,jk,qk]),_:1},16))}},Hk=F(Nk,[["__file","/@slidev/slides/66.md"]]),Wk="/2023CSCamp/assets/Player_components-ec6be937.png",Vk=e("h3",null,"Drag components for script",-1),zk=e("br",null,null,-1),Kk=e("img",{src:Wk,style:{height:"150pt"}},null,-1),Yk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"Rb: Player")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"Ground Check: GroundCheck")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"Ground Layer: Ground")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"Rb: Player")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"Ground Check: GroundCheck")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"Ground Layer: Ground")])])])],-1),Jk={__name:"67",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-2.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[Vk,zk,Kk,U(l,se({},{ranges:[""]}),{default:_(()=>[Yk]),_:1},16)]),_:1},16)}}},Zk=F(Jk,[["__file","/@slidev/slides/67.md"]]),Qk=e("h1",null,"Unity - 3 PlatformsMovement Script",-1),Xk={__name:"68",setup(n){const t={layout:"center",hide:!1,srcSequence:"./pages/Unity-3.md"};return k(E),(s,o)=>{const l=Jn;return h(),x(Gn,O(I(t)),{default:_(()=>[Qk,U(l,{listClass:"toc",minDepth:"2",mode:"onlyCurrentTree"})]),_:1},16)}}},ex=F(Xk,[["__file","/@slidev/slides/68.md"]]),nx="/2023CSCamp/assets/PlatformsMovement-435c709c.png",tx=e("h2",null,"C# Script",-1),sx=e("ol",null,[e("li",null,[a("Generate a script under "),e("code",null,"Scripts"),a(" folder, rename to "),e("code",null,"PlatformsMovement")]),e("li",null,"Double click the file to edit")],-1),ox=e("img",{src:nx},null,-1),lx={__name:"69",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-3.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[tx,sx,ox]),_:1},16))}},rx=F(lx,[["__file","/@slidev/slides/69.md"]]),ax=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Import the toolkits")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#A1B567"}},"Collections"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"System"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#A1B567"}},"Collections"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#A1B567"}},"Generic"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"UnityEngine"),e("span",{style:{color:"#858585"}},";")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Import the toolkits")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#6C7834"}},"Collections"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"System"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#6C7834"}},"Collections"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#6C7834"}},"Generic"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"UnityEngine"),e("span",{style:{color:"#8E8F8B"}},";")])])])],-1),ix=e("p",null,"Declare the variables we will use later",-1),cx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"PlatformsMovement"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"MonoBehaviour")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"speed"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"         "),e("span",{style:{color:"#758575"}},"// Speed of the platforms movement")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Transform"),e("span",{style:{color:"#858585"}},"[]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"points"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#758575"}},"// Starting point and the turning point of the platforms")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"PlatformsMovement"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"MonoBehaviour")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"speed"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"         "),e("span",{style:{color:"#A0ADA0"}},"// Speed of the platforms movement")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Transform"),e("span",{style:{color:"#8E8F8B"}},"[]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"points"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A0ADA0"}},"// Starting point and the turning point of the platforms")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"i"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),px={__name:"70",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-3.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[U(l,se({},{ranges:[""]}),{default:_(()=>[ax]),_:1},16),ix,U(l,se({},{ranges:[""]}),{default:_(()=>[cx]),_:1},16)]),_:1},16)}}},ux=F(px,[["__file","/@slidev/slides/70.md"]]),dx=e("p",null,"Initialize the starting point",-1),yx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Start"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"transform"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"position"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"points"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},"]."),e("span",{style:{color:"#B8A965"}},"position"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Start from the starting point")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Start"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"transform"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"position"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"points"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},"]."),e("span",{style:{color:"#8C862B"}},"position"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Start from the starting point")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),fx={__name:"71",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-3.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[dx,U(l,se({},{ranges:[""]}),{default:_(()=>[yx]),_:1},16)]),_:1},16)}}},hx=F(fx,[["__file","/@slidev/slides/71.md"]]),mx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Update"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"Vector2"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"Distance"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"transform"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"position"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"points"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#858585"}},"]."),e("span",{style:{color:"#B8A965"}},"position"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.09f"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"points"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"Length"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"transform"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"position"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Vector2"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"MoveTowards"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"transform"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"position"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"points"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#858585"}},"]."),e("span",{style:{color:"#B8A965"}},"position"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"speed"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"deltaTime"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Update"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"Vector2"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"Distance"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"transform"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"position"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"points"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#8E8F8B"}},"]."),e("span",{style:{color:"#8C862B"}},"position"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.09f"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"points"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"Length"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"transform"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"position"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"Vector2"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"MoveTowards"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"transform"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"position"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"points"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#8E8F8B"}},"]."),e("span",{style:{color:"#8C862B"}},"position"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"speed"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"deltaTime"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),gx=e("p",null,[a("Declaration: "),e("code",null,"Vector2.MoveTowards(current, target, speed)"),e("br"),e("code",null,"MoveTowards()"),a(": Moves a point "),e("code",null,"current"),a(" towards "),e("code",null,"target"),a(".")],-1),Cx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Current position will move from the current position to points[i].position")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"transform"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"position"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Vector2"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"MoveTowards"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"transform"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"position"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"points"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#858585"}},"]."),e("span",{style:{color:"#B8A965"}},"position"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"speed"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"deltaTime"),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Current position will move from the current position to points[i].position")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"transform"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"position"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"Vector2"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"MoveTowards"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"transform"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"position"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"points"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#8E8F8B"}},"]."),e("span",{style:{color:"#8C862B"}},"position"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"speed"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"deltaTime"),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),_x={__name:"72",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-3.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[U(l,se({},{ranges:[""]}),{default:_(()=>[mx]),_:1},16),gx,U(l,se({},{ranges:[""]}),{default:_(()=>[Cx]),_:1},16)]),_:1},16)}}},Ax=F(_x,[["__file","/@slidev/slides/72.md"]]),vx="/2023CSCamp/assets/Create_empty-dcb1dfb4.png",Bx=e("h2",null,"Dragging Script and Setting Components",-1),bx=e("ol",null,[e("li",null,"Drag the script to one platform"),e("li",null,[a("Create starting point and turning point "),e("ul",null,[e("li",null,"Start point: The start point of the platform"),e("li",null,"End point: The end point of the platform")])])],-1),Dx=e("img",{src:vx,style:{height:"60%"}},null,-1),Sx={__name:"73",setup(n){const t={layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-3.md"};return k(E),(s,o)=>(h(),x(jn,O(I(t)),{right:_(l=>[Dx]),default:_(()=>[Bx,bx]),_:1},16))}},wx=F(Sx,[["__file","/@slidev/slides/73.md"]]),kx="/2023CSCamp/assets/Start_point-83bb3508.png",xx="/2023CSCamp/assets/End_point-18ee9cf7.png",Ex=e("img",{src:kx,style:{width:"450pt"}},null,-1),Fx=e("img",{src:xx,style:{width:"450pt"}},null,-1),Px={__name:"74",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-3.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[Ex,Fx]),_:1},16))}},Tx=F(Px,[["__file","/@slidev/slides/74.md"]]),$x="/2023CSCamp/assets/PlatformsMovement_setup-1c65b498.png",Mx=e("p",null,[a("Drag start point and end point to the array of positions ("),e("code",null,"public Transform[] points"),a(")")],-1),Ux=e("img",{src:$x},null,-1),Ix=e("br",null,null,-1),Ox=e("blockquote",null,[e("p",null,"Repeat these steps three times for each platforms (Middle, Left, Right)")],-1),Lx={__name:"75",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-3.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[Mx,Ux,Ix,Ox]),_:1},16))}},Rx=F(Lx,[["__file","/@slidev/slides/75.md"]]),Gx=e("h2",null,"Stop the Tremble of Player",-1),jx=e("p",null,"TODO: Set platform as parent of player when player is standing on the platform",-1),qx={__name:"76",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-3.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[Gx,jx]),_:1},16))}},Nx=F(qx,[["__file","/@slidev/slides/76.md"]]),Hx=e("h3",null,"Concept",-1),Wx=e("ol",null,[e("li",null,"If player collides with platform, set player’s parent to platform"),e("li",null,[a("If player is moving or exit the collide, set player’s parent to nothing (i.e. "),e("code",null,"null"),a(")")]),e("li",null,"Make sure the thing that trigger the collision is player instead of something else")],-1),Vx={__name:"77",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-3.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[Hx,Wx]),_:1},16))}},zx=F(Vx,[["__file","/@slidev/slides/77.md"]]),Kx=e("ol",null,[e("li",null,"If player collides with platform, set player’s parent to platform")],-1),Yx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"OnTriggerStay2D"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"Collider2D"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"collision"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"collision"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"tag"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Player"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Make sure the object collide is `Player`")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"collision"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"transform"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"SetParent"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"transform"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"isMoving"),e("span",{style:{color:"#858585"}},"())"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"collision"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"transform"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"SetParent"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// If moving, set parent to `null`")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"OnTriggerStay2D"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"Collider2D"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"collision"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"collision"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"tag"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Player"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Make sure the object collide is `Player`")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"collision"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"transform"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"SetParent"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"transform"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"isMoving"),e("span",{style:{color:"#8E8F8B"}},"())"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"collision"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"transform"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"SetParent"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// If moving, set parent to `null`")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Jx=e("ol",{start:"2"},[e("li",null,[a("If player is moving or exit the collide, set player’s parent to nothing (i.e. "),e("code",null,"null"),a(")")])],-1),Zx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"SerializeField"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"PlayerController"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"playerController"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Remember to set the variable to access the PlayerController.")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"bool"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"isMoving"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Check if the player is moving")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// return playerController.getHorizontal() != 0 ? true : false;")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"playerController"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"getHorizontal"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"false"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// From `if (isMoving()) collision.transform.SetParent(null);`")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"SerializeField"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"PlayerController"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"playerController"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Remember to set the variable to access the PlayerController.")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"bool"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"isMoving"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Check if the player is moving")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// return playerController.getHorizontal() != 0 ? true : false;")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"playerController"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"getHorizontal"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"false"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// From `if (isMoving()) collision.transform.SetParent(null);`")])])])],-1),Qx={__name:"78",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-3.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[Kx,U(l,se({},{ranges:[""]}),{default:_(()=>[Yx]),_:1},16),Jx,U(l,se({},{ranges:[""]}),{default:_(()=>[Zx]),_:1},16)]),_:1},16)}}},Xx=F(Qx,[["__file","/@slidev/slides/78.md"]]),eE=e("ol",{start:"3"},[e("li",null,"Make sure the thing that trigger the collision is player instead of something else")],-1),nE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"bool"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"isMoving"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Check if the player is moving")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// return playerController.getHorizontal() != 0 ? true : false;")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"playerController"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"getHorizontal"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"false"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// If speed of player is 0")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"OnTriggerStay2D"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"Collider2D"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"collision"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"collision"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"tag"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Player"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"collision"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"transform"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"SetParent"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"transform"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"isMoving"),e("span",{style:{color:"#858585"}},"())"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"collision"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"transform"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"SetParent"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"OnTriggerExit2D"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"Collider2D"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"collision"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"collision"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"tag"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Player"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"collision"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"transform"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"SetParent"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"bool"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"isMoving"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Check if the player is moving")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// return playerController.getHorizontal() != 0 ? true : false;")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"playerController"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"getHorizontal"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"false"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// If speed of player is 0")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"OnTriggerStay2D"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"Collider2D"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"collision"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"collision"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"tag"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Player"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"collision"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"transform"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"SetParent"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"transform"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"isMoving"),e("span",{style:{color:"#8E8F8B"}},"())"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"collision"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"transform"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"SetParent"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"OnTriggerExit2D"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"Collider2D"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"collision"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"collision"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"tag"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Player"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"collision"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"transform"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"SetParent"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),tE={__name:"79",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-3.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[eE,U(l,se({},{ranges:["all","8,16"]}),{default:_(()=>[nE]),_:1},16)]),_:1},16)}}},sE=F(tE,[["__file","/@slidev/slides/79.md"]]),oE=e("p",null,[a("At "),e("em",null,[e("code",null,"Playcontroller")]),a(" script, add a public function for checking if player is moving")],-1),lE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// PlayerController.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getHorizontal"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"horizontal"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// PlayerController.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getHorizontal"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"horizontal"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),rE={__name:"80",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-3.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[oE,U(l,se({},{ranges:["all","1","all"]}),{default:_(()=>[lE]),_:1},16)]),_:1},16)}}},aE=F(rE,[["__file","/@slidev/slides/80.md"]]),iE=e("h3",null,"Setup from Unity Editor",-1),cE=e("ol",null,[e("li",null,"Add player tag"),e("li",null,"Set player for platform"),e("li",null,"Add Rigidbody 2D for triggering collision")],-1),pE={__name:"81",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-3.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[iE,cE]),_:1},16))}},uE=F(pE,[["__file","/@slidev/slides/81.md"]]),dE="/2023CSCamp/assets/Player_tag-555ea469.png",yE="/2023CSCamp/assets/Player_for_platform-092d69ed.png",fE=e("p",null,"Add player tag for player",-1),hE=e("img",{src:dE,style:{height:"30%"}},null,-1),mE=e("p",null,[a("Set "),e("code",null,"player"),a(" for platform")],-1),gE=e("img",{src:yE,style:{height:"40%"}},null,-1),CE={__name:"82",setup(n){const t={layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-3.md"};return k(E),(s,o)=>(h(),x(jn,O(I(t)),{right:_(l=>[mE,gE]),default:_(()=>[fE,hE]),_:1},16))}},_E=F(CE,[["__file","/@slidev/slides/82.md"]]),AE="/2023CSCamp/assets/Trigger_box_collider-21105ace.png",vE=e("p",null,[a("After adding player tag, we need to add a "),e("code",null,"Box Collider 2D"),a(" for triggering the collision. (After adding, platform will have "),e("em",null,"two"),a(" box collider)")],-1),BE=e("img",{src:AE,style:{height:"60%"}},null,-1),bE=e("blockquote",null,[e("p",null,[a("Check the "),e("code",null,"Is Trigger"),a(" box")])],-1),DE=e("p",null,"Finally, do the same thing for the other platforms.",-1),SE={__name:"83",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-3.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[vE,BE,bE,DE]),_:1},16))}},wE=F(SE,[["__file","/@slidev/slides/83.md"]]),kE=e("h1",null,"Unity - 4 ObjectFalling Script",-1),xE={__name:"84",setup(n){const t={layout:"center",hide:!1,srcSequence:"./pages/Unity-4.md"};return k(E),(s,o)=>{const l=Jn;return h(),x(Gn,O(I(t)),{default:_(()=>[kE,U(l,{listClass:"toc",minDepth:"2",mode:"onlyCurrentTree"})]),_:1},16)}}},EE=F(xE,[["__file","/@slidev/slides/84.md"]]),FE=e("h2",null,"ObjectFalling and GameManager",-1),PE=e("ol",null,[e("li",null,[a("Create a prefab "),e("code",null,"triangle")]),e("li",null,[a("Create two scripts, "),e("code",null,"ObjectFalling"),a(" and "),e("code",null,"GameManager")])],-1),TE={__name:"85",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-4.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[FE,PE]),_:1},16))}},$E=F(TE,[["__file","/@slidev/slides/85.md"]]),ME="/2023CSCamp/assets/Triangle-bef0e9ef.png",UE="/2023CSCamp/assets/Triangle_prefab-f2193290.png",IE=e("h3",null,"Create Triangle Prefab",-1),OE=e("ol",null,[e("li",null,"Create a triangle")],-1),LE=e("img",{src:ME,style:{height:"40%"}},null,-1),RE=e("ol",{start:"2"},[e("li",null,[a("Create a folder "),e("code",null,"Prefabs"),a(" under "),e("code",null,"Assets"),a(" and drag "),e("code",null,"Triangle"),a(" from Scene to Prefab folder"),e("br"),a(" Delete the "),e("code",null,"Triangle"),a(" from scene")])],-1),GE=e("img",{src:UE,style:{height:"30%"}},null,-1),jE={__name:"86",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-4.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[IE,OE,LE,RE,GE]),_:1},16))}},qE=F(jE,[["__file","/@slidev/slides/86.md"]]),NE="/2023CSCamp/assets/Is_trigger-65820a39.png",HE=e("ol",{start:"3"},[e("li",null,[a("Give triangle "),e("code",null,"RigidBody 2D"),a(" and "),e("code",null,"Box Collider 2D"),a(" (Set triangle’s "),e("code",null,"Box Collider 2D"),a("’s "),e("code",null,"Is Trigger"),a(" to true)")])],-1),WE=e("img",{src:NE,style:{height:"70%"}},null,-1),VE={__name:"87",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-4.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[HE,WE]),_:1},16))}},zE=F(VE,[["__file","/@slidev/slides/87.md"]]),KE="/2023CSCamp/assets/Add_tag-422250f3.png",YE=e("ol",{start:"4"},[e("li",null,[a("Add "),e("code",null,"Spawned"),a(" tag to triangle")])],-1),JE=e("img",{src:KE,style:{height:"70%"}},null,-1),ZE={__name:"88",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-4.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[YE,JE]),_:1},16))}},QE=F(ZE,[["__file","/@slidev/slides/88.md"]]),XE="/2023CSCamp/assets/Spawned-1d23c072.png",eF=e("p",null,"Add tag example",-1),nF=e("img",{src:XE},null,-1),tF={__name:"89",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-4.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[eF,nF]),_:1},16))}},sF=F(tF,[["__file","/@slidev/slides/89.md"]]),oF="/2023CSCamp/assets/Two_scripts-6b9b03b7.png",lF=e("h3",null,"Create the Two Scripts",-1),rF=e("p",null,"Create and double click the two scripts",-1),aF=e("img",{src:oF,style:{height:"40%"}},null,-1),iF={__name:"90",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-4.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[lF,rF,aF]),_:1},16))}},cF=F(iF,[["__file","/@slidev/slides/90.md"]]),pF=e("h2",null,"ObjectFalling",-1),uF=e("p",null,"Setup our variables",-1),dF=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ObjectFalling.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"SerializeField"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"GameManager"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"gameManager"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"SerializeField"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"GameObject"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"triangle"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"   "),e("span",{style:{color:"#758575"}},"// The dropping triangle")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"SerializeField"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"left"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"right"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"up"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Setting the range that the triangles generate")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"SerializeField"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"spawningPeriod"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#758575"}},"// Spawning period")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"SerializeField"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"buttom"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#758575"}},"// Buttom of the camera field")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"timer"),e("span",{style:{color:"#858585"}},";")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ObjectFalling.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"SerializeField"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"GameManager"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"gameManager"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"SerializeField"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"GameObject"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"triangle"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"   "),e("span",{style:{color:"#A0ADA0"}},"// The dropping triangle")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"SerializeField"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"left"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"right"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"up"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Setting the range that the triangles generate")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"SerializeField"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"spawningPeriod"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A0ADA0"}},"// Spawning period")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"SerializeField"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"buttom"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#A0ADA0"}},"// Buttom of the camera field")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"timer"),e("span",{style:{color:"#8E8F8B"}},";")])])])],-1),yF=e("p",null,"Create the triangle object instances",-1),fF=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ObjectFalling.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"object_Instantiate"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"GameObject"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"thing"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"Vector3"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"position"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Vector3"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"Random"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"Range"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"left"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"right"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"up"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0f"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"Quaternion"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"quaternion"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Quaternion"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"Euler"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Random"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"Range"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"360"),e("span",{style:{color:"#858585"}},"));")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"Instantiate"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"thing"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"position"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"quaternion"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Instantiate(要複製的東西, 要複製得座標, 複製物的旋轉)")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ObjectFalling.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"object_Instantiate"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"GameObject"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"thing"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"Vector3"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"position"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Vector3"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"Random"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"Range"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"left"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"right"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"up"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0f"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"Quaternion"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"quaternion"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"Quaternion"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"Euler"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"Random"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"Range"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"360"),e("span",{style:{color:"#8E8F8B"}},"));")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"Instantiate"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"thing"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"position"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"quaternion"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Instantiate(要複製的東西, 要複製得座標, 複製物的旋轉)")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),hF={__name:"91",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-4.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[pF,uF,U(l,se({},{ranges:[""]}),{default:_(()=>[dF]),_:1},16),yF,U(l,se({},{ranges:[""]}),{default:_(()=>[fF]),_:1},16)]),_:1},16)}}},mF=F(hF,[["__file","/@slidev/slides/91.md"]]),gF=e("p",null,"If spawned object is out of range, destroy it.",-1),CF=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ObjectFalling.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"FixedUpdate"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"foreach"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"GameObject"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"spawnedObject"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"in"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"GameObject"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"FindGameObjectsWithTag"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Spawned"'),e("span",{style:{color:"#858585"}},"))"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"spawnedObject"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"transform"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"position"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"y"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"buttom"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#A1B567"}},"Destroy"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"spawnedObject"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ObjectFalling.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"FixedUpdate"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"foreach"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"GameObject"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"spawnedObject"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"in"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"GameObject"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"FindGameObjectsWithTag"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Spawned"'),e("span",{style:{color:"#8E8F8B"}},"))"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"spawnedObject"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"transform"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"position"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"y"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"buttom"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#6C7834"}},"Destroy"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"spawnedObject"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),_F={__name:"92",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-4.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[gF,U(l,se({},{ranges:[""]}),{default:_(()=>[CF]),_:1},16)]),_:1},16)}}},AF=F(_F,[["__file","/@slidev/slides/92.md"]]),vF=e("p",null,"Setup a boolean to check if game is ended",-1),BF=e("blockquote",null,[e("p",null,[e("code",null,"GameManager.cs")])],-1),bF=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// GameManager.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"bool"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"isGameover"),e("span",{style:{color:"#858585"}},";")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// GameManager.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"bool"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"isGameover"),e("span",{style:{color:"#8E8F8B"}},";")])])])],-1),DF=e("br",null,null,-1),SF=e("blockquote",null,[e("p",null,[e("code",null,"ObjectFalling.cs")])],-1),wF=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ObjectFalling.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Update"),e("span",{style:{color:"#858585"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"gameManager"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"isGameover"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"false"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}},"   "),e("span",{style:{color:"#758575"}},"// If game isn't over")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"timer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"deltaTime"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"timer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},">="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"spawningPeriod"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#758575"}},"// Generate a new triangle")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#A1B567"}},"object_Instantiate"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"triangle"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#B8A965"}},"timer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0f"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ObjectFalling.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Update"),e("span",{style:{color:"#8E8F8B"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"gameManager"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"isGameover"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"false"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}},"   "),e("span",{style:{color:"#A0ADA0"}},"// If game isn't over")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"timer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"deltaTime"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"timer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},">="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"spawningPeriod"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#A0ADA0"}},"// Generate a new triangle")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#6C7834"}},"object_Instantiate"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"triangle"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8C862B"}},"timer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0f"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),kF={__name:"93",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-4.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[vF,BF,U(l,se({},{ranges:[""]}),{default:_(()=>[bF]),_:1},16),DF,SF,U(l,se({},{ranges:[""]}),{default:_(()=>[wF]),_:1},16)]),_:1},16)}}},xF=F(kF,[["__file","/@slidev/slides/93.md"]]),EF="/2023CSCamp/assets/Create_empty-b5b3851e.png",FF="/2023CSCamp/assets/Object_manager-4f8fe10b.png",PF=e("p",null,[a("Create two empty, "),e("code",null,"Object Manager"),a(" and "),e("code",null,"Game Manager")],-1),TF=e("img",{src:EF,style:{height:"300pt"}},null,-1),$F=e("p",null,[a("Drag "),e("code",null,"ObjectFalling"),a(" script to "),e("code",null,"Object Manager"),a(", drag "),e("code",null,"GameManager"),a(" script to "),e("code",null,"Game Manager"),a(".")],-1),MF=e("img",{src:FF,style:{height:"190pt"}},null,-1),UF={__name:"94",setup(n){const t={layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-4.md"};return k(E),(s,o)=>(h(),x(jn,O(I(t)),{right:_(l=>[$F,MF]),default:_(()=>[PF,TF]),_:1},16))}},IF=F(UF,[["__file","/@slidev/slides/94.md"]]),OF=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Script variables"),e("th",null,"GameObject")])]),e("tbody",null,[e("tr",null,[e("td",null,"Game Manager"),e("td",null,"Game Manager")]),e("tr",null,[e("td",null,"Triangle"),e("td",null,[a("Triangle from "),e("code",null,"Prefabs"),a(" folder")])]),e("tr",null,[e("td",null,"Left"),e("td",null,"-8.2")]),e("tr",null,[e("td",null,"Right"),e("td",null,"8.2")]),e("tr",null,[e("td",null,"Up"),e("td",null,"5")]),e("tr",null,[e("td",null,"Spawning Period"),e("td",null,"0.2")]),e("tr",null,[e("td",null,"Buttom"),e("td",null,"-5")])])],-1),LF={__name:"95",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-4.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[OF]),_:1},16))}},RF=F(LF,[["__file","/@slidev/slides/95.md"]]),GF=e("h1",null,"Unity - 5 UI & UX",-1),jF={__name:"96",setup(n){const t={layout:"center",hide:!1,srcSequence:"./pages/Unity-5.md"};return k(E),(s,o)=>{const l=Jn;return h(),x(Gn,O(I(t)),{default:_(()=>[GF,U(l,{listClass:"toc",minDepth:"2",mode:"onlyCurrentTree"})]),_:1},16)}}},qF=F(jF,[["__file","/@slidev/slides/96.md"]]),NF="/2023CSCamp/assets/Canvas-970188d0.png",HF=e("h2",null,"Create a Canvas for our UI",-1),WF=e("br",null,null,-1),VF=e("img",{src:NF,style:{height:"70%"}},null,-1),zF={__name:"97",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-5.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[HF,WF,VF]),_:1},16))}},KF=F(zF,[["__file","/@slidev/slides/97.md"]]),YF="/2023CSCamp/assets/Scoreboard_background-3d9a161a.png",JF="/2023CSCamp/assets/Score_text-dad61ec4.png",ZF=e("p",null,[a("Create a "),e("code",null,"Raw Image"),a(" and rename to "),e("code",null,"Scoreboard background")],-1),QF=e("img",{src:YF,style:{width:"70%"}},null,-1),XF=e("p",null,[a("Create a "),e("code",null,"Text - TextMeshPro"),a(" and rename to "),e("code",null,"Score Text")],-1),eP=e("img",{src:JF,style:{width:"70%"}},null,-1),nP={__name:"98",setup(n){const t={layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-5.md"};return k(E),(s,o)=>(h(),x(jn,O(I(t)),{right:_(l=>[XF,eP]),default:_(()=>[ZF,QF]),_:1},16))}},tP=F(nP,[["__file","/@slidev/slides/98.md"]]),sP="/2023CSCamp/assets/Tmp_import-ce1c9259.png",oP=e("p",null,"Import TMP Essentials if this window pops up",-1),lP=e("img",{src:sP,style:{width:"50%"}},null,-1),rP={__name:"99",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-5.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[oP,lP]),_:1},16))}},aP=F(rP,[["__file","/@slidev/slides/99.md"]]),iP="/2023CSCamp/assets/Score_place_ex-d4f982ef.png",cP="/2023CSCamp/assets/Text_color-e402bb43.png",pP=e("p",null,"Move those to a place you like",-1),uP=e("p",null,"Ex:",-1),dP=e("img",{src:iP,style:{width:"70%"}},null,-1),yP=e("p",null,[a("Remember to change the text color to black (Choose "),e("code",null,"vertex color"),a(")")],-1),fP=e("img",{src:cP,style:{width:"70%"}},null,-1),hP={__name:"100",setup(n){const t={layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-5.md"};return k(E),(s,o)=>(h(),x(jn,O(I(t)),{right:_(l=>[yP,fP]),default:_(()=>[pP,uP,dP]),_:1},16))}},mP=F(hP,[["__file","/@slidev/slides/100.md"]]),gP=e("h2",null,"GameManager Script",-1),CP=e("p",null,[a("To use "),e("code",null,"TMP_Text"),a(", import "),e("code",null,"TMPro")],-1),_P=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"TMPro"),e("span",{style:{color:"#858585"}},";")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"TMPro"),e("span",{style:{color:"#8E8F8B"}},";")])])])],-1),AP=e("p",null,"Setup our variables",-1),vP=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"score"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#758575"}},"// The score we get")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"bool"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"isGameover"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// This we have written in the last section")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CurrentScoreText"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Score: "'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"FinalScoreText"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Final Score: "'),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"SerializeField"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"TMP_Text"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"scoreboardUI"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"     "),e("span",{style:{color:"#758575"}},"// Score board")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"score"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#A0ADA0"}},"// The score we get")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"bool"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"isGameover"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// This we have written in the last section")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CurrentScoreText"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Score: "'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"FinalScoreText"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Final Score: "'),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"SerializeField"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"TMP_Text"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"scoreboardUI"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"     "),e("span",{style:{color:"#A0ADA0"}},"// Score board")])])])],-1),BP={__name:"101",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-5.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[gP,CP,U(l,se({},{ranges:[""]}),{default:_(()=>[_P]),_:1},16),AP,U(l,se({},{ranges:[""]}),{default:_(()=>[vP]),_:1},16)]),_:1},16)}}},bP=F(BP,[["__file","/@slidev/slides/101.md"]]),DP=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// GameManager.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Start"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"start_game"),e("span",{style:{color:"#858585"}},"();"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Call the start game function")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Update"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"scoreboardUI"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"text"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"CurrentScoreText"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"score"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Update current score")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// GameManager.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Start"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"start_game"),e("span",{style:{color:"#8E8F8B"}},"();"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Call the start game function")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Update"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"scoreboardUI"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"text"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"CurrentScoreText"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"score"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Update current score")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),SP=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// GameManager.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"start_game"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"isGameover"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"false"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"score"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// GameManager.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"start_game"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"isGameover"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"false"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"score"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),wP={__name:"102",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-5.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[U(l,se({},{ranges:[""]}),{default:_(()=>[DP]),_:1},16),U(l,se({},{ranges:[""]}),{default:_(()=>[SP]),_:1},16)]),_:1},16)}}},kP=F(wP,[["__file","/@slidev/slides/102.md"]]),xP=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// GameManager.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"add_point"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"points"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#B8A965"}},"isGameover"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"score"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"points"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// If not game over, update the score.")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// GameManager.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"add_point"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"points"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#8C862B"}},"isGameover"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"score"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"points"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// If not game over, update the score.")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),EP={__name:"103",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-5.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[U(l,se({},{ranges:[""]}),{default:_(()=>[xP]),_:1},16)]),_:1},16)}}},FP=F(EP,[["__file","/@slidev/slides/103.md"]]),PP=e("h2",null,"PlayerInteract Script Integration",-1),TP=e("p",null,[a("Create a "),e("code",null,"PlayerInteract"),a(" script and double click to edit")],-1),$P=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// PlayerInteract.cs (This script will be put on `player`)")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"SerializeField"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"GameManager"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"gameManager"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"OnTriggerEnter2D"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"Collider2D"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"other"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"other"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"tag"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Spawned"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"gameManager"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"add_point"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"Debug"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"Log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Add Point"'),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Destroy"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"other"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"gameObject"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// PlayerInteract.cs (This script will be put on `player`)")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"SerializeField"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"GameManager"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"gameManager"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"OnTriggerEnter2D"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"Collider2D"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"other"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"other"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"tag"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Spawned"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"gameManager"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"add_point"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"Debug"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"Log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Add Point"'),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Destroy"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"other"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"gameObject"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),MP={__name:"104",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-5.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[PP,TP,U(l,se({},{ranges:["1","1,3","5-12"]}),{default:_(()=>[$P]),_:1},16)]),_:1},16)}}},UP=F(MP,[["__file","/@slidev/slides/104.md"]]),IP="/2023CSCamp/assets/Grab_score_text-9c14a1ff.png",OP=e("p",null,[a("Now, go back to Unity editor, grab "),e("code",null,"Score Text"),a(" to "),e("code",null,"Scoreboard UI")],-1),LP=e("img",{src:IP},null,-1),RP={__name:"105",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-5.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[OP,LP]),_:1},16))}},GP=F(RP,[["__file","/@slidev/slides/105.md"]]),jP="/2023CSCamp/assets/PlayerInteract-02ba8782.png",qP=e("p",null,[a("Then, drag "),e("code",null,"PlayerInteract"),a(" to "),e("code",null,"Player"),a(" (Now player will have 2 scripts, "),e("code",null,"PlayerController"),a(" and "),e("code",null,"PlayerInteract"),a(")"),e("br"),a(" Drag "),e("code",null,"Game Manager"),a(" to "),e("code",null,"Game Manager")],-1),NP=e("img",{src:jP,style:{height:"70%"}},null,-1),HP={__name:"106",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-5.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[qP,NP]),_:1},16))}},WP=F(HP,[["__file","/@slidev/slides/106.md"]]),VP=e("h1",null,"Unity - 6 - Restart",-1),zP={__name:"107",setup(n){const t={layout:"center",hide:!1,srcSequence:"./pages/Unity-6.md"};return k(E),(s,o)=>{const l=Jn;return h(),x(Gn,O(I(t)),{default:_(()=>[VP,U(l,{listClass:"toc",minDepth:"2",mode:"onlyCurrentTree"})]),_:1},16)}}},KP=F(zP,[["__file","/@slidev/slides/107.md"]]),YP="/2023CSCamp/assets/Create_panel-e69dd4a4.png",JP=e("h2",null,"Restart Panel",-1),ZP=e("p",null,[a("First, create "),e("code",null,"Panel"),a(" inside "),e("code",null,"Canvas"),a(", this will be the panel that shows when the game ends")],-1),QP=e("img",{src:YP,style:{height:"70%"}},null,-1),XP={__name:"108",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-6.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[JP,ZP,QP]),_:1},16))}},eT=F(XP,[["__file","/@slidev/slides/108.md"]]),nT="/2023CSCamp/assets/Restart_button-b2aacaaf.png",tT=e("p",null,[a("Under "),e("code",null,"Panel"),a(", create three components:")],-1),sT=e("ol",null,[e("li",null,[a("Gameover Text ("),e("code",null,"UI/Text - TextMashPro"),a(")")]),e("li",null,[a("Final Score Text ("),e("code",null,"UI/Text - TextMashPro"),a(")")]),e("li",null,[a("Restart Button ("),e("code",null,"UI/Button - TextMeshPro"),a(")")])],-1),oT=e("img",{src:nT,style:{height:"70%"}},null,-1),lT={__name:"109",setup(n){const t={layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-6.md"};return k(E),(s,o)=>(h(),x(jn,O(I(t)),{right:_(l=>[oT]),default:_(()=>[tT,sT]),_:1},16))}},rT=F(lT,[["__file","/@slidev/slides/109.md"]]),aT="/2023CSCamp/assets/Gameover_button-bb7fe8d0.png",iT="/2023CSCamp/assets/Restart_text-7857fe83.png",cT=e("p",null,[a("Change the text inside "),e("code",null,"Gameover Text")],-1),pT=e("img",{src:aT,style:{width:"70%"}},null,-1),uT=e("p",null,[a("Similarily, change the text of "),e("code",null,"Restart Button"),a(" to "),e("code",null,"Restart")],-1),dT=e("img",{src:iT,style:{width:"70%"}},null,-1),yT={__name:"110",setup(n){const t={layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-6.md"};return k(E),(s,o)=>(h(),x(jn,O(I(t)),{right:_(l=>[uT,dT]),default:_(()=>[cT,pT]),_:1},16))}},fT=F(yT,[["__file","/@slidev/slides/110.md"]]),hT=e("h2",null,"Fine Tuning UI - 1",-1),mT=e("p",null,"Reset the three components’ position",-1),gT={__name:"111",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-6.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[hT,mT]),_:1},16))}},CT=F(gT,[["__file","/@slidev/slides/111.md"]]),_T="/2023CSCamp/assets/UI_tuning_before-d3f17c37.png",AT="/2023CSCamp/assets/UI_tuning_after-e4fec322.png",vT=e("p",null,"Before:",-1),BT=e("img",{src:_T,style:{height:"40%"}},null,-1),bT=e("p",null,"After:",-1),DT=e("img",{src:AT,style:{height:"40%"}},null,-1),ST={__name:"112",setup(n){const t={layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-6.md"};return k(E),(s,o)=>(h(),x(jn,O(I(t)),{right:_(l=>[bT,DT]),default:_(()=>[vT,BT]),_:1},16))}},wT=F(ST,[["__file","/@slidev/slides/112.md"]]),kT=e("h2",null,"Script",-1),xT=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// GameManager.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"using"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"UnityEngine"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#A1B567"}},"UI"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Import the UI toolkit for Button")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// We add the following before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"score"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"bool"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"isGameover"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CurrentScoreText"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Score: "'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"FinalScoreText"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Final Score: "'),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"SerializeField"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"TMP_Text"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"scoreboardUI"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// New variables")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"SerializeField"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"GameObject"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"gameoverPage"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"   "),e("span",{style:{color:"#758575"}},"// The final panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"SerializeField"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"TMP_Text"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"finalScore"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"       "),e("span",{style:{color:"#758575"}},"// Final score")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"SerializeField"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Button"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"restartButton"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#758575"}},"// Restart button")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// GameManager.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"using"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"UnityEngine"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#6C7834"}},"UI"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Import the UI toolkit for Button")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// We add the following before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"score"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"bool"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"isGameover"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CurrentScoreText"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Score: "'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"FinalScoreText"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Final Score: "'),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"SerializeField"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"TMP_Text"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"scoreboardUI"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// New variables")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"SerializeField"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"GameObject"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"gameoverPage"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"   "),e("span",{style:{color:"#A0ADA0"}},"// The final panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"SerializeField"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"TMP_Text"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"finalScore"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"       "),e("span",{style:{color:"#A0ADA0"}},"// Final score")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"SerializeField"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Button"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"restartButton"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#A0ADA0"}},"// Restart button")])])])],-1),ET={__name:"113",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-6.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[kT,U(l,se({},{ranges:[""]}),{default:_(()=>[xT]),_:1},16)]),_:1},16)}}},FT=F(ET,[["__file","/@slidev/slides/113.md"]]),PT=e("ol",null,[e("li",null,[a("Set the panel to "),e("code",null,"non-active"),a(" when the game start.")]),e("li",null,[a("Set the panel to "),e("code",null,"active"),a(" when the game end.")])],-1),TT=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// GameManager.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"start_game"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"isGameover"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"false"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"gameoverPage"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"SetActive"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"false"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Set the final page to non-active when game start")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"score"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"game_over"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"isGameover"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Set isGameover to true")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"finalScore"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"text"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"FinalScoreText"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"score"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Set up final score")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"gameoverPage"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"SetActive"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Activate final panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"restartButton"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"onClick"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"AddListener"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"start_game"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Listen the restart button")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// GameManager.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"start_game"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"isGameover"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"false"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"gameoverPage"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"SetActive"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"false"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Set the final page to non-active when game start")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"score"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"game_over"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"isGameover"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Set isGameover to true")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"finalScore"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"text"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"FinalScoreText"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"score"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Set up final score")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"gameoverPage"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"SetActive"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Activate final panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"restartButton"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"onClick"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"AddListener"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"start_game"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Listen the restart button")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),$T={__name:"114",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-6.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[PT,U(l,se({},{ranges:["all","4","8-13"]}),{default:_(()=>[TT]),_:1},16)]),_:1},16)}}},MT=F($T,[["__file","/@slidev/slides/114.md"]]),UT=e("p",null,"Setup the rebirth-mechanics",-1),IT=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// PlayerInteract.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"SerializeField"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"GameManager"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"gameManager"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// We setup this before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"SerializeField"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"GameObject"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"player"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"reset_player"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"player"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"transform"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"position"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Vector3"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Update"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"player"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"transform"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"position"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"y"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// If player dropped")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"reset_player"),e("span",{style:{color:"#858585"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"gameManager"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"game_over"),e("span",{style:{color:"#858585"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"Debug"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"Log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Fall"'),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// PlayerInteract.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"SerializeField"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"GameManager"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"gameManager"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// We setup this before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"SerializeField"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"GameObject"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"player"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"reset_player"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"player"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"transform"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"position"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Vector3"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Update"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"player"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"transform"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"position"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"y"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// If player dropped")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"reset_player"),e("span",{style:{color:"#8E8F8B"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"gameManager"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"game_over"),e("span",{style:{color:"#8E8F8B"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"Debug"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"Log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Fall"'),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),OT={__name:"115",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-6.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[UT,U(l,se({},{ranges:["all","3","5-7","9-15"]}),{default:_(()=>[IT]),_:1},16)]),_:1},16)}}},LT=F(OT,[["__file","/@slidev/slides/115.md"]]),RT=e("p",null,[a("Recall the integration of "),e("code",null,"PlayerInteract"),a(" and "),e("code",null,"GameManager")],-1),GT=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// PlayerInteract.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Update"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"player"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"transform"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"position"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"y"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// If player dropped")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"reset_player"),e("span",{style:{color:"#858585"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"gameManager"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"game_over"),e("span",{style:{color:"#858585"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"Debug"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"Log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Fall"'),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// GameManager.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"game_over"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"isGameover"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Set isGameover to true")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"finalScore"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"text"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"FinalScoreText"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"score"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Set up final score")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"gameoverPage"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"SetActive"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Activate final panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"restartButton"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"onClick"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"AddListener"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"start_game"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Listen the restart button")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// PlayerInteract.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Update"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"player"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"transform"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"position"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"y"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// If player dropped")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"reset_player"),e("span",{style:{color:"#8E8F8B"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"gameManager"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"game_over"),e("span",{style:{color:"#8E8F8B"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"Debug"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"Log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Fall"'),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// GameManager.cs")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"game_over"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"isGameover"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Set isGameover to true")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"finalScore"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"text"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"FinalScoreText"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"score"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Set up final score")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"gameoverPage"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"SetActive"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Activate final panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"restartButton"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"onClick"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"AddListener"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"start_game"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Listen the restart button")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),jT={__name:"116",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-6.md"};return k(E),(s,o)=>{const l=fe;return h(),x(H,O(I(t)),{default:_(()=>[RT,U(l,se({},{ranges:["all","3","5,10-16"]}),{default:_(()=>[GT]),_:1},16)]),_:1},16)}}},qT=F(jT,[["__file","/@slidev/slides/116.md"]]),NT="/2023CSCamp/assets/Player_for_playerinteract-6063094f.png",HT=e("h2",null,"Scripts Setup",-1),WT=e("p",null,[a("Go back to Unity editor and setup player for "),e("code",null,"PlayerInteract")],-1),VT=e("img",{src:NT,style:{height:"70%"}},null,-1),zT={__name:"117",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-6.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[HT,WT,VT]),_:1},16))}},KT=F(zT,[["__file","/@slidev/slides/117.md"]]),YT="/2023CSCamp/assets/Panel_for_gamemanager-ae8807df.png",JT=e("p",null,[a("Setup "),e("code",null,"Panel"),a(" and its child components for "),e("code",null,"GameManager")],-1),ZT=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"GameManager.cs"),e("th",null,"GameObject")])]),e("tbody",null,[e("tr",null,[e("td",null,"Gameover page"),e("td",null,"Panel")]),e("tr",null,[e("td",null,"Final score"),e("td",null,"Final Score Text")]),e("tr",null,[e("td",null,"Restart Button"),e("td",null,"Restart Button")])])],-1),QT=e("img",{src:YT,style:{width:"100%"}},null,-1),XT={__name:"118",setup(n){const t={layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-6.md"};return k(E),(s,o)=>(h(),x(jn,O(I(t)),{right:_(l=>[QT]),default:_(()=>[JT,ZT]),_:1},16))}},e$=F(XT,[["__file","/@slidev/slides/118.md"]]),n$="/2023CSCamp/assets/Panel_color-b745d37f.png",t$=e("h2",null,"Fine Tuning UI - 2",-1),s$=e("p",null,[a("To change the background color of panel, you can select "),e("code",null,"panel"),a(" and change it’s Image color")],-1),o$=e("img",{src:n$,style:{height:"70%"}},null,-1),l$={__name:"119",setup(n){const t={hide:!1,srcSequence:"./pages/Unity-6.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[t$,s$,o$]),_:1},16))}},r$=F(l$,[["__file","/@slidev/slides/119.md"]]),a$="/2023CSCamp/assets/Text_inspector-9fa438c2.png",i$=e("p",null,[a("To change the text fonts, layout or color, choose the "),e("code",null,"TextMeshPro"),a(" component and edit it in the Inspector windows")],-1),c$=e("img",{src:a$,style:{width:"65%"}},null,-1),p$={__name:"120",setup(n){const t={layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-6.md"};return k(E),(s,o)=>(h(),x(jn,O(I(t)),{right:_(l=>[c$]),default:_(()=>[i$]),_:1},16))}},u$=F(p$,[["__file","/@slidev/slides/120.md"]]),d$=e("h1",null,"Deploy Our game",-1),y$={__name:"121",setup(n){const t={layout:"center",hide:!1,srcSequence:"./pages/Deploy.md"};return k(E),(s,o)=>{const l=Jn;return h(),x(Gn,O(I(t)),{default:_(()=>[d$,U(l,{listClass:"toc",minDepth:"2",mode:"onlyCurrentTree"})]),_:1},16)}}},f$=F(y$,[["__file","/@slidev/slides/121.md"]]),h$="/2023CSCamp/assets/Build_settings-c5d0a294.png",m$=e("h2",null,"Build Settings",-1),g$=e("ol",null,[e("li",null,[a("Select "),e("code",null,"Build Settings..."),a(" (from "),e("code",null,"file"),a(").")]),e("li",null,[a("Select "),e("code",null,"WebGL"),a(" and switch platforms.")])],-1),C$=e("img",{src:h$,style:{height:"80%"}},null,-1),_$={__name:"122",setup(n){const t={hide:!1,srcSequence:"./pages/Deploy.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[m$,g$,C$]),_:1},16))}},A$=F(_$,[["__file","/@slidev/slides/122.md"]]),v$="/2023CSCamp/assets/Add_modules-11d299ce.png",B$=e("blockquote",null,[e("p",null,[a("If you can’t select "),e("code",null,"WebGL"),a(", add "),e("code",null,"WebGL Build Support"),a(" module to your Unity editor.")])],-1),b$=e("img",{src:v$,style:{height:"80%"}},null,-1),D$={__name:"123",setup(n){const t={hide:!1,srcSequence:"./pages/Deploy.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[B$,b$]),_:1},16))}},S$=F(D$,[["__file","/@slidev/slides/123.md"]]),w$="/2023CSCamp/assets/Project_settings-02e3a30b.png",k$=e("ol",{start:"3"},[e("li",null,[a("Click on "),e("code",null,"Player Settings"),a(" at the left bottom of the window and open the project settings panel.")]),e("li",null,[a("Change "),e("code",null,"Player > Resolution and Presentation > Default Canvas Width/Height"),a(" to 960 * 540.")]),e("li",null,[a("Select "),e("code",null,"Player > Resolution and Presentation > WebGL Template > Minimal"),a(".")])],-1),x$=e("img",{src:w$,style:{height:"80%"}},null,-1),E$={__name:"124",setup(n){const t={hide:!1,srcSequence:"./pages/Deploy.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[k$,x$]),_:1},16))}},F$=F(E$,[["__file","/@slidev/slides/124.md"]]),P$="/2023CSCamp/assets/Publishing_settings-8ab1fa31.png",T$=e("ol",{start:"6"},[e("li",null,[a("Change "),e("code",null,"Player > Publishing Settings > Compression Format"),a(" to "),e("code",null,"Disable"),a(".")])],-1),$$=e("img",{src:P$,style:{height:"80%"}},null,-1),M$={__name:"125",setup(n){const t={hide:!1,srcSequence:"./pages/Deploy.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[T$,$$]),_:1},16))}},U$=F(M$,[["__file","/@slidev/slides/125.md"]]),I$="/2023CSCamp/assets/Build-90adf0f1.png",O$=e("ol",{start:"7"},[e("li",null,[a("Check the scene on the upper right corner and click "),e("code",null,"Build"),a(".")])],-1),L$=e("img",{src:I$,style:{height:"80%"}},null,-1),R$=e("ol",{start:"8"},[e("li",null,[a("After build succeeds, compress the output folder to a "),e("code",null,"zip"),a(" file.")])],-1),G$={__name:"126",setup(n){const t={hide:!1,srcSequence:"./pages/Deploy.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[O$,L$,R$]),_:1},16))}},j$=F(G$,[["__file","/@slidev/slides/126.md"]]),q$="/2023CSCamp/assets/Itchio-eea3ac6f.png",N$=e("h2",null,"Itch.io deploy",-1),H$=e("ol",null,[e("li",null,[a("Open "),e("a",{href:"https://itch.io",target:"_blank",rel:"noopener"},"itch.io"),a(" and create a new project.")])],-1),W$=e("img",{src:q$,style:{height:"70%"}},null,-1),V$=e("blockquote",null,[e("p",null,[a("Rename "),e("code",null,"Title"),a(" and "),e("code",null,"Classification"),a(" yourself and select "),e("code",null,"HTML"),a(" for "),e("code",null,"Kind of project")])],-1),z$={__name:"127",setup(n){const t={hide:!1,srcSequence:"./pages/Deploy.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[N$,H$,W$,V$]),_:1},16))}},K$=F(z$,[["__file","/@slidev/slides/127.md"]]),Y$="/2023CSCamp/assets/Before_upload-73496f98.png",J$=e("ol",{start:"2"},[e("li",null,[a("Upload the "),e("code",null,"zip"),a(" file we just compressed.")])],-1),Z$=e("img",{src:Y$,style:{height:"80%"}},null,-1),Q$={__name:"128",setup(n){const t={hide:!1,srcSequence:"./pages/Deploy.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[J$,Z$]),_:1},16))}},X$=F(Q$,[["__file","/@slidev/slides/128.md"]]),eM="/2023CSCamp/assets/After_upload-0963cfda.png",nM=e("p",null,"After upload, stay with the default options.",-1),tM=e("img",{src:eM,style:{height:"80%"}},null,-1),sM={__name:"129",setup(n){const t={hide:!1,srcSequence:"./pages/Deploy.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[nM,tM]),_:1},16))}},oM=F(sM,[["__file","/@slidev/slides/129.md"]]),lM="/2023CSCamp/assets/Save_n_view-19d38242.png",rM=e("ol",{start:"3"},[e("li",null,[e("p",null,[a("For embed options, select "),e("code",null,"Embed in page, Manually set size (960 * 540)"),a("."),e("br"),a(" (Select "),e("code",null,"Automatically start on page load"),a(" for Frames option)")])]),e("li",null,[e("p",null,[a("Complete the settings and click on "),e("code",null,"Save & view page"),a(".")])])],-1),aM=e("blockquote",null,[e("p",null,[e("code",null,"Visibility & access"),a(" could be changed to "),e("code",null,"Public"),a(" after the first saved.")])],-1),iM=e("img",{src:lM,style:{height:"50%"}},null,-1),cM={__name:"130",setup(n){const t={hide:!1,srcSequence:"./pages/Deploy.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[rM,aM,iM]),_:1},16))}},pM=F(cM,[["__file","/@slidev/slides/130.md"]]),uM="/2023CSCamp/assets/Final-ca217aa4.png",dM=e("h2",null,"Final Product",-1),yM=e("img",{src:uM,style:{height:"80%"}},null,-1),fM={__name:"131",setup(n){const t={hide:!1,srcSequence:"./pages/Deploy.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[dM,yM]),_:1},16))}},hM=F(fM,[["__file","/@slidev/slides/131.md"]]),mM=e("h1",null,"Resources",-1),gM=e("p",null,"(Click to view or download)",-1),CM=e("ul",null,[e("li",null,[e("a",{href:"https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/slides-dark.pdf?raw=true"},"Slides (dark)")]),e("li",null,[e("a",{href:"https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/slides-light.pdf?raw=true"},"Slides (light)")]),e("li",null,[e("a",{href:"https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/GameManager.cs?raw=true"},"GameManager.cs")]),e("li",null,[e("a",{href:"https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/ObjectFalling.cs?raw=true"},"ObjectFalling.cs")]),e("li",null,[e("a",{href:"https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/PlatformsMovement.cs?raw=true"},"PlatformsMovement.cs")]),e("li",null,[e("a",{href:"https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/PlayerController.cs?raw=true"},"PlayerController.cs")]),e("li",null,[e("a",{href:"https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/PlayerInteract.cs?raw=true"},"PlayerInteract.cs")]),e("li",null,[e("a",{href:"https://github.com/GNITOAHC/2023CSCamp/tree/main/Assets/Scripts"},"Scripts’ source code")])],-1),_M={__name:"132",setup(n){const t={hide:!1,srcSequence:"./pages/Resources.md"};return k(E),(s,o)=>(h(),x(H,O(I(t)),{default:_(()=>[mM,gM,CM]),_:1},16))}},AM=F(_M,[["__file","/@slidev/slides/132.md"]]),vM=e("h1",null,"Learn More",-1),BM=e("p",null,[e("a",{href:"https://unity.com",target:"_blank",rel:"noopener"},"Unity"),a(" · "),e("a",{href:"https://unity.com/made-with-unity",target:"_blank",rel:"noopener"},"Showcases"),a(" · "),e("a",{href:"https://github.com/GNITOAHC/2023CSCamp/",target:"_blank",rel:"noopener"},"GitHub source code")],-1),bM={__name:"133",setup(n){const t={layout:"center",class:"text-center"};return k(E),(s,o)=>(h(),x(Gn,O(I(t)),{default:_(()=>[vM,BM]),_:1},16))}},DM=F(bM,[["__file","/@slidev/slides/133.md"]]),SM=[{path:"1",name:"page-1",component:wB,meta:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`Presentation slides for NCCU 2023 CS Camp.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",title:"NCCU 2023CSCamp",hideInToc:!0,slide:{raw:`---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  Presentation slides for NCCU 2023 CS Camp.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
title: NCCU 2023CSCamp

hideInToc: true
---

# Welcome to 2023 Computer Science Summer Camp

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Start <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/GNITOAHC/2023CSCamp" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>
`,title:"NCCU 2023CSCamp",content:`# Welcome to 2023 Computer Science Summer Camp

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Start <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/GNITOAHC/2023CSCamp" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>`,frontmatter:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`Presentation slides for NCCU 2023 CS Camp.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",title:"NCCU 2023CSCamp",hideInToc:!0},index:0,start:0,end:33,noteHTML:"",filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:pb,meta:{slide:{raw:`
<Toc listClass="toc" maxDepth="1" columns="2" />
`,content:'<Toc listClass="toc" maxDepth="1" columns="2" />',frontmatter:{},index:1,start:34,end:37,noteHTML:"",filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:mb,meta:{layout:"center",title:"C# - 1 Basic",hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:null,title:"C# - 1 Basic",level:1,content:"# C# - 1 Basic",frontmatter:{layout:"center",title:"C# - 1 Basic",hide:!1,srcSequence:"./pages/CSharp-1.md"},index:2,start:0,end:6,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`---
layout: center
---

# C# - 1 Basic
`,title:"C# - 1 Basic",level:1,content:"# C# - 1 Basic",frontmatter:{layout:"center",title:"C# - 1 Basic"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/CSharp-1.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:2,start:37,end:42},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Mb,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:'\n## Write a Hello World program\n```cs\nusing System;\nConsole.WriteLine("Hello World!");\n```\n\noutput\n```cs\nHello World!\n```\n',title:"Write a Hello World program",level:2,content:'## Write a Hello World program\n```cs\nusing System;\nConsole.WriteLine("Hello World!");\n```\n\noutput\n```cs\nHello World!\n```',frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:3,start:7,end:19,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:'\n## Write a Hello World program\n```cs\nusing System;\nConsole.WriteLine("Hello World!");\n```\n\noutput\n```cs\nHello World!\n```\n',title:"Write a Hello World program",level:2,content:'## Write a Hello World program\n```cs\nusing System;\nConsole.WriteLine("Hello World!");\n```\n\noutput\n```cs\nHello World!\n```',frontmatter:{},index:1,start:7,end:19},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Ob,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
## Basic Programming Concepts 基礎程式觀念

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />
`,title:"Basic Programming Concepts 基礎程式觀念",level:2,content:`## Basic Programming Concepts 基礎程式觀念

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:4,start:20,end:25,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
## Basic Programming Concepts 基礎程式觀念

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />
`,title:"Basic Programming Concepts 基礎程式觀念",level:2,content:`## Basic Programming Concepts 基礎程式觀念

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{},index:2,start:20,end:25},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Hb,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
### Comments 註解
- Doesn't affect the functionality of programs
- Written for the purpose of explaining codes to developers
\`\`\`cs {all|3}
using System;
Console.WriteLine("Hello World!");
// This line outputs "Hello World!" to screen
\`\`\`

output
\`\`\`cs
Hello World!
\`\`\`
`,title:"Comments 註解",level:3,content:`### Comments 註解
- Doesn't affect the functionality of programs
- Written for the purpose of explaining codes to developers
\`\`\`cs {all|3}
using System;
Console.WriteLine("Hello World!");
// This line outputs "Hello World!" to screen
\`\`\`

output
\`\`\`cs
Hello World!
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:5,start:26,end:41,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
### Comments 註解
- Doesn't affect the functionality of programs
- Written for the purpose of explaining codes to developers
\`\`\`cs {all|3}
using System;
Console.WriteLine("Hello World!");
// This line outputs "Hello World!" to screen
\`\`\`

output
\`\`\`cs
Hello World!
\`\`\`
`,title:"Comments 註解",level:3,content:`### Comments 註解
- Doesn't affect the functionality of programs
- Written for the purpose of explaining codes to developers
\`\`\`cs {all|3}
using System;
Console.WriteLine("Hello World!");
// This line outputs "Hello World!" to screen
\`\`\`

output
\`\`\`cs
Hello World!
\`\`\``,frontmatter:{},index:3,start:26,end:41},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Kb,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
### Variables & Data types 變數與資料型態

|type   |function||
|-------|--------------------------------|----|
|int    |32-bit signed integer           |整數|
|double |64-bit floating point type      |浮點數|
|float  |32-bit floating point type      |浮點數|
|char   |16-bit single Unicode character |字元|
|string |A sequence of Unicode characters|字串|
|bool   |8-bit logical true/false value  |布林值|
`,title:"Variables & Data types 變數與資料型態",level:3,content:`### Variables & Data types 變數與資料型態

|type   |function||
|-------|--------------------------------|----|
|int    |32-bit signed integer           |整數|
|double |64-bit floating point type      |浮點數|
|float  |32-bit floating point type      |浮點數|
|char   |16-bit single Unicode character |字元|
|string |A sequence of Unicode characters|字串|
|bool   |8-bit logical true/false value  |布林值|`,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:6,start:42,end:54,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
### Variables & Data types 變數與資料型態

|type   |function||
|-------|--------------------------------|----|
|int    |32-bit signed integer           |整數|
|double |64-bit floating point type      |浮點數|
|float  |32-bit floating point type      |浮點數|
|char   |16-bit single Unicode character |字元|
|string |A sequence of Unicode characters|字串|
|bool   |8-bit logical true/false value  |布林值|
`,title:"Variables & Data types 變數與資料型態",level:3,content:`### Variables & Data types 變數與資料型態

|type   |function||
|-------|--------------------------------|----|
|int    |32-bit signed integer           |整數|
|double |64-bit floating point type      |浮點數|
|float  |32-bit floating point type      |浮點數|
|char   |16-bit single Unicode character |字元|
|string |A sequence of Unicode characters|字串|
|bool   |8-bit logical true/false value  |布林值|`,frontmatter:{},index:4,start:42,end:54},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:eD,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
#### int, float & double
- int 整數
- float, double 浮點數
\`\`\`cs {all|3,4|6,7|9,10}
using System;

int integer = 5;
Console.WriteLine(integer);

float f_num = 1.5f;
Console.WriteLine(f_num);

double d_num = 3.14;
Console.WriteLine(d_num);
\`\`\`
output
\`\`\`cs
5
1.5
3.14
\`\`\`
`,title:"int, float & double",level:4,content:`#### int, float & double
- int 整數
- float, double 浮點數
\`\`\`cs {all|3,4|6,7|9,10}
using System;

int integer = 5;
Console.WriteLine(integer);

float f_num = 1.5f;
Console.WriteLine(f_num);

double d_num = 3.14;
Console.WriteLine(d_num);
\`\`\`
output
\`\`\`cs
5
1.5
3.14
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:7,start:55,end:78,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
#### int, float & double
- int 整數
- float, double 浮點數
\`\`\`cs {all|3,4|6,7|9,10}
using System;

int integer = 5;
Console.WriteLine(integer);

float f_num = 1.5f;
Console.WriteLine(f_num);

double d_num = 3.14;
Console.WriteLine(d_num);
\`\`\`
output
\`\`\`cs
5
1.5
3.14
\`\`\`
`,title:"int, float & double",level:4,content:`#### int, float & double
- int 整數
- float, double 浮點數
\`\`\`cs {all|3,4|6,7|9,10}
using System;

int integer = 5;
Console.WriteLine(integer);

float f_num = 1.5f;
Console.WriteLine(f_num);

double d_num = 3.14;
Console.WriteLine(d_num);
\`\`\`
output
\`\`\`cs
5
1.5
3.14
\`\`\``,frontmatter:{},index:5,start:55,end:78},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:rD,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
#### char & string
- char 字元
- string 字串
\`\`\`cs {all|3,4|6,7}
using System;
		
char gender = 'm';
Console.WriteLine(gender);

string name = "Alex";
Console.WriteLine(name);
\`\`\`
output
\`\`\`cs
m
Alex
\`\`\`
`,title:"char & string",level:4,content:`#### char & string
- char 字元
- string 字串
\`\`\`cs {all|3,4|6,7}
using System;
		
char gender = 'm';
Console.WriteLine(gender);

string name = "Alex";
Console.WriteLine(name);
\`\`\`
output
\`\`\`cs
m
Alex
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:8,start:79,end:98,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
#### char & string
- char 字元
- string 字串
\`\`\`cs {all|3,4|6,7}
using System;
		
char gender = 'm';
Console.WriteLine(gender);

string name = "Alex";
Console.WriteLine(name);
\`\`\`
output
\`\`\`cs
m
Alex
\`\`\`
`,title:"char & string",level:4,content:`#### char & string
- char 字元
- string 字串
\`\`\`cs {all|3,4|6,7}
using System;
		
char gender = 'm';
Console.WriteLine(gender);

string name = "Alex";
Console.WriteLine(name);
\`\`\`
output
\`\`\`cs
m
Alex
\`\`\``,frontmatter:{},index:6,start:79,end:98},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:dD,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
#### boolean
- bool 布林值
\`\`\`cs {all|3|4,5|6,7}
using System;

bool is_student = true;
if(is_student)
	Console.WriteLine("Yes");
else
	Console.WriteLine("No");
\`\`\`
output
\`\`\`cs
Yes
\`\`\`
`,title:"boolean",level:4,content:`#### boolean
- bool 布林值
\`\`\`cs {all|3|4,5|6,7}
using System;

bool is_student = true;
if(is_student)
	Console.WriteLine("Yes");
else
	Console.WriteLine("No");
\`\`\`
output
\`\`\`cs
Yes
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:9,start:99,end:116,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
#### boolean
- bool 布林值
\`\`\`cs {all|3|4,5|6,7}
using System;

bool is_student = true;
if(is_student)
	Console.WriteLine("Yes");
else
	Console.WriteLine("No");
\`\`\`
output
\`\`\`cs
Yes
\`\`\`
`,title:"boolean",level:4,content:`#### boolean
- bool 布林值
\`\`\`cs {all|3|4,5|6,7}
using System;

bool is_student = true;
if(is_student)
	Console.WriteLine("Yes");
else
	Console.WriteLine("No");
\`\`\`
output
\`\`\`cs
Yes
\`\`\``,frontmatter:{},index:7,start:99,end:116},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:_D,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
## Array 陣列
What is an array?
- An array is a collection of items of same data type stored at contiguous memory locations

What is the purpose of using arrays?
- To store multiple pieces of data of the same type together
`,title:"Array 陣列",level:2,content:`## Array 陣列
What is an array?
- An array is a collection of items of same data type stored at contiguous memory locations

What is the purpose of using arrays?
- To store multiple pieces of data of the same type together`,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:10,start:117,end:125,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
## Array 陣列
What is an array?
- An array is a collection of items of same data type stored at contiguous memory locations

What is the purpose of using arrays?
- To store multiple pieces of data of the same type together
`,title:"Array 陣列",level:2,content:`## Array 陣列
What is an array?
- An array is a collection of items of same data type stored at contiguous memory locations

What is the purpose of using arrays?
- To store multiple pieces of data of the same type together`,frontmatter:{},index:8,start:117,end:125},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:DD,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
### Array

Declaration
\`\`\`cs
type[] arrayName;
// all elements are initialized with the default value
\`\`\`
`,title:"Array",level:3,content:"### Array\n\nDeclaration\n```cs\ntype[] arrayName;\n// all elements are initialized with the default value\n```",frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:11,start:126,end:135,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
### Array

Declaration
\`\`\`cs
type[] arrayName;
// all elements are initialized with the default value
\`\`\`
`,title:"Array",level:3,content:"### Array\n\nDeclaration\n```cs\ntype[] arrayName;\n// all elements are initialized with the default value\n```",frontmatter:{},index:9,start:126,end:135},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:ED,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
### Array
Example
\`\`\`cs{all|1-3|5,6|8,9|11-14|16,17,18}
// Declare a single-dimensional array of 5 integers.
int[] arr = new int[5];
// arr[0] = 0, arr[1] = 0, arr[2] = 0, arr[3] = 0, arr[4] = 0

// Declare and set array element values
int[] arr = {1, 2, 3, 4, 5};

// You can also do in this way
int[] arr = new int[] {10, 20, 30, 40, 50}

// Declare a two dimensional array (uses a comma inside bracket)
int[,] arr = new int[2, 3];
//[0, 0] [0, 1] [0, 2]
//[1, 0] [1, 1] [1, 2]

// Declare and set array element values
int[,] arr = {{1, 2, 3}, {4, 5, 6}};
\`\`\``,title:"Array",level:3,content:`### Array
Example
\`\`\`cs{all|1-3|5,6|8,9|11-14|16,17,18}
// Declare a single-dimensional array of 5 integers.
int[] arr = new int[5];
// arr[0] = 0, arr[1] = 0, arr[2] = 0, arr[3] = 0, arr[4] = 0

// Declare and set array element values
int[] arr = {1, 2, 3, 4, 5};

// You can also do in this way
int[] arr = new int[] {10, 20, 30, 40, 50}

// Declare a two dimensional array (uses a comma inside bracket)
int[,] arr = new int[2, 3];
//[0, 0] [0, 1] [0, 2]
//[1, 0] [1, 1] [1, 2]

// Declare and set array element values
int[,] arr = {{1, 2, 3}, {4, 5, 6}};
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:12,start:136,end:158,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
### Array
Example
\`\`\`cs{all|1-3|5,6|8,9|11-14|16,17,18}
// Declare a single-dimensional array of 5 integers.
int[] arr = new int[5];
// arr[0] = 0, arr[1] = 0, arr[2] = 0, arr[3] = 0, arr[4] = 0

// Declare and set array element values
int[] arr = {1, 2, 3, 4, 5};

// You can also do in this way
int[] arr = new int[] {10, 20, 30, 40, 50}

// Declare a two dimensional array (uses a comma inside bracket)
int[,] arr = new int[2, 3];
//[0, 0] [0, 1] [0, 2]
//[1, 0] [1, 1] [1, 2]

// Declare and set array element values
int[,] arr = {{1, 2, 3}, {4, 5, 6}};
\`\`\``,title:"Array",level:3,content:`### Array
Example
\`\`\`cs{all|1-3|5,6|8,9|11-14|16,17,18}
// Declare a single-dimensional array of 5 integers.
int[] arr = new int[5];
// arr[0] = 0, arr[1] = 0, arr[2] = 0, arr[3] = 0, arr[4] = 0

// Declare and set array element values
int[] arr = {1, 2, 3, 4, 5};

// You can also do in this way
int[] arr = new int[] {10, 20, 30, 40, 50}

// Declare a two dimensional array (uses a comma inside bracket)
int[,] arr = new int[2, 3];
//[0, 0] [0, 1] [0, 2]
//[1, 0] [1, 1] [1, 2]

// Declare and set array element values
int[,] arr = {{1, 2, 3}, {4, 5, 6}};
\`\`\``,frontmatter:{},index:10,start:136,end:158},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:TD,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
## Loops 迴圈

<Toc listClass="toc" minDepth="2" maxDepth="3" mode="onlyCurrentTree" />
`,title:"Loops 迴圈",level:2,content:`## Loops 迴圈

<Toc listClass="toc" minDepth="2" maxDepth="3" mode="onlyCurrentTree" />`,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:13,start:159,end:164,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
## Loops 迴圈

<Toc listClass="toc" minDepth="2" maxDepth="3" mode="onlyCurrentTree" />
`,title:"Loops 迴圈",level:2,content:`## Loops 迴圈

<Toc listClass="toc" minDepth="2" maxDepth="3" mode="onlyCurrentTree" />`,frontmatter:{},index:11,start:159,end:164},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:LD,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
### while

\`\`\`cs
while(condition){
	statement
}
\`\`\`
example
\`\`\`cs {all|3|4,7|4-7}
using System;

int i = 0;
while(i < 3){
	Console.WriteLine("Hello World");
	i++;
}
\`\`\`
output
\`\`\`cs
Hello World
Hello World
Hello World
\`\`\`
`,title:"while",level:3,content:`### while

\`\`\`cs
while(condition){
	statement
}
\`\`\`
example
\`\`\`cs {all|3|4,7|4-7}
using System;

int i = 0;
while(i < 3){
	Console.WriteLine("Hello World");
	i++;
}
\`\`\`
output
\`\`\`cs
Hello World
Hello World
Hello World
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:14,start:165,end:190,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
### while

\`\`\`cs
while(condition){
	statement
}
\`\`\`
example
\`\`\`cs {all|3|4,7|4-7}
using System;

int i = 0;
while(i < 3){
	Console.WriteLine("Hello World");
	i++;
}
\`\`\`
output
\`\`\`cs
Hello World
Hello World
Hello World
\`\`\`
`,title:"while",level:3,content:`### while

\`\`\`cs
while(condition){
	statement
}
\`\`\`
example
\`\`\`cs {all|3|4,7|4-7}
using System;

int i = 0;
while(i < 3){
	Console.WriteLine("Hello World");
	i++;
}
\`\`\`
output
\`\`\`cs
Hello World
Hello World
Hello World
\`\`\``,frontmatter:{},index:12,start:165,end:190},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:HD,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
### do while

\`\`\`cs
do{
		statement
} while(condition);
\`\`\`
example
\`\`\`cs {all|3|4,7|4-7}
using System;

int i = 5;
do{
	Console.WriteLine(i);
	i++;
} while(i <= 8);
\`\`\`
output
\`\`\`cs
5
6
7
8
\`\`\`
`,title:"do while",level:3,content:`### do while

\`\`\`cs
do{
		statement
} while(condition);
\`\`\`
example
\`\`\`cs {all|3|4,7|4-7}
using System;

int i = 5;
do{
	Console.WriteLine(i);
	i++;
} while(i <= 8);
\`\`\`
output
\`\`\`cs
5
6
7
8
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:15,start:191,end:217,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
### do while

\`\`\`cs
do{
		statement
} while(condition);
\`\`\`
example
\`\`\`cs {all|3|4,7|4-7}
using System;

int i = 5;
do{
	Console.WriteLine(i);
	i++;
} while(i <= 8);
\`\`\`
output
\`\`\`cs
5
6
7
8
\`\`\`
`,title:"do while",level:3,content:`### do while

\`\`\`cs
do{
		statement
} while(condition);
\`\`\`
example
\`\`\`cs {all|3|4,7|4-7}
using System;

int i = 5;
do{
	Console.WriteLine(i);
	i++;
} while(i <= 8);
\`\`\`
output
\`\`\`cs
5
6
7
8
\`\`\``,frontmatter:{},index:13,start:191,end:217},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:JD,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
### for

\`\`\`cs
for(init-state; condition; expression){
	statement
}
\`\`\`
example
\`\`\`cs {all|4,6|3-6}
using System;
		
int i;
for(i = 0; i < 3; i++){
	Console.WriteLine(i);
}
\`\`\`
output
\`\`\`cs
0
1
2
\`\`\`
`,title:"for",level:3,content:`### for

\`\`\`cs
for(init-state; condition; expression){
	statement
}
\`\`\`
example
\`\`\`cs {all|4,6|3-6}
using System;
		
int i;
for(i = 0; i < 3; i++){
	Console.WriteLine(i);
}
\`\`\`
output
\`\`\`cs
0
1
2
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:16,start:218,end:242,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
### for

\`\`\`cs
for(init-state; condition; expression){
	statement
}
\`\`\`
example
\`\`\`cs {all|4,6|3-6}
using System;
		
int i;
for(i = 0; i < 3; i++){
	Console.WriteLine(i);
}
\`\`\`
output
\`\`\`cs
0
1
2
\`\`\`
`,title:"for",level:3,content:`### for

\`\`\`cs
for(init-state; condition; expression){
	statement
}
\`\`\`
example
\`\`\`cs {all|4,6|3-6}
using System;
		
int i;
for(i = 0; i < 3; i++){
	Console.WriteLine(i);
}
\`\`\`
output
\`\`\`cs
0
1
2
\`\`\``,frontmatter:{},index:14,start:218,end:242},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:e4,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
## A Number Guessing Game
- Given an unknown number. Whenever the player makes a guess, the program should tell if it is correct or wrong.
- More specifically, the program should tell the player if the answer is higher or lower.
`,title:"A Number Guessing Game",level:2,content:`## A Number Guessing Game
- Given an unknown number. Whenever the player makes a guess, the program should tell if it is correct or wrong.
- More specifically, the program should tell the player if the answer is higher or lower.`,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:17,start:243,end:248,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
## A Number Guessing Game
- Given an unknown number. Whenever the player makes a guess, the program should tell if it is correct or wrong.
- More specifically, the program should tell the player if the answer is higher or lower.
`,title:"A Number Guessing Game",level:2,content:`## A Number Guessing Game
- Given an unknown number. Whenever the player makes a guess, the program should tell if it is correct or wrong.
- More specifically, the program should tell the player if the answer is higher or lower.`,frontmatter:{},index:15,start:243,end:248},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:a4,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:'\n## A Number Guessing Game\nLet\'s start from game message and input\n```cs\nConsole.WriteLine("Enter your guess: ");\n```\n\nwe have to convert the input to INT datatype\n```cs\nint guess;\nguess = Console.Convert.ToInt32(Console.ReadLine());\n```',title:"A Number Guessing Game",level:2,content:'## A Number Guessing Game\nLet\'s start from game message and input\n```cs\nConsole.WriteLine("Enter your guess: ");\n```\n\nwe have to convert the input to INT datatype\n```cs\nint guess;\nguess = Console.Convert.ToInt32(Console.ReadLine());\n```',frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:18,start:249,end:261,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:'\n## A Number Guessing Game\nLet\'s start from game message and input\n```cs\nConsole.WriteLine("Enter your guess: ");\n```\n\nwe have to convert the input to INT datatype\n```cs\nint guess;\nguess = Console.Convert.ToInt32(Console.ReadLine());\n```',title:"A Number Guessing Game",level:2,content:'## A Number Guessing Game\nLet\'s start from game message and input\n```cs\nConsole.WriteLine("Enter your guess: ");\n```\n\nwe have to convert the input to INT datatype\n```cs\nint guess;\nguess = Console.Convert.ToInt32(Console.ReadLine());\n```',frontmatter:{},index:16,start:249,end:261},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:d4,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
## A Number Guessing Game

Now we check if the number is correct

\`\`\`cs
if(guess > answer)
	Console.WriteLine("Smaller");
else if(guess < answer)
	Console.WriteLine("Bigger");
else
	Console.WriteLine("BINGO!!!");
\`\`\`
`,title:"A Number Guessing Game",level:2,content:`## A Number Guessing Game

Now we check if the number is correct

\`\`\`cs
if(guess > answer)
	Console.WriteLine("Smaller");
else if(guess < answer)
	Console.WriteLine("Bigger");
else
	Console.WriteLine("BINGO!!!");
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:19,start:262,end:276,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
## A Number Guessing Game

Now we check if the number is correct

\`\`\`cs
if(guess > answer)
	Console.WriteLine("Smaller");
else if(guess < answer)
	Console.WriteLine("Bigger");
else
	Console.WriteLine("BINGO!!!");
\`\`\`
`,title:"A Number Guessing Game",level:2,content:`## A Number Guessing Game

Now we check if the number is correct

\`\`\`cs
if(guess > answer)
	Console.WriteLine("Smaller");
else if(guess < answer)
	Console.WriteLine("Bigger");
else
	Console.WriteLine("BINGO!!!");
\`\`\``,frontmatter:{},index:17,start:262,end:276},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:g4,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
## A Number Guessing Game

Lastly, we put all the components in a do while loop
\`\`\`cs {all|3,4|5|6,7|9-11|5|6,7|9-11|12-14|5|6,7|9-11|12-14|15-17|18}
using System;
		
int answer = 20;
int guess = answer + 1;
while(guess != answer){
	Console.WriteLine("Enter your guess: "); // user input
	guess = Convert.ToInt32(Console.ReadLine()); // convert string to int

	if(guess > answer){
		Console.WriteLine("Smaller");
	}
	else if(guess < answer){
		Console.WriteLine("Bigger");
	}
	else{
		Console.WriteLine("BINGO!!!");
		break; // exit this loop
	}
}
\`\`\`
`,title:"A Number Guessing Game",level:2,content:`## A Number Guessing Game

Lastly, we put all the components in a do while loop
\`\`\`cs {all|3,4|5|6,7|9-11|5|6,7|9-11|12-14|5|6,7|9-11|12-14|15-17|18}
using System;
		
int answer = 20;
int guess = answer + 1;
while(guess != answer){
	Console.WriteLine("Enter your guess: "); // user input
	guess = Convert.ToInt32(Console.ReadLine()); // convert string to int

	if(guess > answer){
		Console.WriteLine("Smaller");
	}
	else if(guess < answer){
		Console.WriteLine("Bigger");
	}
	else{
		Console.WriteLine("BINGO!!!");
		break; // exit this loop
	}
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:20,start:277,end:303,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
## A Number Guessing Game

Lastly, we put all the components in a do while loop
\`\`\`cs {all|3,4|5|6,7|9-11|5|6,7|9-11|12-14|5|6,7|9-11|12-14|15-17|18}
using System;
		
int answer = 20;
int guess = answer + 1;
while(guess != answer){
	Console.WriteLine("Enter your guess: "); // user input
	guess = Convert.ToInt32(Console.ReadLine()); // convert string to int

	if(guess > answer){
		Console.WriteLine("Smaller");
	}
	else if(guess < answer){
		Console.WriteLine("Bigger");
	}
	else{
		Console.WriteLine("BINGO!!!");
		break; // exit this loop
	}
}
\`\`\`
`,title:"A Number Guessing Game",level:2,content:`## A Number Guessing Game

Lastly, we put all the components in a do while loop
\`\`\`cs {all|3,4|5|6,7|9-11|5|6,7|9-11|12-14|5|6,7|9-11|12-14|15-17|18}
using System;
		
int answer = 20;
int guess = answer + 1;
while(guess != answer){
	Console.WriteLine("Enter your guess: "); // user input
	guess = Convert.ToInt32(Console.ReadLine()); // convert string to int

	if(guess > answer){
		Console.WriteLine("Smaller");
	}
	else if(guess < answer){
		Console.WriteLine("Bigger");
	}
	else{
		Console.WriteLine("BINGO!!!");
		break; // exit this loop
	}
}
\`\`\``,frontmatter:{},index:18,start:277,end:303},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:B4,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
## A Number Guessing Game
### Advanced Gameplay
- Set limit on guessing tries
- Choose the answer randomly
`,title:"A Number Guessing Game",level:2,content:`## A Number Guessing Game
### Advanced Gameplay
- Set limit on guessing tries
- Choose the answer randomly`,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:21,start:304,end:310,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
## A Number Guessing Game
### Advanced Gameplay
- Set limit on guessing tries
- Choose the answer randomly
`,title:"A Number Guessing Game",level:2,content:`## A Number Guessing Game
### Advanced Gameplay
- Set limit on guessing tries
- Choose the answer randomly`,frontmatter:{},index:19,start:304,end:310},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:E4,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
## Function
What is a function?
- A technique of wrapping code to perform a certain task

Why do we use functions?
- Same code can be reused over and over
- Enables reusability and reduces redundancy
- The program becomes easy to understand and manage
`,title:"Function",level:2,content:`## Function
What is a function?
- A technique of wrapping code to perform a certain task

Why do we use functions?
- Same code can be reused over and over
- Enables reusability and reduces redundancy
- The program becomes easy to understand and manage`,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:22,start:311,end:321,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
## Function
What is a function?
- A technique of wrapping code to perform a certain task

Why do we use functions?
- Same code can be reused over and over
- Enables reusability and reduces redundancy
- The program becomes easy to understand and manage
`,title:"Function",level:2,content:`## Function
What is a function?
- A technique of wrapping code to perform a certain task

Why do we use functions?
- Same code can be reused over and over
- Enables reusability and reduces redundancy
- The program becomes easy to understand and manage`,frontmatter:{},index:20,start:311,end:321},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:M4,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
## Function
- How to declare a function?
\`\`\`cs
<Access Specifiers> <return type> <name of the function>(< function parameters>)
{
	<function code>
	return;
}
\`\`\`
`,title:"Function",level:2,content:`## Function
- How to declare a function?
\`\`\`cs
<Access Specifiers> <return type> <name of the function>(< function parameters>)
{
	<function code>
	return;
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:23,start:322,end:333,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
## Function
- How to declare a function?
\`\`\`cs
<Access Specifiers> <return type> <name of the function>(< function parameters>)
{
	<function code>
	return;
}
\`\`\`
`,title:"Function",level:2,content:`## Function
- How to declare a function?
\`\`\`cs
<Access Specifiers> <return type> <name of the function>(< function parameters>)
{
	<function code>
	return;
}
\`\`\``,frontmatter:{},index:21,start:322,end:333},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:G4,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
## Function
How to use it?
\`\`\`cs{all|8,9|2|2-6}
using System;
void square(int num)
{
    int sq = num * num;
    Console.WriteLine(sq);
}

square(5);
// Calling the function
\`\`\`
output
\`\`\`cs
25
\`\`\`
`,title:"Function",level:2,content:`## Function
How to use it?
\`\`\`cs{all|8,9|2|2-6}
using System;
void square(int num)
{
    int sq = num * num;
    Console.WriteLine(sq);
}

square(5);
// Calling the function
\`\`\`
output
\`\`\`cs
25
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:24,start:334,end:353,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
## Function
How to use it?
\`\`\`cs{all|8,9|2|2-6}
using System;
void square(int num)
{
    int sq = num * num;
    Console.WriteLine(sq);
}

square(5);
// Calling the function
\`\`\`
output
\`\`\`cs
25
\`\`\`
`,title:"Function",level:2,content:`## Function
How to use it?
\`\`\`cs{all|8,9|2|2-6}
using System;
void square(int num)
{
    int sq = num * num;
    Console.WriteLine(sq);
}

square(5);
// Calling the function
\`\`\`
output
\`\`\`cs
25
\`\`\``,frontmatter:{},index:22,start:334,end:353},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:W4,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
## Function

return type : 
- defines and constrains the data type of the value returned from a function`,title:"Function",level:2,content:`## Function

return type : 
- defines and constrains the data type of the value returned from a function`,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:25,start:354,end:359,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
## Function

return type : 
- defines and constrains the data type of the value returned from a function`,title:"Function",level:2,content:`## Function

return type : 
- defines and constrains the data type of the value returned from a function`,frontmatter:{},index:23,start:354,end:359},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:Q4,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
## Function
return type : void
- doesn't return any value
\`\`\`cs{all|9|2|2-7|5,6}
using System;
void square(int num)
{
    int sq = num * num;
    Console.WriteLine(sq);
    // Doesn’t provide any return statement
}

square(5);
\`\`\`
output
\`\`\`cs
25
\`\`\`
`,title:"Function",level:2,content:`## Function
return type : void
- doesn't return any value
\`\`\`cs{all|9|2|2-7|5,6}
using System;
void square(int num)
{
    int sq = num * num;
    Console.WriteLine(sq);
    // Doesn’t provide any return statement
}

square(5);
\`\`\`
output
\`\`\`cs
25
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:26,start:360,end:380,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
## Function
return type : void
- doesn't return any value
\`\`\`cs{all|9|2|2-7|5,6}
using System;
void square(int num)
{
    int sq = num * num;
    Console.WriteLine(sq);
    // Doesn’t provide any return statement
}

square(5);
\`\`\`
output
\`\`\`cs
25
\`\`\`
`,title:"Function",level:2,content:`## Function
return type : void
- doesn't return any value
\`\`\`cs{all|9|2|2-7|5,6}
using System;
void square(int num)
{
    int sq = num * num;
    Console.WriteLine(sq);
    // Doesn’t provide any return statement
}

square(5);
\`\`\`
output
\`\`\`cs
25
\`\`\``,frontmatter:{},index:24,start:360,end:380},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:lS,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
## Function
return type : int(or any datatype you want)
- returns a value
\`\`\`cs{all|8|2|4,5|8}
using System;
int square(int num)
{
    return num * num;
    // return statement
}

Console.WriteLine(square(5));
\`\`\`
output
\`\`\`cs
25
\`\`\`
`,title:"Function",level:2,content:`## Function
return type : int(or any datatype you want)
- returns a value
\`\`\`cs{all|8|2|4,5|8}
using System;
int square(int num)
{
    return num * num;
    // return statement
}

Console.WriteLine(square(5));
\`\`\`
output
\`\`\`cs
25
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:27,start:381,end:400,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
## Function
return type : int(or any datatype you want)
- returns a value
\`\`\`cs{all|8|2|4,5|8}
using System;
int square(int num)
{
    return num * num;
    // return statement
}

Console.WriteLine(square(5));
\`\`\`
output
\`\`\`cs
25
\`\`\`
`,title:"Function",level:2,content:`## Function
return type : int(or any datatype you want)
- returns a value
\`\`\`cs{all|8|2|4,5|8}
using System;
int square(int num)
{
    return num * num;
    // return statement
}

Console.WriteLine(square(5));
\`\`\`
output
\`\`\`cs
25
\`\`\``,frontmatter:{},index:25,start:381,end:400},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:pS,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
## Function

parameters(參數) : 
- the data you give to a function
`,title:"Function",level:2,content:`## Function

parameters(參數) : 
- the data you give to a function`,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:28,start:401,end:407,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
## Function

parameters(參數) : 
- the data you give to a function
`,title:"Function",level:2,content:`## Function

parameters(參數) : 
- the data you give to a function`,frontmatter:{},index:26,start:401,end:407},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:hS,meta:{hide:!1,srcSequence:"./pages/CSharp-1.md",slide:{raw:`
## Function
- example
\`\`\`cs{all|1-4|6-9|11-14|16-21}
//addition function : 2 parameters
int plus(int num1, int num2){
	return num1 + num2;
}

//subtraction function : 2 parameters
int minus(int num1, int num2){
	return num1 - num2;
}

//square function : 1 parameters
int square(int num){
	return num * num;
}

//print function : 1 parameters
void print(int times){
	for(int i = 0; i < times; ++i){
		Console.WriteLine("Hi");
	}
}
\`\`\`
`,title:"Function",level:2,content:`## Function
- example
\`\`\`cs{all|1-4|6-9|11-14|16-21}
//addition function : 2 parameters
int plus(int num1, int num2){
	return num1 + num2;
}

//subtraction function : 2 parameters
int minus(int num1, int num2){
	return num1 - num2;
}

//square function : 1 parameters
int square(int num){
	return num * num;
}

//print function : 1 parameters
void print(int times){
	for(int i = 0; i < times; ++i){
		Console.WriteLine("Hi");
	}
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-1.md"},index:29,start:408,end:435,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",raw:`
## Function
- example
\`\`\`cs{all|1-4|6-9|11-14|16-21}
//addition function : 2 parameters
int plus(int num1, int num2){
	return num1 + num2;
}

//subtraction function : 2 parameters
int minus(int num1, int num2){
	return num1 - num2;
}

//square function : 1 parameters
int square(int num){
	return num * num;
}

//print function : 1 parameters
void print(int times){
	for(int i = 0; i < times; ++i){
		Console.WriteLine("Hi");
	}
}
\`\`\`
`,title:"Function",level:2,content:`## Function
- example
\`\`\`cs{all|1-4|6-9|11-14|16-21}
//addition function : 2 parameters
int plus(int num1, int num2){
	return num1 + num2;
}

//subtraction function : 2 parameters
int minus(int num1, int num2){
	return num1 - num2;
}

//square function : 1 parameters
int square(int num){
	return num * num;
}

//print function : 1 parameters
void print(int times){
	for(int i = 0; i < times; ++i){
		Console.WriteLine("Hi");
	}
}
\`\`\``,frontmatter:{},index:27,start:408,end:435},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-1.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:CS,meta:{layout:"center",title:"C# - 2 Class",hide:!1,srcSequence:"./pages/CSharp-2.md",slide:{raw:null,title:"C# - 2 Class",level:1,content:"# C# - 2 Class",frontmatter:{layout:"center",title:"C# - 2 Class",hide:!1,srcSequence:"./pages/CSharp-2.md"},index:30,start:0,end:6,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",raw:`---
layout: center
---

# C# - 2 Class
`,title:"C# - 2 Class",level:1,content:"# C# - 2 Class",frontmatter:{layout:"center",title:"C# - 2 Class"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/CSharp-2.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:3,start:42,end:47},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:bS,meta:{hide:!1,srcSequence:"./pages/CSharp-2.md",slide:{raw:`
## Class (類別)

- What is a class?

\`\`\`cs
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}
\`\`\`

`,title:"Class (類別)",level:2,content:`## Class (類別)

- What is a class?

\`\`\`cs
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-2.md"},index:31,start:7,end:35,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",raw:`
## Class (類別)

- What is a class?

\`\`\`cs
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}
\`\`\`

`,title:"Class (類別)",level:2,content:`## Class (類別)

- What is a class?

\`\`\`cs
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}
\`\`\``,frontmatter:{},index:1,start:7,end:35},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:xS,meta:{hide:!1,srcSequence:"./pages/CSharp-2.md",slide:{raw:`
## Class (類別)
- Classes are like Data Types, but with more functionality
\`\`\`cs 
    
class Program
{
    static void Main()
    {
        
        Cat cat1 = new Cat("Leo", 10);
        Cat cat2 = new Cat("Steven", 20);
        cat1.Meow();
    }
}


\`\`\`

`,title:"Class (類別)",level:2,content:`## Class (類別)
- Classes are like Data Types, but with more functionality
\`\`\`cs 
    
class Program
{
    static void Main()
    {
        
        Cat cat1 = new Cat("Leo", 10);
        Cat cat2 = new Cat("Steven", 20);
        cat1.Meow();
    }
}


\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-2.md"},index:32,start:36,end:56,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",raw:`
## Class (類別)
- Classes are like Data Types, but with more functionality
\`\`\`cs 
    
class Program
{
    static void Main()
    {
        
        Cat cat1 = new Cat("Leo", 10);
        Cat cat2 = new Cat("Steven", 20);
        cat1.Meow();
    }
}


\`\`\`

`,title:"Class (類別)",level:2,content:`## Class (類別)
- Classes are like Data Types, but with more functionality
\`\`\`cs 
    
class Program
{
    static void Main()
    {
        
        Cat cat1 = new Cat("Leo", 10);
        Cat cat2 = new Cat("Steven", 20);
        cat1.Meow();
    }
}


\`\`\``,frontmatter:{},index:2,start:36,end:56},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:$S,meta:{hide:!1,srcSequence:"./pages/CSharp-2.md",slide:{raw:`
## Class (類別)
- Properties
\`\`\`cs{4-6}
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}
\`\`\`
`,title:"Class (類別)",level:2,content:`## Class (類別)
- Properties
\`\`\`cs{4-6}
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-2.md"},index:33,start:57,end:82,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",raw:`
## Class (類別)
- Properties
\`\`\`cs{4-6}
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}
\`\`\`
`,title:"Class (類別)",level:2,content:`## Class (類別)
- Properties
\`\`\`cs{4-6}
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}
\`\`\``,frontmatter:{},index:3,start:57,end:82},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:LS,meta:{hide:!1,srcSequence:"./pages/CSharp-2.md",slide:{raw:`
## Class(類別)
- Class Methods
\`\`\`cs{15-18}
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}
\`\`\`
`,title:"Class(類別)",level:2,content:`## Class(類別)
- Class Methods
\`\`\`cs{15-18}
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-2.md"},index:34,start:83,end:108,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",raw:`
## Class(類別)
- Class Methods
\`\`\`cs{15-18}
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}
\`\`\`
`,title:"Class(類別)",level:2,content:`## Class(類別)
- Class Methods
\`\`\`cs{15-18}
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}
\`\`\``,frontmatter:{},index:4,start:83,end:108},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:NS,meta:{hide:!1,srcSequence:"./pages/CSharp-2.md",slide:{raw:`
## Class(類別)
- Class Constructor (構造器)
\`\`\`cs{8-13}
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}

class Program
{
    static void Main()
    {
        Cat cat = new Cat("Steven", 10);
        cat.Meow();
    }
}
\`\`\`
`,title:"Class(類別)",level:2,content:`## Class(類別)
- Class Constructor (構造器)
\`\`\`cs{8-13}
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}

class Program
{
    static void Main()
    {
        Cat cat = new Cat("Steven", 10);
        cat.Meow();
    }
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-2.md"},index:35,start:109,end:143,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",raw:`
## Class(類別)
- Class Constructor (構造器)
\`\`\`cs{8-13}
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}

class Program
{
    static void Main()
    {
        Cat cat = new Cat("Steven", 10);
        cat.Meow();
    }
}
\`\`\`
`,title:"Class(類別)",level:2,content:`## Class(類別)
- Class Constructor (構造器)
\`\`\`cs{8-13}
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}

class Program
{
    static void Main()
    {
        Cat cat = new Cat("Steven", 10);
        cat.Meow();
    }
}
\`\`\``,frontmatter:{},index:5,start:109,end:143},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:YS,meta:{hide:!1,srcSequence:"./pages/CSharp-2.md",slide:{raw:`
## Class(類別)
- public private modifiers
1. Public 會使 Property 跟 Method 變成任何人都可觀看與修改
2. Private 會使 Property 跟 Method 變成只有Class內可觀看與修改
\`\`\`cs
class User{
    public string name;
    private string password;
    
    public User(string name, string password){
        this.name = name;
        this.password = password;
    }
    
    public void SetPassword(string password){
        this.password = password;
    }
    
    private string GetPassword(){
        return password;
    }
}
class Program
{
    static void Main()
    {
        User user = new User("brian","SuperSecretPassword");
        Console.WriteLine(user.name); //Works
        Console.WriteLine(user.password); //Error: password is private
        user.SetPassword("123456"); //Works
        user.GetPassword(); //Error: GetPassword method is private
    }
}
\`\`\`
`,title:"Class(類別)",level:2,content:`## Class(類別)
- public private modifiers
1. Public 會使 Property 跟 Method 變成任何人都可觀看與修改
2. Private 會使 Property 跟 Method 變成只有Class內可觀看與修改
\`\`\`cs
class User{
    public string name;
    private string password;
    
    public User(string name, string password){
        this.name = name;
        this.password = password;
    }
    
    public void SetPassword(string password){
        this.password = password;
    }
    
    private string GetPassword(){
        return password;
    }
}
class Program
{
    static void Main()
    {
        User user = new User("brian","SuperSecretPassword");
        Console.WriteLine(user.name); //Works
        Console.WriteLine(user.password); //Error: password is private
        user.SetPassword("123456"); //Works
        user.GetPassword(); //Error: GetPassword method is private
    }
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-2.md"},index:36,start:144,end:180,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",raw:`
## Class(類別)
- public private modifiers
1. Public 會使 Property 跟 Method 變成任何人都可觀看與修改
2. Private 會使 Property 跟 Method 變成只有Class內可觀看與修改
\`\`\`cs
class User{
    public string name;
    private string password;
    
    public User(string name, string password){
        this.name = name;
        this.password = password;
    }
    
    public void SetPassword(string password){
        this.password = password;
    }
    
    private string GetPassword(){
        return password;
    }
}
class Program
{
    static void Main()
    {
        User user = new User("brian","SuperSecretPassword");
        Console.WriteLine(user.name); //Works
        Console.WriteLine(user.password); //Error: password is private
        user.SetPassword("123456"); //Works
        user.GetPassword(); //Error: GetPassword method is private
    }
}
\`\`\`
`,title:"Class(類別)",level:2,content:`## Class(類別)
- public private modifiers
1. Public 會使 Property 跟 Method 變成任何人都可觀看與修改
2. Private 會使 Property 跟 Method 變成只有Class內可觀看與修改
\`\`\`cs
class User{
    public string name;
    private string password;
    
    public User(string name, string password){
        this.name = name;
        this.password = password;
    }
    
    public void SetPassword(string password){
        this.password = password;
    }
    
    private string GetPassword(){
        return password;
    }
}
class Program
{
    static void Main()
    {
        User user = new User("brian","SuperSecretPassword");
        Console.WriteLine(user.name); //Works
        Console.WriteLine(user.password); //Error: password is private
        user.SetPassword("123456"); //Works
        user.GetPassword(); //Error: GetPassword method is private
    }
}
\`\`\``,frontmatter:{},index:6,start:144,end:180},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:t9,meta:{hide:!1,srcSequence:"./pages/CSharp-2.md",slide:{raw:`
## Lab
- Make the following code work.

\`\`\`cs
class Program
{
    static void Main()
    {   
        string type = "strawberry";
        Food food = new Food(type); //創建一個type為strawberry的食物
        string name = "Jeffery"; 
        Person person = new Person(name); //創建一個名字叫Jeffery的人
        person.Feed(food); //餵食物給Jeffery
    }
}
\`\`\`

Output
\`\`\`
Jeffery ate a strawberry
\`\`\``,title:"Lab",level:2,content:`## Lab
- Make the following code work.

\`\`\`cs
class Program
{
    static void Main()
    {   
        string type = "strawberry";
        Food food = new Food(type); //創建一個type為strawberry的食物
        string name = "Jeffery"; 
        Person person = new Person(name); //創建一個名字叫Jeffery的人
        person.Feed(food); //餵食物給Jeffery
    }
}
\`\`\`

Output
\`\`\`
Jeffery ate a strawberry
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-2.md"},index:37,start:181,end:203,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",raw:`
## Lab
- Make the following code work.

\`\`\`cs
class Program
{
    static void Main()
    {   
        string type = "strawberry";
        Food food = new Food(type); //創建一個type為strawberry的食物
        string name = "Jeffery"; 
        Person person = new Person(name); //創建一個名字叫Jeffery的人
        person.Feed(food); //餵食物給Jeffery
    }
}
\`\`\`

Output
\`\`\`
Jeffery ate a strawberry
\`\`\``,title:"Lab",level:2,content:`## Lab
- Make the following code work.

\`\`\`cs
class Program
{
    static void Main()
    {   
        string type = "strawberry";
        Food food = new Food(type); //創建一個type為strawberry的食物
        string name = "Jeffery"; 
        Person person = new Person(name); //創建一個名字叫Jeffery的人
        person.Feed(food); //餵食物給Jeffery
    }
}
\`\`\`

Output
\`\`\`
Jeffery ate a strawberry
\`\`\``,frontmatter:{},index:7,start:181,end:203},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:r9,meta:{hide:!1,srcSequence:"./pages/CSharp-2.md",slide:{raw:`
## Answer

\`\`\`cs

class Food{
    public string type;
    public Food(string type){
        this.type = type;
    }
}

class Person{
    private string name;
    
    public Person(string name){
        this.name = name;
    }
    
    public void Feed(Food food){
        
    }
    
}

\`\`\`
`,title:"Answer",level:2,content:`## Answer

\`\`\`cs

class Food{
    public string type;
    public Food(string type){
        this.type = type;
    }
}

class Person{
    private string name;
    
    public Person(string name){
        this.name = name;
    }
    
    public void Feed(Food food){
        
    }
    
}

\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/CSharp-2.md"},index:38,start:204,end:231,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",raw:`
## Answer

\`\`\`cs

class Food{
    public string type;
    public Food(string type){
        this.type = type;
    }
}

class Person{
    private string name;
    
    public Person(string name){
        this.name = name;
    }
    
    public void Feed(Food food){
        
    }
    
}

\`\`\`
`,title:"Answer",level:2,content:`## Answer

\`\`\`cs

class Food{
    public string type;
    public Food(string type){
        this.type = type;
    }
}

class Person{
    private string name;
    
    public Person(string name){
        this.name = name;
    }
    
    public void Feed(Food food){
        
    }
    
}

\`\`\``,frontmatter:{},index:8,start:204,end:231},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/CSharp-2.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:c9,meta:{layout:"center",title:"Unity Introduction",hide:!1,srcSequence:"./pages/Unity-Intro.md",slide:{raw:null,title:"Unity Introduction",level:1,content:`# Unity Introduction

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{layout:"center",title:"Unity Introduction",hide:!1,srcSequence:"./pages/Unity-Intro.md"},index:39,start:0,end:8,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-Intro.md",raw:`---
layout: center
---

# Unity Introduction

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />
`,title:"Unity Introduction",level:1,content:`# Unity Introduction

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{layout:"center",title:"Unity Introduction"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/Unity-Intro.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:4,start:47,end:52},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-Intro.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:y9,meta:{hide:!1,srcSequence:"./pages/Unity-Intro.md",slide:{raw:`
## Download Unity Hub

<a href="https://unity.com/download">Unity Hub download</a>
`,title:"Download Unity Hub",level:2,content:`## Download Unity Hub

<a href="https://unity.com/download">Unity Hub download</a>`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-Intro.md"},index:40,start:9,end:14,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-Intro.md",raw:`
## Download Unity Hub

<a href="https://unity.com/download">Unity Hub download</a>
`,title:"Download Unity Hub",level:2,content:`## Download Unity Hub

<a href="https://unity.com/download">Unity Hub download</a>`,frontmatter:{},index:1,start:9,end:14},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-Intro.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:g9,meta:{hide:!1,srcSequence:"./pages/Unity-Intro.md",slide:{raw:`
## Unity Showcase

- Among Us
- Arena of Valor
- Pokemon Go
- Subway Surfers
- Temple Run 2
- Angry Birds 2
`,title:"Unity Showcase",level:2,content:`## Unity Showcase

- Among Us
- Arena of Valor
- Pokemon Go
- Subway Surfers
- Temple Run 2
- Angry Birds 2`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-Intro.md"},index:41,start:15,end:25,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-Intro.md",raw:`
## Unity Showcase

- Among Us
- Arena of Valor
- Pokemon Go
- Subway Surfers
- Temple Run 2
- Angry Birds 2
`,title:"Unity Showcase",level:2,content:`## Unity Showcase

- Among Us
- Arena of Valor
- Pokemon Go
- Subway Surfers
- Temple Run 2
- Angry Birds 2`,frontmatter:{},index:2,start:15,end:25},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-Intro.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:B9,meta:{hide:!1,srcSequence:"./pages/Unity-Intro.md",slide:{raw:`
## Install Unity Editor

<img src="/sources/Unity-Intro/Install_tab.png" style="height: 90%" />
`,title:"Install Unity Editor",level:2,content:`## Install Unity Editor

<img src="/sources/Unity-Intro/Install_tab.png" style="height: 90%" />`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-Intro.md"},index:42,start:26,end:31,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-Intro.md",raw:`
## Install Unity Editor

<img src="/sources/Unity-Intro/Install_tab.png" style="height: 90%" />
`,title:"Install Unity Editor",level:2,content:`## Install Unity Editor

<img src="/sources/Unity-Intro/Install_tab.png" style="height: 90%" />`,frontmatter:{},index:3,start:26,end:31},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-Intro.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:k9,meta:{hide:!1,srcSequence:"./pages/Unity-Intro.md",slide:{raw:'\nClick on the `Install Editor` and chose one start with `2021.3`\n\n<img src="/sources/Unity-Intro/Install_editor.png" style="height: 90%" />\n',content:'Click on the `Install Editor` and chose one start with `2021.3`\n\n<img src="/sources/Unity-Intro/Install_editor.png" style="height: 90%" />',frontmatter:{hide:!1,srcSequence:"./pages/Unity-Intro.md"},index:43,start:32,end:37,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-Intro.md",raw:'\nClick on the `Install Editor` and chose one start with `2021.3`\n\n<img src="/sources/Unity-Intro/Install_editor.png" style="height: 90%" />\n',content:'Click on the `Install Editor` and chose one start with `2021.3`\n\n<img src="/sources/Unity-Intro/Install_editor.png" style="height: 90%" />',frontmatter:{},index:4,start:32,end:37},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-Intro.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:F9,meta:{layout:"center",title:"Unity - 1 Player and Platforms",hide:!1,srcSequence:"./pages/Unity-1.md",slide:{raw:null,title:"Unity - 1 Player and Platforms",level:1,content:`# Unity - 1 Player and Platforms

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{layout:"center",title:"Unity - 1 Player and Platforms",hide:!1,srcSequence:"./pages/Unity-1.md"},index:44,start:0,end:8,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",raw:`---
layout: center
---

# Unity - 1 Player and Platforms

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />
`,title:"Unity - 1 Player and Platforms",level:1,content:`# Unity - 1 Player and Platforms

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{layout:"center",title:"Unity - 1 Player and Platforms"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/Unity-1.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:5,start:52,end:57},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:I9,meta:{hide:!1,srcSequence:"./pages/Unity-1.md",slide:{raw:`
## Create a Project with Unity Hub

<img src="/sources/Unity-1/Unity_hub.png" style="width:500px;" />

Press the \`New project\` and create a new one.
`,title:"Create a Project with Unity Hub",level:2,content:`## Create a Project with Unity Hub

<img src="/sources/Unity-1/Unity_hub.png" style="width:500px;" />

Press the \`New project\` and create a new one.`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-1.md"},index:45,start:9,end:16,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",raw:`
## Create a Project with Unity Hub

<img src="/sources/Unity-1/Unity_hub.png" style="width:500px;" />

Press the \`New project\` and create a new one.
`,title:"Create a Project with Unity Hub",level:2,content:`## Create a Project with Unity Hub

<img src="/sources/Unity-1/Unity_hub.png" style="width:500px;" />

Press the \`New project\` and create a new one.`,frontmatter:{},index:1,start:9,end:16},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:G9,meta:{layout:"center",hide:!1,srcSequence:"./pages/Unity-1.md",slide:{raw:`---
layout: center
---

<img src="/sources/Unity-1/Editor.png" />
`,content:'<img src="/sources/Unity-1/Editor.png" />',frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/Unity-1.md"},index:46,start:16,end:22,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",raw:`---
layout: center
---

<img src="/sources/Unity-1/Editor.png" />
`,content:'<img src="/sources/Unity-1/Editor.png" />',frontmatter:{layout:"center"},index:2,start:16,end:22},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:W9,meta:{hide:!1,srcSequence:"./pages/Unity-1.md",slide:{raw:`
## Create Platforms

<img src="/sources/Unity-1/Add_Platforms.png" style="width:700px;" />
`,title:"Create Platforms",level:2,content:`## Create Platforms

<img src="/sources/Unity-1/Add_Platforms.png" style="width:700px;" />`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-1.md"},index:47,start:23,end:28,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",raw:`
## Create Platforms

<img src="/sources/Unity-1/Add_Platforms.png" style="width:700px;" />
`,title:"Create Platforms",level:2,content:`## Create Platforms

<img src="/sources/Unity-1/Add_Platforms.png" style="width:700px;" />`,frontmatter:{},index:3,start:23,end:28},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:J9,meta:{hide:!1,srcSequence:"./pages/Unity-1.md",slide:{raw:'\n1. Add three components `2D Object/Sprites/Square` and rename to `Platform Left/Middle/Right`.\n2. Give those platforms Box Collider 2D\n3. Select and create empty parant as `PlatformsManager`\n\n<img src="/sources/Unity-1/Add_Box_Collder_2D.png" style="width:600px" />\n',content:'1. Add three components `2D Object/Sprites/Square` and rename to `Platform Left/Middle/Right`.\n2. Give those platforms Box Collider 2D\n3. Select and create empty parant as `PlatformsManager`\n\n<img src="/sources/Unity-1/Add_Box_Collder_2D.png" style="width:600px" />',frontmatter:{hide:!1,srcSequence:"./pages/Unity-1.md"},index:48,start:29,end:36,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",raw:'\n1. Add three components `2D Object/Sprites/Square` and rename to `Platform Left/Middle/Right`.\n2. Give those platforms Box Collider 2D\n3. Select and create empty parant as `PlatformsManager`\n\n<img src="/sources/Unity-1/Add_Box_Collder_2D.png" style="width:600px" />\n',content:'1. Add three components `2D Object/Sprites/Square` and rename to `Platform Left/Middle/Right`.\n2. Give those platforms Box Collider 2D\n3. Select and create empty parant as `PlatformsManager`\n\n<img src="/sources/Unity-1/Add_Box_Collder_2D.png" style="width:600px" />',frontmatter:{},index:4,start:29,end:36},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:tw,meta:{hide:!1,srcSequence:"./pages/Unity-1.md",slide:{raw:`
## Add Player

1. Add player components, \`2D Object/Sprites/Square\` and rename to \`Player\`
2. Add BoxCollider2D
3. Add RigidBody2D

<img src="/sources/Unity-1/Add_player.png" style="width:600px" />
`,title:"Add Player",level:2,content:`## Add Player

1. Add player components, \`2D Object/Sprites/Square\` and rename to \`Player\`
2. Add BoxCollider2D
3. Add RigidBody2D

<img src="/sources/Unity-1/Add_player.png" style="width:600px" />`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-1.md"},index:49,start:37,end:46,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",raw:`
## Add Player

1. Add player components, \`2D Object/Sprites/Square\` and rename to \`Player\`
2. Add BoxCollider2D
3. Add RigidBody2D

<img src="/sources/Unity-1/Add_player.png" style="width:600px" />
`,title:"Add Player",level:2,content:`## Add Player

1. Add player components, \`2D Object/Sprites/Square\` and rename to \`Player\`
2. Add BoxCollider2D
3. Add RigidBody2D

<img src="/sources/Unity-1/Add_player.png" style="width:600px" />`,frontmatter:{},index:5,start:37,end:46},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:yw,meta:{layout:"image-right",image:"/sources/Unity-1/Physics_Material_2D.png",hide:!1,srcSequence:"./pages/Unity-1.md",slide:{raw:`---
layout: image-right
image: /sources/Unity-1/Physics_Material_2D.png
---

### BoxCollider2D

Box collider is a cuboid-shaped collision(碰撞) primitive(原始物件).

\`Material: No_friction\`

#### Generate No_friction

\`Create/2D/Physics Material 2D\`
`,title:"BoxCollider2D",level:3,content:`### BoxCollider2D

Box collider is a cuboid-shaped collision(碰撞) primitive(原始物件).

\`Material: No_friction\`

#### Generate No_friction

\`Create/2D/Physics Material 2D\``,frontmatter:{layout:"image-right",image:"/sources/Unity-1/Physics_Material_2D.png",hide:!1,srcSequence:"./pages/Unity-1.md"},index:50,start:46,end:61,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",raw:`---
layout: image-right
image: /sources/Unity-1/Physics_Material_2D.png
---

### BoxCollider2D

Box collider is a cuboid-shaped collision(碰撞) primitive(原始物件).

\`Material: No_friction\`

#### Generate No_friction

\`Create/2D/Physics Material 2D\`
`,title:"BoxCollider2D",level:3,content:`### BoxCollider2D

Box collider is a cuboid-shaped collision(碰撞) primitive(原始物件).

\`Material: No_friction\`

#### Generate No_friction

\`Create/2D/Physics Material 2D\``,frontmatter:{layout:"image-right",image:"/sources/Unity-1/Physics_Material_2D.png"},index:6,start:46,end:61},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",noteHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:gw,meta:{hide:!1,srcSequence:"./pages/Unity-1.md",slide:{raw:`
<img src="/sources/Unity-1/No_friction.png" />
`,content:'<img src="/sources/Unity-1/No_friction.png" />',frontmatter:{hide:!1,srcSequence:"./pages/Unity-1.md"},index:51,start:62,end:65,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",raw:`
<img src="/sources/Unity-1/No_friction.png" />
`,content:'<img src="/sources/Unity-1/No_friction.png" />',frontmatter:{},index:7,start:62,end:65},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",noteHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:Bw,meta:{hide:!1,srcSequence:"./pages/Unity-1.md",slide:{raw:'\nAdd `No_friction` to `Player`\'s `Material` section\n\n<img src="/sources/Unity-1/Player_material.png" style="width:550px;" />\n',content:'Add `No_friction` to `Player`\'s `Material` section\n\n<img src="/sources/Unity-1/Player_material.png" style="width:550px;" />',frontmatter:{hide:!1,srcSequence:"./pages/Unity-1.md"},index:52,start:66,end:71,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",raw:'\nAdd `No_friction` to `Player`\'s `Material` section\n\n<img src="/sources/Unity-1/Player_material.png" style="width:550px;" />\n',content:'Add `No_friction` to `Player`\'s `Material` section\n\n<img src="/sources/Unity-1/Player_material.png" style="width:550px;" />',frontmatter:{},index:8,start:66,end:71},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",noteHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:Pw,meta:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-1.md",slide:{raw:`---
layout: two-cols
---

### RigidBody2D

Control of an object's position through physics simulation. Adding RigidBody to an object will put its motion under the control of Unity's physics engine.  

Even without any code, a rigidbody object will be *pulled downward by gravity* and and will *react to collisions* with incoming objects 
if the right Collider component is also present.

\`Gravity Scale: 3, Collision Detection: Continuous, Sleeping Mode: Never Sleep, Interpolation: Interpolation, Constraints/Freeze Rotation: Freeze Z\`

::right::

<img src="/sources/Unity-1/Player_rigidbody.png" />
`,title:"RigidBody2D",level:3,content:`### RigidBody2D

Control of an object's position through physics simulation. Adding RigidBody to an object will put its motion under the control of Unity's physics engine.  

Even without any code, a rigidbody object will be *pulled downward by gravity* and and will *react to collisions* with incoming objects 
if the right Collider component is also present.

\`Gravity Scale: 3, Collision Detection: Continuous, Sleeping Mode: Never Sleep, Interpolation: Interpolation, Constraints/Freeze Rotation: Freeze Z\`

::right::

<img src="/sources/Unity-1/Player_rigidbody.png" />`,frontmatter:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-1.md"},index:53,start:71,end:88,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",raw:`---
layout: two-cols
---

### RigidBody2D

Control of an object's position through physics simulation. Adding RigidBody to an object will put its motion under the control of Unity's physics engine.  

Even without any code, a rigidbody object will be *pulled downward by gravity* and and will *react to collisions* with incoming objects 
if the right Collider component is also present.

\`Gravity Scale: 3, Collision Detection: Continuous, Sleeping Mode: Never Sleep, Interpolation: Interpolation, Constraints/Freeze Rotation: Freeze Z\`

::right::

<img src="/sources/Unity-1/Player_rigidbody.png" />
`,title:"RigidBody2D",level:3,content:`### RigidBody2D

Control of an object's position through physics simulation. Adding RigidBody to an object will put its motion under the control of Unity's physics engine.  

Even without any code, a rigidbody object will be *pulled downward by gravity* and and will *react to collisions* with incoming objects 
if the right Collider component is also present.

\`Gravity Scale: 3, Collision Detection: Continuous, Sleeping Mode: Never Sleep, Interpolation: Interpolation, Constraints/Freeze Rotation: Freeze Z\`

::right::

<img src="/sources/Unity-1/Player_rigidbody.png" />`,frontmatter:{layout:"two-cols"},index:9,start:71,end:88},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",noteHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:Ow,meta:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-1.md",slide:{raw:`---
layout: two-cols
---

## C# Script

Add script to \`Scripts\` folder and rename to \`PlayerController\`

::right::

<img src="/sources/Unity-1/PlayerControllerCs.png" style="height:500px" />
`,title:"C# Script",level:2,content:`## C# Script

Add script to \`Scripts\` folder and rename to \`PlayerController\`

::right::

<img src="/sources/Unity-1/PlayerControllerCs.png" style="height:500px" />`,frontmatter:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-1.md"},index:54,start:88,end:100,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",raw:`---
layout: two-cols
---

## C# Script

Add script to \`Scripts\` folder and rename to \`PlayerController\`

::right::

<img src="/sources/Unity-1/PlayerControllerCs.png" style="height:500px" />
`,title:"C# Script",level:2,content:`## C# Script

Add script to \`Scripts\` folder and rename to \`PlayerController\`

::right::

<img src="/sources/Unity-1/PlayerControllerCs.png" style="height:500px" />`,frontmatter:{layout:"two-cols"},index:10,start:88,end:100},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-1.md",noteHTML:"",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:Gw,meta:{layout:"center",title:"Unity - 2 PlayerController script",hide:!1,srcSequence:"./pages/Unity-2.md",slide:{raw:null,title:"Unity - 2 PlayerController script",level:1,content:`# Unity - 2 PlayerController script

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{layout:"center",title:"Unity - 2 PlayerController script",hide:!1,srcSequence:"./pages/Unity-2.md"},index:55,start:0,end:8,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",raw:`---
layout: center
---

# Unity - 2 PlayerController script

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />
`,title:"Unity - 2 PlayerController script",level:1,content:`# Unity - 2 PlayerController script

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{layout:"center",title:"Unity - 2 PlayerController script"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/Unity-2.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:6,start:57,end:62},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",noteHTML:"",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:Vw,meta:{hide:!1,srcSequence:"./pages/Unity-2.md",slide:{raw:`
## Playcontroller Script

First, drag \`PlayerController\` to \`Player\` component, double click the script to edit

<img src="/sources/Unity-2/PlayerController_script.png" style="height: 300px;" />
`,title:"Playcontroller Script",level:2,content:'## Playcontroller Script\n\nFirst, drag `PlayerController` to `Player` component, double click the script to edit\n\n<img src="/sources/Unity-2/PlayerController_script.png" style="height: 300px;" />',frontmatter:{hide:!1,srcSequence:"./pages/Unity-2.md"},index:56,start:9,end:16,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",raw:`
## Playcontroller Script

First, drag \`PlayerController\` to \`Player\` component, double click the script to edit

<img src="/sources/Unity-2/PlayerController_script.png" style="height: 300px;" />
`,title:"Playcontroller Script",level:2,content:'## Playcontroller Script\n\nFirst, drag `PlayerController` to `Player` component, double click the script to edit\n\n<img src="/sources/Unity-2/PlayerController_script.png" style="height: 300px;" />',frontmatter:{},index:1,start:9,end:16},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",noteHTML:"",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:Zw,meta:{hide:!1,srcSequence:"./pages/Unity-2.md",slide:{raw:`
## C# script

\`\`\`csharp {1-3 | 8 | 11}
using System.Collections;           // Include toolkit
using System.Collections.Generic;   // Include toolkit
using UnityEngine;                  // Include toolkit

public class PlayerController : MonoBehaviour
{
    // Start is called before the first frame update
    void Start() {}

    // Update is called once per frame
    void Update() {}
}
\`\`\`

\`void start()\` is execute once when the script was called. <br />
\`void Update()\` is called every frame. <br />
\`void FixedUpdate()\` execute once at a fixed interval. (每單位時間)
`,title:"C# script",level:2,content:`## C# script

\`\`\`csharp {1-3 | 8 | 11}
using System.Collections;           // Include toolkit
using System.Collections.Generic;   // Include toolkit
using UnityEngine;                  // Include toolkit

public class PlayerController : MonoBehaviour
{
    // Start is called before the first frame update
    void Start() {}

    // Update is called once per frame
    void Update() {}
}
\`\`\`

\`void start()\` is execute once when the script was called. <br />
\`void Update()\` is called every frame. <br />
\`void FixedUpdate()\` execute once at a fixed interval. (每單位時間)`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-2.md"},index:57,start:17,end:39,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",raw:`
## C# script

\`\`\`csharp {1-3 | 8 | 11}
using System.Collections;           // Include toolkit
using System.Collections.Generic;   // Include toolkit
using UnityEngine;                  // Include toolkit

public class PlayerController : MonoBehaviour
{
    // Start is called before the first frame update
    void Start() {}

    // Update is called once per frame
    void Update() {}
}
\`\`\`

\`void start()\` is execute once when the script was called. <br />
\`void Update()\` is called every frame. <br />
\`void FixedUpdate()\` execute once at a fixed interval. (每單位時間)
`,title:"C# script",level:2,content:`## C# script

\`\`\`csharp {1-3 | 8 | 11}
using System.Collections;           // Include toolkit
using System.Collections.Generic;   // Include toolkit
using UnityEngine;                  // Include toolkit

public class PlayerController : MonoBehaviour
{
    // Start is called before the first frame update
    void Start() {}

    // Update is called once per frame
    void Update() {}
}
\`\`\`

\`void start()\` is execute once when the script was called. <br />
\`void Update()\` is called every frame. <br />
\`void FixedUpdate()\` execute once at a fixed interval. (每單位時間)`,frontmatter:{},index:2,start:17,end:39},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",noteHTML:"",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:tk,meta:{hide:!1,srcSequence:"./pages/Unity-2.md",slide:{raw:`
Declare our variables

\`\`\`csharp
private float horizontal; // -1, 0 or 1 (horizontal position)
private float speed = 8f;
private float jumpingPower = 12f;

// Reference the rigid body, ground check and ground layer
[SerializeField] private Rigidbody2D rb;
[SerializeField] private Transform groundCheck; // Check if player touch the ground
[SerializeField] private LayerMask groundLayer; // Check if component is ground
\`\`\`

\`SerializeField\` will force Unity to serialize a private field. (讓使用者在 UI 對 private variables 做控制)
`,content:`Declare our variables

\`\`\`csharp
private float horizontal; // -1, 0 or 1 (horizontal position)
private float speed = 8f;
private float jumpingPower = 12f;

// Reference the rigid body, ground check and ground layer
[SerializeField] private Rigidbody2D rb;
[SerializeField] private Transform groundCheck; // Check if player touch the ground
[SerializeField] private LayerMask groundLayer; // Check if component is ground
\`\`\`

\`SerializeField\` will force Unity to serialize a private field. (讓使用者在 UI 對 private variables 做控制)`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-2.md"},index:58,start:40,end:56,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",raw:`
Declare our variables

\`\`\`csharp
private float horizontal; // -1, 0 or 1 (horizontal position)
private float speed = 8f;
private float jumpingPower = 12f;

// Reference the rigid body, ground check and ground layer
[SerializeField] private Rigidbody2D rb;
[SerializeField] private Transform groundCheck; // Check if player touch the ground
[SerializeField] private LayerMask groundLayer; // Check if component is ground
\`\`\`

\`SerializeField\` will force Unity to serialize a private field. (讓使用者在 UI 對 private variables 做控制)
`,content:`Declare our variables

\`\`\`csharp
private float horizontal; // -1, 0 or 1 (horizontal position)
private float speed = 8f;
private float jumpingPower = 12f;

// Reference the rigid body, ground check and ground layer
[SerializeField] private Rigidbody2D rb;
[SerializeField] private Transform groundCheck; // Check if player touch the ground
[SerializeField] private LayerMask groundLayer; // Check if component is ground
\`\`\`

\`SerializeField\` will force Unity to serialize a private field. (讓使用者在 UI 對 private variables 做控制)`,frontmatter:{},index:3,start:40,end:56},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",noteHTML:"",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:lk,meta:{hide:!1,srcSequence:"./pages/Unity-2.md",slide:{raw:`
\`\`\`csharp{all|3|5-7|9-11|14-16}
void Update()
{
    horizontal = Input.GetAxisRaw("Horizontal"); // 確認左右
    
    if (Input.GetButtonDown("Jump") && IsGrounded()) { // 當接觸地面時 向上跳
        rb.velocity = new Vector2(rb.velocity.x, jumpingPower);
    }

    if (Input.GetButtonUp("Jump") && rb.velocity.y > 0f) { // 按越久跳越高
        rb.velocity = new Vector2(rb.velocity.x, rb.velocity.y * 0.5f);
    }
}

private void FixedUpdate() {
    rb.velocity = new Vector2(horizontal * speed, rb.velocity.y); // 左右增加速度
}
\`\`\`
`,content:`\`\`\`csharp{all|3|5-7|9-11|14-16}
void Update()
{
    horizontal = Input.GetAxisRaw("Horizontal"); // 確認左右
    
    if (Input.GetButtonDown("Jump") && IsGrounded()) { // 當接觸地面時 向上跳
        rb.velocity = new Vector2(rb.velocity.x, jumpingPower);
    }

    if (Input.GetButtonUp("Jump") && rb.velocity.y > 0f) { // 按越久跳越高
        rb.velocity = new Vector2(rb.velocity.x, rb.velocity.y * 0.5f);
    }
}

private void FixedUpdate() {
    rb.velocity = new Vector2(horizontal * speed, rb.velocity.y); // 左右增加速度
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Unity-2.md"},index:59,start:57,end:77,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",raw:`
\`\`\`csharp{all|3|5-7|9-11|14-16}
void Update()
{
    horizontal = Input.GetAxisRaw("Horizontal"); // 確認左右
    
    if (Input.GetButtonDown("Jump") && IsGrounded()) { // 當接觸地面時 向上跳
        rb.velocity = new Vector2(rb.velocity.x, jumpingPower);
    }

    if (Input.GetButtonUp("Jump") && rb.velocity.y > 0f) { // 按越久跳越高
        rb.velocity = new Vector2(rb.velocity.x, rb.velocity.y * 0.5f);
    }
}

private void FixedUpdate() {
    rb.velocity = new Vector2(horizontal * speed, rb.velocity.y); // 左右增加速度
}
\`\`\`
`,content:`\`\`\`csharp{all|3|5-7|9-11|14-16}
void Update()
{
    horizontal = Input.GetAxisRaw("Horizontal"); // 確認左右
    
    if (Input.GetButtonDown("Jump") && IsGrounded()) { // 當接觸地面時 向上跳
        rb.velocity = new Vector2(rb.velocity.x, jumpingPower);
    }

    if (Input.GetButtonUp("Jump") && rb.velocity.y > 0f) { // 按越久跳越高
        rb.velocity = new Vector2(rb.velocity.x, rb.velocity.y * 0.5f);
    }
}

private void FixedUpdate() {
    rb.velocity = new Vector2(horizontal * speed, rb.velocity.y); // 左右增加速度
}
\`\`\``,frontmatter:{},index:4,start:57,end:77},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",noteHTML:"",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:hk,meta:{hide:!1,srcSequence:"./pages/Unity-2.md",slide:{raw:`
### Input function

<br />

> Input method and settings are defined in \`Edit > Project Settings > Input Manager\`

<br />

### Input.GetAxisRaw

\`Input.GetAxisRaw("axisName")\` will either be -1, 0 or 1.

### Input.GetButtonDown

\`Input.GetButtonDown("Button Name")\` returns true the first frame the user releases the virtual button.
`,title:"Input function",level:3,content:`### Input function

<br />

> Input method and settings are defined in \`Edit > Project Settings > Input Manager\`

<br />

### Input.GetAxisRaw

\`Input.GetAxisRaw("axisName")\` will either be -1, 0 or 1.

### Input.GetButtonDown

\`Input.GetButtonDown("Button Name")\` returns true the first frame the user releases the virtual button.`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-2.md"},index:60,start:78,end:95,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",raw:`
### Input function

<br />

> Input method and settings are defined in \`Edit > Project Settings > Input Manager\`

<br />

### Input.GetAxisRaw

\`Input.GetAxisRaw("axisName")\` will either be -1, 0 or 1.

### Input.GetButtonDown

\`Input.GetButtonDown("Button Name")\` returns true the first frame the user releases the virtual button.
`,title:"Input function",level:3,content:`### Input function

<br />

> Input method and settings are defined in \`Edit > Project Settings > Input Manager\`

<br />

### Input.GetAxisRaw

\`Input.GetAxisRaw("axisName")\` will either be -1, 0 or 1.

### Input.GetButtonDown

\`Input.GetButtonDown("Button Name")\` returns true the first frame the user releases the virtual button.`,frontmatter:{},index:5,start:78,end:95},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",noteHTML:"",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:_k,meta:{hide:!1,srcSequence:"./pages/Unity-2.md",slide:{raw:`
### IsGrounded function

\`\`\`csharp
private bool IsGrounded() { // 確認是否著地
    return Physics2D.OverlapCircle(groundCheck.position, 0.2f, groundLayer);
}
\`\`\`
`,title:"IsGrounded function",level:3,content:"### IsGrounded function\n\n```csharp\nprivate bool IsGrounded() { // 確認是否著地\n    return Physics2D.OverlapCircle(groundCheck.position, 0.2f, groundLayer);\n}\n```",frontmatter:{hide:!1,srcSequence:"./pages/Unity-2.md"},index:61,start:96,end:105,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",raw:`
### IsGrounded function

\`\`\`csharp
private bool IsGrounded() { // 確認是否著地
    return Physics2D.OverlapCircle(groundCheck.position, 0.2f, groundLayer);
}
\`\`\`
`,title:"IsGrounded function",level:3,content:"### IsGrounded function\n\n```csharp\nprivate bool IsGrounded() { // 確認是否著地\n    return Physics2D.OverlapCircle(groundCheck.position, 0.2f, groundLayer);\n}\n```",frontmatter:{},index:6,start:96,end:105},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",noteHTML:"",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:wk,meta:{hide:!1,srcSequence:"./pages/Unity-2.md",slide:{raw:`
## Setup Playcontroller Script

Open the script information

<img src="/sources/Unity-2/Script_inform.png" />

\`\`\`txt
Rb: Player
Ground Check: GroundCheck
Ground Layer: Ground
\`\`\`
`,title:"Setup Playcontroller Script",level:2,content:`## Setup Playcontroller Script

Open the script information

<img src="/sources/Unity-2/Script_inform.png" />

\`\`\`txt
Rb: Player
Ground Check: GroundCheck
Ground Layer: Ground
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Unity-2.md"},index:62,start:106,end:119,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",raw:`
## Setup Playcontroller Script

Open the script information

<img src="/sources/Unity-2/Script_inform.png" />

\`\`\`txt
Rb: Player
Ground Check: GroundCheck
Ground Layer: Ground
\`\`\`
`,title:"Setup Playcontroller Script",level:2,content:`## Setup Playcontroller Script

Open the script information

<img src="/sources/Unity-2/Script_inform.png" />

\`\`\`txt
Rb: Player
Ground Check: GroundCheck
Ground Layer: Ground
\`\`\``,frontmatter:{},index:7,start:106,end:119},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",noteHTML:"",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:Tk,meta:{hide:!1,srcSequence:"./pages/Unity-2.md",slide:{raw:`
### Add Ground Check

Add GroundCheck components (child component of Player)

<img src="/sources/Unity-2/Create_GroundCheck.png" style="width:500pt" />
`,title:"Add Ground Check",level:3,content:`### Add Ground Check

Add GroundCheck components (child component of Player)

<img src="/sources/Unity-2/Create_GroundCheck.png" style="width:500pt" />`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-2.md"},index:63,start:120,end:127,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",raw:`
### Add Ground Check

Add GroundCheck components (child component of Player)

<img src="/sources/Unity-2/Create_GroundCheck.png" style="width:500pt" />
`,title:"Add Ground Check",level:3,content:`### Add Ground Check

Add GroundCheck components (child component of Player)

<img src="/sources/Unity-2/Create_GroundCheck.png" style="width:500pt" />`,frontmatter:{},index:8,start:120,end:127},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",noteHTML:"",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:Ok,meta:{hide:!1,srcSequence:"./pages/Unity-2.md",slide:{raw:'\nMove `GroundCheck` a little bit lower than `Player` to check if the `Player` touch the ground\n\n<img src="/sources/Unity-2/Move_GroundCheck.png" style="width:500pt" />\n',content:'Move `GroundCheck` a little bit lower than `Player` to check if the `Player` touch the ground\n\n<img src="/sources/Unity-2/Move_GroundCheck.png" style="width:500pt" />',frontmatter:{hide:!1,srcSequence:"./pages/Unity-2.md"},index:64,start:128,end:133,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",raw:'\nMove `GroundCheck` a little bit lower than `Player` to check if the `Player` touch the ground\n\n<img src="/sources/Unity-2/Move_GroundCheck.png" style="width:500pt" />\n',content:'Move `GroundCheck` a little bit lower than `Player` to check if the `Player` touch the ground\n\n<img src="/sources/Unity-2/Move_GroundCheck.png" style="width:500pt" />',frontmatter:{},index:9,start:128,end:133},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",noteHTML:"",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:Hk,meta:{hide:!1,srcSequence:"./pages/Unity-2.md",slide:{raw:`
### Add Ground Layer

First, add \`Ground\` layer.
<img src="/sources/Unity-2/Add_layer.png" style="height:150pt" />

Second, choose \`Ground\` layer for three platforms.
<img src="/sources/Unity-2/Ground_layer.png" style="height:150pt" />
`,title:"Add Ground Layer",level:3,content:`### Add Ground Layer

First, add \`Ground\` layer.
<img src="/sources/Unity-2/Add_layer.png" style="height:150pt" />

Second, choose \`Ground\` layer for three platforms.
<img src="/sources/Unity-2/Ground_layer.png" style="height:150pt" />`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-2.md"},index:65,start:134,end:143,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",raw:`
### Add Ground Layer

First, add \`Ground\` layer.
<img src="/sources/Unity-2/Add_layer.png" style="height:150pt" />

Second, choose \`Ground\` layer for three platforms.
<img src="/sources/Unity-2/Ground_layer.png" style="height:150pt" />
`,title:"Add Ground Layer",level:3,content:`### Add Ground Layer

First, add \`Ground\` layer.
<img src="/sources/Unity-2/Add_layer.png" style="height:150pt" />

Second, choose \`Ground\` layer for three platforms.
<img src="/sources/Unity-2/Ground_layer.png" style="height:150pt" />`,frontmatter:{},index:10,start:134,end:143},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",noteHTML:"",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:Zk,meta:{hide:!1,srcSequence:"./pages/Unity-2.md",slide:{raw:`
### Drag components for script

<br />

<img src="/sources/Unity-2/Player_components.png" style="height:150pt" />

\`\`\`txt
Rb: Player
Ground Check: GroundCheck
Ground Layer: Ground
\`\`\`

`,title:"Drag components for script",level:3,content:`### Drag components for script

<br />

<img src="/sources/Unity-2/Player_components.png" style="height:150pt" />

\`\`\`txt
Rb: Player
Ground Check: GroundCheck
Ground Layer: Ground
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Unity-2.md"},index:66,start:144,end:158,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",raw:`
### Drag components for script

<br />

<img src="/sources/Unity-2/Player_components.png" style="height:150pt" />

\`\`\`txt
Rb: Player
Ground Check: GroundCheck
Ground Layer: Ground
\`\`\`

`,title:"Drag components for script",level:3,content:`### Drag components for script

<br />

<img src="/sources/Unity-2/Player_components.png" style="height:150pt" />

\`\`\`txt
Rb: Player
Ground Check: GroundCheck
Ground Layer: Ground
\`\`\``,frontmatter:{},index:11,start:144,end:158},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-2.md",noteHTML:"",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:ex,meta:{layout:"center",title:"Unity - 3 PlatformsMovement Script",hide:!1,srcSequence:"./pages/Unity-3.md",slide:{raw:null,title:"Unity - 3 PlatformsMovement Script",level:1,content:`# Unity - 3 PlatformsMovement Script

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{layout:"center",title:"Unity - 3 PlatformsMovement Script",hide:!1,srcSequence:"./pages/Unity-3.md"},index:67,start:0,end:8,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",raw:`---
layout: center
---

# Unity - 3 PlatformsMovement Script

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />
`,title:"Unity - 3 PlatformsMovement Script",level:1,content:`# Unity - 3 PlatformsMovement Script

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{layout:"center",title:"Unity - 3 PlatformsMovement Script"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/Unity-3.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:7,start:62,end:67},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",noteHTML:"",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:rx,meta:{hide:!1,srcSequence:"./pages/Unity-3.md",slide:{raw:`
## C# Script

1. Generate a script under \`Scripts\` folder, rename to \`PlatformsMovement\`
2. Double click the file to edit

<img src="/sources/Unity-3/PlatformsMovement.png" />
`,title:"C# Script",level:2,content:`## C# Script

1. Generate a script under \`Scripts\` folder, rename to \`PlatformsMovement\`
2. Double click the file to edit

<img src="/sources/Unity-3/PlatformsMovement.png" />`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-3.md"},index:68,start:9,end:17,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",raw:`
## C# Script

1. Generate a script under \`Scripts\` folder, rename to \`PlatformsMovement\`
2. Double click the file to edit

<img src="/sources/Unity-3/PlatformsMovement.png" />
`,title:"C# Script",level:2,content:`## C# Script

1. Generate a script under \`Scripts\` folder, rename to \`PlatformsMovement\`
2. Double click the file to edit

<img src="/sources/Unity-3/PlatformsMovement.png" />`,frontmatter:{},index:1,start:9,end:17},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",noteHTML:"",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:ux,meta:{hide:!1,srcSequence:"./pages/Unity-3.md",slide:{raw:`
\`\`\`csharp
// Import the toolkits
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
\`\`\`

Declare the variables we will use later
\`\`\`csharp
public class PlatformsMovement : MonoBehaviour
{
    public float speed;         // Speed of the platforms movement
    public Transform[] points;  // Starting point and the turning point of the platforms
    private int i = 0;
}
\`\`\`
`,content:`\`\`\`csharp
// Import the toolkits
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
\`\`\`

Declare the variables we will use later
\`\`\`csharp
public class PlatformsMovement : MonoBehaviour
{
    public float speed;         // Speed of the platforms movement
    public Transform[] points;  // Starting point and the turning point of the platforms
    private int i = 0;
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Unity-3.md"},index:69,start:18,end:36,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",raw:`
\`\`\`csharp
// Import the toolkits
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
\`\`\`

Declare the variables we will use later
\`\`\`csharp
public class PlatformsMovement : MonoBehaviour
{
    public float speed;         // Speed of the platforms movement
    public Transform[] points;  // Starting point and the turning point of the platforms
    private int i = 0;
}
\`\`\`
`,content:`\`\`\`csharp
// Import the toolkits
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
\`\`\`

Declare the variables we will use later
\`\`\`csharp
public class PlatformsMovement : MonoBehaviour
{
    public float speed;         // Speed of the platforms movement
    public Transform[] points;  // Starting point and the turning point of the platforms
    private int i = 0;
}
\`\`\``,frontmatter:{},index:2,start:18,end:36},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",noteHTML:"",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:hx,meta:{hide:!1,srcSequence:"./pages/Unity-3.md",slide:{raw:`
Initialize the starting point

\`\`\`csharp
void Start() {
    transform.position = points[0].position; // Start from the starting point
}
\`\`\`
`,content:"Initialize the starting point\n\n```csharp\nvoid Start() {\n    transform.position = points[0].position; // Start from the starting point\n}\n```",frontmatter:{hide:!1,srcSequence:"./pages/Unity-3.md"},index:70,start:37,end:46,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",raw:`
Initialize the starting point

\`\`\`csharp
void Start() {
    transform.position = points[0].position; // Start from the starting point
}
\`\`\`
`,content:"Initialize the starting point\n\n```csharp\nvoid Start() {\n    transform.position = points[0].position; // Start from the starting point\n}\n```",frontmatter:{},index:3,start:37,end:46},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",noteHTML:"",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:Ax,meta:{hide:!1,srcSequence:"./pages/Unity-3.md",slide:{raw:"\n```csharp\nvoid Update() {\n    if (Vector2.Distance(transform.position, points[i].position) < 0.09f) {\n        ++i;\n        if (i == points.Length) i = 0;\n    }\n    transform.position = Vector2.MoveTowards(transform.position, points[i].position, speed * Time.deltaTime);\n}\n```\n\nDeclaration: `Vector2.MoveTowards(current, target, speed)`  \n`MoveTowards()`: Moves a point `current` towards `target`.\n\n```csharp\n// Current position will move from the current position to points[i].position\ntransform.position = Vector2.MoveTowards(transform.position, points[i].position, speed * Time.deltaTime);\n```\n",content:"```csharp\nvoid Update() {\n    if (Vector2.Distance(transform.position, points[i].position) < 0.09f) {\n        ++i;\n        if (i == points.Length) i = 0;\n    }\n    transform.position = Vector2.MoveTowards(transform.position, points[i].position, speed * Time.deltaTime);\n}\n```\n\nDeclaration: `Vector2.MoveTowards(current, target, speed)`  \n`MoveTowards()`: Moves a point `current` towards `target`.\n\n```csharp\n// Current position will move from the current position to points[i].position\ntransform.position = Vector2.MoveTowards(transform.position, points[i].position, speed * Time.deltaTime);\n```",frontmatter:{hide:!1,srcSequence:"./pages/Unity-3.md"},index:71,start:47,end:66,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",raw:"\n```csharp\nvoid Update() {\n    if (Vector2.Distance(transform.position, points[i].position) < 0.09f) {\n        ++i;\n        if (i == points.Length) i = 0;\n    }\n    transform.position = Vector2.MoveTowards(transform.position, points[i].position, speed * Time.deltaTime);\n}\n```\n\nDeclaration: `Vector2.MoveTowards(current, target, speed)`  \n`MoveTowards()`: Moves a point `current` towards `target`.\n\n```csharp\n// Current position will move from the current position to points[i].position\ntransform.position = Vector2.MoveTowards(transform.position, points[i].position, speed * Time.deltaTime);\n```\n",content:"```csharp\nvoid Update() {\n    if (Vector2.Distance(transform.position, points[i].position) < 0.09f) {\n        ++i;\n        if (i == points.Length) i = 0;\n    }\n    transform.position = Vector2.MoveTowards(transform.position, points[i].position, speed * Time.deltaTime);\n}\n```\n\nDeclaration: `Vector2.MoveTowards(current, target, speed)`  \n`MoveTowards()`: Moves a point `current` towards `target`.\n\n```csharp\n// Current position will move from the current position to points[i].position\ntransform.position = Vector2.MoveTowards(transform.position, points[i].position, speed * Time.deltaTime);\n```",frontmatter:{},index:4,start:47,end:66},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",noteHTML:"",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:wx,meta:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-3.md",slide:{raw:`---
layout: two-cols
---

## Dragging Script and Setting Components

1. Drag the script to one platform
2. Create starting point and turning point
    - Start point: The start point of the platform
    - End point: The end point of the platform

::right::

<img src="/sources/Unity-3/Create_empty.png" style="height:60%" />
`,title:"Dragging Script and Setting Components",level:2,content:`## Dragging Script and Setting Components

1. Drag the script to one platform
2. Create starting point and turning point
    - Start point: The start point of the platform
    - End point: The end point of the platform

::right::

<img src="/sources/Unity-3/Create_empty.png" style="height:60%" />`,frontmatter:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-3.md"},index:72,start:66,end:81,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",raw:`---
layout: two-cols
---

## Dragging Script and Setting Components

1. Drag the script to one platform
2. Create starting point and turning point
    - Start point: The start point of the platform
    - End point: The end point of the platform

::right::

<img src="/sources/Unity-3/Create_empty.png" style="height:60%" />
`,title:"Dragging Script and Setting Components",level:2,content:`## Dragging Script and Setting Components

1. Drag the script to one platform
2. Create starting point and turning point
    - Start point: The start point of the platform
    - End point: The end point of the platform

::right::

<img src="/sources/Unity-3/Create_empty.png" style="height:60%" />`,frontmatter:{layout:"two-cols"},index:5,start:66,end:81},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",noteHTML:"",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:Tx,meta:{hide:!1,srcSequence:"./pages/Unity-3.md",slide:{raw:`
<img src="/sources/Unity-3/Start_point.png" style="width:450pt" />
<img src="/sources/Unity-3/End_point.png" style="width:450pt" />
`,content:`<img src="/sources/Unity-3/Start_point.png" style="width:450pt" />
<img src="/sources/Unity-3/End_point.png" style="width:450pt" />`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-3.md"},index:73,start:82,end:86,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",raw:`
<img src="/sources/Unity-3/Start_point.png" style="width:450pt" />
<img src="/sources/Unity-3/End_point.png" style="width:450pt" />
`,content:`<img src="/sources/Unity-3/Start_point.png" style="width:450pt" />
<img src="/sources/Unity-3/End_point.png" style="width:450pt" />`,frontmatter:{},index:6,start:82,end:86},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",noteHTML:"",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:Rx,meta:{hide:!1,srcSequence:"./pages/Unity-3.md",slide:{raw:`
Drag start point and end point to the array of positions (\`public Transform[] points\`)

<img src="/sources/Unity-3/PlatformsMovement_setup.png" />

<br />

> Repeat these steps three times for each platforms (Middle, Left, Right)
`,content:`Drag start point and end point to the array of positions (\`public Transform[] points\`)

<img src="/sources/Unity-3/PlatformsMovement_setup.png" />

<br />

> Repeat these steps three times for each platforms (Middle, Left, Right)`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-3.md"},index:74,start:87,end:96,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",raw:`
Drag start point and end point to the array of positions (\`public Transform[] points\`)

<img src="/sources/Unity-3/PlatformsMovement_setup.png" />

<br />

> Repeat these steps three times for each platforms (Middle, Left, Right)
`,content:`Drag start point and end point to the array of positions (\`public Transform[] points\`)

<img src="/sources/Unity-3/PlatformsMovement_setup.png" />

<br />

> Repeat these steps three times for each platforms (Middle, Left, Right)`,frontmatter:{},index:7,start:87,end:96},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",noteHTML:"",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:Nx,meta:{hide:!1,srcSequence:"./pages/Unity-3.md",slide:{raw:`
## Stop the Tremble of Player

TODO: Set platform as parent of player when player is standing on the platform
`,title:"Stop the Tremble of Player",level:2,content:`## Stop the Tremble of Player

TODO: Set platform as parent of player when player is standing on the platform`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-3.md"},index:75,start:97,end:102,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",raw:`
## Stop the Tremble of Player

TODO: Set platform as parent of player when player is standing on the platform
`,title:"Stop the Tremble of Player",level:2,content:`## Stop the Tremble of Player

TODO: Set platform as parent of player when player is standing on the platform`,frontmatter:{},index:8,start:97,end:102},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",noteHTML:"",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:zx,meta:{hide:!1,srcSequence:"./pages/Unity-3.md",slide:{raw:`
### Concept

1. If player collides with platform, set player's parent to platform
2. If player is moving or exit the collide, set player's parent to nothing (i.e. \`null\`)
3. Make sure the thing that trigger the collision is player instead of something else
`,title:"Concept",level:3,content:`### Concept

1. If player collides with platform, set player's parent to platform
2. If player is moving or exit the collide, set player's parent to nothing (i.e. \`null\`)
3. Make sure the thing that trigger the collision is player instead of something else`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-3.md"},index:76,start:103,end:110,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",raw:`
### Concept

1. If player collides with platform, set player's parent to platform
2. If player is moving or exit the collide, set player's parent to nothing (i.e. \`null\`)
3. Make sure the thing that trigger the collision is player instead of something else
`,title:"Concept",level:3,content:`### Concept

1. If player collides with platform, set player's parent to platform
2. If player is moving or exit the collide, set player's parent to nothing (i.e. \`null\`)
3. Make sure the thing that trigger the collision is player instead of something else`,frontmatter:{},index:9,start:103,end:110},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",noteHTML:"",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:Xx,meta:{hide:!1,srcSequence:"./pages/Unity-3.md",slide:{raw:`
1. If player collides with platform, set player's parent to platform

\`\`\`csharp
private void OnTriggerStay2D(Collider2D collision) {
    if(collision.tag == "Player") { // Make sure the object collide is \`Player\`
        collision.transform.SetParent(this.transform);
    }

    if (isMoving()) collision.transform.SetParent(null); // If moving, set parent to \`null\`
}
\`\`\`

2. If player is moving or exit the collide, set player's parent to nothing (i.e. \`null\`)

\`\`\`csharp
[SerializeField] private PlayerController playerController; // Remember to set the variable to access the PlayerController.
public bool isMoving() { // Check if the player is moving
    // return playerController.getHorizontal() != 0 ? true : false;
    if(playerController.getHorizontal() == 0) return false;
    return true;
}

// From \`if (isMoving()) collision.transform.SetParent(null);\`
\`\`\`
`,content:`1. If player collides with platform, set player's parent to platform

\`\`\`csharp
private void OnTriggerStay2D(Collider2D collision) {
    if(collision.tag == "Player") { // Make sure the object collide is \`Player\`
        collision.transform.SetParent(this.transform);
    }

    if (isMoving()) collision.transform.SetParent(null); // If moving, set parent to \`null\`
}
\`\`\`

2. If player is moving or exit the collide, set player's parent to nothing (i.e. \`null\`)

\`\`\`csharp
[SerializeField] private PlayerController playerController; // Remember to set the variable to access the PlayerController.
public bool isMoving() { // Check if the player is moving
    // return playerController.getHorizontal() != 0 ? true : false;
    if(playerController.getHorizontal() == 0) return false;
    return true;
}

// From \`if (isMoving()) collision.transform.SetParent(null);\`
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Unity-3.md"},index:77,start:111,end:137,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",raw:`
1. If player collides with platform, set player's parent to platform

\`\`\`csharp
private void OnTriggerStay2D(Collider2D collision) {
    if(collision.tag == "Player") { // Make sure the object collide is \`Player\`
        collision.transform.SetParent(this.transform);
    }

    if (isMoving()) collision.transform.SetParent(null); // If moving, set parent to \`null\`
}
\`\`\`

2. If player is moving or exit the collide, set player's parent to nothing (i.e. \`null\`)

\`\`\`csharp
[SerializeField] private PlayerController playerController; // Remember to set the variable to access the PlayerController.
public bool isMoving() { // Check if the player is moving
    // return playerController.getHorizontal() != 0 ? true : false;
    if(playerController.getHorizontal() == 0) return false;
    return true;
}

// From \`if (isMoving()) collision.transform.SetParent(null);\`
\`\`\`
`,content:`1. If player collides with platform, set player's parent to platform

\`\`\`csharp
private void OnTriggerStay2D(Collider2D collision) {
    if(collision.tag == "Player") { // Make sure the object collide is \`Player\`
        collision.transform.SetParent(this.transform);
    }

    if (isMoving()) collision.transform.SetParent(null); // If moving, set parent to \`null\`
}
\`\`\`

2. If player is moving or exit the collide, set player's parent to nothing (i.e. \`null\`)

\`\`\`csharp
[SerializeField] private PlayerController playerController; // Remember to set the variable to access the PlayerController.
public bool isMoving() { // Check if the player is moving
    // return playerController.getHorizontal() != 0 ? true : false;
    if(playerController.getHorizontal() == 0) return false;
    return true;
}

// From \`if (isMoving()) collision.transform.SetParent(null);\`
\`\`\``,frontmatter:{},index:10,start:111,end:137},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",noteHTML:"",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:sE,meta:{hide:!1,srcSequence:"./pages/Unity-3.md",slide:{raw:`
3. Make sure the thing that trigger the collision is player instead of something else

\`\`\`csharp{all|8,16}
public bool isMoving() { // Check if the player is moving
    // return playerController.getHorizontal() != 0 ? true : false;
    if(playerController.getHorizontal() == 0) return false; // If speed of player is 0
    return true;
}

private void OnTriggerStay2D(Collider2D collision) {
    if(collision.tag == "Player") {
        collision.transform.SetParent(this.transform);
    }

    if (isMoving()) collision.transform.SetParent(null);
}

private void OnTriggerExit2D(Collider2D collision) {
    if (collision.tag == "Player") collision.transform.SetParent(null);
}
\`\`\`
`,content:`3. Make sure the thing that trigger the collision is player instead of something else

\`\`\`csharp{all|8,16}
public bool isMoving() { // Check if the player is moving
    // return playerController.getHorizontal() != 0 ? true : false;
    if(playerController.getHorizontal() == 0) return false; // If speed of player is 0
    return true;
}

private void OnTriggerStay2D(Collider2D collision) {
    if(collision.tag == "Player") {
        collision.transform.SetParent(this.transform);
    }

    if (isMoving()) collision.transform.SetParent(null);
}

private void OnTriggerExit2D(Collider2D collision) {
    if (collision.tag == "Player") collision.transform.SetParent(null);
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Unity-3.md"},index:78,start:138,end:161,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",raw:`
3. Make sure the thing that trigger the collision is player instead of something else

\`\`\`csharp{all|8,16}
public bool isMoving() { // Check if the player is moving
    // return playerController.getHorizontal() != 0 ? true : false;
    if(playerController.getHorizontal() == 0) return false; // If speed of player is 0
    return true;
}

private void OnTriggerStay2D(Collider2D collision) {
    if(collision.tag == "Player") {
        collision.transform.SetParent(this.transform);
    }

    if (isMoving()) collision.transform.SetParent(null);
}

private void OnTriggerExit2D(Collider2D collision) {
    if (collision.tag == "Player") collision.transform.SetParent(null);
}
\`\`\`
`,content:`3. Make sure the thing that trigger the collision is player instead of something else

\`\`\`csharp{all|8,16}
public bool isMoving() { // Check if the player is moving
    // return playerController.getHorizontal() != 0 ? true : false;
    if(playerController.getHorizontal() == 0) return false; // If speed of player is 0
    return true;
}

private void OnTriggerStay2D(Collider2D collision) {
    if(collision.tag == "Player") {
        collision.transform.SetParent(this.transform);
    }

    if (isMoving()) collision.transform.SetParent(null);
}

private void OnTriggerExit2D(Collider2D collision) {
    if (collision.tag == "Player") collision.transform.SetParent(null);
}
\`\`\``,frontmatter:{},index:11,start:138,end:161},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",noteHTML:"",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:aE,meta:{hide:!1,srcSequence:"./pages/Unity-3.md",slide:{raw:`
At *\`Playcontroller\`* script, add a public function for checking if player is moving

\`\`\`csharp{all|1|all}
// PlayerController.cs
public float getHorizontal() {
    return horizontal;
}
\`\`\`
`,content:"At *`Playcontroller`* script, add a public function for checking if player is moving\n\n```csharp{all|1|all}\n// PlayerController.cs\npublic float getHorizontal() {\n    return horizontal;\n}\n```",frontmatter:{hide:!1,srcSequence:"./pages/Unity-3.md"},index:79,start:162,end:172,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",raw:`
At *\`Playcontroller\`* script, add a public function for checking if player is moving

\`\`\`csharp{all|1|all}
// PlayerController.cs
public float getHorizontal() {
    return horizontal;
}
\`\`\`
`,content:"At *`Playcontroller`* script, add a public function for checking if player is moving\n\n```csharp{all|1|all}\n// PlayerController.cs\npublic float getHorizontal() {\n    return horizontal;\n}\n```",frontmatter:{},index:12,start:162,end:172},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",noteHTML:"",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:uE,meta:{hide:!1,srcSequence:"./pages/Unity-3.md",slide:{raw:`
### Setup from Unity Editor

1. Add player tag
2. Set player for platform
3. Add Rigidbody 2D for triggering collision
`,title:"Setup from Unity Editor",level:3,content:`### Setup from Unity Editor

1. Add player tag
2. Set player for platform
3. Add Rigidbody 2D for triggering collision`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-3.md"},index:80,start:173,end:180,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",raw:`
### Setup from Unity Editor

1. Add player tag
2. Set player for platform
3. Add Rigidbody 2D for triggering collision
`,title:"Setup from Unity Editor",level:3,content:`### Setup from Unity Editor

1. Add player tag
2. Set player for platform
3. Add Rigidbody 2D for triggering collision`,frontmatter:{},index:13,start:173,end:180},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",noteHTML:"",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:_E,meta:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-3.md",slide:{raw:`---
layout: two-cols
---

Add player tag for player

<img src="/sources/Unity-3/Player_tag.png" style="height:30%" />

::right::

Set \`player\` for platform

<img src="/sources/Unity-3/Player_for_platform.png" style="height:40%" />
`,content:`Add player tag for player

<img src="/sources/Unity-3/Player_tag.png" style="height:30%" />

::right::

Set \`player\` for platform

<img src="/sources/Unity-3/Player_for_platform.png" style="height:40%" />`,frontmatter:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-3.md"},index:81,start:180,end:194,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",raw:`---
layout: two-cols
---

Add player tag for player

<img src="/sources/Unity-3/Player_tag.png" style="height:30%" />

::right::

Set \`player\` for platform

<img src="/sources/Unity-3/Player_for_platform.png" style="height:40%" />
`,content:`Add player tag for player

<img src="/sources/Unity-3/Player_tag.png" style="height:30%" />

::right::

Set \`player\` for platform

<img src="/sources/Unity-3/Player_for_platform.png" style="height:40%" />`,frontmatter:{layout:"two-cols"},index:14,start:180,end:194},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",noteHTML:"",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:wE,meta:{hide:!1,srcSequence:"./pages/Unity-3.md",slide:{raw:`
After adding player tag, we need to add a \`Box Collider 2D\` for triggering the collision. (After adding, platform will have *two* box collider)

<img src="/sources/Unity-3/Trigger_box_collider.png" style="height:60%" />

> Check the \`Is Trigger\` box

Finally, do the same thing for the other platforms.
`,content:`After adding player tag, we need to add a \`Box Collider 2D\` for triggering the collision. (After adding, platform will have *two* box collider)

<img src="/sources/Unity-3/Trigger_box_collider.png" style="height:60%" />

> Check the \`Is Trigger\` box

Finally, do the same thing for the other platforms.`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-3.md"},index:82,start:195,end:204,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",raw:`
After adding player tag, we need to add a \`Box Collider 2D\` for triggering the collision. (After adding, platform will have *two* box collider)

<img src="/sources/Unity-3/Trigger_box_collider.png" style="height:60%" />

> Check the \`Is Trigger\` box

Finally, do the same thing for the other platforms.
`,content:`After adding player tag, we need to add a \`Box Collider 2D\` for triggering the collision. (After adding, platform will have *two* box collider)

<img src="/sources/Unity-3/Trigger_box_collider.png" style="height:60%" />

> Check the \`Is Trigger\` box

Finally, do the same thing for the other platforms.`,frontmatter:{},index:15,start:195,end:204},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-3.md",noteHTML:"",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:EE,meta:{layout:"center",title:"Unity - 4 ObjectFalling Script",hide:!1,srcSequence:"./pages/Unity-4.md",slide:{raw:null,title:"Unity - 4 ObjectFalling Script",level:1,content:`# Unity - 4 ObjectFalling Script

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{layout:"center",title:"Unity - 4 ObjectFalling Script",hide:!1,srcSequence:"./pages/Unity-4.md"},index:83,start:0,end:8,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",raw:`---
layout: center
---

# Unity - 4 ObjectFalling Script

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />
`,title:"Unity - 4 ObjectFalling Script",level:1,content:`# Unity - 4 ObjectFalling Script

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{layout:"center",title:"Unity - 4 ObjectFalling Script"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/Unity-4.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:8,start:67,end:72},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",noteHTML:"",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:$E,meta:{hide:!1,srcSequence:"./pages/Unity-4.md",slide:{raw:"\n## ObjectFalling and GameManager\n\n1. Create a prefab `triangle`\n2. Create two scripts, `ObjectFalling` and `GameManager`\n",title:"ObjectFalling and GameManager",level:2,content:"## ObjectFalling and GameManager\n\n1. Create a prefab `triangle`\n2. Create two scripts, `ObjectFalling` and `GameManager`",frontmatter:{hide:!1,srcSequence:"./pages/Unity-4.md"},index:84,start:9,end:15,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",raw:"\n## ObjectFalling and GameManager\n\n1. Create a prefab `triangle`\n2. Create two scripts, `ObjectFalling` and `GameManager`\n",title:"ObjectFalling and GameManager",level:2,content:"## ObjectFalling and GameManager\n\n1. Create a prefab `triangle`\n2. Create two scripts, `ObjectFalling` and `GameManager`",frontmatter:{},index:1,start:9,end:15},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",noteHTML:"",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:qE,meta:{hide:!1,srcSequence:"./pages/Unity-4.md",slide:{raw:`
### Create Triangle Prefab

1. Create a triangle

<img src="/sources/Unity-4/Triangle.png" style="height:40%" />

2. Create a folder \`Prefabs\` under \`Assets\` and drag \`Triangle\` from Scene to Prefab folder  
    Delete the \`Triangle\` from scene

<img src="/sources/Unity-4/Triangle_prefab.png" style="height:30%" />
`,title:"Create Triangle Prefab",level:3,content:`### Create Triangle Prefab

1. Create a triangle

<img src="/sources/Unity-4/Triangle.png" style="height:40%" />

2. Create a folder \`Prefabs\` under \`Assets\` and drag \`Triangle\` from Scene to Prefab folder  
    Delete the \`Triangle\` from scene

<img src="/sources/Unity-4/Triangle_prefab.png" style="height:30%" />`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-4.md"},index:85,start:16,end:28,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",raw:`
### Create Triangle Prefab

1. Create a triangle

<img src="/sources/Unity-4/Triangle.png" style="height:40%" />

2. Create a folder \`Prefabs\` under \`Assets\` and drag \`Triangle\` from Scene to Prefab folder  
    Delete the \`Triangle\` from scene

<img src="/sources/Unity-4/Triangle_prefab.png" style="height:30%" />
`,title:"Create Triangle Prefab",level:3,content:`### Create Triangle Prefab

1. Create a triangle

<img src="/sources/Unity-4/Triangle.png" style="height:40%" />

2. Create a folder \`Prefabs\` under \`Assets\` and drag \`Triangle\` from Scene to Prefab folder  
    Delete the \`Triangle\` from scene

<img src="/sources/Unity-4/Triangle_prefab.png" style="height:30%" />`,frontmatter:{},index:2,start:16,end:28},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",noteHTML:"",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:zE,meta:{hide:!1,srcSequence:"./pages/Unity-4.md",slide:{raw:'\n3. Give triangle `RigidBody 2D` and `Box Collider 2D` (Set triangle\'s `Box Collider 2D`\'s `Is Trigger` to true)\n\n<img src="/sources/Unity-4/Is_trigger.png" style="height:70%" />\n',content:'3. Give triangle `RigidBody 2D` and `Box Collider 2D` (Set triangle\'s `Box Collider 2D`\'s `Is Trigger` to true)\n\n<img src="/sources/Unity-4/Is_trigger.png" style="height:70%" />',frontmatter:{hide:!1,srcSequence:"./pages/Unity-4.md"},index:86,start:29,end:34,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",raw:'\n3. Give triangle `RigidBody 2D` and `Box Collider 2D` (Set triangle\'s `Box Collider 2D`\'s `Is Trigger` to true)\n\n<img src="/sources/Unity-4/Is_trigger.png" style="height:70%" />\n',content:'3. Give triangle `RigidBody 2D` and `Box Collider 2D` (Set triangle\'s `Box Collider 2D`\'s `Is Trigger` to true)\n\n<img src="/sources/Unity-4/Is_trigger.png" style="height:70%" />',frontmatter:{},index:3,start:29,end:34},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",noteHTML:"",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:QE,meta:{hide:!1,srcSequence:"./pages/Unity-4.md",slide:{raw:`
4. Add \`Spawned\` tag to triangle

<img src="/sources/Unity-4/Add_tag.png" style="height:70%" />
`,content:'4. Add `Spawned` tag to triangle\n\n<img src="/sources/Unity-4/Add_tag.png" style="height:70%" />',frontmatter:{hide:!1,srcSequence:"./pages/Unity-4.md"},index:87,start:35,end:40,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",raw:`
4. Add \`Spawned\` tag to triangle

<img src="/sources/Unity-4/Add_tag.png" style="height:70%" />
`,content:'4. Add `Spawned` tag to triangle\n\n<img src="/sources/Unity-4/Add_tag.png" style="height:70%" />',frontmatter:{},index:4,start:35,end:40},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",noteHTML:"",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",name:"page-89",component:sF,meta:{hide:!1,srcSequence:"./pages/Unity-4.md",slide:{raw:`
Add tag example

<img src="/sources/Unity-4/Spawned.png" />
`,content:`Add tag example

<img src="/sources/Unity-4/Spawned.png" />`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-4.md"},index:88,start:41,end:46,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",raw:`
Add tag example

<img src="/sources/Unity-4/Spawned.png" />
`,content:`Add tag example

<img src="/sources/Unity-4/Spawned.png" />`,frontmatter:{},index:5,start:41,end:46},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",noteHTML:"",id:88,no:89},__clicksElements:[],__preloaded:!1}},{path:"90",name:"page-90",component:cF,meta:{hide:!1,srcSequence:"./pages/Unity-4.md",slide:{raw:`
### Create the Two Scripts

Create and double click the two scripts

<img src="/sources/Unity-4/Two_scripts.png" style="height:40%" />
`,title:"Create the Two Scripts",level:3,content:`### Create the Two Scripts

Create and double click the two scripts

<img src="/sources/Unity-4/Two_scripts.png" style="height:40%" />`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-4.md"},index:89,start:47,end:54,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",raw:`
### Create the Two Scripts

Create and double click the two scripts

<img src="/sources/Unity-4/Two_scripts.png" style="height:40%" />
`,title:"Create the Two Scripts",level:3,content:`### Create the Two Scripts

Create and double click the two scripts

<img src="/sources/Unity-4/Two_scripts.png" style="height:40%" />`,frontmatter:{},index:6,start:47,end:54},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",noteHTML:"",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",name:"page-91",component:mF,meta:{hide:!1,srcSequence:"./pages/Unity-4.md",slide:{raw:`
## ObjectFalling

Setup our variables

\`\`\`csharp
// ObjectFalling.cs
[SerializeField] private GameManager gameManager;
[SerializeField] private GameObject triangle;   // The dropping triangle
[SerializeField] private float left, right, up; // Setting the range that the triangles generate
[SerializeField] private float spawningPeriod;  // Spawning period
[SerializeField] private float buttom;          // Buttom of the camera field
private float timer;
\`\`\`

Create the triangle object instances

\`\`\`csharp
// ObjectFalling.cs
private void object_Instantiate(GameObject thing) {
    Vector3 position = new Vector3(Random.Range(left, right), up, 0f);
    Quaternion quaternion = Quaternion.Euler(0, 0, Random.Range(0, 360));
    Instantiate(thing, position, quaternion ); // Instantiate(要複製的東西, 要複製得座標, 複製物的旋轉)
}
\`\`\`
`,title:"ObjectFalling",level:2,content:`## ObjectFalling

Setup our variables

\`\`\`csharp
// ObjectFalling.cs
[SerializeField] private GameManager gameManager;
[SerializeField] private GameObject triangle;   // The dropping triangle
[SerializeField] private float left, right, up; // Setting the range that the triangles generate
[SerializeField] private float spawningPeriod;  // Spawning period
[SerializeField] private float buttom;          // Buttom of the camera field
private float timer;
\`\`\`

Create the triangle object instances

\`\`\`csharp
// ObjectFalling.cs
private void object_Instantiate(GameObject thing) {
    Vector3 position = new Vector3(Random.Range(left, right), up, 0f);
    Quaternion quaternion = Quaternion.Euler(0, 0, Random.Range(0, 360));
    Instantiate(thing, position, quaternion ); // Instantiate(要複製的東西, 要複製得座標, 複製物的旋轉)
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Unity-4.md"},index:90,start:55,end:81,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",raw:`
## ObjectFalling

Setup our variables

\`\`\`csharp
// ObjectFalling.cs
[SerializeField] private GameManager gameManager;
[SerializeField] private GameObject triangle;   // The dropping triangle
[SerializeField] private float left, right, up; // Setting the range that the triangles generate
[SerializeField] private float spawningPeriod;  // Spawning period
[SerializeField] private float buttom;          // Buttom of the camera field
private float timer;
\`\`\`

Create the triangle object instances

\`\`\`csharp
// ObjectFalling.cs
private void object_Instantiate(GameObject thing) {
    Vector3 position = new Vector3(Random.Range(left, right), up, 0f);
    Quaternion quaternion = Quaternion.Euler(0, 0, Random.Range(0, 360));
    Instantiate(thing, position, quaternion ); // Instantiate(要複製的東西, 要複製得座標, 複製物的旋轉)
}
\`\`\`
`,title:"ObjectFalling",level:2,content:`## ObjectFalling

Setup our variables

\`\`\`csharp
// ObjectFalling.cs
[SerializeField] private GameManager gameManager;
[SerializeField] private GameObject triangle;   // The dropping triangle
[SerializeField] private float left, right, up; // Setting the range that the triangles generate
[SerializeField] private float spawningPeriod;  // Spawning period
[SerializeField] private float buttom;          // Buttom of the camera field
private float timer;
\`\`\`

Create the triangle object instances

\`\`\`csharp
// ObjectFalling.cs
private void object_Instantiate(GameObject thing) {
    Vector3 position = new Vector3(Random.Range(left, right), up, 0f);
    Quaternion quaternion = Quaternion.Euler(0, 0, Random.Range(0, 360));
    Instantiate(thing, position, quaternion ); // Instantiate(要複製的東西, 要複製得座標, 複製物的旋轉)
}
\`\`\``,frontmatter:{},index:7,start:55,end:81},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",noteHTML:"",id:90,no:91},__clicksElements:[],__preloaded:!1}},{path:"92",name:"page-92",component:AF,meta:{hide:!1,srcSequence:"./pages/Unity-4.md",slide:{raw:`
If spawned object is out of range, destroy it.

\`\`\`csharp
// ObjectFalling.cs
private void FixedUpdate() {
    foreach (GameObject spawnedObject in GameObject.FindGameObjectsWithTag("Spawned")) {
        if (spawnedObject.transform.position.y < buttom ) {
            Destroy(spawnedObject);
        }
    }
}
\`\`\`
`,content:`If spawned object is out of range, destroy it.

\`\`\`csharp
// ObjectFalling.cs
private void FixedUpdate() {
    foreach (GameObject spawnedObject in GameObject.FindGameObjectsWithTag("Spawned")) {
        if (spawnedObject.transform.position.y < buttom ) {
            Destroy(spawnedObject);
        }
    }
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Unity-4.md"},index:91,start:82,end:96,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",raw:`
If spawned object is out of range, destroy it.

\`\`\`csharp
// ObjectFalling.cs
private void FixedUpdate() {
    foreach (GameObject spawnedObject in GameObject.FindGameObjectsWithTag("Spawned")) {
        if (spawnedObject.transform.position.y < buttom ) {
            Destroy(spawnedObject);
        }
    }
}
\`\`\`
`,content:`If spawned object is out of range, destroy it.

\`\`\`csharp
// ObjectFalling.cs
private void FixedUpdate() {
    foreach (GameObject spawnedObject in GameObject.FindGameObjectsWithTag("Spawned")) {
        if (spawnedObject.transform.position.y < buttom ) {
            Destroy(spawnedObject);
        }
    }
}
\`\`\``,frontmatter:{},index:8,start:82,end:96},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",noteHTML:"",id:91,no:92},__clicksElements:[],__preloaded:!1}},{path:"93",name:"page-93",component:xF,meta:{hide:!1,srcSequence:"./pages/Unity-4.md",slide:{raw:`
Setup a boolean to check if game is ended

> \`GameManager.cs\`

\`\`\`csharp
// GameManager.cs
public bool isGameover;
\`\`\`

<br />

> \`ObjectFalling.cs\`
\`\`\`csharp
// ObjectFalling.cs
void Update()
{
    if(gameManager.isGameover == false) {   // If game isn't over
        timer += Time.deltaTime;
        if (timer >= spawningPeriod) {      // Generate a new triangle
            object_Instantiate(triangle);
            timer = 0f;
        }
    }
        
}
\`\`\`
`,content:`Setup a boolean to check if game is ended

> \`GameManager.cs\`

\`\`\`csharp
// GameManager.cs
public bool isGameover;
\`\`\`

<br />

> \`ObjectFalling.cs\`
\`\`\`csharp
// ObjectFalling.cs
void Update()
{
    if(gameManager.isGameover == false) {   // If game isn't over
        timer += Time.deltaTime;
        if (timer >= spawningPeriod) {      // Generate a new triangle
            object_Instantiate(triangle);
            timer = 0f;
        }
    }
        
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Unity-4.md"},index:92,start:97,end:125,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",raw:`
Setup a boolean to check if game is ended

> \`GameManager.cs\`

\`\`\`csharp
// GameManager.cs
public bool isGameover;
\`\`\`

<br />

> \`ObjectFalling.cs\`
\`\`\`csharp
// ObjectFalling.cs
void Update()
{
    if(gameManager.isGameover == false) {   // If game isn't over
        timer += Time.deltaTime;
        if (timer >= spawningPeriod) {      // Generate a new triangle
            object_Instantiate(triangle);
            timer = 0f;
        }
    }
        
}
\`\`\`
`,content:`Setup a boolean to check if game is ended

> \`GameManager.cs\`

\`\`\`csharp
// GameManager.cs
public bool isGameover;
\`\`\`

<br />

> \`ObjectFalling.cs\`
\`\`\`csharp
// ObjectFalling.cs
void Update()
{
    if(gameManager.isGameover == false) {   // If game isn't over
        timer += Time.deltaTime;
        if (timer >= spawningPeriod) {      // Generate a new triangle
            object_Instantiate(triangle);
            timer = 0f;
        }
    }
        
}
\`\`\``,frontmatter:{},index:9,start:97,end:125},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",noteHTML:"",id:92,no:93},__clicksElements:[],__preloaded:!1}},{path:"94",name:"page-94",component:IF,meta:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-4.md",slide:{raw:`---
layout: two-cols
---

Create two empty, \`Object Manager\` and \`Game Manager\`

<img src="/sources/Unity-4/Create_empty.png" style="height:300pt" />

::right::

Drag \`ObjectFalling\` script to \`Object Manager\`, drag \`GameManager\` script to \`Game Manager\`.

<img src="/sources/Unity-4/Object_manager.png" style="height:190pt" />
`,content:'Create two empty, `Object Manager` and `Game Manager`\n\n<img src="/sources/Unity-4/Create_empty.png" style="height:300pt" />\n\n::right::\n\nDrag `ObjectFalling` script to `Object Manager`, drag `GameManager` script to `Game Manager`.\n\n<img src="/sources/Unity-4/Object_manager.png" style="height:190pt" />',frontmatter:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-4.md"},index:93,start:125,end:139,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",raw:`---
layout: two-cols
---

Create two empty, \`Object Manager\` and \`Game Manager\`

<img src="/sources/Unity-4/Create_empty.png" style="height:300pt" />

::right::

Drag \`ObjectFalling\` script to \`Object Manager\`, drag \`GameManager\` script to \`Game Manager\`.

<img src="/sources/Unity-4/Object_manager.png" style="height:190pt" />
`,content:'Create two empty, `Object Manager` and `Game Manager`\n\n<img src="/sources/Unity-4/Create_empty.png" style="height:300pt" />\n\n::right::\n\nDrag `ObjectFalling` script to `Object Manager`, drag `GameManager` script to `Game Manager`.\n\n<img src="/sources/Unity-4/Object_manager.png" style="height:190pt" />',frontmatter:{layout:"two-cols"},index:10,start:125,end:139},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",noteHTML:"",id:93,no:94},__clicksElements:[],__preloaded:!1}},{path:"95",name:"page-95",component:RF,meta:{hide:!1,srcSequence:"./pages/Unity-4.md",slide:{raw:`
|Script variables|GameObject|
|-|-|
|Game Manager| Game Manager|
|Triangle|Triangle from \`Prefabs\` folder|
|Left|-8.2|
|Right|8.2|
|Up|5|
|Spawning Period|0.2|
|Buttom|-5|
`,content:`|Script variables|GameObject|
|-|-|
|Game Manager| Game Manager|
|Triangle|Triangle from \`Prefabs\` folder|
|Left|-8.2|
|Right|8.2|
|Up|5|
|Spawning Period|0.2|
|Buttom|-5|`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-4.md"},index:94,start:140,end:151,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",raw:`
|Script variables|GameObject|
|-|-|
|Game Manager| Game Manager|
|Triangle|Triangle from \`Prefabs\` folder|
|Left|-8.2|
|Right|8.2|
|Up|5|
|Spawning Period|0.2|
|Buttom|-5|
`,content:`|Script variables|GameObject|
|-|-|
|Game Manager| Game Manager|
|Triangle|Triangle from \`Prefabs\` folder|
|Left|-8.2|
|Right|8.2|
|Up|5|
|Spawning Period|0.2|
|Buttom|-5|`,frontmatter:{},index:11,start:140,end:151},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-4.md",noteHTML:"",id:94,no:95},__clicksElements:[],__preloaded:!1}},{path:"96",name:"page-96",component:qF,meta:{layout:"center",title:"Unity - 5 UI & UX",hide:!1,srcSequence:"./pages/Unity-5.md",slide:{raw:null,title:"Unity - 5 UI & UX",level:1,content:`# Unity - 5 UI & UX

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{layout:"center",title:"Unity - 5 UI & UX",hide:!1,srcSequence:"./pages/Unity-5.md"},index:95,start:0,end:8,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",raw:`---
layout: center
---

# Unity - 5 UI & UX

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />
`,title:"Unity - 5 UI & UX",level:1,content:`# Unity - 5 UI & UX

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{layout:"center",title:"Unity - 5 UI & UX"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/Unity-5.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:9,start:72,end:77},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",noteHTML:"",id:95,no:96},__clicksElements:[],__preloaded:!1}},{path:"97",name:"page-97",component:KF,meta:{hide:!1,srcSequence:"./pages/Unity-5.md",slide:{raw:`
## Create a Canvas for our UI

<br />

<img src="/sources/Unity-5/Canvas.png" style="height:70%" />
`,title:"Create a Canvas for our UI",level:2,content:`## Create a Canvas for our UI

<br />

<img src="/sources/Unity-5/Canvas.png" style="height:70%" />`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-5.md"},index:96,start:9,end:16,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",raw:`
## Create a Canvas for our UI

<br />

<img src="/sources/Unity-5/Canvas.png" style="height:70%" />
`,title:"Create a Canvas for our UI",level:2,content:`## Create a Canvas for our UI

<br />

<img src="/sources/Unity-5/Canvas.png" style="height:70%" />`,frontmatter:{},index:1,start:9,end:16},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",noteHTML:"",id:96,no:97},__clicksElements:[],__preloaded:!1}},{path:"98",name:"page-98",component:tP,meta:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-5.md",slide:{raw:`---
layout: two-cols
---

Create a \`Raw Image\` and rename to \`Scoreboard background\`

<img src="/sources/Unity-5/Scoreboard_background.png" style="width:70%" />

::right::

Create a \`Text - TextMeshPro\` and rename to \`Score Text\`

<img src="/sources/Unity-5/Score_text.png" style="width:70%" />
`,content:'Create a `Raw Image` and rename to `Scoreboard background`\n\n<img src="/sources/Unity-5/Scoreboard_background.png" style="width:70%" />\n\n::right::\n\nCreate a `Text - TextMeshPro` and rename to `Score Text`\n\n<img src="/sources/Unity-5/Score_text.png" style="width:70%" />',frontmatter:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-5.md"},index:97,start:16,end:30,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",raw:`---
layout: two-cols
---

Create a \`Raw Image\` and rename to \`Scoreboard background\`

<img src="/sources/Unity-5/Scoreboard_background.png" style="width:70%" />

::right::

Create a \`Text - TextMeshPro\` and rename to \`Score Text\`

<img src="/sources/Unity-5/Score_text.png" style="width:70%" />
`,content:'Create a `Raw Image` and rename to `Scoreboard background`\n\n<img src="/sources/Unity-5/Scoreboard_background.png" style="width:70%" />\n\n::right::\n\nCreate a `Text - TextMeshPro` and rename to `Score Text`\n\n<img src="/sources/Unity-5/Score_text.png" style="width:70%" />',frontmatter:{layout:"two-cols"},index:2,start:16,end:30},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",noteHTML:"",id:97,no:98},__clicksElements:[],__preloaded:!1}},{path:"99",name:"page-99",component:aP,meta:{hide:!1,srcSequence:"./pages/Unity-5.md",slide:{raw:`
Import TMP Essentials if this window pops up

<img src="/sources/Unity-5/Tmp_import.png" style="width:50%" />
`,content:`Import TMP Essentials if this window pops up

<img src="/sources/Unity-5/Tmp_import.png" style="width:50%" />`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-5.md"},index:98,start:31,end:36,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",raw:`
Import TMP Essentials if this window pops up

<img src="/sources/Unity-5/Tmp_import.png" style="width:50%" />
`,content:`Import TMP Essentials if this window pops up

<img src="/sources/Unity-5/Tmp_import.png" style="width:50%" />`,frontmatter:{},index:3,start:31,end:36},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",noteHTML:"",id:98,no:99},__clicksElements:[],__preloaded:!1}},{path:"100",name:"page-100",component:mP,meta:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-5.md",slide:{raw:`---
layout: two-cols
---

Move those to a place you like  

Ex:

<img src="/sources/Unity-5/Score_place_ex.png" style="width:70%" />

::right::

Remember to change the text color to black (Choose \`vertex color\`)

<img src="/sources/Unity-5/Text_color.png" style="width:70%" />
`,content:`Move those to a place you like  

Ex:

<img src="/sources/Unity-5/Score_place_ex.png" style="width:70%" />

::right::

Remember to change the text color to black (Choose \`vertex color\`)

<img src="/sources/Unity-5/Text_color.png" style="width:70%" />`,frontmatter:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-5.md"},index:99,start:36,end:52,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",raw:`---
layout: two-cols
---

Move those to a place you like  

Ex:

<img src="/sources/Unity-5/Score_place_ex.png" style="width:70%" />

::right::

Remember to change the text color to black (Choose \`vertex color\`)

<img src="/sources/Unity-5/Text_color.png" style="width:70%" />
`,content:`Move those to a place you like  

Ex:

<img src="/sources/Unity-5/Score_place_ex.png" style="width:70%" />

::right::

Remember to change the text color to black (Choose \`vertex color\`)

<img src="/sources/Unity-5/Text_color.png" style="width:70%" />`,frontmatter:{layout:"two-cols"},index:4,start:36,end:52},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",noteHTML:"",id:99,no:100},__clicksElements:[],__preloaded:!1}},{path:"101",name:"page-101",component:bP,meta:{hide:!1,srcSequence:"./pages/Unity-5.md",slide:{raw:`
## GameManager Script

To use \`TMP_Text\`, import \`TMPro\`

\`\`\`csharp
using TMPro;
\`\`\`

Setup our variables

\`\`\`csharp
private int score;      // The score we get
public bool isGameover; // This we have written in the last section
private string CurrentScoreText = "Score: ", FinalScoreText = "Final Score: ";
[SerializeField] private TMP_Text scoreboardUI;     // Score board
\`\`\`
`,title:"GameManager Script",level:2,content:'## GameManager Script\n\nTo use `TMP_Text`, import `TMPro`\n\n```csharp\nusing TMPro;\n```\n\nSetup our variables\n\n```csharp\nprivate int score;      // The score we get\npublic bool isGameover; // This we have written in the last section\nprivate string CurrentScoreText = "Score: ", FinalScoreText = "Final Score: ";\n[SerializeField] private TMP_Text scoreboardUI;     // Score board\n```',frontmatter:{hide:!1,srcSequence:"./pages/Unity-5.md"},index:100,start:53,end:71,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",raw:`
## GameManager Script

To use \`TMP_Text\`, import \`TMPro\`

\`\`\`csharp
using TMPro;
\`\`\`

Setup our variables

\`\`\`csharp
private int score;      // The score we get
public bool isGameover; // This we have written in the last section
private string CurrentScoreText = "Score: ", FinalScoreText = "Final Score: ";
[SerializeField] private TMP_Text scoreboardUI;     // Score board
\`\`\`
`,title:"GameManager Script",level:2,content:'## GameManager Script\n\nTo use `TMP_Text`, import `TMPro`\n\n```csharp\nusing TMPro;\n```\n\nSetup our variables\n\n```csharp\nprivate int score;      // The score we get\npublic bool isGameover; // This we have written in the last section\nprivate string CurrentScoreText = "Score: ", FinalScoreText = "Final Score: ";\n[SerializeField] private TMP_Text scoreboardUI;     // Score board\n```',frontmatter:{},index:5,start:53,end:71},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",noteHTML:"",id:100,no:101},__clicksElements:[],__preloaded:!1}},{path:"102",name:"page-102",component:kP,meta:{hide:!1,srcSequence:"./pages/Unity-5.md",slide:{raw:`
\`\`\`csharp
// GameManager.cs
void Start() {
    start_game(); // Call the start game function
}

void Update() {
    scoreboardUI.text = CurrentScoreText + score; // Update current score
}
\`\`\`

\`\`\`csharp
// GameManager.cs
private void start_game() {
    isGameover = false;
    score = 0;
}
\`\`\`
`,content:`\`\`\`csharp
// GameManager.cs
void Start() {
    start_game(); // Call the start game function
}

void Update() {
    scoreboardUI.text = CurrentScoreText + score; // Update current score
}
\`\`\`

\`\`\`csharp
// GameManager.cs
private void start_game() {
    isGameover = false;
    score = 0;
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Unity-5.md"},index:101,start:72,end:92,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",raw:`
\`\`\`csharp
// GameManager.cs
void Start() {
    start_game(); // Call the start game function
}

void Update() {
    scoreboardUI.text = CurrentScoreText + score; // Update current score
}
\`\`\`

\`\`\`csharp
// GameManager.cs
private void start_game() {
    isGameover = false;
    score = 0;
}
\`\`\`
`,content:`\`\`\`csharp
// GameManager.cs
void Start() {
    start_game(); // Call the start game function
}

void Update() {
    scoreboardUI.text = CurrentScoreText + score; // Update current score
}
\`\`\`

\`\`\`csharp
// GameManager.cs
private void start_game() {
    isGameover = false;
    score = 0;
}
\`\`\``,frontmatter:{},index:6,start:72,end:92},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",noteHTML:"",id:101,no:102},__clicksElements:[],__preloaded:!1}},{path:"103",name:"page-103",component:FP,meta:{hide:!1,srcSequence:"./pages/Unity-5.md",slide:{raw:`
\`\`\`csharp
// GameManager.cs
public void add_point(int points) {
    if (!isGameover) score += points; // If not game over, update the score.
}
\`\`\`
`,content:"```csharp\n// GameManager.cs\npublic void add_point(int points) {\n    if (!isGameover) score += points; // If not game over, update the score.\n}\n```",frontmatter:{hide:!1,srcSequence:"./pages/Unity-5.md"},index:102,start:93,end:101,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",raw:`
\`\`\`csharp
// GameManager.cs
public void add_point(int points) {
    if (!isGameover) score += points; // If not game over, update the score.
}
\`\`\`
`,content:"```csharp\n// GameManager.cs\npublic void add_point(int points) {\n    if (!isGameover) score += points; // If not game over, update the score.\n}\n```",frontmatter:{},index:7,start:93,end:101},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",noteHTML:"",id:102,no:103},__clicksElements:[],__preloaded:!1}},{path:"104",name:"page-104",component:UP,meta:{hide:!1,srcSequence:"./pages/Unity-5.md",slide:{raw:`
## PlayerInteract Script Integration

Create a \`PlayerInteract\` script and double click to edit

\`\`\`csharp{1|1,3|5-12}
// PlayerInteract.cs (This script will be put on \`player\`)

[SerializeField] private GameManager gameManager;

private void OnTriggerEnter2D(Collider2D other)
{
    if (other.tag == "Spawned") {
        gameManager.add_point(5);
        Debug.Log("Add Point");
        Destroy(other.gameObject);
    }
}
\`\`\`
`,title:"PlayerInteract Script Integration",level:2,content:`## PlayerInteract Script Integration

Create a \`PlayerInteract\` script and double click to edit

\`\`\`csharp{1|1,3|5-12}
// PlayerInteract.cs (This script will be put on \`player\`)

[SerializeField] private GameManager gameManager;

private void OnTriggerEnter2D(Collider2D other)
{
    if (other.tag == "Spawned") {
        gameManager.add_point(5);
        Debug.Log("Add Point");
        Destroy(other.gameObject);
    }
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Unity-5.md"},index:103,start:102,end:122,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",raw:`
## PlayerInteract Script Integration

Create a \`PlayerInteract\` script and double click to edit

\`\`\`csharp{1|1,3|5-12}
// PlayerInteract.cs (This script will be put on \`player\`)

[SerializeField] private GameManager gameManager;

private void OnTriggerEnter2D(Collider2D other)
{
    if (other.tag == "Spawned") {
        gameManager.add_point(5);
        Debug.Log("Add Point");
        Destroy(other.gameObject);
    }
}
\`\`\`
`,title:"PlayerInteract Script Integration",level:2,content:`## PlayerInteract Script Integration

Create a \`PlayerInteract\` script and double click to edit

\`\`\`csharp{1|1,3|5-12}
// PlayerInteract.cs (This script will be put on \`player\`)

[SerializeField] private GameManager gameManager;

private void OnTriggerEnter2D(Collider2D other)
{
    if (other.tag == "Spawned") {
        gameManager.add_point(5);
        Debug.Log("Add Point");
        Destroy(other.gameObject);
    }
}
\`\`\``,frontmatter:{},index:8,start:102,end:122},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",noteHTML:"",id:103,no:104},__clicksElements:[],__preloaded:!1}},{path:"105",name:"page-105",component:GP,meta:{hide:!1,srcSequence:"./pages/Unity-5.md",slide:{raw:'\nNow, go back to Unity editor, grab `Score Text` to `Scoreboard UI`\n\n<img src="/sources/Unity-5/Grab_score_text.png" />\n',content:'Now, go back to Unity editor, grab `Score Text` to `Scoreboard UI`\n\n<img src="/sources/Unity-5/Grab_score_text.png" />',frontmatter:{hide:!1,srcSequence:"./pages/Unity-5.md"},index:104,start:123,end:128,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",raw:'\nNow, go back to Unity editor, grab `Score Text` to `Scoreboard UI`\n\n<img src="/sources/Unity-5/Grab_score_text.png" />\n',content:'Now, go back to Unity editor, grab `Score Text` to `Scoreboard UI`\n\n<img src="/sources/Unity-5/Grab_score_text.png" />',frontmatter:{},index:9,start:123,end:128},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",noteHTML:"",id:104,no:105},__clicksElements:[],__preloaded:!1}},{path:"106",name:"page-106",component:WP,meta:{hide:!1,srcSequence:"./pages/Unity-5.md",slide:{raw:'\nThen, drag `PlayerInteract` to `Player` (Now player will have 2 scripts, `PlayerController` and `PlayerInteract`)  \nDrag `Game Manager` to `Game Manager`\n\n<img src="/sources/Unity-5/PlayerInteract.png" style="height:70%" />\n',content:'Then, drag `PlayerInteract` to `Player` (Now player will have 2 scripts, `PlayerController` and `PlayerInteract`)  \nDrag `Game Manager` to `Game Manager`\n\n<img src="/sources/Unity-5/PlayerInteract.png" style="height:70%" />',frontmatter:{hide:!1,srcSequence:"./pages/Unity-5.md"},index:105,start:129,end:135,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",raw:'\nThen, drag `PlayerInteract` to `Player` (Now player will have 2 scripts, `PlayerController` and `PlayerInteract`)  \nDrag `Game Manager` to `Game Manager`\n\n<img src="/sources/Unity-5/PlayerInteract.png" style="height:70%" />\n',content:'Then, drag `PlayerInteract` to `Player` (Now player will have 2 scripts, `PlayerController` and `PlayerInteract`)  \nDrag `Game Manager` to `Game Manager`\n\n<img src="/sources/Unity-5/PlayerInteract.png" style="height:70%" />',frontmatter:{},index:10,start:129,end:135},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-5.md",noteHTML:"",id:105,no:106},__clicksElements:[],__preloaded:!1}},{path:"107",name:"page-107",component:KP,meta:{layout:"center",title:"Unity - 6 - Restart",hide:!1,srcSequence:"./pages/Unity-6.md",slide:{raw:null,title:"Unity - 6 - Restart",level:1,content:`# Unity - 6 - Restart

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{layout:"center",title:"Unity - 6 - Restart",hide:!1,srcSequence:"./pages/Unity-6.md"},index:106,start:0,end:8,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",raw:`---
layout: center
---

# Unity - 6 - Restart

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />
`,title:"Unity - 6 - Restart",level:1,content:`# Unity - 6 - Restart

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{layout:"center",title:"Unity - 6 - Restart"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/Unity-6.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:10,start:77,end:82},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",noteHTML:"",id:106,no:107},__clicksElements:[],__preloaded:!1}},{path:"108",name:"page-108",component:eT,meta:{hide:!1,srcSequence:"./pages/Unity-6.md",slide:{raw:`
## Restart Panel

First, create \`Panel\` inside \`Canvas\`, this will be the panel that shows when the game ends

<img src="/sources/Unity-6/Create_panel.png" style="height:70%" />
`,title:"Restart Panel",level:2,content:'## Restart Panel\n\nFirst, create `Panel` inside `Canvas`, this will be the panel that shows when the game ends\n\n<img src="/sources/Unity-6/Create_panel.png" style="height:70%" />',frontmatter:{hide:!1,srcSequence:"./pages/Unity-6.md"},index:107,start:9,end:16,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",raw:`
## Restart Panel

First, create \`Panel\` inside \`Canvas\`, this will be the panel that shows when the game ends

<img src="/sources/Unity-6/Create_panel.png" style="height:70%" />
`,title:"Restart Panel",level:2,content:'## Restart Panel\n\nFirst, create `Panel` inside `Canvas`, this will be the panel that shows when the game ends\n\n<img src="/sources/Unity-6/Create_panel.png" style="height:70%" />',frontmatter:{},index:1,start:9,end:16},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",noteHTML:"",id:107,no:108},__clicksElements:[],__preloaded:!1}},{path:"109",name:"page-109",component:rT,meta:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-6.md",slide:{raw:`---
layout: two-cols
---

Under \`Panel\`, create three components:

1. Gameover Text (\`UI/Text - TextMashPro\`)
2. Final Score Text (\`UI/Text - TextMashPro\`)
3. Restart Button (\`UI/Button - TextMeshPro\`)

::right::

<img src="/sources/Unity-6/Restart_button.png" style="height:70%" />
`,content:'Under `Panel`, create three components:\n\n1. Gameover Text (`UI/Text - TextMashPro`)\n2. Final Score Text (`UI/Text - TextMashPro`)\n3. Restart Button (`UI/Button - TextMeshPro`)\n\n::right::\n\n<img src="/sources/Unity-6/Restart_button.png" style="height:70%" />',frontmatter:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-6.md"},index:108,start:16,end:30,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",raw:`---
layout: two-cols
---

Under \`Panel\`, create three components:

1. Gameover Text (\`UI/Text - TextMashPro\`)
2. Final Score Text (\`UI/Text - TextMashPro\`)
3. Restart Button (\`UI/Button - TextMeshPro\`)

::right::

<img src="/sources/Unity-6/Restart_button.png" style="height:70%" />
`,content:'Under `Panel`, create three components:\n\n1. Gameover Text (`UI/Text - TextMashPro`)\n2. Final Score Text (`UI/Text - TextMashPro`)\n3. Restart Button (`UI/Button - TextMeshPro`)\n\n::right::\n\n<img src="/sources/Unity-6/Restart_button.png" style="height:70%" />',frontmatter:{layout:"two-cols"},index:2,start:16,end:30},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",noteHTML:"",id:108,no:109},__clicksElements:[],__preloaded:!1}},{path:"110",name:"page-110",component:fT,meta:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-6.md",slide:{raw:`---
layout: two-cols
---

Change the text inside \`Gameover Text\`

<img src="/sources/Unity-6/Gameover_button.png" style="width:70%" />

::right::

Similarily, change the text of \`Restart Button\` to \`Restart\`

<img src="/sources/Unity-6/Restart_text.png" style="width:70%" />
`,content:`Change the text inside \`Gameover Text\`

<img src="/sources/Unity-6/Gameover_button.png" style="width:70%" />

::right::

Similarily, change the text of \`Restart Button\` to \`Restart\`

<img src="/sources/Unity-6/Restart_text.png" style="width:70%" />`,frontmatter:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-6.md"},index:109,start:30,end:44,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",raw:`---
layout: two-cols
---

Change the text inside \`Gameover Text\`

<img src="/sources/Unity-6/Gameover_button.png" style="width:70%" />

::right::

Similarily, change the text of \`Restart Button\` to \`Restart\`

<img src="/sources/Unity-6/Restart_text.png" style="width:70%" />
`,content:`Change the text inside \`Gameover Text\`

<img src="/sources/Unity-6/Gameover_button.png" style="width:70%" />

::right::

Similarily, change the text of \`Restart Button\` to \`Restart\`

<img src="/sources/Unity-6/Restart_text.png" style="width:70%" />`,frontmatter:{layout:"two-cols"},index:3,start:30,end:44},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",noteHTML:"",id:109,no:110},__clicksElements:[],__preloaded:!1}},{path:"111",name:"page-111",component:CT,meta:{hide:!1,srcSequence:"./pages/Unity-6.md",slide:{raw:`
## Fine Tuning UI - 1

Reset the three components' position
`,title:"Fine Tuning UI - 1",level:2,content:`## Fine Tuning UI - 1

Reset the three components' position`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-6.md"},index:110,start:45,end:50,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",raw:`
## Fine Tuning UI - 1

Reset the three components' position
`,title:"Fine Tuning UI - 1",level:2,content:`## Fine Tuning UI - 1

Reset the three components' position`,frontmatter:{},index:4,start:45,end:50},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",noteHTML:"",id:110,no:111},__clicksElements:[],__preloaded:!1}},{path:"112",name:"page-112",component:wT,meta:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-6.md",slide:{raw:`---
layout: two-cols
---

Before:

<img src="/sources/Unity-6/UI_tuning_before.png" style="height:40%" />


::right::

After:

<img src="/sources/Unity-6/UI_tuning_after.png" style="height:40%" />
`,content:`Before:

<img src="/sources/Unity-6/UI_tuning_before.png" style="height:40%" />


::right::

After:

<img src="/sources/Unity-6/UI_tuning_after.png" style="height:40%" />`,frontmatter:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-6.md"},index:111,start:50,end:65,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",raw:`---
layout: two-cols
---

Before:

<img src="/sources/Unity-6/UI_tuning_before.png" style="height:40%" />


::right::

After:

<img src="/sources/Unity-6/UI_tuning_after.png" style="height:40%" />
`,content:`Before:

<img src="/sources/Unity-6/UI_tuning_before.png" style="height:40%" />


::right::

After:

<img src="/sources/Unity-6/UI_tuning_after.png" style="height:40%" />`,frontmatter:{layout:"two-cols"},index:5,start:50,end:65},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",noteHTML:"",id:111,no:112},__clicksElements:[],__preloaded:!1}},{path:"113",name:"page-113",component:FT,meta:{hide:!1,srcSequence:"./pages/Unity-6.md",slide:{raw:`
## Script

\`\`\`csharp
// GameManager.cs
using UnityEngine.UI; // Import the UI toolkit for Button

// We add the following before
private int score;
public bool isGameover;
private string CurrentScoreText = "Score: ", FinalScoreText = "Final Score: ";
[SerializeField] private TMP_Text scoreboardUI;

// New variables
[SerializeField] private GameObject gameoverPage;   // The final panel
[SerializeField] private TMP_Text finalScore;       // Final score
[SerializeField] private Button restartButton;      // Restart button

\`\`\`
`,title:"Script",level:2,content:`## Script

\`\`\`csharp
// GameManager.cs
using UnityEngine.UI; // Import the UI toolkit for Button

// We add the following before
private int score;
public bool isGameover;
private string CurrentScoreText = "Score: ", FinalScoreText = "Final Score: ";
[SerializeField] private TMP_Text scoreboardUI;

// New variables
[SerializeField] private GameObject gameoverPage;   // The final panel
[SerializeField] private TMP_Text finalScore;       // Final score
[SerializeField] private Button restartButton;      // Restart button

\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Unity-6.md"},index:112,start:66,end:86,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",raw:`
## Script

\`\`\`csharp
// GameManager.cs
using UnityEngine.UI; // Import the UI toolkit for Button

// We add the following before
private int score;
public bool isGameover;
private string CurrentScoreText = "Score: ", FinalScoreText = "Final Score: ";
[SerializeField] private TMP_Text scoreboardUI;

// New variables
[SerializeField] private GameObject gameoverPage;   // The final panel
[SerializeField] private TMP_Text finalScore;       // Final score
[SerializeField] private Button restartButton;      // Restart button

\`\`\`
`,title:"Script",level:2,content:`## Script

\`\`\`csharp
// GameManager.cs
using UnityEngine.UI; // Import the UI toolkit for Button

// We add the following before
private int score;
public bool isGameover;
private string CurrentScoreText = "Score: ", FinalScoreText = "Final Score: ";
[SerializeField] private TMP_Text scoreboardUI;

// New variables
[SerializeField] private GameObject gameoverPage;   // The final panel
[SerializeField] private TMP_Text finalScore;       // Final score
[SerializeField] private Button restartButton;      // Restart button

\`\`\``,frontmatter:{},index:6,start:66,end:86},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",noteHTML:"",id:112,no:113},__clicksElements:[],__preloaded:!1}},{path:"114",name:"page-114",component:MT,meta:{hide:!1,srcSequence:"./pages/Unity-6.md",slide:{raw:`
1. Set the panel to \`non-active\` when the game start.
2. Set the panel to \`active\` when the game end.

\`\`\`csharp{all|4|8-13}
// GameManager.cs
private void start_game() {
    isGameover = false;
    gameoverPage.SetActive(false); // Set the final page to non-active when game start
    score = 0;
}

public void game_over() {
    isGameover = true; // Set isGameover to true
    finalScore.text = FinalScoreText + score; // Set up final score
    gameoverPage.SetActive(true); // Activate final panel
    restartButton.onClick.AddListener(start_game); // Listen the restart button
}
\`\`\`
`,content:`1. Set the panel to \`non-active\` when the game start.
2. Set the panel to \`active\` when the game end.

\`\`\`csharp{all|4|8-13}
// GameManager.cs
private void start_game() {
    isGameover = false;
    gameoverPage.SetActive(false); // Set the final page to non-active when game start
    score = 0;
}

public void game_over() {
    isGameover = true; // Set isGameover to true
    finalScore.text = FinalScoreText + score; // Set up final score
    gameoverPage.SetActive(true); // Activate final panel
    restartButton.onClick.AddListener(start_game); // Listen the restart button
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Unity-6.md"},index:113,start:87,end:107,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",raw:`
1. Set the panel to \`non-active\` when the game start.
2. Set the panel to \`active\` when the game end.

\`\`\`csharp{all|4|8-13}
// GameManager.cs
private void start_game() {
    isGameover = false;
    gameoverPage.SetActive(false); // Set the final page to non-active when game start
    score = 0;
}

public void game_over() {
    isGameover = true; // Set isGameover to true
    finalScore.text = FinalScoreText + score; // Set up final score
    gameoverPage.SetActive(true); // Activate final panel
    restartButton.onClick.AddListener(start_game); // Listen the restart button
}
\`\`\`
`,content:`1. Set the panel to \`non-active\` when the game start.
2. Set the panel to \`active\` when the game end.

\`\`\`csharp{all|4|8-13}
// GameManager.cs
private void start_game() {
    isGameover = false;
    gameoverPage.SetActive(false); // Set the final page to non-active when game start
    score = 0;
}

public void game_over() {
    isGameover = true; // Set isGameover to true
    finalScore.text = FinalScoreText + score; // Set up final score
    gameoverPage.SetActive(true); // Activate final panel
    restartButton.onClick.AddListener(start_game); // Listen the restart button
}
\`\`\``,frontmatter:{},index:7,start:87,end:107},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",noteHTML:"",id:113,no:114},__clicksElements:[],__preloaded:!1}},{path:"115",name:"page-115",component:LT,meta:{hide:!1,srcSequence:"./pages/Unity-6.md",slide:{raw:`
Setup the rebirth-mechanics

\`\`\`csharp{all|3|5-7|9-15}
// PlayerInteract.cs
[SerializeField] private GameManager gameManager; // We setup this before
[SerializeField] private GameObject player;

private void reset_player() {
    player.transform.position = new Vector3(0, 0, 0);
}

void Update() {
    if(player.transform.position.y < -5) { // If player dropped
        reset_player();
        gameManager.game_over();
        Debug.Log("Fall");
    }
}
\`\`\`
`,content:`Setup the rebirth-mechanics

\`\`\`csharp{all|3|5-7|9-15}
// PlayerInteract.cs
[SerializeField] private GameManager gameManager; // We setup this before
[SerializeField] private GameObject player;

private void reset_player() {
    player.transform.position = new Vector3(0, 0, 0);
}

void Update() {
    if(player.transform.position.y < -5) { // If player dropped
        reset_player();
        gameManager.game_over();
        Debug.Log("Fall");
    }
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Unity-6.md"},index:114,start:108,end:129,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",raw:`
Setup the rebirth-mechanics

\`\`\`csharp{all|3|5-7|9-15}
// PlayerInteract.cs
[SerializeField] private GameManager gameManager; // We setup this before
[SerializeField] private GameObject player;

private void reset_player() {
    player.transform.position = new Vector3(0, 0, 0);
}

void Update() {
    if(player.transform.position.y < -5) { // If player dropped
        reset_player();
        gameManager.game_over();
        Debug.Log("Fall");
    }
}
\`\`\`
`,content:`Setup the rebirth-mechanics

\`\`\`csharp{all|3|5-7|9-15}
// PlayerInteract.cs
[SerializeField] private GameManager gameManager; // We setup this before
[SerializeField] private GameObject player;

private void reset_player() {
    player.transform.position = new Vector3(0, 0, 0);
}

void Update() {
    if(player.transform.position.y < -5) { // If player dropped
        reset_player();
        gameManager.game_over();
        Debug.Log("Fall");
    }
}
\`\`\``,frontmatter:{},index:8,start:108,end:129},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",noteHTML:"",id:114,no:115},__clicksElements:[],__preloaded:!1}},{path:"116",name:"page-116",component:qT,meta:{hide:!1,srcSequence:"./pages/Unity-6.md",slide:{raw:`
Recall the integration of \`PlayerInteract\` and \`GameManager\`

\`\`\`csharp{all|3|5,10-16}
// PlayerInteract.cs
void Update() {
    if(player.transform.position.y < -5) { // If player dropped
        reset_player();
        gameManager.game_over();
        Debug.Log("Fall");
    }
}

// GameManager.cs
public void game_over() {
    isGameover = true; // Set isGameover to true
    finalScore.text = FinalScoreText + score; // Set up final score
    gameoverPage.SetActive(true); // Activate final panel
    restartButton.onClick.AddListener(start_game); // Listen the restart button
}
\`\`\`
`,content:`Recall the integration of \`PlayerInteract\` and \`GameManager\`

\`\`\`csharp{all|3|5,10-16}
// PlayerInteract.cs
void Update() {
    if(player.transform.position.y < -5) { // If player dropped
        reset_player();
        gameManager.game_over();
        Debug.Log("Fall");
    }
}

// GameManager.cs
public void game_over() {
    isGameover = true; // Set isGameover to true
    finalScore.text = FinalScoreText + score; // Set up final score
    gameoverPage.SetActive(true); // Activate final panel
    restartButton.onClick.AddListener(start_game); // Listen the restart button
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Unity-6.md"},index:115,start:130,end:152,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",raw:`
Recall the integration of \`PlayerInteract\` and \`GameManager\`

\`\`\`csharp{all|3|5,10-16}
// PlayerInteract.cs
void Update() {
    if(player.transform.position.y < -5) { // If player dropped
        reset_player();
        gameManager.game_over();
        Debug.Log("Fall");
    }
}

// GameManager.cs
public void game_over() {
    isGameover = true; // Set isGameover to true
    finalScore.text = FinalScoreText + score; // Set up final score
    gameoverPage.SetActive(true); // Activate final panel
    restartButton.onClick.AddListener(start_game); // Listen the restart button
}
\`\`\`
`,content:`Recall the integration of \`PlayerInteract\` and \`GameManager\`

\`\`\`csharp{all|3|5,10-16}
// PlayerInteract.cs
void Update() {
    if(player.transform.position.y < -5) { // If player dropped
        reset_player();
        gameManager.game_over();
        Debug.Log("Fall");
    }
}

// GameManager.cs
public void game_over() {
    isGameover = true; // Set isGameover to true
    finalScore.text = FinalScoreText + score; // Set up final score
    gameoverPage.SetActive(true); // Activate final panel
    restartButton.onClick.AddListener(start_game); // Listen the restart button
}
\`\`\``,frontmatter:{},index:9,start:130,end:152},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",noteHTML:"",id:115,no:116},__clicksElements:[],__preloaded:!1}},{path:"117",name:"page-117",component:KT,meta:{hide:!1,srcSequence:"./pages/Unity-6.md",slide:{raw:`
## Scripts Setup

Go back to Unity editor and setup player for \`PlayerInteract\`

<img src="/sources/Unity-6/Player_for_playerinteract.png" style="height:70%" />
`,title:"Scripts Setup",level:2,content:`## Scripts Setup

Go back to Unity editor and setup player for \`PlayerInteract\`

<img src="/sources/Unity-6/Player_for_playerinteract.png" style="height:70%" />`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-6.md"},index:116,start:153,end:160,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",raw:`
## Scripts Setup

Go back to Unity editor and setup player for \`PlayerInteract\`

<img src="/sources/Unity-6/Player_for_playerinteract.png" style="height:70%" />
`,title:"Scripts Setup",level:2,content:`## Scripts Setup

Go back to Unity editor and setup player for \`PlayerInteract\`

<img src="/sources/Unity-6/Player_for_playerinteract.png" style="height:70%" />`,frontmatter:{},index:10,start:153,end:160},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",noteHTML:"",id:116,no:117},__clicksElements:[],__preloaded:!1}},{path:"118",name:"page-118",component:e$,meta:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-6.md",slide:{raw:`---
layout: two-cols
---

Setup \`Panel\` and its child components for \`GameManager\`

|GameManager.cs|GameObject|
|-|-|
|Gameover page|Panel|
|Final score|Final Score Text|
|Restart Button|Restart Button|

::right::

<img src="/sources/Unity-6/Panel_for_gamemanager.png" style="width:100%" />
`,content:`Setup \`Panel\` and its child components for \`GameManager\`

|GameManager.cs|GameObject|
|-|-|
|Gameover page|Panel|
|Final score|Final Score Text|
|Restart Button|Restart Button|

::right::

<img src="/sources/Unity-6/Panel_for_gamemanager.png" style="width:100%" />`,frontmatter:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-6.md"},index:117,start:160,end:176,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",raw:`---
layout: two-cols
---

Setup \`Panel\` and its child components for \`GameManager\`

|GameManager.cs|GameObject|
|-|-|
|Gameover page|Panel|
|Final score|Final Score Text|
|Restart Button|Restart Button|

::right::

<img src="/sources/Unity-6/Panel_for_gamemanager.png" style="width:100%" />
`,content:`Setup \`Panel\` and its child components for \`GameManager\`

|GameManager.cs|GameObject|
|-|-|
|Gameover page|Panel|
|Final score|Final Score Text|
|Restart Button|Restart Button|

::right::

<img src="/sources/Unity-6/Panel_for_gamemanager.png" style="width:100%" />`,frontmatter:{layout:"two-cols"},index:11,start:160,end:176},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",noteHTML:"",id:117,no:118},__clicksElements:[],__preloaded:!1}},{path:"119",name:"page-119",component:r$,meta:{hide:!1,srcSequence:"./pages/Unity-6.md",slide:{raw:`
## Fine Tuning UI - 2

To change the background color of panel, you can select \`panel\` and change it's Image color

<img src="/sources/Unity-6/Panel_color.png" style="height:70%" />
`,title:"Fine Tuning UI - 2",level:2,content:`## Fine Tuning UI - 2

To change the background color of panel, you can select \`panel\` and change it's Image color

<img src="/sources/Unity-6/Panel_color.png" style="height:70%" />`,frontmatter:{hide:!1,srcSequence:"./pages/Unity-6.md"},index:118,start:177,end:184,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",raw:`
## Fine Tuning UI - 2

To change the background color of panel, you can select \`panel\` and change it's Image color

<img src="/sources/Unity-6/Panel_color.png" style="height:70%" />
`,title:"Fine Tuning UI - 2",level:2,content:`## Fine Tuning UI - 2

To change the background color of panel, you can select \`panel\` and change it's Image color

<img src="/sources/Unity-6/Panel_color.png" style="height:70%" />`,frontmatter:{},index:12,start:177,end:184},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",noteHTML:"",id:118,no:119},__clicksElements:[],__preloaded:!1}},{path:"120",name:"page-120",component:u$,meta:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-6.md",slide:{raw:`---
layout: two-cols
---

To change the text fonts, layout or color, choose the \`TextMeshPro\` component and edit it in the Inspector windows

::right::

<img src="/sources/Unity-6/Text_inspector.png" style="width:65%" />
`,content:`To change the text fonts, layout or color, choose the \`TextMeshPro\` component and edit it in the Inspector windows

::right::

<img src="/sources/Unity-6/Text_inspector.png" style="width:65%" />`,frontmatter:{layout:"two-cols",hide:!1,srcSequence:"./pages/Unity-6.md"},index:119,start:184,end:194,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",raw:`---
layout: two-cols
---

To change the text fonts, layout or color, choose the \`TextMeshPro\` component and edit it in the Inspector windows

::right::

<img src="/sources/Unity-6/Text_inspector.png" style="width:65%" />
`,content:`To change the text fonts, layout or color, choose the \`TextMeshPro\` component and edit it in the Inspector windows

::right::

<img src="/sources/Unity-6/Text_inspector.png" style="width:65%" />`,frontmatter:{layout:"two-cols"},index:13,start:184,end:194},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Unity-6.md",noteHTML:"",id:119,no:120},__clicksElements:[],__preloaded:!1}},{path:"121",name:"page-121",component:f$,meta:{layout:"center",title:"Deploy Our game",hide:!1,srcSequence:"./pages/Deploy.md",slide:{raw:null,title:"Deploy Our game",level:1,content:`# Deploy Our game

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{layout:"center",title:"Deploy Our game",hide:!1,srcSequence:"./pages/Deploy.md"},index:120,start:0,end:8,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",raw:`---
layout: center
---

# Deploy Our game

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />
`,title:"Deploy Our game",level:1,content:`# Deploy Our game

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{layout:"center",title:"Deploy Our game"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/Deploy.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:11,start:82,end:87},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",noteHTML:"",id:120,no:121},__clicksElements:[],__preloaded:!1}},{path:"122",name:"page-122",component:A$,meta:{hide:!1,srcSequence:"./pages/Deploy.md",slide:{raw:`
## Build Settings

1. Select \`Build Settings...\` (from \`file\`).
2. Select \`WebGL\` and switch platforms.

<img src="/sources/Deploy/Build_settings.png" style="height:80%;" />
`,title:"Build Settings",level:2,content:'## Build Settings\n\n1. Select `Build Settings...` (from `file`).\n2. Select `WebGL` and switch platforms.\n\n<img src="/sources/Deploy/Build_settings.png" style="height:80%;" />',frontmatter:{hide:!1,srcSequence:"./pages/Deploy.md"},index:121,start:9,end:17,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",raw:`
## Build Settings

1. Select \`Build Settings...\` (from \`file\`).
2. Select \`WebGL\` and switch platforms.

<img src="/sources/Deploy/Build_settings.png" style="height:80%;" />
`,title:"Build Settings",level:2,content:'## Build Settings\n\n1. Select `Build Settings...` (from `file`).\n2. Select `WebGL` and switch platforms.\n\n<img src="/sources/Deploy/Build_settings.png" style="height:80%;" />',frontmatter:{},index:1,start:9,end:17},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",noteHTML:"",id:121,no:122},__clicksElements:[],__preloaded:!1}},{path:"123",name:"page-123",component:S$,meta:{hide:!1,srcSequence:"./pages/Deploy.md",slide:{raw:`
> If you can't select \`WebGL\`, add \`WebGL Build Support\` module to your Unity editor.

<img src="/sources/Deploy/Add_modules.png" style="height:80%" />
`,content:'> If you can\'t select `WebGL`, add `WebGL Build Support` module to your Unity editor.\n\n<img src="/sources/Deploy/Add_modules.png" style="height:80%" />',frontmatter:{hide:!1,srcSequence:"./pages/Deploy.md"},index:122,start:18,end:23,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",raw:`
> If you can't select \`WebGL\`, add \`WebGL Build Support\` module to your Unity editor.

<img src="/sources/Deploy/Add_modules.png" style="height:80%" />
`,content:'> If you can\'t select `WebGL`, add `WebGL Build Support` module to your Unity editor.\n\n<img src="/sources/Deploy/Add_modules.png" style="height:80%" />',frontmatter:{},index:2,start:18,end:23},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",noteHTML:"",id:122,no:123},__clicksElements:[],__preloaded:!1}},{path:"124",name:"page-124",component:F$,meta:{hide:!1,srcSequence:"./pages/Deploy.md",slide:{raw:'\n3. Click on `Player Settings` at the left bottom of the window and open the project settings panel.\n4. Change `Player > Resolution and Presentation > Default Canvas Width/Height` to 960 * 540.\n5. Select `Player > Resolution and Presentation > WebGL Template > Minimal`.\n\n<img src="/sources/Deploy/Project_settings.png" style="height:80%" />\n',content:'3. Click on `Player Settings` at the left bottom of the window and open the project settings panel.\n4. Change `Player > Resolution and Presentation > Default Canvas Width/Height` to 960 * 540.\n5. Select `Player > Resolution and Presentation > WebGL Template > Minimal`.\n\n<img src="/sources/Deploy/Project_settings.png" style="height:80%" />',frontmatter:{hide:!1,srcSequence:"./pages/Deploy.md"},index:123,start:24,end:31,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",raw:'\n3. Click on `Player Settings` at the left bottom of the window and open the project settings panel.\n4. Change `Player > Resolution and Presentation > Default Canvas Width/Height` to 960 * 540.\n5. Select `Player > Resolution and Presentation > WebGL Template > Minimal`.\n\n<img src="/sources/Deploy/Project_settings.png" style="height:80%" />\n',content:'3. Click on `Player Settings` at the left bottom of the window and open the project settings panel.\n4. Change `Player > Resolution and Presentation > Default Canvas Width/Height` to 960 * 540.\n5. Select `Player > Resolution and Presentation > WebGL Template > Minimal`.\n\n<img src="/sources/Deploy/Project_settings.png" style="height:80%" />',frontmatter:{},index:3,start:24,end:31},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",noteHTML:"",id:123,no:124},__clicksElements:[],__preloaded:!1}},{path:"125",name:"page-125",component:U$,meta:{hide:!1,srcSequence:"./pages/Deploy.md",slide:{raw:'\n6. Change `Player > Publishing Settings > Compression Format` to `Disable`.\n\n<img src="/sources/Deploy/Publishing_settings.png" style="height:80%" />\n',content:'6. Change `Player > Publishing Settings > Compression Format` to `Disable`.\n\n<img src="/sources/Deploy/Publishing_settings.png" style="height:80%" />',frontmatter:{hide:!1,srcSequence:"./pages/Deploy.md"},index:124,start:32,end:37,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",raw:'\n6. Change `Player > Publishing Settings > Compression Format` to `Disable`.\n\n<img src="/sources/Deploy/Publishing_settings.png" style="height:80%" />\n',content:'6. Change `Player > Publishing Settings > Compression Format` to `Disable`.\n\n<img src="/sources/Deploy/Publishing_settings.png" style="height:80%" />',frontmatter:{},index:4,start:32,end:37},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",noteHTML:"",id:124,no:125},__clicksElements:[],__preloaded:!1}},{path:"126",name:"page-126",component:j$,meta:{hide:!1,srcSequence:"./pages/Deploy.md",slide:{raw:`
7. Check the scene on the upper right corner and click \`Build\`.

<img src="/sources/Deploy/Build.png" style="height:80%;" />

8. After build succeeds, compress the output folder to a \`zip\` file.
`,content:'7. Check the scene on the upper right corner and click `Build`.\n\n<img src="/sources/Deploy/Build.png" style="height:80%;" />\n\n8. After build succeeds, compress the output folder to a `zip` file.',frontmatter:{hide:!1,srcSequence:"./pages/Deploy.md"},index:125,start:38,end:45,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",raw:`
7. Check the scene on the upper right corner and click \`Build\`.

<img src="/sources/Deploy/Build.png" style="height:80%;" />

8. After build succeeds, compress the output folder to a \`zip\` file.
`,content:'7. Check the scene on the upper right corner and click `Build`.\n\n<img src="/sources/Deploy/Build.png" style="height:80%;" />\n\n8. After build succeeds, compress the output folder to a `zip` file.',frontmatter:{},index:5,start:38,end:45},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",noteHTML:"",id:125,no:126},__clicksElements:[],__preloaded:!1}},{path:"127",name:"page-127",component:K$,meta:{hide:!1,srcSequence:"./pages/Deploy.md",slide:{raw:'\n## Itch.io deploy\n\n1. Open [itch.io](https://itch.io) and create a new project.\n\n<img src="/sources/Deploy/Itchio.png" style="height:70%" />\n\n> Rename `Title` and `Classification` yourself and select `HTML` for `Kind of project`\n',title:"Itch.io deploy",level:2,content:'## Itch.io deploy\n\n1. Open [itch.io](https://itch.io) and create a new project.\n\n<img src="/sources/Deploy/Itchio.png" style="height:70%" />\n\n> Rename `Title` and `Classification` yourself and select `HTML` for `Kind of project`',frontmatter:{hide:!1,srcSequence:"./pages/Deploy.md"},index:126,start:46,end:55,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",raw:'\n## Itch.io deploy\n\n1. Open [itch.io](https://itch.io) and create a new project.\n\n<img src="/sources/Deploy/Itchio.png" style="height:70%" />\n\n> Rename `Title` and `Classification` yourself and select `HTML` for `Kind of project`\n',title:"Itch.io deploy",level:2,content:'## Itch.io deploy\n\n1. Open [itch.io](https://itch.io) and create a new project.\n\n<img src="/sources/Deploy/Itchio.png" style="height:70%" />\n\n> Rename `Title` and `Classification` yourself and select `HTML` for `Kind of project`',frontmatter:{},index:6,start:46,end:55},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",noteHTML:"",id:126,no:127},__clicksElements:[],__preloaded:!1}},{path:"128",name:"page-128",component:X$,meta:{hide:!1,srcSequence:"./pages/Deploy.md",slide:{raw:`
2. Upload the \`zip\` file we just compressed.

<img src="/sources/Deploy/Before_upload.png" style="height:80%" />
`,content:'2. Upload the `zip` file we just compressed.\n\n<img src="/sources/Deploy/Before_upload.png" style="height:80%" />',frontmatter:{hide:!1,srcSequence:"./pages/Deploy.md"},index:127,start:56,end:61,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",raw:`
2. Upload the \`zip\` file we just compressed.

<img src="/sources/Deploy/Before_upload.png" style="height:80%" />
`,content:'2. Upload the `zip` file we just compressed.\n\n<img src="/sources/Deploy/Before_upload.png" style="height:80%" />',frontmatter:{},index:7,start:56,end:61},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",noteHTML:"",id:127,no:128},__clicksElements:[],__preloaded:!1}},{path:"129",name:"page-129",component:oM,meta:{hide:!1,srcSequence:"./pages/Deploy.md",slide:{raw:`
After upload, stay with the default options.

<img src="/sources/Deploy/After_upload.png" style="height:80%" />
`,content:`After upload, stay with the default options.

<img src="/sources/Deploy/After_upload.png" style="height:80%" />`,frontmatter:{hide:!1,srcSequence:"./pages/Deploy.md"},index:128,start:62,end:67,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",raw:`
After upload, stay with the default options.

<img src="/sources/Deploy/After_upload.png" style="height:80%" />
`,content:`After upload, stay with the default options.

<img src="/sources/Deploy/After_upload.png" style="height:80%" />`,frontmatter:{},index:8,start:62,end:67},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",noteHTML:"",id:128,no:129},__clicksElements:[],__preloaded:!1}},{path:"130",name:"page-130",component:pM,meta:{hide:!1,srcSequence:"./pages/Deploy.md",slide:{raw:'\n3. For embed options, select `Embed in page, Manually set size (960 * 540)`.  \n(Select `Automatically start on page load` for Frames option)\n\n4. Complete the settings and click on `Save & view page`.\n\n> `Visibility & access` could be changed to `Public` after the first saved.\n\n<img src="/sources/Deploy/Save_n_view.png" style="height:50%" />\n',content:'3. For embed options, select `Embed in page, Manually set size (960 * 540)`.  \n(Select `Automatically start on page load` for Frames option)\n\n4. Complete the settings and click on `Save & view page`.\n\n> `Visibility & access` could be changed to `Public` after the first saved.\n\n<img src="/sources/Deploy/Save_n_view.png" style="height:50%" />',frontmatter:{hide:!1,srcSequence:"./pages/Deploy.md"},index:129,start:68,end:78,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",raw:'\n3. For embed options, select `Embed in page, Manually set size (960 * 540)`.  \n(Select `Automatically start on page load` for Frames option)\n\n4. Complete the settings and click on `Save & view page`.\n\n> `Visibility & access` could be changed to `Public` after the first saved.\n\n<img src="/sources/Deploy/Save_n_view.png" style="height:50%" />\n',content:'3. For embed options, select `Embed in page, Manually set size (960 * 540)`.  \n(Select `Automatically start on page load` for Frames option)\n\n4. Complete the settings and click on `Save & view page`.\n\n> `Visibility & access` could be changed to `Public` after the first saved.\n\n<img src="/sources/Deploy/Save_n_view.png" style="height:50%" />',frontmatter:{},index:9,start:68,end:78},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",noteHTML:"",id:129,no:130},__clicksElements:[],__preloaded:!1}},{path:"131",name:"page-131",component:hM,meta:{hide:!1,srcSequence:"./pages/Deploy.md",slide:{raw:`
## Final Product

<img src="/sources/Deploy/Final.png" style="height:80%" />
`,title:"Final Product",level:2,content:`## Final Product

<img src="/sources/Deploy/Final.png" style="height:80%" />`,frontmatter:{hide:!1,srcSequence:"./pages/Deploy.md"},index:130,start:79,end:84,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",raw:`
## Final Product

<img src="/sources/Deploy/Final.png" style="height:80%" />
`,title:"Final Product",level:2,content:`## Final Product

<img src="/sources/Deploy/Final.png" style="height:80%" />`,frontmatter:{},index:10,start:79,end:84},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Deploy.md",noteHTML:"",id:130,no:131},__clicksElements:[],__preloaded:!1}},{path:"132",name:"page-132",component:AM,meta:{title:"Resources",hide:!1,srcSequence:"./pages/Resources.md",slide:{raw:null,title:"Resources",level:1,content:`# Resources

(Click to view or download)

- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/slides-dark.pdf?raw=true" >Slides (dark)</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/slides-light.pdf?raw=true" >Slides (light)</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/GameManager.cs?raw=true" >GameManager.cs</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/ObjectFalling.cs?raw=true" >ObjectFalling.cs</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/PlatformsMovement.cs?raw=true" >PlatformsMovement.cs</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/PlayerController.cs?raw=true" >PlayerController.cs</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/PlayerInteract.cs?raw=true" >PlayerInteract.cs</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/tree/main/Assets/Scripts" >Scripts' source code</a>`,frontmatter:{title:"Resources",hide:!1,srcSequence:"./pages/Resources.md"},index:131,start:0,end:13,source:{filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Resources.md",raw:`# Resources

(Click to view or download)

- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/slides-dark.pdf?raw=true" >Slides (dark)</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/slides-light.pdf?raw=true" >Slides (light)</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/GameManager.cs?raw=true" >GameManager.cs</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/ObjectFalling.cs?raw=true" >ObjectFalling.cs</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/PlatformsMovement.cs?raw=true" >PlatformsMovement.cs</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/PlayerController.cs?raw=true" >PlayerController.cs</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/PlayerInteract.cs?raw=true" >PlayerInteract.cs</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/tree/main/Assets/Scripts" >Scripts' source code</a>
`,title:"Resources",level:1,content:`# Resources

(Click to view or download)

- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/slides-dark.pdf?raw=true" >Slides (dark)</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/slides-light.pdf?raw=true" >Slides (light)</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/GameManager.cs?raw=true" >GameManager.cs</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/ObjectFalling.cs?raw=true" >ObjectFalling.cs</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/PlatformsMovement.cs?raw=true" >PlatformsMovement.cs</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/PlayerController.cs?raw=true" >PlayerController.cs</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/blob/main/slide/sources/Resources/PlayerInteract.cs?raw=true" >PlayerInteract.cs</a>
- <a href="https://github.com/GNITOAHC/2023CSCamp/tree/main/Assets/Scripts" >Scripts' source code</a>`,frontmatter:{title:"Resources"},index:0,start:0,end:13},inline:{raw:`---
src: ./pages/Resources.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:12,start:87,end:92},filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/pages/Resources.md",noteHTML:"",id:131,no:132},__clicksElements:[],__preloaded:!1}},{path:"133",name:"page-133",component:DM,meta:{layout:"center",class:"text-center",slide:{raw:`---
layout: center
class: text-center
---

# Learn More

[Unity](https://unity.com) · [Showcases](https://unity.com/made-with-unity) · [GitHub source code](https://github.com/GNITOAHC/2023CSCamp/)
`,title:"Learn More",level:1,content:`# Learn More

[Unity](https://unity.com) · [Showcases](https://unity.com/made-with-unity) · [GitHub source code](https://github.com/GNITOAHC/2023CSCamp/)`,frontmatter:{layout:"center",class:"text-center"},index:132,start:92,end:101,noteHTML:"",filepath:"/home/runner/work/2023CSCamp/2023CSCamp/slide/slides.md",id:132,no:133},__clicksElements:[],__preloaded:!1}}],wM=[],Ye=SM,yo=[{name:"play",path:"/",component:L0,children:[...Ye,...wM]},{name:"print",path:"/print",component:uB},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let n=function(t){if(!uo.remote||uo.remote===t.query.password)return!0;if(uo.remote&&t.query.password===void 0){const s=prompt("Enter password");if(uo.remote===s)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};yo.push({path:"/presenter/print",component:()=>It(()=>import("./PresenterPrint-e4cc2caf.js"),["assets/PresenterPrint-e4cc2caf.js","assets/NoteDisplay-4674c13f.js"])}),yo.push({name:"notes",path:"/notes",component:()=>It(()=>import("./NotesView-d41cdb21.js"),["assets/NotesView-d41cdb21.js","assets/NoteDisplay-4674c13f.js"]),beforeEnter:n}),yo.push({name:"presenter",path:"/presenter/:no",component:()=>It(()=>import("./Presenter-cbd0da0a.js"),["assets/Presenter-cbd0da0a.js","assets/NoteDisplay-4674c13f.js","assets/DrawingControls-f9543b09.js","assets/Presenter-aa6741a8.css"]),beforeEnter:n}),yo.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const vn=D5({history:b_("/2023CSCamp"),routes:yo});function kM(n,t,{mode:s="replace"}={}){return R({get(){const o=vn.currentRoute.value.query[n];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){on(()=>{vn[L(s)]({query:{...vn.currentRoute.value.query,[n]:o}})})}})}const sf=Q(0);on(()=>{vn.afterEach(async()=>{await on(),sf.value+=1})});const of=Q(0),Ln=R(()=>vn.currentRoute.value),Ct=R(()=>Ln.value.query.print!==void 0),xM=R(()=>Ln.value.query.print==="clicks"),ft=R(()=>Ln.value.query.embedded!==void 0),_n=R(()=>Ln.value.path.startsWith("/presenter")),EM=R(()=>Ln.value.path.startsWith("/notes")),vo=R(()=>Ct.value&&!xM.value),ja=R(()=>Ln.value.query.password),FM=R(()=>!_n.value&&(!Te.remote||ja.value===Te.remote)),Vp=kM("clicks","0"),PM=R(()=>Ye.length),TM=R(()=>Ln.value.path),Ve=R(()=>Number.parseInt(TM.value.split(/\//g).slice(-1)[0])||1);R(()=>hr(Ve.value));const dn=R(()=>Ye.find(n=>n.path===`${Ve.value}`));R(()=>{var n,t,s;return(s=(t=(n=dn.value)==null?void 0:n.meta)==null?void 0:t.slide)==null?void 0:s.id});R(()=>{var n,t;return((t=(n=dn.value)==null?void 0:n.meta)==null?void 0:t.layout)||(Ve.value===1?"cover":"default")});const jr=R(()=>Ye.find(n=>n.path===`${Math.min(Ye.length,Ve.value+1)}`)),$M=R(()=>Ye.find(n=>n.path===`${Math.max(1,Ve.value-1)}`)),MM=R(()=>{var n,t;return sf.value,((t=(n=dn.value)==null?void 0:n.meta)==null?void 0:t.__clicksElements)||[]}),In=R({get(){if(vo.value)return 99999;let n=+(Vp.value||0);return Number.isNaN(n)&&(n=0),n},set(n){Vp.value=n.toString()}}),Kl=R(()=>{var n,t;return+(((t=(n=dn.value)==null?void 0:n.meta)==null?void 0:t.clicks)??MM.value.length)}),UM=R(()=>Ve.value<Ye.length||In.value<Kl.value),IM=R(()=>Ve.value>1||In.value>0),OM=R(()=>Ye.filter(n=>{var t,s;return(s=(t=n.meta)==null?void 0:t.slide)==null?void 0:s.title}).reduce((n,t)=>(Ii(n,t),n),[])),LM=R(()=>Oi(OM.value,dn.value));R(()=>Li(LM.value));const RM=R(()=>HM(of.value,dn.value,$M.value));Ae(dn,(n,t)=>{of.value=Number(n==null?void 0:n.path)-Number(t==null?void 0:t.path)});function Lt(){Kl.value<=In.value?Lo():In.value+=1}async function Rt(){In.value<=0?await Ro():In.value-=1}function hr(n){return _n.value?`/presenter/${n}`:`/${n}`}function Lo(){const n=Math.min(Ye.length,Ve.value+1);return qs(n)}async function Ro(n=!0){const t=Math.max(1,Ve.value-1);await qs(t),n&&Kl.value&&vn.replace({query:{...Ln.value.query,clicks:Kl.value}})}function qs(n,t){return vn.push({path:hr(n),query:{...Ln.value.query,clicks:t}})}function GM(n){const t=Q(0),{direction:s,distanceX:o,distanceY:l}=VC(n,{onSwipeStart(r){r.pointerType==="touch"&&(Uo.value||(t.value=va()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!t.value||Uo.value)return;const i=Math.abs(o.value),c=Math.abs(l.value);i/window.innerWidth>.3||i>100?s.value==="left"?Lt():Rt():(c/window.innerHeight>.4||c>200)&&(s.value==="down"?Ro():Lo())}})}async function qa(){const{saveAs:n}=await It(()=>import("./FileSaver.min-23a5d44b.js").then(t=>t.F),[]);n(typeof Te.download=="string"?Te.download:Te.exportFilename?`${Te.exportFilename}.pdf`:"/2023CSCampslidev-exported.pdf",`${Te.title}.pdf`)}async function jM(n){var t,s;if(n==null){const o=(s=(t=dn.value)==null?void 0:t.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;n=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(n)}`),!0}function Ii(n,t,s=1){var l,r,i,c,p;const o=(r=(l=t.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>s&&n.length>0?Ii(n[n.length-1].children,t,s+1):n.push({children:[],level:s,path:t.path,hideInToc:!!((i=t.meta)!=null&&i.hideInToc),title:(p=(c=t.meta)==null?void 0:c.slide)==null?void 0:p.title})}function Oi(n,t,s=!1,o){return n.map(l=>{const r={...l,active:l.path===(t==null?void 0:t.path),hasActiveParent:s};return r.children.length>0&&(r.children=Oi(r.children,t,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function Li(n,t=1){return n.filter(s=>!s.hideInToc).map(s=>({...s,children:Li(s.children,t+1)}))}const qM={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function NM(n,t=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let s=n.name.includes("|")?n.name:qM[n.name]||n.name;if(s.includes("|")){const[o,l]=s.split("|").map(r=>r.trim());s=t?l:o}if(s)return{...n,name:s}}function HM(n,t,s){var l,r;let o=n>0?(l=s==null?void 0:s.meta)==null?void 0:l.transition:(r=t==null?void 0:t.meta)==null?void 0:r.transition;return o||(o=Te.transition),NM(o,n<0)}function WM(){const n=Te.titleTemplate.replace("%s",Te.title||"Slidev");Kd({title:n,htmlAttrs:Te.htmlAttrs}),B3(`${n} - shared`),w3(`${n} - drawings`);const t=`${location.origin}_${h3()}`;function s(){EM.value||!_n.value&&!f3.includes(location.host.split(":")[0])||(_n.value?(Xs("page",+Ve.value),Xs("clicks",In.value)):(Xs("viewerPage",+Ve.value),Xs("viewerClicks",In.value)),Xs("lastUpdate",{id:t,type:_n.value?"presenter":"viewer",time:new Date().getTime()}))}vn.afterEach(s),Ae(In,s),b3(o=>{var r;vn.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=o.lastUpdate)==null?void 0:r.type)==="presenter"&&(+o.page!=+Ve.value||+In.value!=+o.clicks)&&vn.replace({path:hr(o.page),query:{...vn.currentRoute.value.query,clicks:o.clicks||0}})})}const VM=Ee({__name:"App",setup(n){return k(E),WM(),(t,s)=>{const o=Rs("RouterView"),l=Rs("StarportCarrier");return h(),b(Pe,null,[U(o),U(l)],64)}}}),zM=F(VM,[["__file","/home/runner/work/2023CSCamp/2023CSCamp/slide/node_modules/@slidev/client/App.vue"]]);function qr(n){return n!==null&&typeof n=="object"}function Na(n,t,s=".",o){if(!qr(t))return Na(n,{},s,o);const l=Object.assign({},t);for(const r in n){if(r==="__proto__"||r==="constructor")continue;const i=n[r];i!=null&&(o&&o(l,r,i,s)||(Array.isArray(i)&&Array.isArray(l[r])?l[r]=[...i,...l[r]]:qr(i)&&qr(l[r])?l[r]=Na(i,l[r],(s?`${s}.`:"")+r.toString(),o):l[r]=i))}return l}function KM(n){return(...t)=>t.reduce((s,o)=>Na(s,o,"",n),{})}const YM=KM(),lf=1/60*1e3,JM=typeof performance<"u"?()=>performance.now():()=>Date.now(),rf=typeof window<"u"?n=>window.requestAnimationFrame(n):n=>setTimeout(()=>n(JM()),lf);function ZM(n){let t=[],s=[],o=0,l=!1,r=!1;const i=new WeakSet,c={schedule:(p,u=!1,d=!1)=>{const y=d&&l,f=y?t:s;return u&&i.add(p),f.indexOf(p)===-1&&(f.push(p),y&&l&&(o=t.length)),p},cancel:p=>{const u=s.indexOf(p);u!==-1&&s.splice(u,1),i.delete(p)},process:p=>{if(l){r=!0;return}if(l=!0,[t,s]=[s,t],s.length=0,o=t.length,o)for(let u=0;u<o;u++){const d=t[u];d(p),i.has(d)&&(c.schedule(d),n())}l=!1,r&&(r=!1,c.process(p))}};return c}const QM=40;let Ha=!0,Go=!1,Wa=!1;const Ls={delta:0,timestamp:0},Yo=["read","update","preRender","render","postRender"],mr=Yo.reduce((n,t)=>(n[t]=ZM(()=>Go=!0),n),{}),Va=Yo.reduce((n,t)=>{const s=mr[t];return n[t]=(o,l=!1,r=!1)=>(Go||nU(),s.schedule(o,l,r)),n},{}),XM=Yo.reduce((n,t)=>(n[t]=mr[t].cancel,n),{});Yo.reduce((n,t)=>(n[t]=()=>mr[t].process(Ls),n),{});const eU=n=>mr[n].process(Ls),af=n=>{Go=!1,Ls.delta=Ha?lf:Math.max(Math.min(n-Ls.timestamp,QM),1),Ls.timestamp=n,Wa=!0,Yo.forEach(eU),Wa=!1,Go&&(Ha=!1,rf(af))},nU=()=>{Go=!0,Ha=!0,Wa||rf(af)},cf=()=>Ls;function pf(n,t){var s={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(n);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(n,o[l])&&(s[o[l]]=n[o[l]]);return s}var Ri=function(){},jo=function(){};Ri=function(n,t){!n&&typeof console<"u"&&console.warn(t)},jo=function(n,t){if(!n)throw new Error(t)};const za=(n,t,s)=>Math.min(Math.max(s,n),t),Nr=.001,tU=.01,zp=10,sU=.05,oU=1;function lU({duration:n=800,bounce:t=.25,velocity:s=0,mass:o=1}){let l,r;Ri(n<=zp*1e3,"Spring duration must be 10 seconds or less");let i=1-t;i=za(sU,oU,i),n=za(tU,zp,n/1e3),i<1?(l=u=>{const d=u*i,y=d*n,f=d-s,m=Ka(u,i),g=Math.exp(-y);return Nr-f/m*g},r=u=>{const y=u*i*n,f=y*s+s,m=Math.pow(i,2)*Math.pow(u,2)*n,g=Math.exp(-y),B=Ka(Math.pow(u,2),i);return(-l(u)+Nr>0?-1:1)*((f-m)*g)/B}):(l=u=>{const d=Math.exp(-u*n),y=(u-s)*n+1;return-Nr+d*y},r=u=>{const d=Math.exp(-u*n),y=(s-u)*(n*n);return d*y});const c=5/n,p=aU(l,r,c);if(n=n*1e3,isNaN(p))return{stiffness:100,damping:10,duration:n};{const u=Math.pow(p,2)*o;return{stiffness:u,damping:i*2*Math.sqrt(o*u),duration:n}}}const rU=12;function aU(n,t,s){let o=s;for(let l=1;l<rU;l++)o=o-n(o)/t(o);return o}function Ka(n,t){return n*Math.sqrt(1-t*t)}const iU=["duration","bounce"],cU=["stiffness","damping","mass"];function Kp(n,t){return t.some(s=>n[s]!==void 0)}function pU(n){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!Kp(n,cU)&&Kp(n,iU)){const s=lU(n);t=Object.assign(Object.assign(Object.assign({},t),s),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Gi(n){var{from:t=0,to:s=1,restSpeed:o=2,restDelta:l}=n,r=pf(n,["from","to","restSpeed","restDelta"]);const i={done:!1,value:t};let{stiffness:c,damping:p,mass:u,velocity:d,duration:y,isResolvedFromDuration:f}=pU(r),m=Yp,g=Yp;function B(){const D=d?-(d/1e3):0,S=s-t,w=p/(2*Math.sqrt(c*u)),v=Math.sqrt(c/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(s-t)/100,.4)),w<1){const P=Ka(v,w);m=T=>{const M=Math.exp(-w*v*T);return s-M*((D+w*v*S)/P*Math.sin(P*T)+S*Math.cos(P*T))},g=T=>{const M=Math.exp(-w*v*T);return w*v*M*(Math.sin(P*T)*(D+w*v*S)/P+S*Math.cos(P*T))-M*(Math.cos(P*T)*(D+w*v*S)-P*S*Math.sin(P*T))}}else if(w===1)m=P=>s-Math.exp(-v*P)*(S+(D+v*S)*P);else{const P=v*Math.sqrt(w*w-1);m=T=>{const M=Math.exp(-w*v*T),W=Math.min(P*T,300);return s-M*((D+w*v*S)*Math.sinh(W)+P*S*Math.cosh(W))/P}}}return B(),{next:D=>{const S=m(D);if(f)i.done=D>=y;else{const w=g(D)*1e3,v=Math.abs(w)<=o,P=Math.abs(s-S)<=l;i.done=v&&P}return i.value=i.done?s:S,i},flipTarget:()=>{d=-d,[t,s]=[s,t],B()}}}Gi.needsInterpolation=(n,t)=>typeof n=="string"||typeof t=="string";const Yp=n=>0,uf=(n,t,s)=>{const o=t-n;return o===0?1:(s-n)/o},ji=(n,t,s)=>-s*n+s*t+n,df=(n,t)=>s=>Math.max(Math.min(s,t),n),Bo=n=>n%1?Number(n.toFixed(5)):n,qo=/(-)?([\d]*\.?[\d])+/g,Ya=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,uU=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Jo(n){return typeof n=="string"}const Zo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},bo=Object.assign(Object.assign({},Zo),{transform:df(0,1)}),fl=Object.assign(Object.assign({},Zo),{default:1}),qi=n=>({test:t=>Jo(t)&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),Zt=qi("deg"),Do=qi("%"),Be=qi("px"),Jp=Object.assign(Object.assign({},Do),{parse:n=>Do.parse(n)/100,transform:n=>Do.transform(n*100)}),Ni=(n,t)=>s=>!!(Jo(s)&&uU.test(s)&&s.startsWith(n)||t&&Object.prototype.hasOwnProperty.call(s,t)),yf=(n,t,s)=>o=>{if(!Jo(o))return o;const[l,r,i,c]=o.match(qo);return{[n]:parseFloat(l),[t]:parseFloat(r),[s]:parseFloat(i),alpha:c!==void 0?parseFloat(c):1}},ps={test:Ni("hsl","hue"),parse:yf("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:s,alpha:o=1})=>"hsla("+Math.round(n)+", "+Do.transform(Bo(t))+", "+Do.transform(Bo(s))+", "+Bo(bo.transform(o))+")"},dU=df(0,255),Hr=Object.assign(Object.assign({},Zo),{transform:n=>Math.round(dU(n))}),Pt={test:Ni("rgb","red"),parse:yf("red","green","blue"),transform:({red:n,green:t,blue:s,alpha:o=1})=>"rgba("+Hr.transform(n)+", "+Hr.transform(t)+", "+Hr.transform(s)+", "+Bo(bo.transform(o))+")"};function yU(n){let t="",s="",o="",l="";return n.length>5?(t=n.substr(1,2),s=n.substr(3,2),o=n.substr(5,2),l=n.substr(7,2)):(t=n.substr(1,1),s=n.substr(2,1),o=n.substr(3,1),l=n.substr(4,1),t+=t,s+=s,o+=o,l+=l),{red:parseInt(t,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Ja={test:Ni("#"),parse:yU,transform:Pt.transform},Cn={test:n=>Pt.test(n)||Ja.test(n)||ps.test(n),parse:n=>Pt.test(n)?Pt.parse(n):ps.test(n)?ps.parse(n):Ja.parse(n),transform:n=>Jo(n)?n:n.hasOwnProperty("red")?Pt.transform(n):ps.transform(n)},ff="${c}",hf="${n}";function fU(n){var t,s,o,l;return isNaN(n)&&Jo(n)&&((s=(t=n.match(qo))===null||t===void 0?void 0:t.length)!==null&&s!==void 0?s:0)+((l=(o=n.match(Ya))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function mf(n){typeof n=="number"&&(n=`${n}`);const t=[];let s=0;const o=n.match(Ya);o&&(s=o.length,n=n.replace(Ya,ff),t.push(...o.map(Cn.parse)));const l=n.match(qo);return l&&(n=n.replace(qo,hf),t.push(...l.map(Zo.parse))),{values:t,numColors:s,tokenised:n}}function gf(n){return mf(n).values}function Cf(n){const{values:t,numColors:s,tokenised:o}=mf(n),l=t.length;return r=>{let i=o;for(let c=0;c<l;c++)i=i.replace(c<s?ff:hf,c<s?Cn.transform(r[c]):Bo(r[c]));return i}}const hU=n=>typeof n=="number"?0:n;function mU(n){const t=gf(n);return Cf(n)(t.map(hU))}const Qo={test:fU,parse:gf,createTransformer:Cf,getAnimatableNone:mU},gU=new Set(["brightness","contrast","saturate","opacity"]);function CU(n){let[t,s]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[o]=s.match(qo)||[];if(!o)return n;const l=s.replace(o,"");let r=gU.has(t)?1:0;return o!==s&&(r*=100),t+"("+r+l+")"}const _U=/([a-z-]*)\(.*?\)/g,Za=Object.assign(Object.assign({},Qo),{getAnimatableNone:n=>{const t=n.match(_U);return t?t.map(CU).join(" "):n}});function Wr(n,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(t-n)*6*s:s<1/2?t:s<2/3?n+(t-n)*(2/3-s)*6:n}function Zp({hue:n,saturation:t,lightness:s,alpha:o}){n/=360,t/=100,s/=100;let l=0,r=0,i=0;if(!t)l=r=i=s;else{const c=s<.5?s*(1+t):s+t-s*t,p=2*s-c;l=Wr(p,c,n+1/3),r=Wr(p,c,n),i=Wr(p,c,n-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(i*255),alpha:o}}const AU=(n,t,s)=>{const o=n*n,l=t*t;return Math.sqrt(Math.max(0,s*(l-o)+o))},vU=[Ja,Pt,ps],Qp=n=>vU.find(t=>t.test(n)),Xp=n=>`'${n}' is not an animatable color. Use the equivalent color code instead.`,_f=(n,t)=>{let s=Qp(n),o=Qp(t);jo(!!s,Xp(n)),jo(!!o,Xp(t));let l=s.parse(n),r=o.parse(t);s===ps&&(l=Zp(l),s=Pt),o===ps&&(r=Zp(r),o=Pt);const i=Object.assign({},l);return c=>{for(const p in i)p!=="alpha"&&(i[p]=AU(l[p],r[p],c));return i.alpha=ji(l.alpha,r.alpha,c),s.transform(i)}},BU=n=>typeof n=="number",bU=(n,t)=>s=>t(n(s)),Af=(...n)=>n.reduce(bU);function vf(n,t){return BU(n)?s=>ji(n,t,s):Cn.test(n)?_f(n,t):bf(n,t)}const Bf=(n,t)=>{const s=[...n],o=s.length,l=n.map((r,i)=>vf(r,t[i]));return r=>{for(let i=0;i<o;i++)s[i]=l[i](r);return s}},DU=(n,t)=>{const s=Object.assign(Object.assign({},n),t),o={};for(const l in s)n[l]!==void 0&&t[l]!==void 0&&(o[l]=vf(n[l],t[l]));return l=>{for(const r in o)s[r]=o[r](l);return s}};function eu(n){const t=Qo.parse(n),s=t.length;let o=0,l=0,r=0;for(let i=0;i<s;i++)o||typeof t[i]=="number"?o++:t[i].hue!==void 0?r++:l++;return{parsed:t,numNumbers:o,numRGB:l,numHSL:r}}const bf=(n,t)=>{const s=Qo.createTransformer(t),o=eu(n),l=eu(t);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?Af(Bf(o.parsed,l.parsed),s):(Ri(!0,`Complex values '${n}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),i=>`${i>0?t:n}`)},SU=(n,t)=>s=>ji(n,t,s);function wU(n){if(typeof n=="number")return SU;if(typeof n=="string")return Cn.test(n)?_f:bf;if(Array.isArray(n))return Bf;if(typeof n=="object")return DU}function kU(n,t,s){const o=[],l=s||wU(n[0]),r=n.length-1;for(let i=0;i<r;i++){let c=l(n[i],n[i+1]);if(t){const p=Array.isArray(t)?t[i]:t;c=Af(p,c)}o.push(c)}return o}function xU([n,t],[s]){return o=>s(uf(n,t,o))}function EU(n,t){const s=n.length,o=s-1;return l=>{let r=0,i=!1;if(l<=n[0]?i=!0:l>=n[o]&&(r=o-1,i=!0),!i){let p=1;for(;p<s&&!(n[p]>l||p===o);p++);r=p-1}const c=uf(n[r],n[r+1],l);return t[r](c)}}function Df(n,t,{clamp:s=!0,ease:o,mixer:l}={}){const r=n.length;jo(r===t.length,"Both input and output ranges must be the same length"),jo(!o||!Array.isArray(o)||o.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),n[0]>n[r-1]&&(n=[].concat(n),t=[].concat(t),n.reverse(),t.reverse());const i=kU(t,o,l),c=r===2?xU(n,i):EU(n,i);return s?p=>c(za(n[0],n[r-1],p)):c}const gr=n=>t=>1-n(1-t),Hi=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,FU=n=>t=>Math.pow(t,n),Sf=n=>t=>t*t*((n+1)*t-n),PU=n=>{const t=Sf(n);return s=>(s*=2)<1?.5*t(s):.5*(2-Math.pow(2,-10*(s-1)))},wf=1.525,TU=4/11,$U=8/11,MU=9/10,kf=n=>n,Wi=FU(2),UU=gr(Wi),xf=Hi(Wi),Ef=n=>1-Math.sin(Math.acos(n)),Ff=gr(Ef),IU=Hi(Ff),Vi=Sf(wf),OU=gr(Vi),LU=Hi(Vi),RU=PU(wf),GU=4356/361,jU=35442/1805,qU=16061/1805,Yl=n=>{if(n===1||n===0)return n;const t=n*n;return n<TU?7.5625*t:n<$U?9.075*t-9.9*n+3.4:n<MU?GU*t-jU*n+qU:10.8*n*n-20.52*n+10.72},NU=gr(Yl),HU=n=>n<.5?.5*(1-Yl(1-n*2)):.5*Yl(n*2-1)+.5;function WU(n,t){return n.map(()=>t||xf).splice(0,n.length-1)}function VU(n){const t=n.length;return n.map((s,o)=>o!==0?o/(t-1):0)}function zU(n,t){return n.map(s=>s*t)}function Dl({from:n=0,to:t=1,ease:s,offset:o,duration:l=300}){const r={done:!1,value:n},i=Array.isArray(t)?t:[n,t],c=zU(o&&o.length===i.length?o:VU(i),l);function p(){return Df(c,i,{ease:Array.isArray(s)?s:WU(i,s)})}let u=p();return{next:d=>(r.value=u(d),r.done=d>=l,r),flipTarget:()=>{i.reverse(),u=p()}}}function KU({velocity:n=0,from:t=0,power:s=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const i={done:!1,value:t};let c=s*n;const p=t+c,u=r===void 0?p:r(p);return u!==p&&(c=u-t),{next:d=>{const y=-c*Math.exp(-d/o);return i.done=!(y>l||y<-l),i.value=i.done?u:u+y,i},flipTarget:()=>{}}}const nu={keyframes:Dl,spring:Gi,decay:KU};function YU(n){if(Array.isArray(n.to))return Dl;if(nu[n.type])return nu[n.type];const t=new Set(Object.keys(n));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Dl:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Gi:Dl}function Pf(n,t,s=0){return n-t-s}function JU(n,t,s=0,o=!0){return o?Pf(t+-n,t,s):t-(n-t)+s}function ZU(n,t,s,o){return o?n>=t+s:n<=-s}const QU=n=>{const t=({delta:s})=>n(s);return{start:()=>Va.update(t,!0),stop:()=>XM.update(t)}};function Tf(n){var t,s,{from:o,autoplay:l=!0,driver:r=QU,elapsed:i=0,repeat:c=0,repeatType:p="loop",repeatDelay:u=0,onPlay:d,onStop:y,onComplete:f,onRepeat:m,onUpdate:g}=n,B=pf(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:D}=B,S,w=0,v=B.duration,P,T=!1,M=!0,W;const G=YU(B);!((s=(t=G).needsInterpolation)===null||s===void 0)&&s.call(t,o,D)&&(W=Df([0,100],[o,D],{clamp:!1}),o=0,D=100);const K=G(Object.assign(Object.assign({},B),{from:o,to:D}));function re(){w++,p==="reverse"?(M=w%2===0,i=JU(i,v,u,M)):(i=Pf(i,v,u),p==="mirror"&&K.flipTarget()),T=!1,m&&m()}function de(){S.stop(),f&&f()}function X(ve){if(M||(ve=-ve),i+=ve,!T){const be=K.next(Math.max(0,i));P=be.value,W&&(P=W(P)),T=M?be.done:i<=0}g==null||g(P),T&&(w===0&&(v??(v=i)),w<c?ZU(i,v,u,M)&&re():de())}function Ce(){d==null||d(),S=r(X),S.start()}return l&&Ce(),{stop:()=>{y==null||y(),S.stop()}}}function $f(n,t){return t?n*(1e3/t):0}function XU({from:n=0,velocity:t=0,min:s,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:i=500,bounceDamping:c=10,restDelta:p=1,modifyTarget:u,driver:d,onUpdate:y,onComplete:f,onStop:m}){let g;function B(v){return s!==void 0&&v<s||o!==void 0&&v>o}function D(v){return s===void 0?o:o===void 0||Math.abs(s-v)<Math.abs(o-v)?s:o}function S(v){g==null||g.stop(),g=Tf(Object.assign(Object.assign({},v),{driver:d,onUpdate:P=>{var T;y==null||y(P),(T=v.onUpdate)===null||T===void 0||T.call(v,P)},onComplete:f,onStop:m}))}function w(v){S(Object.assign({type:"spring",stiffness:i,damping:c,restDelta:p},v))}if(B(n))w({from:n,velocity:t,to:D(n)});else{let v=l*t+n;typeof u<"u"&&(v=u(v));const P=D(v),T=P===s?-1:1;let M,W;const G=K=>{M=W,W=K,t=$f(K-M,cf().delta),(T===1&&K>P||T===-1&&K<P)&&w({from:K,to:P,velocity:t})};S({type:"decay",from:n,velocity:t,timeConstant:r,power:l,restDelta:p,modifyTarget:u,onUpdate:B(v)?G:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const Mf=(n,t)=>1-3*t+3*n,Uf=(n,t)=>3*t-6*n,If=n=>3*n,Jl=(n,t,s)=>((Mf(t,s)*n+Uf(t,s))*n+If(t))*n,Of=(n,t,s)=>3*Mf(t,s)*n*n+2*Uf(t,s)*n+If(t),eI=1e-7,nI=10;function tI(n,t,s,o,l){let r,i,c=0;do i=t+(s-t)/2,r=Jl(i,o,l)-n,r>0?s=i:t=i;while(Math.abs(r)>eI&&++c<nI);return i}const sI=8,oI=.001;function lI(n,t,s,o){for(let l=0;l<sI;++l){const r=Of(t,s,o);if(r===0)return t;const i=Jl(t,s,o)-n;t-=i/r}return t}const Sl=11,hl=1/(Sl-1);function rI(n,t,s,o){if(n===t&&s===o)return kf;const l=new Float32Array(Sl);for(let i=0;i<Sl;++i)l[i]=Jl(i*hl,n,s);function r(i){let c=0,p=1;const u=Sl-1;for(;p!==u&&l[p]<=i;++p)c+=hl;--p;const d=(i-l[p])/(l[p+1]-l[p]),y=c+d*hl,f=Of(y,n,s);return f>=oI?lI(i,y,n,s):f===0?y:tI(i,c,c+hl,n,s)}return i=>i===0||i===1?i:Jl(r(i),t,o)}const Vr={};class aI{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,s,o){if(this.subscriptions.size)for(const l of this.subscriptions)l(t,s,o)}clear(){this.subscriptions.clear()}}function tu(n){return!isNaN(parseFloat(n))}class iI{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new aI,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:l}=cf();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),Va.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Va.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=tu(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=tu(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?$f(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(s=>{const{stop:o}=t(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function cI(n){return new iI(n)}const{isArray:pI}=Array;function uI(){const n=Q({}),t=o=>{const l=r=>{n.value[r]&&(n.value[r].stop(),n.value[r].destroy(),delete n.value[r])};o?pI(o)?o.forEach(l):l(o):Object.keys(n.value).forEach(l)},s=(o,l,r)=>{if(n.value[o])return n.value[o];const i=cI(l);return i.onChange(c=>r[o]=c),n.value[o]=i,i};return K3(t),{motionValues:n,get:s,stop:t}}function dI(n){return Array.isArray(n)}function Qt(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function zr(n){return{type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function yI(n){return{type:"spring",stiffness:550,damping:n===0?100:30,restDelta:.01,restSpeed:10}}function Kr(){return{type:"keyframes",ease:"linear",duration:300}}function fI(n){return{type:"keyframes",duration:800,values:n}}const su={default:yI,x:Qt,y:Qt,z:Qt,rotate:Qt,rotateX:Qt,rotateY:Qt,rotateZ:Qt,scaleX:zr,scaleY:zr,scale:zr,backgroundColor:Kr,color:Kr,opacity:Kr};function Lf(n,t){let s;return dI(t)?s=fI:s=su[n]||su.default,{to:t,...s(t)}}const ou={...Zo,transform:Math.round},Rf={color:Cn,backgroundColor:Cn,outlineColor:Cn,fill:Cn,stroke:Cn,borderColor:Cn,borderTopColor:Cn,borderRightColor:Cn,borderBottomColor:Cn,borderLeftColor:Cn,borderWidth:Be,borderTopWidth:Be,borderRightWidth:Be,borderBottomWidth:Be,borderLeftWidth:Be,borderRadius:Be,radius:Be,borderTopLeftRadius:Be,borderTopRightRadius:Be,borderBottomRightRadius:Be,borderBottomLeftRadius:Be,width:Be,maxWidth:Be,height:Be,maxHeight:Be,size:Be,top:Be,right:Be,bottom:Be,left:Be,padding:Be,paddingTop:Be,paddingRight:Be,paddingBottom:Be,paddingLeft:Be,margin:Be,marginTop:Be,marginRight:Be,marginBottom:Be,marginLeft:Be,rotate:Zt,rotateX:Zt,rotateY:Zt,rotateZ:Zt,scale:fl,scaleX:fl,scaleY:fl,scaleZ:fl,skew:Zt,skewX:Zt,skewY:Zt,distance:Be,translateX:Be,translateY:Be,translateZ:Be,x:Be,y:Be,z:Be,perspective:Be,transformPerspective:Be,opacity:bo,originX:Jp,originY:Jp,originZ:Be,zIndex:ou,filter:Za,WebkitFilter:Za,fillOpacity:bo,strokeOpacity:bo,numOctaves:ou},zi=n=>Rf[n];function Gf(n,t){return t&&typeof n=="number"&&t.transform?t.transform(n):n}function hI(n,t){let s=zi(n);return s!==Za&&(s=Qo),s.getAnimatableNone?s.getAnimatableNone(t):void 0}const mI={linear:kf,easeIn:Wi,easeInOut:xf,easeOut:UU,circIn:Ef,circInOut:IU,circOut:Ff,backIn:Vi,backInOut:LU,backOut:OU,anticipate:RU,bounceIn:NU,bounceInOut:HU,bounceOut:Yl};function lu(n){if(Array.isArray(n)){const[t,s,o,l]=n;return rI(t,s,o,l)}else if(typeof n=="string")return mI[n];return n}function gI(n){return Array.isArray(n)&&typeof n[0]!="number"}function ru(n,t){return n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Qo.test(t)&&!t.startsWith("url("))}function CI(n){return Array.isArray(n.to)&&n.to[0]===null&&(n.to=[...n.to],n.to[0]=n.from),n}function _I({ease:n,times:t,delay:s,...o}){const l={...o};return t&&(l.offset=t),n&&(l.ease=gI(n)?n.map(lu):lu(n)),s&&(l.elapsed=-s),l}function AI(n,t,s){return Array.isArray(t.to)&&(n.duration||(n.duration=800)),CI(t),vI(n)||(n={...n,...Lf(s,t.to)}),{...t,..._I(n)}}function vI({delay:n,repeat:t,repeatType:s,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function BI(n,t){return n[t]||n.default||n}function bI(n,t,s,o,l){const r=BI(o,n);let i=r.from===null||r.from===void 0?t.get():r.from;const c=ru(n,s);i==="none"&&c&&typeof s=="string"&&(i=hI(n,s));const p=ru(n,i);function u(y){const f={from:i,to:s,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return r.type==="inertia"||r.type==="decay"?XU({...f,...r}):Tf({...AI(r,f,n),onUpdate:m=>{f.onUpdate(m),r.onUpdate&&r.onUpdate(m)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),y&&y()}})}function d(y){return t.set(s),o.onComplete&&o.onComplete(),l&&l(),y&&y(),{stop:()=>{}}}return!p||!c||r.type===!1?d:u}function DI(){const{motionValues:n,stop:t,get:s}=uI();return{motionValues:n,stop:t,push:(l,r,i,c={},p)=>{const u=i[l],d=s(l,u,i);if(c&&c.immediate){d.set(r);return}const y=bI(l,d,r,c,p);d.start(y)}}}function SI(n,t={},{motionValues:s,push:o,stop:l}=DI()){const r=L(t),i=Q(!1);Ae(s,y=>{i.value=Object.values(y).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const c=y=>{if(!r||!r[y])throw new Error(`The variant ${y} does not exist.`);return r[y]},p=y=>(typeof y=="string"&&(y=c(y)),Promise.all(Object.entries(y).map(([f,m])=>{if(f!=="transition")return new Promise(g=>o(f,m,n,y.transition||Lf(f,y[f]),g))}).filter(Boolean)));return{isAnimating:i,apply:p,set:y=>{const f=Aa(y)?y:c(y);Object.entries(f).forEach(([m,g])=>{m!=="transition"&&o(m,g,n,{immediate:!0})})},leave:async y=>{let f;if(r&&(r.leave&&(f=r.leave),!r.leave&&r.initial&&(f=r.initial)),!f){y();return}await p(f),y()},stop:l}}const Ki=typeof window<"u",wI=()=>Ki&&window.onpointerdown===null,kI=()=>Ki&&window.ontouchstart===null,xI=()=>Ki&&window.onmousedown===null;function EI({target:n,state:t,variants:s,apply:o}){const l=L(s),r=Q(!1),i=Q(!1),c=Q(!1),p=R(()=>{let d=[];return l&&(l.hovered&&(d=[...d,...Object.keys(l.hovered)]),l.tapped&&(d=[...d,...Object.keys(l.tapped)]),l.focused&&(d=[...d,...Object.keys(l.focused)])),d}),u=R(()=>{const d={};Object.assign(d,t.value),r.value&&l.hovered&&Object.assign(d,l.hovered),i.value&&l.tapped&&Object.assign(d,l.tapped),c.value&&l.focused&&Object.assign(d,l.focused);for(const y in d)p.value.includes(y)||delete d[y];return d});l.hovered&&(De(n,"mouseenter",()=>r.value=!0),De(n,"mouseleave",()=>{r.value=!1,i.value=!1}),De(n,"mouseout",()=>{r.value=!1,i.value=!1})),l.tapped&&(xI()&&(De(n,"mousedown",()=>i.value=!0),De(n,"mouseup",()=>i.value=!1)),wI()&&(De(n,"pointerdown",()=>i.value=!0),De(n,"pointerup",()=>i.value=!1)),kI()&&(De(n,"touchstart",()=>i.value=!0),De(n,"touchend",()=>i.value=!1))),l.focused&&(De(n,"focus",()=>c.value=!0),De(n,"blur",()=>c.value=!1)),Ae(u,o)}function FI({set:n,target:t,variants:s,variant:o}){const l=L(s);Ae(()=>t,()=>{l&&(l.initial&&n("initial"),l.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function PI({state:n,apply:t}){Ae(n,s=>{s&&t(s)},{immediate:!0})}function TI({target:n,variants:t,variant:s}){const o=L(t);o&&(o.visible||o.visibleOnce)&&jC(n,([{isIntersecting:l}])=>{o.visible?l?s.value="visible":s.value="initial":o.visibleOnce&&(l&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function $I(n,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&FI(n),t.syncVariants&&PI(n),t.visibilityHooks&&TI(n),t.eventListeners&&EI(n)}function jf(n={}){const t=We({...n}),s=Q({});return Ae(t,()=>{const o={};for(const[l,r]of Object.entries(t)){const i=zi(l),c=Gf(r,i);o[l]=c}s.value=o},{immediate:!0,deep:!0}),{state:t,style:s}}function Yi(n,t){Ae(()=>ln(n),s=>{s&&t(s)},{immediate:!0})}const MI={x:"translateX",y:"translateY",z:"translateZ"};function qf(n={},t=!0){const s=We({...n}),o=Q("");return Ae(s,l=>{let r="",i=!1;if(t&&(l.x||l.y||l.z)){const c=[l.x||0,l.y||0,l.z||0].map(Be.transform).join(",");r+=`translate3d(${c}) `,i=!0}for(const[c,p]of Object.entries(l)){if(t&&(c==="x"||c==="y"||c==="z"))continue;const u=zi(c),d=Gf(p,u);r+=`${MI[c]||c}(${d}) `}t&&!i&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}const UI=["","X","Y","Z"],II=["perspective","translate","scale","rotate","skew"],Nf=["transformPerspective","x","y","z"];II.forEach(n=>{UI.forEach(t=>{const s=n+t;Nf.push(s)})});const OI=new Set(Nf);function Ji(n){return OI.has(n)}const LI=new Set(["originX","originY","originZ"]);function Hf(n){return LI.has(n)}function RI(n){const t={},s={};return Object.entries(n).forEach(([o,l])=>{Ji(o)||Hf(o)?t[o]=l:s[o]=l}),{transform:t,style:s}}function Wf(n){const{transform:t,style:s}=RI(n),{transform:o}=qf(t),{style:l}=jf(s);return o.value&&(l.value.transform=o.value),l.value}function GI(n,t){let s,o;const{state:l,style:r}=jf();return Yi(n,i=>{o=i;for(const c of Object.keys(Rf))i.style[c]===null||i.style[c]===""||Ji(c)||Hf(c)||(l[c]=i.style[c]);s&&Object.entries(s).forEach(([c,p])=>i.style[c]=p),t&&t(l)}),Ae(r,i=>{if(!o){s=i;return}for(const c in i)o.style[c]=i[c]},{immediate:!0}),{style:l}}function jI(n){const t=n.trim().split(/\) |\)/);if(t.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,l)=>{if(!l)return o;const[r,i]=l.split("("),p=i.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),u=p.length===1?p[0]:p;return{...o,[r]:u}},{})}function qI(n,t){Object.entries(jI(t)).forEach(([s,o])=>{const l=["x","y","z"];if(s==="translate3d"){if(o===0){l.forEach(r=>n[r]=0);return}o.forEach((r,i)=>n[l[i]]=r);return}if(o=parseFloat(o),s==="translateX"){n.x=o;return}if(s==="translateY"){n.y=o;return}if(s==="translateZ"){n.z=o;return}n[s]=o})}function NI(n,t){let s,o;const{state:l,transform:r}=qf();return Yi(n,i=>{o=i,i.style.transform&&qI(l,i.style.transform),s&&(i.style.transform=s),t&&t(l)}),Ae(r,i=>{if(!o){s=i;return}o.style.transform=i},{immediate:!0}),{transform:l}}function HI(n,t){const s=We({}),o=i=>Object.entries(i).forEach(([c,p])=>s[c]=p),{style:l}=GI(n,o),{transform:r}=NI(n,o);return Ae(s,i=>{Object.entries(i).forEach(([c,p])=>{const u=Ji(c)?r:l;u[c]&&u[c]===p||(u[c]=p)})},{immediate:!0,deep:!0}),Yi(n,()=>t&&o(t)),{motionProperties:s,style:l,transform:r}}function WI(n={}){const t=L(n),s=Q();return{state:R(()=>{if(s.value)return t[s.value]}),variant:s}}function Vf(n,t={},s){const{motionProperties:o}=HI(n),{variant:l,state:r}=WI(t),i=SI(o,t),c={target:n,variant:l,variants:t,state:r,motionProperties:o,...i};return $I(c,s),c}const VI=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function zI(n,t){const s=n.props?n.props:n.data&&n.data.attrs?n.data.attrs:{};s&&(s.variants&&Aa(s.variants)&&(t.value={...t.value,...s.variants}),VI.forEach(o=>{if(o==="delay"){if(s&&s[o]&&typeof s[o]=="number"){const l=s[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:l,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:l,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:l,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&Aa(s[o])&&(t.value[o]=s[o])}))}function Yr(n){return{created:(s,o,l)=>{const r=o.value&&typeof o.value=="string"?o.value:l.key;r&&Vr[r]&&Vr[r].stop();const i=Q(n||{});typeof o.value=="object"&&(i.value=o.value),zI(l,i);const c=Vf(s,i);s.motionInstance=c,r&&(Vr[r]=c)},getSSRProps(s,o){let{initial:l}=s.value||o&&(o==null?void 0:o.props)||{};l=L(l);const r=YM((n==null?void 0:n.initial)||{},l||{});return!r||Object.keys(r).length===0?void 0:{style:Wf(r)}}}}const KI={initial:{opacity:0},enter:{opacity:1}},YI={initial:{opacity:0},visible:{opacity:1}},JI={initial:{opacity:0},visibleOnce:{opacity:1}},ZI={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},QI={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},XI={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},eO={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},nO={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},tO={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},sO={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},oO={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},lO={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},rO={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},aO={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},iO={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},cO={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},pO={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},uO={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},dO={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},yO={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},fO={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},hO={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},mO={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},gO={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},CO={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},_O={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},AO={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},vO={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},BO={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},bO={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Qa={__proto__:null,fade:KI,fadeVisible:YI,fadeVisibleOnce:JI,pop:ZI,popVisible:QI,popVisibleOnce:XI,rollBottom:cO,rollLeft:eO,rollRight:sO,rollTop:rO,rollVisibleBottom:pO,rollVisibleLeft:nO,rollVisibleOnceBottom:uO,rollVisibleOnceLeft:tO,rollVisibleOnceRight:lO,rollVisibleOnceTop:iO,rollVisibleRight:oO,rollVisibleTop:aO,slideBottom:vO,slideLeft:dO,slideRight:hO,slideTop:CO,slideVisibleBottom:BO,slideVisibleLeft:yO,slideVisibleOnceBottom:bO,slideVisibleOnceLeft:fO,slideVisibleOnceRight:gO,slideVisibleOnceTop:AO,slideVisibleRight:mO,slideVisibleTop:_O},DO=Ee({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(n){var c;const t=Hm(),s=We({});if(!n.is&&!t.default)return()=>kn("div",{});const o=R(()=>{let p;return n.preset&&(p=Qa[n.preset]),p}),l=R(()=>({initial:n.initial,enter:n.enter,leave:n.leave,visible:n.visible,visibleOnce:n.visibleOnce,hovered:n.hovered,tapped:n.tapped,focused:n.focused})),r=R(()=>{const p={...l.value,...o.value||{},...n.variants||{}};return n.delay&&(p.enter.transition={...p.enter.transition},p.enter.transition.delay=parseInt(n.delay)),p}),i=R(()=>{if(!n.is)return;let p=n.is;return typeof i.value=="string"&&!Su(p)&&(p=Rs(p)),p});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||process!=null&&process.dev){const p=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var y,f,m;(y=u.variants)!=null&&y.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(m=u.variants)!=null&&m.visibleOnce&&u.apply("visibleOnce")},10)};cr(()=>Object.entries(s).forEach(([u,d])=>p(d)))}return{slots:t,component:i,motionConfig:r,instances:s}},render({slots:n,motionConfig:t,instances:s,component:o}){var c;const l=Wf(t.initial||{}),r=(p,u)=>(p.props||(p.props={}),p.props.style=l,p.props.onVnodeMounted=({el:d})=>{const y=Vf(d,t);s[u]=y},p);if(o){const p=kn(o,void 0,n);return r(p,0),p}return(((c=n.default)==null?void 0:c.call(n))||[]).map((p,u)=>r(p,u))}});function SO(n){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return n.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>s.charAt(t.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const wO={install(n,t){if(n.directive("motion",Yr()),n.component("Motion",DO),!t||t&&!t.excludePresets)for(const s in Qa){const o=Qa[s];n.directive(`motion-${SO(s)}`,Yr(o))}if(t&&t.directives)for(const s in t.directives){const o=t.directives[s];o.initial,n.directive(`motion-${s}`,Yr(o))}}};var au;const So=typeof window<"u",kO=Object.prototype.toString,xO=n=>kO.call(n)==="[object Object]";So&&((au=window==null?void 0:window.navigator)!=null&&au.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function EO(n){return oi()?(Eu(n),!0):!1}function FO(n){var t;const s=L(n);return(t=s==null?void 0:s.$el)!=null?t:s}const PO=So?window:void 0,iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cu="__vueuse_ssr_handlers__";iu[cu]=iu[cu]||{};function TO(n,t={}){const{immediate:s=!0,window:o=PO}=t,l=Q(!1);let r=null;function i(){!l.value||!o||(n(),r=o.requestAnimationFrame(i))}function c(){!l.value&&o&&(l.value=!0,i())}function p(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&c(),EO(p),{isActive:l,pause:p,resume:c}}var pu;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(pu||(pu={}));const Cr="vue-starport-injection",zf="vue-starport-options",$O={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Kf={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var MO=Object.defineProperty,Zl=Object.getOwnPropertySymbols,Yf=Object.prototype.hasOwnProperty,Jf=Object.prototype.propertyIsEnumerable,uu=(n,t,s)=>t in n?MO(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,UO=(n,t)=>{for(var s in t||(t={}))Yf.call(t,s)&&uu(n,s,t[s]);if(Zl)for(var s of Zl(t))Jf.call(t,s)&&uu(n,s,t[s]);return n},du=(n,t)=>{var s={};for(var o in n)Yf.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&Zl)for(var o of Zl(n))t.indexOf(o)<0&&Jf.call(n,o)&&(s[o]=n[o]);return s};const IO=Ee({name:"StarportProxy",props:UO({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Kf),setup(n,t){const s=k(Cr),o=R(()=>s.getInstance(n.port,n.component)),l=Q(),r=o.value.generateId(),i=Q(!1);return o.value.isVisible||(o.value.land(),i.value=!0),Wt(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${n.port}" detected. The later one will be ignored.`);return}if(o.value.el=l.value,await on(),i.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const c=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${n.port}") has no ${c} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Vo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,i.value=!1,!o.value.options.keepAlive&&(await on(),await on(),!o.value.el&&s.dispose(o.value.port))}),Ae(()=>n,async()=>{o.value.props&&await on();const c=n,{props:p}=c,u=du(c,["props"]);o.value.props=p||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const c=n,{initialProps:p,mountedProps:u}=c,d=du(c,["initialProps","mountedProps"]),y=se(d,(i.value?u:p)||{});return kn("div",se(y,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?kn(t.slots.default):void 0)}}});var OO=Object.defineProperty,LO=Object.defineProperties,RO=Object.getOwnPropertyDescriptors,yu=Object.getOwnPropertySymbols,GO=Object.prototype.hasOwnProperty,jO=Object.prototype.propertyIsEnumerable,fu=(n,t,s)=>t in n?OO(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,qO=(n,t)=>{for(var s in t||(t={}))GO.call(t,s)&&fu(n,s,t[s]);if(yu)for(var s of yu(t))jO.call(t,s)&&fu(n,s,t[s]);return n},NO=(n,t)=>LO(n,RO(t));const HO=Ee({name:"Starport",inheritAttrs:!0,props:Kf,setup(n,t){const s=Q(!1);return Wt(()=>{if(s.value=!0,!k(Cr))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var i,c;const o=(c=(i=t.slots).default)==null?void 0:c.call(i);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!xO(r)||qt(r))&&(r={render(){return o}}),kn(IO,NO(qO({},n),{key:n.port,component:sr(r),props:l.props}))}}});function WO(n){const t=We({height:0,width:0,left:0,top:0,update:o,listen:r,pause:i,margin:"0px",padding:"0px"}),s=So?document.documentElement||document.body:void 0;function o(){if(!So)return;const c=FO(n);if(!c)return;const{height:p,width:u,left:d,top:y}=c.getBoundingClientRect(),f=window.getComputedStyle(c),m=f.margin,g=f.padding;Object.assign(t,{height:p,width:u,left:d,top:s.scrollTop+y,margin:m,padding:g})}const l=TO(o,{immediate:!1});function r(){So&&(o(),l.resume())}function i(){l.pause()}return t}let VO=(n,t=21)=>(s=t)=>{let o="",l=s;for(;l--;)o+=n[Math.random()*n.length|0];return o};const hu=VO("abcdefghijklmnopqrstuvwxyz",5);function mu(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function zO(n){var t;return n.name||((t=n.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var KO=Object.defineProperty,gu=Object.getOwnPropertySymbols,YO=Object.prototype.hasOwnProperty,JO=Object.prototype.propertyIsEnumerable,Cu=(n,t,s)=>t in n?KO(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Jr=(n,t)=>{for(var s in t||(t={}))YO.call(t,s)&&Cu(n,s,t[s]);if(gu)for(var s of gu(t))JO.call(t,s)&&Cu(n,s,t[s]);return n};function ZO(n,t,s={}){const o=zO(t),l=mu(o)||hu(),r=Q(),i=Q(null),c=Q(!1),p=Q(!1),u=fh(!0),d=Q({}),y=R(()=>Jr(Jr(Jr({},$O),s),d.value)),f=Q(0);let m;u.run(()=>{m=WO(r),Ae(r,async S=>{S&&(p.value=!0),await on(),r.value||(p.value=!1)})});const g=mu(n);function B(){return`starport-${l}-${g}-${hu()}`}const D=B();return We({el:r,id:D,port:n,props:i,rect:m,scope:u,isLanded:c,isVisible:p,options:y,liftOffTime:f,component:t,componentName:o,componentId:l,generateId:B,setLocalOptions(S={}){d.value=JSON.parse(JSON.stringify(S))},elRef(){return r},liftOff(){c.value&&(c.value=!1,f.value=Date.now(),m.listen())},land(){c.value||(c.value=!0,m.pause())}})}function QO(n){const t=We(new Map);function s(l,r){let i=t.get(l);return i||(i=ZO(l,r,n),t.set(l,i)),i.component=r,i}function o(l){var r;(r=t.get(l))==null||r.scope.stop(),t.delete(l)}return{portMap:t,dispose:o,getInstance:s}}var XO=Object.defineProperty,eL=Object.defineProperties,nL=Object.getOwnPropertyDescriptors,_u=Object.getOwnPropertySymbols,tL=Object.prototype.hasOwnProperty,sL=Object.prototype.propertyIsEnumerable,Au=(n,t,s)=>t in n?XO(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,oL=(n,t)=>{for(var s in t||(t={}))tL.call(t,s)&&Au(n,s,t[s]);if(_u)for(var s of _u(t))sL.call(t,s)&&Au(n,s,t[s]);return n},lL=(n,t)=>eL(n,nL(t));const rL=Ee({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(n){const t=k(Cr);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=R(()=>t.getInstance(n.port,n.component)),o=R(()=>{var i;return((i=s.value.el)==null?void 0:i.id)||s.value.id}),l=R(()=>{const i=Date.now()-s.value.liftOffTime,c=Math.max(0,s.value.options.duration-i),p=s.value.rect,u={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!s.value.isVisible||!s.value.el?lL(oL({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:s.value.options.easing}),u)}),r={onTransitionend(i){s.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${s.value.componentName}" is too short (${i.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${s.value.options.duration/1e3}s).`)}};return()=>{const i=!!(s.value.isLanded&&s.value.el);return kn("div",{style:l.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},kn(C8,{to:i?`#${o.value}`:"body",disabled:!i},kn(s.value.component,se(r,s.value.props))))}}}),aL=Ee({name:"StarportCarrier",setup(n,{slots:t}){const s=QO(k(zf,{}));return Fn().appContext.app.provide(Cr,s),()=>{var l;return[(l=t.default)==null?void 0:l.call(t),Array.from(s.portMap.entries()).map(([r,{component:i}])=>kn(rL,{key:r,port:r,component:i}))]}}});function iL(n={}){return{install(t){t.provide(zf,n),t.component("Starport",HO),t.component("StarportCarrier",aL)}}}function cL(n){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),n.app.use(wO),n.app.use(iL({keepAlive:!0}))}function Bn(n,t,s){var o;return((o=n.instance)==null?void 0:o.$).provides[t]??s}function pL(){return{install(n){n.directive("click",{name:"v-click",mounted(t,s){var d,y,f,m,g,B;if(vo.value||(d=Bn(s,go))!=null&&d.value)return;const o=Bn(s,os),l=Bn(s,mo),r=Bn(s,Ca),i=s.modifiers.hide!==!1&&s.modifiers.hide!=null,c=s.modifiers.fade!==!1&&s.modifiers.fade!=null,p=((y=o==null?void 0:o.value)==null?void 0:y.length)||0,u=c?y3:Fr;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(t))&&o.value.push(t),s.value==null&&(s.value=(m=o==null?void 0:o.value)==null?void 0:m.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((g=o==null?void 0:o.value)==null?void 0:g.length)||0)+Number(s.value)),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[t]);else if(!((B=r==null?void 0:r.value.get(s.value))!=null&&B.includes(t))){const D=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[t].concat(D))}t==null||t.classList.toggle(es,!0),l&&Ae(l,()=>{const D=(l==null?void 0:l.value)??0,S=s.value!=null?D>=s.value:D>p;t.classList.contains(Pr)||t.classList.toggle(u,!S),i!==!1&&i!==void 0&&t.classList.toggle(u,S),t.classList.toggle(Qs,!1);const w=r==null?void 0:r.value.get(D);w==null||w.forEach((v,P)=>{v.classList.toggle(il,!1),P===w.length-1?v.classList.toggle(Qs,!0):v.classList.toggle(il,!0)}),t.classList.contains(Qs)||t.classList.toggle(il,S)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(es,!1);const o=Bn(s,os);o!=null&&o.value&&_a(o.value,t)}}),n.directive("after",{name:"v-after",mounted(t,s){var c,p,u;if(vo.value||(c=Bn(s,go))!=null&&c.value)return;const o=Bn(s,os),l=Bn(s,mo),r=Bn(s,Ca),i=o==null?void 0:o.value.length;s.value==null&&(s.value=o==null?void 0:o.value.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((p=o==null?void 0:o.value)==null?void 0:p.length)||0)+Number(s.value)),r!=null&&r.value.has(s.value)?(u=r==null?void 0:r.value.get(s.value))==null||u.push(t):r==null||r.value.set(s.value,[t]),t==null||t.classList.toggle(es,!0),l&&Ae(l,()=>{const d=(l.value??0)>=(s.value??i??0);t.classList.contains(Pr)||t.classList.toggle(Fr,!d),t.classList.toggle(Qs,!1),t.classList.contains(Qs)||t.classList.toggle(il,d)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(es,!0)}}),n.directive("click-hide",{name:"v-click-hide",mounted(t,s){var i,c,p;if(vo.value||(i=Bn(s,go))!=null&&i.value)return;const o=Bn(s,os),l=Bn(s,mo),r=((c=o==null?void 0:o.value)==null?void 0:c.length)||0;o&&!((p=o==null?void 0:o.value)!=null&&p.includes(t))&&o.value.push(t),t==null||t.classList.toggle(es,!0),l&&Ae(l,()=>{const u=(l==null?void 0:l.value)??0,d=s.value!=null?u>=s.value:u>r;t.classList.toggle(Fr,d),t.classList.toggle(Pr,d)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(es,!1);const o=Bn(s,os);o!=null&&o.value&&_a(o.value,t)}})}}}function uL(n,t){const s=nf(n),o=tf(t,s.currentRoute,s.currentPage);return{nav:{...s,...o},configs:Te,themeConfigs:R(()=>Te.themeConfig)}}function dL(){return{install(n){const t=uL(Ln,In);n.provide(E,We(t))}}}const Ws=mg(zM);Ws.use(vn);Ws.use(p3());Ws.use(pL());Ws.use(dL());cL({app:Ws,router:vn});Ws.mount("#app");export{U0 as $,Xv as A,Q as B,CL as C,dn as D,Le as E,Pe as F,A1 as G,GM as H,In as I,Kl as J,UM as K,jr as L,Wt as M,We as N,mL as O,_L as P,Ae as Q,_ as R,My as S,$e as T,un as U,$1 as V,yL as W,fL as X,Uo as Y,Or as Z,F as _,E as a,Pi as a0,Ti as a1,Ve as a2,F0 as a3,MA as a4,hL as a5,mn as a6,lo as a7,cs as a8,st as a9,Ta as aa,a1 as ab,i1 as ac,c1 as ad,u1 as ae,id as af,Ld as ag,AL as ah,hn as ai,yl as aj,hv as ak,Yd as al,d1 as am,Vo as an,Kd as b,Te as c,Ee as d,Qh as e,b as f,e as g,L as h,k as i,Ye as j,PM as k,a as l,U as m,Xe as n,h as o,_e as p,Si as q,Ds as r,Yn as s,At as t,gL as u,R as v,Tr as w,x,wy as y,o0 as z};
