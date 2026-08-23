(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function T0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Em={exports:{}},Ol={},Tm={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga=Symbol.for("react.element"),w0=Symbol.for("react.portal"),A0=Symbol.for("react.fragment"),C0=Symbol.for("react.strict_mode"),R0=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),b0=Symbol.for("react.context"),L0=Symbol.for("react.forward_ref"),D0=Symbol.for("react.suspense"),N0=Symbol.for("react.memo"),I0=Symbol.for("react.lazy"),dh=Symbol.iterator;function U0(t){return t===null||typeof t!="object"?null:(t=dh&&t[dh]||t["@@iterator"],typeof t=="function"?t:null)}var wm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Am=Object.assign,Cm={};function Ds(t,e,n){this.props=t,this.context=e,this.refs=Cm,this.updater=n||wm}Ds.prototype.isReactComponent={};Ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rm(){}Rm.prototype=Ds.prototype;function Zf(t,e,n){this.props=t,this.context=e,this.refs=Cm,this.updater=n||wm}var Qf=Zf.prototype=new Rm;Qf.constructor=Zf;Am(Qf,Ds.prototype);Qf.isPureReactComponent=!0;var hh=Array.isArray,Pm=Object.prototype.hasOwnProperty,Jf={current:null},bm={key:!0,ref:!0,__self:!0,__source:!0};function Lm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Pm.call(e,i)&&!bm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ga,type:t,key:s,ref:a,props:r,_owner:Jf.current}}function F0(t,e){return{$$typeof:Ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ed(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ga}function O0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ph=/\/+/g;function su(t,e){return typeof t=="object"&&t!==null&&t.key!=null?O0(""+t.key):e.toString(36)}function Go(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ga:case w0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+su(a,0):i,hh(r)?(n="",t!=null&&(n=t.replace(ph,"$&/")+"/"),Go(r,e,n,"",function(u){return u})):r!=null&&(ed(r)&&(r=F0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ph,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",hh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+su(s,o);a+=Go(s,e,n,l,r)}else if(l=U0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+su(s,o++),a+=Go(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ja(t,e,n){if(t==null)return t;var i=[],r=0;return Go(t,i,"","",function(s){return e.call(n,s,r++)}),i}function B0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},Wo={transition:null},k0={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Jf};function Dm(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:Ja,forEach:function(t,e,n){Ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ja(t,function(){e++}),e},toArray:function(t){return Ja(t,function(e){return e})||[]},only:function(t){if(!ed(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Ds;Ve.Fragment=A0;Ve.Profiler=R0;Ve.PureComponent=Zf;Ve.StrictMode=C0;Ve.Suspense=D0;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k0;Ve.act=Dm;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Am({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Jf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Pm.call(e,l)&&!bm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ga,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:b0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:P0,_context:t},t.Consumer=t};Ve.createElement=Lm;Ve.createFactory=function(t){var e=Lm.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:L0,render:t}};Ve.isValidElement=ed;Ve.lazy=function(t){return{$$typeof:I0,_payload:{_status:-1,_result:t},_init:B0}};Ve.memo=function(t,e){return{$$typeof:N0,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=Wo.transition;Wo.transition={};try{t()}finally{Wo.transition=e}};Ve.unstable_act=Dm;Ve.useCallback=function(t,e){return en.current.useCallback(t,e)};Ve.useContext=function(t){return en.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return en.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return en.current.useEffect(t,e)};Ve.useId=function(){return en.current.useId()};Ve.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return en.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};Ve.useRef=function(t){return en.current.useRef(t)};Ve.useState=function(t){return en.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return en.current.useTransition()};Ve.version="18.3.1";Tm.exports=Ve;var Cr=Tm.exports;const z0=T0(Cr);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0=Cr,H0=Symbol.for("react.element"),G0=Symbol.for("react.fragment"),W0=Object.prototype.hasOwnProperty,X0=V0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j0={key:!0,ref:!0,__self:!0,__source:!0};function Nm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)W0.call(e,i)&&!j0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:H0,type:t,key:s,ref:a,props:r,_owner:X0.current}}Ol.Fragment=G0;Ol.jsx=Nm;Ol.jsxs=Nm;Em.exports=Ol;var J=Em.exports,cc={},Im={exports:{}},_n={},Um={exports:{}},Fm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,X){var Z=k.length;k.push(X);e:for(;0<Z;){var oe=Z-1>>>1,re=k[oe];if(0<r(re,X))k[oe]=X,k[Z]=re,Z=oe;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var X=k[0],Z=k.pop();if(Z!==X){k[0]=Z;e:for(var oe=0,re=k.length,Le=re>>>1;oe<Le;){var je=2*(oe+1)-1,Ze=k[je],$=je+1,ie=k[$];if(0>r(Ze,Z))$<re&&0>r(ie,Ze)?(k[oe]=ie,k[$]=Z,oe=$):(k[oe]=Ze,k[je]=Z,oe=je);else if($<re&&0>r(ie,Z))k[oe]=ie,k[$]=Z,oe=$;else break e}}return X}function r(k,X){var Z=k.sortIndex-X.sortIndex;return Z!==0?Z:k.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],d=1,h=null,f=3,p=!1,_=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(k){for(var X=n(u);X!==null;){if(X.callback===null)i(u);else if(X.startTime<=k)i(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function M(k){if(y=!1,x(k),!_)if(n(l)!==null)_=!0,G(C);else{var X=n(u);X!==null&&U(M,X.startTime-k)}}function C(k,X){_=!1,y&&(y=!1,c(S),S=-1),p=!0;var Z=f;try{for(x(X),h=n(l);h!==null&&(!(h.expirationTime>X)||k&&!P());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,f=h.priorityLevel;var re=oe(h.expirationTime<=X);X=t.unstable_now(),typeof re=="function"?h.callback=re:h===n(l)&&i(l),x(X)}else i(l);h=n(l)}if(h!==null)var Le=!0;else{var je=n(u);je!==null&&U(M,je.startTime-X),Le=!1}return Le}finally{h=null,f=Z,p=!1}}var A=!1,R=null,S=-1,T=5,I=-1;function P(){return!(t.unstable_now()-I<T)}function F(){if(R!==null){var k=t.unstable_now();I=k;var X=!0;try{X=R(!0,k)}finally{X?z():(A=!1,R=null)}}else A=!1}var z;if(typeof m=="function")z=function(){m(F)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,H=j.port2;j.port1.onmessage=F,z=function(){H.postMessage(null)}}else z=function(){g(F,0)};function G(k){R=k,A||(A=!0,z())}function U(k,X){S=g(function(){k(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,G(C))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var Z=f;f=X;try{return k()}finally{f=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,X){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var Z=f;f=k;try{return X()}finally{f=Z}},t.unstable_scheduleCallback=function(k,X,Z){var oe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,k){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Z+re,k={id:d++,callback:X,priorityLevel:k,startTime:Z,expirationTime:re,sortIndex:-1},Z>oe?(k.sortIndex=Z,e(u,k),n(l)===null&&k===n(u)&&(y?(c(S),S=-1):y=!0,U(M,Z-oe))):(k.sortIndex=re,e(l,k),_||p||(_=!0,G(C))),k},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(k){var X=f;return function(){var Z=f;f=X;try{return k.apply(this,arguments)}finally{f=Z}}}})(Fm);Um.exports=Fm;var Y0=Um.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0=Cr,mn=Y0;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Om=new Set,Ma={};function Ir(t,e){Ss(t,e),Ss(t+"Capture",e)}function Ss(t,e){for(Ma[t]=e,t=0;t<e.length;t++)Om.add(e[t])}var yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fc=Object.prototype.hasOwnProperty,$0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mh={},gh={};function K0(t){return fc.call(gh,t)?!0:fc.call(mh,t)?!1:$0.test(t)?gh[t]=!0:(mh[t]=!0,!1)}function Z0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Q0(t,e,n,i){if(e===null||typeof e>"u"||Z0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var td=/[\-:]([a-z])/g;function nd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(td,nd);kt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(td,nd);kt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(td,nd);kt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function id(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Q0(e,n,r,i)&&(n=null),i||r===null?K0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Pi=q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eo=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),rd=Symbol.for("react.strict_mode"),dc=Symbol.for("react.profiler"),Bm=Symbol.for("react.provider"),km=Symbol.for("react.context"),sd=Symbol.for("react.forward_ref"),hc=Symbol.for("react.suspense"),pc=Symbol.for("react.suspense_list"),ad=Symbol.for("react.memo"),ki=Symbol.for("react.lazy"),zm=Symbol.for("react.offscreen"),_h=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=_h&&t[_h]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,au;function ia(t){if(au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);au=e&&e[1]||""}return`
`+au+t}var ou=!1;function lu(t,e){if(!t||ou)return"";ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function J0(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=lu(t.type,!1),t;case 11:return t=lu(t.type.render,!1),t;case 1:return t=lu(t.type,!0),t;default:return""}}function mc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case dc:return"Profiler";case rd:return"StrictMode";case hc:return"Suspense";case pc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case km:return(t.displayName||"Context")+".Consumer";case Bm:return(t._context.displayName||"Context")+".Provider";case sd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ad:return e=t.displayName||null,e!==null?e:mc(t.type)||"Memo";case ki:e=t._payload,t=t._init;try{return mc(t(e))}catch{}}return null}function ev(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mc(e);case 8:return e===rd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tv(t){var e=Vm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function to(t){t._valueTracker||(t._valueTracker=tv(t))}function Hm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Vm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gc(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gm(t,e){e=e.checked,e!=null&&id(t,"checked",e,!1)}function _c(t,e){Gm(t,e);var n=tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vc(t,e.type,n):e.hasOwnProperty("defaultValue")&&vc(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vc(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(ra(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function Wm(t,e){var n=tr(e.value),i=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function yh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var no,jm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(no=no||document.createElement("div"),no.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=no.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nv=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){nv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function Ym(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function qm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ym(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var iv=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yc(t,e){if(e){if(iv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Mc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ec=null;function od(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tc=null,hs=null,ps=null;function Mh(t){if(t=ja(t)){if(typeof Tc!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Hl(e),Tc(t.stateNode,t.type,e))}}function $m(t){hs?ps?ps.push(t):ps=[t]:hs=t}function Km(){if(hs){var t=hs,e=ps;if(ps=hs=null,Mh(t),e)for(t=0;t<e.length;t++)Mh(e[t])}}function Zm(t,e){return t(e)}function Qm(){}var uu=!1;function Jm(t,e,n){if(uu)return t(e,n);uu=!0;try{return Zm(t,e,n)}finally{uu=!1,(hs!==null||ps!==null)&&(Qm(),Km())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var i=Hl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var wc=!1;if(yi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){wc=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{wc=!1}function rv(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var fa=!1,ll=null,ul=!1,Ac=null,sv={onError:function(t){fa=!0,ll=t}};function av(t,e,n,i,r,s,a,o,l){fa=!1,ll=null,rv.apply(sv,arguments)}function ov(t,e,n,i,r,s,a,o,l){if(av.apply(this,arguments),fa){if(fa){var u=ll;fa=!1,ll=null}else throw Error(ee(198));ul||(ul=!0,Ac=u)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function eg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Eh(t){if(Ur(t)!==t)throw Error(ee(188))}function lv(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Eh(r),t;if(s===i)return Eh(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function tg(t){return t=lv(t),t!==null?ng(t):null}function ng(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ng(t);if(e!==null)return e;t=t.sibling}return null}var ig=mn.unstable_scheduleCallback,Th=mn.unstable_cancelCallback,uv=mn.unstable_shouldYield,cv=mn.unstable_requestPaint,yt=mn.unstable_now,fv=mn.unstable_getCurrentPriorityLevel,ld=mn.unstable_ImmediatePriority,rg=mn.unstable_UserBlockingPriority,cl=mn.unstable_NormalPriority,dv=mn.unstable_LowPriority,sg=mn.unstable_IdlePriority,Bl=null,Jn=null;function hv(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:gv,pv=Math.log,mv=Math.LN2;function gv(t){return t>>>=0,t===0?32:31-(pv(t)/mv|0)|0}var io=64,ro=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=sa(o):(s&=a,s!==0&&(i=sa(s)))}else a=n&~r,a!==0?i=sa(a):s!==0&&(i=sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function _v(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-zn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=_v(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Cc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ag(){var t=io;return io<<=1,!(io&4194240)&&(io=64),t}function cu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function xv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ud(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function og(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var lg,cd,ug,cg,fg,Rc=!1,so=[],Yi=null,qi=null,$i=null,wa=new Map,Aa=new Map,Vi=[],Sv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wh(t,e){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(e.pointerId)}}function Hs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ja(e),e!==null&&cd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function yv(t,e,n,i,r){switch(e){case"focusin":return Yi=Hs(Yi,t,e,n,i,r),!0;case"dragenter":return qi=Hs(qi,t,e,n,i,r),!0;case"mouseover":return $i=Hs($i,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return wa.set(s,Hs(wa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Aa.set(s,Hs(Aa.get(s)||null,t,e,n,i,r)),!0}return!1}function dg(t){var e=Sr(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=eg(n),e!==null){t.blockedOn=e,fg(t.priority,function(){ug(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ec=i,n.target.dispatchEvent(i),Ec=null}else return e=ja(n),e!==null&&cd(e),t.blockedOn=n,!1;e.shift()}return!0}function Ah(t,e,n){Xo(t)&&n.delete(e)}function Mv(){Rc=!1,Yi!==null&&Xo(Yi)&&(Yi=null),qi!==null&&Xo(qi)&&(qi=null),$i!==null&&Xo($i)&&($i=null),wa.forEach(Ah),Aa.forEach(Ah)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Rc||(Rc=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,Mv)))}function Ca(t){function e(r){return Gs(r,t)}if(0<so.length){Gs(so[0],t);for(var n=1;n<so.length;n++){var i=so[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Yi!==null&&Gs(Yi,t),qi!==null&&Gs(qi,t),$i!==null&&Gs($i,t),wa.forEach(e),Aa.forEach(e),n=0;n<Vi.length;n++)i=Vi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Vi.length&&(n=Vi[0],n.blockedOn===null);)dg(n),n.blockedOn===null&&Vi.shift()}var ms=Pi.ReactCurrentBatchConfig,dl=!0;function Ev(t,e,n,i){var r=tt,s=ms.transition;ms.transition=null;try{tt=1,fd(t,e,n,i)}finally{tt=r,ms.transition=s}}function Tv(t,e,n,i){var r=tt,s=ms.transition;ms.transition=null;try{tt=4,fd(t,e,n,i)}finally{tt=r,ms.transition=s}}function fd(t,e,n,i){if(dl){var r=Pc(t,e,n,i);if(r===null)Su(t,e,i,hl,n),wh(t,i);else if(yv(r,t,e,n,i))i.stopPropagation();else if(wh(t,i),e&4&&-1<Sv.indexOf(t)){for(;r!==null;){var s=ja(r);if(s!==null&&lg(s),s=Pc(t,e,n,i),s===null&&Su(t,e,i,hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Su(t,e,i,null,n)}}var hl=null;function Pc(t,e,n,i){if(hl=null,t=od(i),t=Sr(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=eg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function hg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fv()){case ld:return 1;case rg:return 4;case cl:case dv:return 16;case sg:return 536870912;default:return 16}default:return 16}}var Wi=null,dd=null,jo=null;function pg(){if(jo)return jo;var t,e=dd,n=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return jo=r.slice(t,1<i?1-i:void 0)}function Yo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ao(){return!0}function Ch(){return!1}function vn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ao:Ch,this.isPropagationStopped=Ch,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=vn(Ns),Xa=mt({},Ns,{view:0,detail:0}),wv=vn(Xa),fu,du,Ws,kl=mt({},Xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(fu=t.screenX-Ws.screenX,du=t.screenY-Ws.screenY):du=fu=0,Ws=t),fu)},movementY:function(t){return"movementY"in t?t.movementY:du}}),Rh=vn(kl),Av=mt({},kl,{dataTransfer:0}),Cv=vn(Av),Rv=mt({},Xa,{relatedTarget:0}),hu=vn(Rv),Pv=mt({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),bv=vn(Pv),Lv=mt({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dv=vn(Lv),Nv=mt({},Ns,{data:0}),Ph=vn(Nv),Iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fv[t])?!!e[t]:!1}function pd(){return Ov}var Bv=mt({},Xa,{key:function(t){if(t.key){var e=Iv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Uv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pd,charCode:function(t){return t.type==="keypress"?Yo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kv=vn(Bv),zv=mt({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bh=vn(zv),Vv=mt({},Xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pd}),Hv=vn(Vv),Gv=mt({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wv=vn(Gv),Xv=mt({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jv=vn(Xv),Yv=[9,13,27,32],md=yi&&"CompositionEvent"in window,da=null;yi&&"documentMode"in document&&(da=document.documentMode);var qv=yi&&"TextEvent"in window&&!da,mg=yi&&(!md||da&&8<da&&11>=da),Lh=" ",Dh=!1;function gg(t,e){switch(t){case"keyup":return Yv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _g(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function $v(t,e){switch(t){case"compositionend":return _g(e);case"keypress":return e.which!==32?null:(Dh=!0,Lh);case"textInput":return t=e.data,t===Lh&&Dh?null:t;default:return null}}function Kv(t,e){if(ns)return t==="compositionend"||!md&&gg(t,e)?(t=pg(),jo=dd=Wi=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mg&&e.locale!=="ko"?null:e.data;default:return null}}var Zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zv[t.type]:e==="textarea"}function vg(t,e,n,i){$m(i),e=pl(e,"onChange"),0<e.length&&(n=new hd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ha=null,Ra=null;function Qv(t){Pg(t,0)}function zl(t){var e=ss(t);if(Hm(e))return t}function Jv(t,e){if(t==="change")return e}var xg=!1;if(yi){var pu;if(yi){var mu="oninput"in document;if(!mu){var Ih=document.createElement("div");Ih.setAttribute("oninput","return;"),mu=typeof Ih.oninput=="function"}pu=mu}else pu=!1;xg=pu&&(!document.documentMode||9<document.documentMode)}function Uh(){ha&&(ha.detachEvent("onpropertychange",Sg),Ra=ha=null)}function Sg(t){if(t.propertyName==="value"&&zl(Ra)){var e=[];vg(e,Ra,t,od(t)),Jm(Qv,e)}}function ex(t,e,n){t==="focusin"?(Uh(),ha=e,Ra=n,ha.attachEvent("onpropertychange",Sg)):t==="focusout"&&Uh()}function tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(Ra)}function nx(t,e){if(t==="click")return zl(e)}function ix(t,e){if(t==="input"||t==="change")return zl(e)}function rx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:rx;function Pa(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!fc.call(e,r)||!Gn(t[r],e[r]))return!1}return!0}function Fh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Oh(t,e){var n=Fh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fh(n)}}function yg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mg(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sx(t){var e=Mg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yg(n.ownerDocument.documentElement,n)){if(i!==null&&gd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Oh(n,s);var a=Oh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ax=yi&&"documentMode"in document&&11>=document.documentMode,is=null,bc=null,pa=null,Lc=!1;function Bh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lc||is==null||is!==ol(i)||(i=is,"selectionStart"in i&&gd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),pa&&Pa(pa,i)||(pa=i,i=pl(bc,"onSelect"),0<i.length&&(e=new hd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=is)))}function oo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},gu={},Eg={};yi&&(Eg=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function Vl(t){if(gu[t])return gu[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Eg)return gu[t]=e[n];return t}var Tg=Vl("animationend"),wg=Vl("animationiteration"),Ag=Vl("animationstart"),Cg=Vl("transitionend"),Rg=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){Rg.set(t,e),Ir(e,[t])}for(var _u=0;_u<kh.length;_u++){var vu=kh[_u],ox=vu.toLowerCase(),lx=vu[0].toUpperCase()+vu.slice(1);rr(ox,"on"+lx)}rr(Tg,"onAnimationEnd");rr(wg,"onAnimationIteration");rr(Ag,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(Cg,"onTransitionEnd");Ss("onMouseEnter",["mouseout","mouseover"]);Ss("onMouseLeave",["mouseout","mouseover"]);Ss("onPointerEnter",["pointerout","pointerover"]);Ss("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function zh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ov(i,e,void 0,t),t.currentTarget=null}function Pg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;zh(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;zh(r,o,u),s=l}}}if(ul)throw t=Ac,ul=!1,Ac=null,t}function ct(t,e){var n=e[Fc];n===void 0&&(n=e[Fc]=new Set);var i=t+"__bubble";n.has(i)||(bg(e,t,2,!1),n.add(i))}function xu(t,e,n){var i=0;e&&(i|=4),bg(n,t,i,e)}var lo="_reactListening"+Math.random().toString(36).slice(2);function ba(t){if(!t[lo]){t[lo]=!0,Om.forEach(function(n){n!=="selectionchange"&&(ux.has(n)||xu(n,!1,t),xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[lo]||(e[lo]=!0,xu("selectionchange",!1,e))}}function bg(t,e,n,i){switch(hg(e)){case 1:var r=Ev;break;case 4:r=Tv;break;default:r=fd}n=r.bind(null,e,n,t),r=void 0,!wc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Su(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Sr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Jm(function(){var u=s,d=od(n),h=[];e:{var f=Rg.get(t);if(f!==void 0){var p=hd,_=t;switch(t){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":p=kv;break;case"focusin":_="focus",p=hu;break;case"focusout":_="blur",p=hu;break;case"beforeblur":case"afterblur":p=hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Hv;break;case Tg:case wg:case Ag:p=bv;break;case Cg:p=Wv;break;case"scroll":p=wv;break;case"wheel":p=jv;break;case"copy":case"cut":case"paste":p=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bh}var y=(e&4)!==0,g=!y&&t==="scroll",c=y?f!==null?f+"Capture":null:f;y=[];for(var m=u,x;m!==null;){x=m;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,c!==null&&(M=Ta(m,c),M!=null&&y.push(La(m,M,x)))),g)break;m=m.return}0<y.length&&(f=new p(f,_,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Ec&&(_=n.relatedTarget||n.fromElement)&&(Sr(_)||_[Mi]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Sr(_):null,_!==null&&(g=Ur(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=Rh,M="onMouseLeave",c="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=bh,M="onPointerLeave",c="onPointerEnter",m="pointer"),g=p==null?f:ss(p),x=_==null?f:ss(_),f=new y(M,m+"leave",p,n,d),f.target=g,f.relatedTarget=x,M=null,Sr(d)===u&&(y=new y(c,m+"enter",_,n,d),y.target=x,y.relatedTarget=g,M=y),g=M,p&&_)t:{for(y=p,c=_,m=0,x=y;x;x=Br(x))m++;for(x=0,M=c;M;M=Br(M))x++;for(;0<m-x;)y=Br(y),m--;for(;0<x-m;)c=Br(c),x--;for(;m--;){if(y===c||c!==null&&y===c.alternate)break t;y=Br(y),c=Br(c)}y=null}else y=null;p!==null&&Vh(h,f,p,y,!1),_!==null&&g!==null&&Vh(h,g,_,y,!0)}}e:{if(f=u?ss(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=Jv;else if(Nh(f))if(xg)C=ix;else{C=tx;var A=ex}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=nx);if(C&&(C=C(t,u))){vg(h,C,n,d);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&vc(f,"number",f.value)}switch(A=u?ss(u):window,t){case"focusin":(Nh(A)||A.contentEditable==="true")&&(is=A,bc=u,pa=null);break;case"focusout":pa=bc=is=null;break;case"mousedown":Lc=!0;break;case"contextmenu":case"mouseup":case"dragend":Lc=!1,Bh(h,n,d);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":Bh(h,n,d)}var R;if(md)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else ns?gg(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(mg&&n.locale!=="ko"&&(ns||S!=="onCompositionStart"?S==="onCompositionEnd"&&ns&&(R=pg()):(Wi=d,dd="value"in Wi?Wi.value:Wi.textContent,ns=!0)),A=pl(u,S),0<A.length&&(S=new Ph(S,t,null,n,d),h.push({event:S,listeners:A}),R?S.data=R:(R=_g(n),R!==null&&(S.data=R)))),(R=qv?$v(t,n):Kv(t,n))&&(u=pl(u,"onBeforeInput"),0<u.length&&(d=new Ph("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=R))}Pg(h,e)})}function La(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ta(t,n),s!=null&&i.unshift(La(t,s,r)),s=Ta(t,e),s!=null&&i.push(La(t,s,r))),t=t.return}return i}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Ta(n,s),l!=null&&a.unshift(La(n,l,o))):r||(l=Ta(n,s),l!=null&&a.push(La(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var cx=/\r\n?/g,fx=/\u0000|\uFFFD/g;function Hh(t){return(typeof t=="string"?t:""+t).replace(cx,`
`).replace(fx,"")}function uo(t,e,n){if(e=Hh(e),Hh(t)!==e&&n)throw Error(ee(425))}function ml(){}var Dc=null,Nc=null;function Ic(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uc=typeof setTimeout=="function"?setTimeout:void 0,dx=typeof clearTimeout=="function"?clearTimeout:void 0,Gh=typeof Promise=="function"?Promise:void 0,hx=typeof queueMicrotask=="function"?queueMicrotask:typeof Gh<"u"?function(t){return Gh.resolve(null).then(t).catch(px)}:Uc;function px(t){setTimeout(function(){throw t})}function yu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ca(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ca(e)}function Ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Is,Da="__reactProps$"+Is,Mi="__reactContainer$"+Is,Fc="__reactEvents$"+Is,mx="__reactListeners$"+Is,gx="__reactHandles$"+Is;function Sr(t){var e=t[Kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[Kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wh(t);t!==null;){if(n=t[Kn])return n;t=Wh(t)}return e}t=n,n=t.parentNode}return null}function ja(t){return t=t[Kn]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Hl(t){return t[Da]||null}var Oc=[],as=-1;function sr(t){return{current:t}}function ft(t){0>as||(t.current=Oc[as],Oc[as]=null,as--)}function ut(t,e){as++,Oc[as]=t.current,t.current=e}var nr={},Yt=sr(nr),sn=sr(!1),Rr=nr;function ys(t,e){var n=t.type.contextTypes;if(!n)return nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function gl(){ft(sn),ft(Yt)}function Xh(t,e,n){if(Yt.current!==nr)throw Error(ee(168));ut(Yt,e),ut(sn,n)}function Lg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,ev(t)||"Unknown",r));return mt({},n,i)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Rr=Yt.current,ut(Yt,t),ut(sn,sn.current),!0}function jh(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=Lg(t,e,Rr),i.__reactInternalMemoizedMergedChildContext=t,ft(sn),ft(Yt),ut(Yt,t)):ft(sn),ut(sn,n)}var hi=null,Gl=!1,Mu=!1;function Dg(t){hi===null?hi=[t]:hi.push(t)}function _x(t){Gl=!0,Dg(t)}function ar(){if(!Mu&&hi!==null){Mu=!0;var t=0,e=tt;try{var n=hi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}hi=null,Gl=!1}catch(r){throw hi!==null&&(hi=hi.slice(t+1)),ig(ld,ar),r}finally{tt=e,Mu=!1}}return null}var os=[],ls=0,vl=null,xl=0,yn=[],Mn=0,Pr=null,mi=1,gi="";function mr(t,e){os[ls++]=xl,os[ls++]=vl,vl=t,xl=e}function Ng(t,e,n){yn[Mn++]=mi,yn[Mn++]=gi,yn[Mn++]=Pr,Pr=t;var i=mi;t=gi;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,mi=1<<32-zn(e)+r|n<<r|i,gi=s+t}else mi=1<<s|n<<r|i,gi=t}function _d(t){t.return!==null&&(mr(t,1),Ng(t,1,0))}function vd(t){for(;t===vl;)vl=os[--ls],os[ls]=null,xl=os[--ls],os[ls]=null;for(;t===Pr;)Pr=yn[--Mn],yn[Mn]=null,gi=yn[--Mn],yn[Mn]=null,mi=yn[--Mn],yn[Mn]=null}var pn=null,hn=null,dt=!1,On=null;function Ig(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,hn=Ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:mi,overflow:gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,hn=null,!0):!1;default:return!1}}function Bc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kc(t){if(dt){var e=hn;if(e){var n=e;if(!Yh(t,e)){if(Bc(t))throw Error(ee(418));e=Ki(n.nextSibling);var i=pn;e&&Yh(t,e)?Ig(i,n):(t.flags=t.flags&-4097|2,dt=!1,pn=t)}}else{if(Bc(t))throw Error(ee(418));t.flags=t.flags&-4097|2,dt=!1,pn=t}}}function qh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function co(t){if(t!==pn)return!1;if(!dt)return qh(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ic(t.type,t.memoizedProps)),e&&(e=hn)){if(Bc(t))throw Ug(),Error(ee(418));for(;e;)Ig(t,e),e=Ki(e.nextSibling)}if(qh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=pn?Ki(t.stateNode.nextSibling):null;return!0}function Ug(){for(var t=hn;t;)t=Ki(t.nextSibling)}function Ms(){hn=pn=null,dt=!1}function xd(t){On===null?On=[t]:On.push(t)}var vx=Pi.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function fo(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $h(t){var e=t._init;return e(t._payload)}function Fg(t){function e(c,m){if(t){var x=c.deletions;x===null?(c.deletions=[m],c.flags|=16):x.push(m)}}function n(c,m){if(!t)return null;for(;m!==null;)e(c,m),m=m.sibling;return null}function i(c,m){for(c=new Map;m!==null;)m.key!==null?c.set(m.key,m):c.set(m.index,m),m=m.sibling;return c}function r(c,m){return c=er(c,m),c.index=0,c.sibling=null,c}function s(c,m,x){return c.index=x,t?(x=c.alternate,x!==null?(x=x.index,x<m?(c.flags|=2,m):x):(c.flags|=2,m)):(c.flags|=1048576,m)}function a(c){return t&&c.alternate===null&&(c.flags|=2),c}function o(c,m,x,M){return m===null||m.tag!==6?(m=Pu(x,c.mode,M),m.return=c,m):(m=r(m,x),m.return=c,m)}function l(c,m,x,M){var C=x.type;return C===ts?d(c,m,x.props.children,M,x.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ki&&$h(C)===m.type)?(M=r(m,x.props),M.ref=Xs(c,m,x),M.return=c,M):(M=el(x.type,x.key,x.props,null,c.mode,M),M.ref=Xs(c,m,x),M.return=c,M)}function u(c,m,x,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=bu(x,c.mode,M),m.return=c,m):(m=r(m,x.children||[]),m.return=c,m)}function d(c,m,x,M,C){return m===null||m.tag!==7?(m=Ar(x,c.mode,M,C),m.return=c,m):(m=r(m,x),m.return=c,m)}function h(c,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Pu(""+m,c.mode,x),m.return=c,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case eo:return x=el(m.type,m.key,m.props,null,c.mode,x),x.ref=Xs(c,null,m),x.return=c,x;case es:return m=bu(m,c.mode,x),m.return=c,m;case ki:var M=m._init;return h(c,M(m._payload),x)}if(ra(m)||zs(m))return m=Ar(m,c.mode,x,null),m.return=c,m;fo(c,m)}return null}function f(c,m,x,M){var C=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:o(c,m,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case eo:return x.key===C?l(c,m,x,M):null;case es:return x.key===C?u(c,m,x,M):null;case ki:return C=x._init,f(c,m,C(x._payload),M)}if(ra(x)||zs(x))return C!==null?null:d(c,m,x,M,null);fo(c,x)}return null}function p(c,m,x,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return c=c.get(x)||null,o(m,c,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case eo:return c=c.get(M.key===null?x:M.key)||null,l(m,c,M,C);case es:return c=c.get(M.key===null?x:M.key)||null,u(m,c,M,C);case ki:var A=M._init;return p(c,m,x,A(M._payload),C)}if(ra(M)||zs(M))return c=c.get(x)||null,d(m,c,M,C,null);fo(m,M)}return null}function _(c,m,x,M){for(var C=null,A=null,R=m,S=m=0,T=null;R!==null&&S<x.length;S++){R.index>S?(T=R,R=null):T=R.sibling;var I=f(c,R,x[S],M);if(I===null){R===null&&(R=T);break}t&&R&&I.alternate===null&&e(c,R),m=s(I,m,S),A===null?C=I:A.sibling=I,A=I,R=T}if(S===x.length)return n(c,R),dt&&mr(c,S),C;if(R===null){for(;S<x.length;S++)R=h(c,x[S],M),R!==null&&(m=s(R,m,S),A===null?C=R:A.sibling=R,A=R);return dt&&mr(c,S),C}for(R=i(c,R);S<x.length;S++)T=p(R,c,S,x[S],M),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?S:T.key),m=s(T,m,S),A===null?C=T:A.sibling=T,A=T);return t&&R.forEach(function(P){return e(c,P)}),dt&&mr(c,S),C}function y(c,m,x,M){var C=zs(x);if(typeof C!="function")throw Error(ee(150));if(x=C.call(x),x==null)throw Error(ee(151));for(var A=C=null,R=m,S=m=0,T=null,I=x.next();R!==null&&!I.done;S++,I=x.next()){R.index>S?(T=R,R=null):T=R.sibling;var P=f(c,R,I.value,M);if(P===null){R===null&&(R=T);break}t&&R&&P.alternate===null&&e(c,R),m=s(P,m,S),A===null?C=P:A.sibling=P,A=P,R=T}if(I.done)return n(c,R),dt&&mr(c,S),C;if(R===null){for(;!I.done;S++,I=x.next())I=h(c,I.value,M),I!==null&&(m=s(I,m,S),A===null?C=I:A.sibling=I,A=I);return dt&&mr(c,S),C}for(R=i(c,R);!I.done;S++,I=x.next())I=p(R,c,S,I.value,M),I!==null&&(t&&I.alternate!==null&&R.delete(I.key===null?S:I.key),m=s(I,m,S),A===null?C=I:A.sibling=I,A=I);return t&&R.forEach(function(F){return e(c,F)}),dt&&mr(c,S),C}function g(c,m,x,M){if(typeof x=="object"&&x!==null&&x.type===ts&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case eo:e:{for(var C=x.key,A=m;A!==null;){if(A.key===C){if(C=x.type,C===ts){if(A.tag===7){n(c,A.sibling),m=r(A,x.props.children),m.return=c,c=m;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ki&&$h(C)===A.type){n(c,A.sibling),m=r(A,x.props),m.ref=Xs(c,A,x),m.return=c,c=m;break e}n(c,A);break}else e(c,A);A=A.sibling}x.type===ts?(m=Ar(x.props.children,c.mode,M,x.key),m.return=c,c=m):(M=el(x.type,x.key,x.props,null,c.mode,M),M.ref=Xs(c,m,x),M.return=c,c=M)}return a(c);case es:e:{for(A=x.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(c,m.sibling),m=r(m,x.children||[]),m.return=c,c=m;break e}else{n(c,m);break}else e(c,m);m=m.sibling}m=bu(x,c.mode,M),m.return=c,c=m}return a(c);case ki:return A=x._init,g(c,m,A(x._payload),M)}if(ra(x))return _(c,m,x,M);if(zs(x))return y(c,m,x,M);fo(c,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(c,m.sibling),m=r(m,x),m.return=c,c=m):(n(c,m),m=Pu(x,c.mode,M),m.return=c,c=m),a(c)):n(c,m)}return g}var Es=Fg(!0),Og=Fg(!1),Sl=sr(null),yl=null,us=null,Sd=null;function yd(){Sd=us=yl=null}function Md(t){var e=Sl.current;ft(Sl),t._currentValue=e}function zc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function gs(t,e){yl=t,Sd=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(Sd!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(yl===null)throw Error(ee(308));us=t,yl.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var yr=null;function Ed(t){yr===null?yr=[t]:yr.push(t)}function Bg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ed(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zi=!1;function Td(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,Ed(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function qo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ud(t,n)}}function Kh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ml(t,e,n,i){var r=t.updateQueue;zi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=u=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(f=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(p,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(p,h,f):_,f==null)break e;h=mt({},h,f);break e;case 2:zi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=p,l=h):d=d.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lr|=a,t.lanes=a,t.memoizedState=h}}function Zh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Ya={},ei=sr(Ya),Na=sr(Ya),Ia=sr(Ya);function Mr(t){if(t===Ya)throw Error(ee(174));return t}function wd(t,e){switch(ut(Ia,e),ut(Na,t),ut(ei,Ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sc(e,t)}ft(ei),ut(ei,e)}function Ts(){ft(ei),ft(Na),ft(Ia)}function zg(t){Mr(Ia.current);var e=Mr(ei.current),n=Sc(e,t.type);e!==n&&(ut(Na,t),ut(ei,n))}function Ad(t){Na.current===t&&(ft(ei),ft(Na))}var ht=sr(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Eu=[];function Cd(){for(var t=0;t<Eu.length;t++)Eu[t]._workInProgressVersionPrimary=null;Eu.length=0}var $o=Pi.ReactCurrentDispatcher,Tu=Pi.ReactCurrentBatchConfig,br=0,pt=null,At=null,Nt=null,Tl=!1,ma=!1,Ua=0,xx=0;function Vt(){throw Error(ee(321))}function Rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function Pd(t,e,n,i,r,s){if(br=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$o.current=t===null||t.memoizedState===null?Ex:Tx,t=n(i,r),ma){s=0;do{if(ma=!1,Ua=0,25<=s)throw Error(ee(301));s+=1,Nt=At=null,e.updateQueue=null,$o.current=wx,t=n(i,r)}while(ma)}if($o.current=wl,e=At!==null&&At.next!==null,br=0,Nt=At=pt=null,Tl=!1,e)throw Error(ee(300));return t}function bd(){var t=Ua!==0;return Ua=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?pt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Pn(){if(At===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Nt===null?pt.memoizedState:Nt.next;if(e!==null)Nt=e,At=t;else{if(t===null)throw Error(ee(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Nt===null?pt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Fa(t,e){return typeof e=="function"?e(t):e}function wu(t){var e=Pn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var d=u.lane;if((br&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,pt.lanes|=d,Lr|=d}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Gn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,Lr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Au(t){var e=Pn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Gn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Vg(){}function Hg(t,e){var n=pt,i=Pn(),r=e(),s=!Gn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,Ld(Xg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Oa(9,Wg.bind(null,n,i,r,e),void 0,null),It===null)throw Error(ee(349));br&30||Gg(n,e,r)}return r}function Gg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wg(t,e,n,i){e.value=n,e.getSnapshot=i,jg(e)&&Yg(t)}function Xg(t,e,n){return n(function(){jg(e)&&Yg(t)})}function jg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function Yg(t){var e=Ei(t,1);e!==null&&Vn(e,t,1,-1)}function Qh(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=Mx.bind(null,pt,t),[e.memoizedState,t]}function Oa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function qg(){return Pn().memoizedState}function Ko(t,e,n,i){var r=qn();pt.flags|=t,r.memoizedState=Oa(1|e,n,void 0,i===void 0?null:i)}function Wl(t,e,n,i){var r=Pn();i=i===void 0?null:i;var s=void 0;if(At!==null){var a=At.memoizedState;if(s=a.destroy,i!==null&&Rd(i,a.deps)){r.memoizedState=Oa(e,n,s,i);return}}pt.flags|=t,r.memoizedState=Oa(1|e,n,s,i)}function Jh(t,e){return Ko(8390656,8,t,e)}function Ld(t,e){return Wl(2048,8,t,e)}function $g(t,e){return Wl(4,2,t,e)}function Kg(t,e){return Wl(4,4,t,e)}function Zg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qg(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4,4,Zg.bind(null,e,t),n)}function Dd(){}function Jg(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function e_(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function t_(t,e,n){return br&21?(Gn(n,e)||(n=ag(),pt.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function Sx(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Tu.transition;Tu.transition={};try{t(!1),e()}finally{tt=n,Tu.transition=i}}function n_(){return Pn().memoizedState}function yx(t,e,n){var i=Ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},i_(t))r_(e,n);else if(n=Bg(t,e,n,i),n!==null){var r=Zt();Vn(n,t,i,r),s_(n,e,i)}}function Mx(t,e,n){var i=Ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(i_(t))r_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Gn(o,a)){var l=e.interleaved;l===null?(r.next=r,Ed(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Bg(t,e,r,i),n!==null&&(r=Zt(),Vn(n,t,i,r),s_(n,e,i))}}function i_(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function r_(t,e){ma=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function s_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ud(t,n)}}var wl={readContext:Rn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},Ex={readContext:Rn,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:Jh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ko(4194308,4,Zg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ko(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=yx.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:Qh,useDebugValue:Dd,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=Qh(!1),e=t[0];return t=Sx.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=qn();if(dt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),It===null)throw Error(ee(349));br&30||Gg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Jh(Xg.bind(null,i,s,t),[t]),i.flags|=2048,Oa(9,Wg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=It.identifierPrefix;if(dt){var n=gi,i=mi;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Tx={readContext:Rn,useCallback:Jg,useContext:Rn,useEffect:Ld,useImperativeHandle:Qg,useInsertionEffect:$g,useLayoutEffect:Kg,useMemo:e_,useReducer:wu,useRef:qg,useState:function(){return wu(Fa)},useDebugValue:Dd,useDeferredValue:function(t){var e=Pn();return t_(e,At.memoizedState,t)},useTransition:function(){var t=wu(Fa)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Vg,useSyncExternalStore:Hg,useId:n_,unstable_isNewReconciler:!1},wx={readContext:Rn,useCallback:Jg,useContext:Rn,useEffect:Ld,useImperativeHandle:Qg,useInsertionEffect:$g,useLayoutEffect:Kg,useMemo:e_,useReducer:Au,useRef:qg,useState:function(){return Au(Fa)},useDebugValue:Dd,useDeferredValue:function(t){var e=Pn();return At===null?e.memoizedState=t:t_(e,At.memoizedState,t)},useTransition:function(){var t=Au(Fa)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Vg,useSyncExternalStore:Hg,useId:n_,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xl={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Ji(t),s=vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(Vn(e,t,r,i),qo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Ji(t),s=vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(Vn(e,t,r,i),qo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=Ji(t),r=vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(t,r,i),e!==null&&(Vn(e,t,i,n),qo(e,t,i))}};function ep(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Pa(n,i)||!Pa(r,s):!0}function a_(t,e,n){var i=!1,r=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(r=an(e)?Rr:Yt.current,i=e.contextTypes,s=(i=i!=null)?ys(t,r):nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function tp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Xl.enqueueReplaceState(e,e.state,null)}function Hc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Td(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Rn(s):(s=an(e)?Rr:Yt.current,r.context=ys(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Xl.enqueueReplaceState(r,r.state,null),Ml(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e){try{var n="",i=e;do n+=J0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Cu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ax=typeof WeakMap=="function"?WeakMap:Map;function o_(t,e,n){n=vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Cl||(Cl=!0,Jc=i),Gc(t,e)},n}function l_(t,e,n){n=vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Gc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gc(t,e),typeof i!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function np(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ax;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=zx.bind(null,t,e,n),e.then(t,t))}function ip(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vi(-1,1),e.tag=2,Zi(n,e,1))),n.lanes|=1),t)}var Cx=Pi.ReactCurrentOwner,rn=!1;function Kt(t,e,n,i){e.child=t===null?Og(e,null,n,i):Es(e,t.child,n,i)}function sp(t,e,n,i,r){n=n.render;var s=e.ref;return gs(e,r),i=Pd(t,e,n,i,s,r),n=bd(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(dt&&n&&_d(e),e.flags|=1,Kt(t,e,i,r),e.child)}function ap(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!zd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,u_(t,e,s,i,r)):(t=el(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(a,i)&&t.ref===e.ref)return Ti(t,e,r)}return e.flags|=1,t=er(s,i),t.ref=e.ref,t.return=e,e.child=t}function u_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Pa(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Ti(t,e,r)}return Wc(t,e,n,i,r)}function c_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(fs,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(fs,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(fs,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(fs,dn),dn|=i;return Kt(t,e,r,n),e.child}function f_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wc(t,e,n,i,r){var s=an(n)?Rr:Yt.current;return s=ys(e,s),gs(e,r),n=Pd(t,e,n,i,s,r),i=bd(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(dt&&i&&_d(e),e.flags|=1,Kt(t,e,n,r),e.child)}function op(t,e,n,i,r){if(an(n)){var s=!0;_l(e)}else s=!1;if(gs(e,r),e.stateNode===null)Zo(t,e),a_(e,n,i),Hc(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rn(u):(u=an(n)?Rr:Yt.current,u=ys(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&tp(e,a,i,u),zi=!1;var f=e.memoizedState;a.state=f,Ml(e,i,a,r),l=e.memoizedState,o!==i||f!==l||sn.current||zi?(typeof d=="function"&&(Vc(e,n,d,i),l=e.memoizedState),(o=zi||ep(e,n,o,i,f,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,kg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Un(e.type,o),a.props=u,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=an(n)?Rr:Yt.current,l=ys(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&tp(e,a,i,l),zi=!1,f=e.memoizedState,a.state=f,Ml(e,i,a,r);var _=e.memoizedState;o!==h||f!==_||sn.current||zi?(typeof p=="function"&&(Vc(e,n,p,i),_=e.memoizedState),(u=zi||ep(e,n,u,i,f,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Xc(t,e,n,i,s,r)}function Xc(t,e,n,i,r,s){f_(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&jh(e,n,!1),Ti(t,e,s);i=e.stateNode,Cx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Es(e,t.child,null,s),e.child=Es(e,null,o,s)):Kt(t,e,o,s),e.memoizedState=i.state,r&&jh(e,n,!0),e.child}function d_(t){var e=t.stateNode;e.pendingContext?Xh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xh(t,e.context,!1),wd(t,e.containerInfo)}function lp(t,e,n,i,r){return Ms(),xd(r),e.flags|=256,Kt(t,e,n,i),e.child}var jc={dehydrated:null,treeContext:null,retryLane:0};function Yc(t){return{baseLanes:t,cachePool:null,transitions:null}}function h_(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(ht,r&1),t===null)return kc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ql(a,i,0,null),t=Ar(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yc(n),e.memoizedState=jc,t):Nd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Rx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=er(o,s):(s=Ar(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Yc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=jc,i}return s=t.child,t=s.sibling,i=er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Nd(t,e){return e=ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ho(t,e,n,i){return i!==null&&xd(i),Es(e,t.child,null,n),t=Nd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Rx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Cu(Error(ee(422))),ho(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ql({mode:"visible",children:i.children},r,0,null),s=Ar(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Es(e,t.child,null,a),e.child.memoizedState=Yc(a),e.memoizedState=jc,s);if(!(e.mode&1))return ho(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ee(419)),i=Cu(s,i,void 0),ho(t,e,a,i)}if(o=(a&t.childLanes)!==0,rn||o){if(i=It,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(t,r),Vn(i,t,r,-1))}return kd(),i=Cu(Error(ee(421))),ho(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Vx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=Ki(r.nextSibling),pn=e,dt=!0,On=null,t!==null&&(yn[Mn++]=mi,yn[Mn++]=gi,yn[Mn++]=Pr,mi=t.id,gi=t.overflow,Pr=e),e=Nd(e,i.children),e.flags|=4096,e)}function up(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),zc(t.return,e,n)}function Ru(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function p_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&up(t,n,e);else if(t.tag===19)up(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ru(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&El(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ru(e,!0,n,null,s);break;case"together":Ru(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ti(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Px(t,e,n){switch(e.tag){case 3:d_(e),Ms();break;case 5:zg(e);break;case 1:an(e.type)&&_l(e);break;case 4:wd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?h_(t,e,n):(ut(ht,ht.current&1),t=Ti(t,e,n),t!==null?t.sibling:null);ut(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return p_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,c_(t,e,n)}return Ti(t,e,n)}var m_,qc,g_,__;m_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qc=function(){};g_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Mr(ei.current);var s=null;switch(n){case"input":r=gc(t,r),i=gc(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=xc(t,r),i=xc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ml)}yc(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ma.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ct("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};__=function(t,e,n,i){n!==i&&(e.flags|=4)};function js(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function bx(t,e,n){var i=e.pendingProps;switch(vd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return an(e.type)&&gl(),Ht(e),null;case 3:return i=e.stateNode,Ts(),ft(sn),ft(Yt),Cd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(co(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(nf(On),On=null))),qc(t,e),Ht(e),null;case 5:Ad(e);var r=Mr(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)g_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Ht(e),null}if(t=Mr(ei.current),co(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Kn]=e,i[Da]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<aa.length;r++)ct(aa[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":vh(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":Sh(i,s),ct("invalid",i)}yc(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&uo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&uo(i.textContent,o,t),r=["children",""+o]):Ma.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ct("scroll",i)}switch(n){case"input":to(i),xh(i,s,!0);break;case"textarea":to(i),yh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Kn]=e,t[Da]=i,m_(t,e,!1,!1),e.stateNode=t;e:{switch(a=Mc(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<aa.length;r++)ct(aa[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":vh(t,i),r=gc(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":Sh(t,i),r=xc(t,i),ct("invalid",t);break;default:r=i}yc(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?qm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ea(t,l):typeof l=="number"&&Ea(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&id(t,s,l,a))}switch(n){case"input":to(t),xh(t,i,!1);break;case"textarea":to(t),yh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+tr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)__(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Mr(Ia.current),Mr(ei.current),co(e)){if(i=e.stateNode,n=e.memoizedProps,i[Kn]=e,(s=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:uo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Kn]=e,e.stateNode=i}return Ht(e),null;case 13:if(ft(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&hn!==null&&e.mode&1&&!(e.flags&128))Ug(),Ms(),e.flags|=98560,s=!1;else if(s=co(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Kn]=e}else Ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else On!==null&&(nf(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?Ct===0&&(Ct=3):kd())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return Ts(),qc(t,e),t===null&&ba(e.stateNode.containerInfo),Ht(e),null;case 10:return Md(e.type._context),Ht(e),null;case 17:return an(e.type)&&gl(),Ht(e),null;case 19:if(ft(ht),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)js(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=El(t),a!==null){for(e.flags|=128,js(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>As&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304)}else{if(!i)if(t=El(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!dt)return Ht(e),null}else 2*yt()-s.renderingStartTime>As&&n!==1073741824&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ht.current,ut(ht,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return Bd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function Lx(t,e){switch(vd(e),e.tag){case 1:return an(e.type)&&gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ts(),ft(sn),ft(Yt),Cd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ad(e),null;case 13:if(ft(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(ht),null;case 4:return Ts(),null;case 10:return Md(e.type._context),null;case 22:case 23:return Bd(),null;case 24:return null;default:return null}}var po=!1,Xt=!1,Dx=typeof WeakSet=="function"?WeakSet:Set,ge=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function $c(t,e,n){try{n()}catch(i){_t(t,e,i)}}var cp=!1;function Nx(t,e){if(Dc=dl,t=Mg(),gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++d===i&&(l=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nc={focusedElem:t,selectionRange:n},dl=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,c=e.stateNode,m=c.getSnapshotBeforeUpdate(e.elementType===e.type?y:Un(e.type,y),g);c.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(M){_t(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return _=cp,cp=!1,_}function ga(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&$c(e,n,s)}r=r.next}while(r!==i)}}function jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Kc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function v_(t){var e=t.alternate;e!==null&&(t.alternate=null,v_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kn],delete e[Da],delete e[Fc],delete e[mx],delete e[gx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function x_(t){return t.tag===5||t.tag===3||t.tag===4}function fp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||x_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ml));else if(i!==4&&(t=t.child,t!==null))for(Zc(t,e,n),t=t.sibling;t!==null;)Zc(t,e,n),t=t.sibling}function Qc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qc(t,e,n),t=t.sibling;t!==null;)Qc(t,e,n),t=t.sibling}var Ft=null,Fn=!1;function Di(t,e,n){for(n=n.child;n!==null;)S_(t,e,n),n=n.sibling}function S_(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 5:Xt||cs(n,e);case 6:var i=Ft,r=Fn;Ft=null,Di(t,e,n),Ft=i,Fn=r,Ft!==null&&(Fn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(Fn?(t=Ft,n=n.stateNode,t.nodeType===8?yu(t.parentNode,n):t.nodeType===1&&yu(t,n),Ca(t)):yu(Ft,n.stateNode));break;case 4:i=Ft,r=Fn,Ft=n.stateNode.containerInfo,Fn=!0,Di(t,e,n),Ft=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&$c(n,e,a),r=r.next}while(r!==i)}Di(t,e,n);break;case 1:if(!Xt&&(cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){_t(n,e,o)}Di(t,e,n);break;case 21:Di(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Di(t,e,n),Xt=i):Di(t,e,n);break;default:Di(t,e,n)}}function dp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Dx),e.forEach(function(i){var r=Hx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ft=o.stateNode,Fn=!1;break e;case 3:Ft=o.stateNode.containerInfo,Fn=!0;break e;case 4:Ft=o.stateNode.containerInfo,Fn=!0;break e}o=o.return}if(Ft===null)throw Error(ee(160));S_(s,a,r),Ft=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){_t(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)y_(e,t),e=e.sibling}function y_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),Xn(t),i&4){try{ga(3,t,t.return),jl(3,t)}catch(y){_t(t,t.return,y)}try{ga(5,t,t.return)}catch(y){_t(t,t.return,y)}}break;case 1:Ln(e,t),Xn(t),i&512&&n!==null&&cs(n,n.return);break;case 5:if(Ln(e,t),Xn(t),i&512&&n!==null&&cs(n,n.return),t.flags&32){var r=t.stateNode;try{Ea(r,"")}catch(y){_t(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Gm(r,s),Mc(o,a);var u=Mc(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?qm(r,h):d==="dangerouslySetInnerHTML"?jm(r,h):d==="children"?Ea(r,h):id(r,d,h,u)}switch(o){case"input":_c(r,s);break;case"textarea":Wm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ds(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ds(r,!!s.multiple,s.defaultValue,!0):ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Da]=s}catch(y){_t(t,t.return,y)}}break;case 6:if(Ln(e,t),Xn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){_t(t,t.return,y)}}break;case 3:if(Ln(e,t),Xn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ca(e.containerInfo)}catch(y){_t(t,t.return,y)}break;case 4:Ln(e,t),Xn(t);break;case 13:Ln(e,t),Xn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Fd=yt())),i&4&&dp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(u=Xt)||d,Ln(e,t),Xt=u):Ln(e,t),Xn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(ge=t,d=t.child;d!==null;){for(h=ge=d;ge!==null;){switch(f=ge,p=f.child,f.tag){case 0:case 11:case 14:case 15:ga(4,f,f.return);break;case 1:cs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){_t(i,n,y)}}break;case 5:cs(f,f.return);break;case 22:if(f.memoizedState!==null){pp(h);continue}}p!==null?(p.return=f,ge=p):pp(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Ym("display",a))}catch(y){_t(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){_t(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ln(e,t),Xn(t),i&4&&dp(t);break;case 21:break;default:Ln(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(x_(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ea(r,""),i.flags&=-33);var s=fp(t);Qc(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=fp(t);Zc(t,o,a);break;default:throw Error(ee(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ix(t,e,n){ge=t,M_(t)}function M_(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||po;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Xt;o=po;var u=Xt;if(po=a,(Xt=l)&&!u)for(ge=r;ge!==null;)a=ge,l=a.child,a.tag===22&&a.memoizedState!==null?mp(r):l!==null?(l.return=a,ge=l):mp(r);for(;s!==null;)ge=s,M_(s),s=s.sibling;ge=r,po=o,Xt=u}hp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):hp(t)}}function hp(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||jl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Ca(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Xt||e.flags&512&&Kc(e)}catch(f){_t(e,e.return,f)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function pp(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function mp(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jl(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{Kc(e)}catch(l){_t(e,s,l)}break;case 5:var a=e.return;try{Kc(e)}catch(l){_t(e,a,l)}}}catch(l){_t(e,e.return,l)}if(e===t){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var Ux=Math.ceil,Al=Pi.ReactCurrentDispatcher,Id=Pi.ReactCurrentOwner,An=Pi.ReactCurrentBatchConfig,Xe=0,It=null,wt=null,Bt=0,dn=0,fs=sr(0),Ct=0,Ba=null,Lr=0,Yl=0,Ud=0,_a=null,nn=null,Fd=0,As=1/0,di=null,Cl=!1,Jc=null,Qi=null,mo=!1,Xi=null,Rl=0,va=0,ef=null,Qo=-1,Jo=0;function Zt(){return Xe&6?yt():Qo!==-1?Qo:Qo=yt()}function Ji(t){return t.mode&1?Xe&2&&Bt!==0?Bt&-Bt:vx.transition!==null?(Jo===0&&(Jo=ag()),Jo):(t=tt,t!==0||(t=window.event,t=t===void 0?16:hg(t.type)),t):1}function Vn(t,e,n,i){if(50<va)throw va=0,ef=null,Error(ee(185));Wa(t,n,i),(!(Xe&2)||t!==It)&&(t===It&&(!(Xe&2)&&(Yl|=n),Ct===4&&Hi(t,Bt)),on(t,i),n===1&&Xe===0&&!(e.mode&1)&&(As=yt()+500,Gl&&ar()))}function on(t,e){var n=t.callbackNode;vv(t,e);var i=fl(t,t===It?Bt:0);if(i===0)n!==null&&Th(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Th(n),e===1)t.tag===0?_x(gp.bind(null,t)):Dg(gp.bind(null,t)),hx(function(){!(Xe&6)&&ar()}),n=null;else{switch(og(i)){case 1:n=ld;break;case 4:n=rg;break;case 16:n=cl;break;case 536870912:n=sg;break;default:n=cl}n=b_(n,E_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function E_(t,e){if(Qo=-1,Jo=0,Xe&6)throw Error(ee(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var i=fl(t,t===It?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Pl(t,i);else{e=i;var r=Xe;Xe|=2;var s=w_();(It!==t||Bt!==e)&&(di=null,As=yt()+500,wr(t,e));do try{Bx();break}catch(o){T_(t,o)}while(!0);yd(),Al.current=s,Xe=r,wt!==null?e=0:(It=null,Bt=0,e=Ct)}if(e!==0){if(e===2&&(r=Cc(t),r!==0&&(i=r,e=tf(t,r))),e===1)throw n=Ba,wr(t,0),Hi(t,i),on(t,yt()),n;if(e===6)Hi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Fx(r)&&(e=Pl(t,i),e===2&&(s=Cc(t),s!==0&&(i=s,e=tf(t,s))),e===1))throw n=Ba,wr(t,0),Hi(t,i),on(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:gr(t,nn,di);break;case 3:if(Hi(t,i),(i&130023424)===i&&(e=Fd+500-yt(),10<e)){if(fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Uc(gr.bind(null,t,nn,di),e);break}gr(t,nn,di);break;case 4:if(Hi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-zn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ux(i/1960))-i,10<i){t.timeoutHandle=Uc(gr.bind(null,t,nn,di),i);break}gr(t,nn,di);break;case 5:gr(t,nn,di);break;default:throw Error(ee(329))}}}return on(t,yt()),t.callbackNode===n?E_.bind(null,t):null}function tf(t,e){var n=_a;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=Pl(t,e),t!==2&&(e=nn,nn=n,e!==null&&nf(e)),t}function nf(t){nn===null?nn=t:nn.push.apply(nn,t)}function Fx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Gn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(t,e){for(e&=~Ud,e&=~Yl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function gp(t){if(Xe&6)throw Error(ee(327));_s();var e=fl(t,0);if(!(e&1))return on(t,yt()),null;var n=Pl(t,e);if(t.tag!==0&&n===2){var i=Cc(t);i!==0&&(e=i,n=tf(t,i))}if(n===1)throw n=Ba,wr(t,0),Hi(t,e),on(t,yt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,nn,di),on(t,yt()),null}function Od(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(As=yt()+500,Gl&&ar())}}function Dr(t){Xi!==null&&Xi.tag===0&&!(Xe&6)&&_s();var e=Xe;Xe|=1;var n=An.transition,i=tt;try{if(An.transition=null,tt=1,t)return t()}finally{tt=i,An.transition=n,Xe=e,!(Xe&6)&&ar()}}function Bd(){dn=fs.current,ft(fs)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dx(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(vd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gl();break;case 3:Ts(),ft(sn),ft(Yt),Cd();break;case 5:Ad(i);break;case 4:Ts();break;case 13:ft(ht);break;case 19:ft(ht);break;case 10:Md(i.type._context);break;case 22:case 23:Bd()}n=n.return}if(It=t,wt=t=er(t.current,null),Bt=dn=e,Ct=0,Ba=null,Ud=Yl=Lr=0,nn=_a=null,yr!==null){for(e=0;e<yr.length;e++)if(n=yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}yr=null}return t}function T_(t,e){do{var n=wt;try{if(yd(),$o.current=wl,Tl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tl=!1}if(br=0,Nt=At=pt=null,ma=!1,Ua=0,Id.current=null,n===null||n.return===null){Ct=1,Ba=e,wt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Bt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=ip(a);if(p!==null){p.flags&=-257,rp(p,a,o,s,e),p.mode&1&&np(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){np(s,u,e),kd();break e}l=Error(ee(426))}}else if(dt&&o.mode&1){var g=ip(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),rp(g,a,o,s,e),xd(ws(l,o));break e}}s=l=ws(l,o),Ct!==4&&(Ct=2),_a===null?_a=[s]:_a.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=o_(s,l,e);Kh(s,c);break e;case 1:o=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Qi===null||!Qi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=l_(s,o,e);Kh(s,M);break e}}s=s.return}while(s!==null)}C_(n)}catch(C){e=C,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function w_(){var t=Al.current;return Al.current=wl,t===null?wl:t}function kd(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),It===null||!(Lr&268435455)&&!(Yl&268435455)||Hi(It,Bt)}function Pl(t,e){var n=Xe;Xe|=2;var i=w_();(It!==t||Bt!==e)&&(di=null,wr(t,e));do try{Ox();break}catch(r){T_(t,r)}while(!0);if(yd(),Xe=n,Al.current=i,wt!==null)throw Error(ee(261));return It=null,Bt=0,Ct}function Ox(){for(;wt!==null;)A_(wt)}function Bx(){for(;wt!==null&&!uv();)A_(wt)}function A_(t){var e=P_(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?C_(t):wt=e,Id.current=null}function C_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Lx(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,wt=null;return}}else if(n=bx(n,e,dn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Ct===0&&(Ct=5)}function gr(t,e,n){var i=tt,r=An.transition;try{An.transition=null,tt=1,kx(t,e,n,i)}finally{An.transition=r,tt=i}return null}function kx(t,e,n,i){do _s();while(Xi!==null);if(Xe&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xv(t,s),t===It&&(wt=It=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,b_(cl,function(){return _s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var a=tt;tt=1;var o=Xe;Xe|=4,Id.current=null,Nx(t,n),y_(n,t),sx(Nc),dl=!!Dc,Nc=Dc=null,t.current=n,Ix(n),cv(),Xe=o,tt=a,An.transition=s}else t.current=n;if(mo&&(mo=!1,Xi=t,Rl=r),s=t.pendingLanes,s===0&&(Qi=null),hv(n.stateNode),on(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Cl)throw Cl=!1,t=Jc,Jc=null,t;return Rl&1&&t.tag!==0&&_s(),s=t.pendingLanes,s&1?t===ef?va++:(va=0,ef=t):va=0,ar(),null}function _s(){if(Xi!==null){var t=og(Rl),e=An.transition,n=tt;try{if(An.transition=null,tt=16>t?16:t,Xi===null)var i=!1;else{if(t=Xi,Xi=null,Rl=0,Xe&6)throw Error(ee(331));var r=Xe;for(Xe|=4,ge=t.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(ge=u;ge!==null;){var d=ge;switch(d.tag){case 0:case 11:case 15:ga(8,d,s)}var h=d.child;if(h!==null)h.return=d,ge=h;else for(;ge!==null;){d=ge;var f=d.sibling,p=d.return;if(v_(d),d===u){ge=null;break}if(f!==null){f.return=p,ge=f;break}ge=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ga(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,ge=c;break e}ge=s.return}}var m=t.current;for(ge=m;ge!==null;){a=ge;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,ge=x;else e:for(a=m;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:jl(9,o)}}catch(C){_t(o,o.return,C)}if(o===a){ge=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,ge=M;break e}ge=o.return}}if(Xe=r,ar(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Bl,t)}catch{}i=!0}return i}finally{tt=n,An.transition=e}}return!1}function _p(t,e,n){e=ws(n,e),e=o_(t,e,1),t=Zi(t,e,1),e=Zt(),t!==null&&(Wa(t,1,e),on(t,e))}function _t(t,e,n){if(t.tag===3)_p(t,t,n);else for(;e!==null;){if(e.tag===3){_p(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qi===null||!Qi.has(i))){t=ws(n,t),t=l_(e,t,1),e=Zi(e,t,1),t=Zt(),e!==null&&(Wa(e,1,t),on(e,t));break}}e=e.return}}function zx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(Bt&n)===n&&(Ct===4||Ct===3&&(Bt&130023424)===Bt&&500>yt()-Fd?wr(t,0):Ud|=n),on(t,e)}function R_(t,e){e===0&&(t.mode&1?(e=ro,ro<<=1,!(ro&130023424)&&(ro=4194304)):e=1);var n=Zt();t=Ei(t,e),t!==null&&(Wa(t,e,n),on(t,n))}function Vx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),R_(t,n)}function Hx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),R_(t,n)}var P_;P_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,Px(t,e,n);rn=!!(t.flags&131072)}else rn=!1,dt&&e.flags&1048576&&Ng(e,xl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Zo(t,e),t=e.pendingProps;var r=ys(e,Yt.current);gs(e,n),r=Pd(null,e,i,t,r,n);var s=bd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,_l(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Td(e),r.updater=Xl,e.stateNode=r,r._reactInternals=e,Hc(e,i,t,n),e=Xc(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&_d(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Zo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Wx(i),t=Un(i,t),r){case 0:e=Wc(null,e,i,t,n);break e;case 1:e=op(null,e,i,t,n);break e;case 11:e=sp(null,e,i,t,n);break e;case 14:e=ap(null,e,i,Un(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Wc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),op(t,e,i,r,n);case 3:e:{if(d_(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,kg(t,e),Ml(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ws(Error(ee(423)),e),e=lp(t,e,i,n,r);break e}else if(i!==r){r=ws(Error(ee(424)),e),e=lp(t,e,i,n,r);break e}else for(hn=Ki(e.stateNode.containerInfo.firstChild),pn=e,dt=!0,On=null,n=Og(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ms(),i===r){e=Ti(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return zg(e),t===null&&kc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Ic(i,r)?a=null:s!==null&&Ic(i,s)&&(e.flags|=32),f_(t,e),Kt(t,e,a,n),e.child;case 6:return t===null&&kc(e),null;case 13:return h_(t,e,n);case 4:return wd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Es(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),sp(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(Sl,i._currentValue),i._currentValue=a,s!==null)if(Gn(s.value,a)){if(s.children===r.children&&!sn.current){e=Ti(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=vi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zc(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ee(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),zc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,gs(e,n),r=Rn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),ap(t,e,i,r,n);case 15:return u_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Zo(t,e),e.tag=1,an(i)?(t=!0,_l(e)):t=!1,gs(e,n),a_(e,i,r),Hc(e,i,r,n),Xc(null,e,i,!0,t,n);case 19:return p_(t,e,n);case 22:return c_(t,e,n)}throw Error(ee(156,e.tag))};function b_(t,e){return ig(t,e)}function Gx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,i){return new Gx(t,e,n,i)}function zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wx(t){if(typeof t=="function")return zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sd)return 11;if(t===ad)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")zd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ts:return Ar(n.children,r,s,e);case rd:a=8,r|=8;break;case dc:return t=wn(12,n,e,r|2),t.elementType=dc,t.lanes=s,t;case hc:return t=wn(13,n,e,r),t.elementType=hc,t.lanes=s,t;case pc:return t=wn(19,n,e,r),t.elementType=pc,t.lanes=s,t;case zm:return ql(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bm:a=10;break e;case km:a=9;break e;case sd:a=11;break e;case ad:a=14;break e;case ki:a=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=wn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ar(t,e,n,i){return t=wn(7,t,i,e),t.lanes=n,t}function ql(t,e,n,i){return t=wn(22,t,i,e),t.elementType=zm,t.lanes=n,t.stateNode={isHidden:!1},t}function Pu(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function bu(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Xx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cu(0),this.expirationTimes=cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vd(t,e,n,i,r,s,a,o,l){return t=new Xx(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Td(s),t}function jx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function L_(t){if(!t)return nr;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(an(n))return Lg(t,n,e)}return e}function D_(t,e,n,i,r,s,a,o,l){return t=Vd(n,i,!0,t,r,s,a,o,l),t.context=L_(null),n=t.current,i=Zt(),r=Ji(n),s=vi(i,r),s.callback=e??null,Zi(n,s,r),t.current.lanes=r,Wa(t,r,i),on(t,i),t}function $l(t,e,n,i){var r=e.current,s=Zt(),a=Ji(r);return n=L_(n),e.context===null?e.context=n:e.pendingContext=n,e=vi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Zi(r,e,a),t!==null&&(Vn(t,r,a,s),qo(t,r,a)),a}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hd(t,e){vp(t,e),(t=t.alternate)&&vp(t,e)}function Yx(){return null}var N_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gd(t){this._internalRoot=t}Kl.prototype.render=Gd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));$l(t,e,null,null)};Kl.prototype.unmount=Gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){$l(null,t,null,null)}),e[Mi]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=cg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vi.length&&e!==0&&e<Vi[n].priority;n++);Vi.splice(n,0,t),n===0&&dg(t)}};function Wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xp(){}function qx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=bl(a);s.call(u)}}var a=D_(e,i,t,0,null,!1,!1,"",xp);return t._reactRootContainer=a,t[Mi]=a.current,ba(t.nodeType===8?t.parentNode:t),Dr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=bl(l);o.call(u)}}var l=Vd(t,0,!1,null,null,!1,!1,"",xp);return t._reactRootContainer=l,t[Mi]=l.current,ba(t.nodeType===8?t.parentNode:t),Dr(function(){$l(e,l,n,i)}),l}function Ql(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=bl(a);o.call(l)}}$l(e,a,t,r)}else a=qx(n,e,t,r,i);return bl(a)}lg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(ud(e,n|1),on(e,yt()),!(Xe&6)&&(As=yt()+500,ar()))}break;case 13:Dr(function(){var i=Ei(t,1);if(i!==null){var r=Zt();Vn(i,t,1,r)}}),Hd(t,1)}};cd=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=Zt();Vn(e,t,134217728,n)}Hd(t,134217728)}};ug=function(t){if(t.tag===13){var e=Ji(t),n=Ei(t,e);if(n!==null){var i=Zt();Vn(n,t,e,i)}Hd(t,e)}};cg=function(){return tt};fg=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};Tc=function(t,e,n){switch(e){case"input":if(_c(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Hl(i);if(!r)throw Error(ee(90));Hm(i),_c(i,r)}}}break;case"textarea":Wm(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};Zm=Od;Qm=Dr;var $x={usingClientEntryPoint:!1,Events:[ja,ss,Hl,$m,Km,Od]},Ys={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kx={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||Yx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{Bl=go.inject(Kx),Jn=go}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$x;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wd(e))throw Error(ee(200));return jx(t,e,null,n)};_n.createRoot=function(t,e){if(!Wd(t))throw Error(ee(299));var n=!1,i="",r=N_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vd(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,ba(t.nodeType===8?t.parentNode:t),new Gd(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=tg(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Dr(t)};_n.hydrate=function(t,e,n){if(!Zl(e))throw Error(ee(200));return Ql(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!Wd(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=N_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=D_(e,null,t,1,n??null,r,!1,s,a),t[Mi]=e.current,ba(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Kl(e)};_n.render=function(t,e,n){if(!Zl(e))throw Error(ee(200));return Ql(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(ee(40));return t._reactRootContainer?(Dr(function(){Ql(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};_n.unstable_batchedUpdates=Od;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Zl(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Ql(t,e,n,!1,i)};_n.version="18.3.1-next-f1338f8080-20240426";function I_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I_)}catch(t){console.error(t)}}I_(),Im.exports=_n;var Zx=Im.exports,Sp=Zx;cc.createRoot=Sp.createRoot,cc.hydrateRoot=Sp.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xd="183",Qx=0,yp=1,Jx=2,tl=1,eS=2,oa=3,ir=0,ln=1,pi=2,xi=0,vs=1,xa=2,Mp=3,Ep=4,tS=5,vr=100,nS=101,iS=102,rS=103,sS=104,aS=200,oS=201,lS=202,uS=203,rf=204,sf=205,cS=206,fS=207,dS=208,hS=209,pS=210,mS=211,gS=212,_S=213,vS=214,af=0,of=1,lf=2,Cs=3,uf=4,cf=5,ff=6,df=7,U_=0,xS=1,SS=2,ti=0,F_=1,O_=2,B_=3,k_=4,z_=5,V_=6,H_=7,G_=300,Nr=301,Rs=302,Lu=303,Du=304,Jl=306,hf=1e3,_i=1001,pf=1002,Ot=1003,yS=1004,_o=1005,jt=1006,Nu=1007,Er=1008,Tn=1009,W_=1010,X_=1011,ka=1012,jd=1013,ii=1014,Zn=1015,wi=1016,Yd=1017,qd=1018,za=1020,j_=35902,Y_=35899,q_=1021,$_=1022,kn=1023,Ai=1026,Tr=1027,K_=1028,$d=1029,Ps=1030,Kd=1031,Zd=1033,nl=33776,il=33777,rl=33778,sl=33779,mf=35840,gf=35841,_f=35842,vf=35843,xf=36196,Sf=37492,yf=37496,Mf=37488,Ef=37489,Tf=37490,wf=37491,Af=37808,Cf=37809,Rf=37810,Pf=37811,bf=37812,Lf=37813,Df=37814,Nf=37815,If=37816,Uf=37817,Ff=37818,Of=37819,Bf=37820,kf=37821,zf=36492,Vf=36494,Hf=36495,Gf=36283,Wf=36284,Xf=36285,jf=36286,MS=3200,ES=0,TS=1,Gi="",Sn="srgb",bs="srgb-linear",Ll="linear",et="srgb",kr=7680,Tp=519,wS=512,AS=513,CS=514,Qd=515,RS=516,PS=517,Jd=518,bS=519,wp=35044,Ap="300 es",Qn=2e3,Dl=2001;function LS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Nl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function DS(){const t=Nl("canvas");return t.style.display="block",t}const Cp={};function Rp(...t){const e="THREE."+t.shift();console.log(e,...t)}function Z_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function be(...t){t=Z_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function qe(...t){t=Z_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Il(...t){const e=t.join(" ");e in Cp||(Cp[e]=!0,be(...t))}function NS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const IS={[af]:of,[lf]:ff,[uf]:df,[Cs]:cf,[of]:af,[ff]:lf,[df]:uf,[cf]:Cs};class Us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pp=1234567;const Sa=Math.PI/180,Va=180/Math.PI;function Fs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function He(t,e,n){return Math.max(e,Math.min(n,t))}function eh(t,e){return(t%e+e)%e}function US(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function FS(t,e,n){return t!==e?(n-t)/(e-t):0}function ya(t,e,n){return(1-n)*t+n*e}function OS(t,e,n,i){return ya(t,e,1-Math.exp(-n*i))}function BS(t,e=1){return e-Math.abs(eh(t,e*2)-e)}function kS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function zS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function VS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function HS(t,e){return t+Math.random()*(e-t)}function GS(t){return t*(.5-Math.random())}function WS(t){t!==void 0&&(Pp=t);let e=Pp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function XS(t){return t*Sa}function jS(t){return t*Va}function YS(t){return(t&t-1)===0&&t!==0}function qS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function $S(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function KS(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),u=s((e+i)/2),d=a((e+i)/2),h=s((e-i)/2),f=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*h,l*f,o*u);break;case"YZY":t.set(l*f,o*d,l*h,o*u);break;case"ZXZ":t.set(l*h,l*f,o*d,o*u);break;case"XZX":t.set(o*d,l*_,l*p,o*u);break;case"YXY":t.set(l*p,o*d,l*_,o*u);break;case"ZYZ":t.set(l*_,l*p,o*d,o*u);break;default:be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Jr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const qs={DEG2RAD:Sa,RAD2DEG:Va,generateUUID:Fs,clamp:He,euclideanModulo:eh,mapLinear:US,inverseLerp:FS,lerp:ya,damp:OS,pingpong:BS,smoothstep:kS,smootherstep:zS,randInt:VS,randFloat:HS,randFloatSpread:GS,seededRandom:WS,degToRad:XS,radToDeg:jS,isPowerOfTwo:YS,ceilPowerOfTwo:qS,floorPowerOfTwo:$S,setQuaternionFromProperEuler:KS,normalize:qt,denormalize:Jr};class rt{constructor(e=0,n=0){rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Os{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],d=i[r+2],h=i[r+3],f=s[a+0],p=s[a+1],_=s[a+2],y=s[a+3];if(h!==y||l!==f||u!==p||d!==_){let g=l*f+u*p+d*_+h*y;g<0&&(f=-f,p=-p,_=-_,y=-y,g=-g);let c=1-o;if(g<.9995){const m=Math.acos(g),x=Math.sin(m);c=Math.sin(c*m)/x,o=Math.sin(o*m)/x,l=l*c+f*o,u=u*c+p*o,d=d*c+_*o,h=h*c+y*o}else{l=l*c+f*o,u=u*c+p*o,d=d*c+_*o,h=h*c+y*o;const m=1/Math.sqrt(l*l+u*u+d*d+h*h);l*=m,u*=m,d*=m,h*=m}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],d=i[r+3],h=s[a],f=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+d*h+l*p-u*f,e[n+1]=l*_+d*f+u*h-o*p,e[n+2]=u*_+d*p+o*f-l*h,e[n+3]=d*_-o*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*d*h+u*p*_,this._y=u*p*h-f*d*_,this._z=u*d*_+f*p*h,this._w=u*d*h-f*p*_;break;case"YXZ":this._x=f*d*h+u*p*_,this._y=u*p*h-f*d*_,this._z=u*d*_-f*p*h,this._w=u*d*h+f*p*_;break;case"ZXY":this._x=f*d*h-u*p*_,this._y=u*p*h+f*d*_,this._z=u*d*_+f*p*h,this._w=u*d*h-f*p*_;break;case"ZYX":this._x=f*d*h-u*p*_,this._y=u*p*h+f*d*_,this._z=u*d*_-f*p*h,this._w=u*d*h+f*p*_;break;case"YZX":this._x=f*d*h+u*p*_,this._y=u*p*h+f*d*_,this._z=u*d*_-f*p*h,this._w=u*d*h-f*p*_;break;case"XZY":this._x=f*d*h-u*p*_,this._y=u*p*h-f*d*_,this._z=u*d*_+f*p*h,this._w=u*d*h+f*p*_;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+a*o+r*u-s*l,this._y=r*d+a*l+s*o-i*u,this._z=s*d+a*u+i*l-r*o,this._w=a*d-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),d=Math.sin(u);l=Math.sin(l*u)/d,n=Math.sin(n*u)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*u+a*h-o*d,this.y=i+l*d+o*u-s*h,this.z=r+l*h+s*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Iu.copy(this).projectOnVector(e),this.sub(Iu)}reflect(e){return this.sub(Iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Iu=new B,bp=new Os;class Fe{constructor(e,n,i,r,s,a,o,l,u){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],d=i[4],h=i[7],f=i[2],p=i[5],_=i[8],y=r[0],g=r[3],c=r[6],m=r[1],x=r[4],M=r[7],C=r[2],A=r[5],R=r[8];return s[0]=a*y+o*m+l*C,s[3]=a*g+o*x+l*A,s[6]=a*c+o*M+l*R,s[1]=u*y+d*m+h*C,s[4]=u*g+d*x+h*A,s[7]=u*c+d*M+h*R,s[2]=f*y+p*m+_*C,s[5]=f*g+p*x+_*A,s[8]=f*c+p*M+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return n*a*d-n*o*u-i*s*d+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],h=d*a-o*u,f=o*l-d*s,p=u*s-a*l,_=n*h+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*u-d*i)*y,e[2]=(o*i-r*a)*y,e[3]=f*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Uu.makeScale(e,n)),this}rotate(e){return this.premultiply(Uu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Uu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uu=new Fe,Lp=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dp=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZS(){const t={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(r.r=xs(r.r),r.g=xs(r.g),r.b=xs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gi?Ll:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Il("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Il("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[bs]:{primaries:e,whitePoint:i,transfer:Ll,toXYZ:Lp,fromXYZ:Dp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:i,transfer:et,toXYZ:Lp,fromXYZ:Dp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),t}const We=ZS();function Si(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function xs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zr;class QS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zr===void 0&&(zr=Nl("canvas")),zr.width=e.width,zr.height=e.height;const r=zr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=zr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Si(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Si(n[i]/255)*255):n[i]=Si(n[i]);return{data:n,width:e.width,height:e.height}}else return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JS=0;class th{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Fu(r[a].image)):s.push(Fu(r[a]))}else s=Fu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Fu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?QS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}let ey=0;const Ou=new B;class Qt extends Us{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=_i,r=_i,s=jt,a=Er,o=kn,l=Tn,u=Qt.DEFAULT_ANISOTROPY,d=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Fs(),this.name="",this.source=new th(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ou).x}get height(){return this.source.getSize(Ou).y}get depth(){return this.source.getSize(Ou).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){be(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==G_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hf:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hf:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=G_;Qt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,n=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],h=l[8],f=l[1],p=l[5],_=l[9],y=l[2],g=l[6],c=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,M=(p+1)/2,C=(c+1)/2,A=(d+f)/4,R=(h+y)/4,S=(_+g)/4;return x>M&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=R/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=S/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=S/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(h-y)/m,this.z=(f-d)/m,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this.w=He(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this.w=He(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ty extends Us{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Qt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new th(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends ty{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Q_ extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ny extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vt{constructor(e,n,i,r,s,a,o,l,u,d,h,f,p,_,y,g){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,d,h,f,p,_,y,g)}set(e,n,i,r,s,a,o,l,u,d,h,f,p,_,y,g){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=a,c[9]=o,c[13]=l,c[2]=u,c[6]=d,c[10]=h,c[14]=f,c[3]=p,c[7]=_,c[11]=y,c[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,p=a*h,_=o*d,y=o*h;n[0]=l*d,n[4]=-l*h,n[8]=u,n[1]=p+_*u,n[5]=f-y*u,n[9]=-o*l,n[2]=y-f*u,n[6]=_+p*u,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,_=u*d,y=u*h;n[0]=f+y*o,n[4]=_*o-p,n[8]=a*u,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=p*o-_,n[6]=y+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,_=u*d,y=u*h;n[0]=f-y*o,n[4]=-a*h,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*d,n[9]=y-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,p=a*h,_=o*d,y=o*h;n[0]=l*d,n[4]=_*u-p,n[8]=f*u+y,n[1]=l*h,n[5]=y*u+f,n[9]=p*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*u,_=o*l,y=o*u;n[0]=l*d,n[4]=y-f*h,n[8]=_*h+p,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-u*d,n[6]=p*h+_,n[10]=f-y*h}else if(e.order==="XZY"){const f=a*l,p=a*u,_=o*l,y=o*u;n[0]=l*d,n[4]=-h,n[8]=u*d,n[1]=f*h+y,n[5]=a*d,n[9]=p*h-_,n[2]=_*h-p,n[6]=o*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iy,e,ry)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ni.crossVectors(i,cn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ni.crossVectors(i,cn)),Ni.normalize(),vo.crossVectors(cn,Ni),r[0]=Ni.x,r[4]=vo.x,r[8]=cn.x,r[1]=Ni.y,r[5]=vo.y,r[9]=cn.y,r[2]=Ni.z,r[6]=vo.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],d=i[1],h=i[5],f=i[9],p=i[13],_=i[2],y=i[6],g=i[10],c=i[14],m=i[3],x=i[7],M=i[11],C=i[15],A=r[0],R=r[4],S=r[8],T=r[12],I=r[1],P=r[5],F=r[9],z=r[13],j=r[2],H=r[6],G=r[10],U=r[14],k=r[3],X=r[7],Z=r[11],oe=r[15];return s[0]=a*A+o*I+l*j+u*k,s[4]=a*R+o*P+l*H+u*X,s[8]=a*S+o*F+l*G+u*Z,s[12]=a*T+o*z+l*U+u*oe,s[1]=d*A+h*I+f*j+p*k,s[5]=d*R+h*P+f*H+p*X,s[9]=d*S+h*F+f*G+p*Z,s[13]=d*T+h*z+f*U+p*oe,s[2]=_*A+y*I+g*j+c*k,s[6]=_*R+y*P+g*H+c*X,s[10]=_*S+y*F+g*G+c*Z,s[14]=_*T+y*z+g*U+c*oe,s[3]=m*A+x*I+M*j+C*k,s[7]=m*R+x*P+M*H+C*X,s[11]=m*S+x*F+M*G+C*Z,s[15]=m*T+x*z+M*U+C*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],d=e[2],h=e[6],f=e[10],p=e[14],_=e[3],y=e[7],g=e[11],c=e[15],m=l*p-u*f,x=o*p-u*h,M=o*f-l*h,C=a*p-u*d,A=a*f-l*d,R=a*h-o*d;return n*(y*m-g*x+c*M)-i*(_*m-g*C+c*A)+r*(_*x-y*C+c*R)-s*(_*M-y*A+g*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],h=e[9],f=e[10],p=e[11],_=e[12],y=e[13],g=e[14],c=e[15],m=n*o-i*a,x=n*l-r*a,M=n*u-s*a,C=i*l-r*o,A=i*u-s*o,R=r*u-s*l,S=d*y-h*_,T=d*g-f*_,I=d*c-p*_,P=h*g-f*y,F=h*c-p*y,z=f*c-p*g,j=m*z-x*F+M*P+C*I-A*T+R*S;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/j;return e[0]=(o*z-l*F+u*P)*H,e[1]=(r*F-i*z-s*P)*H,e[2]=(y*R-g*A+c*C)*H,e[3]=(f*A-h*R-p*C)*H,e[4]=(l*I-a*z-u*T)*H,e[5]=(n*z-r*I+s*T)*H,e[6]=(g*M-_*R-c*x)*H,e[7]=(d*R-f*M+p*x)*H,e[8]=(a*F-o*I+u*S)*H,e[9]=(i*I-n*F-s*S)*H,e[10]=(_*A-y*M+c*m)*H,e[11]=(h*M-d*A-p*m)*H,e[12]=(o*T-a*P-l*S)*H,e[13]=(n*P-i*T+r*S)*H,e[14]=(y*x-_*C-g*m)*H,e[15]=(d*C-h*x+f*m)*H,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,d=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,d*o+i,d*l-r*a,0,u*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,d=a+a,h=o+o,f=s*u,p=s*d,_=s*h,y=a*d,g=a*h,c=o*h,m=l*u,x=l*d,M=l*h,C=i.x,A=i.y,R=i.z;return r[0]=(1-(y+c))*C,r[1]=(p+M)*C,r[2]=(_-x)*C,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(f+c))*A,r[6]=(g+m)*A,r[7]=0,r[8]=(_+x)*R,r[9]=(g-m)*R,r[10]=(1-(f+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Vr.set(r[0],r[1],r[2]).length();const o=Vr.set(r[4],r[5],r[6]).length(),l=Vr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Dn.copy(this);const u=1/a,d=1/o,h=1/l;return Dn.elements[0]*=u,Dn.elements[1]*=u,Dn.elements[2]*=u,Dn.elements[4]*=d,Dn.elements[5]*=d,Dn.elements[6]*=d,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,n.setFromRotationMatrix(Dn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Qn,l=!1){const u=this.elements,d=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let _,y;if(l)_=s/(a-s),y=a*s/(a-s);else if(o===Qn)_=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Dl)_=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Qn,l=!1){const u=this.elements,d=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,y;if(l)_=1/(a-s),y=a/(a-s);else if(o===Qn)_=-2/(a-s),y=-(a+s)/(a-s);else if(o===Dl)_=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=_,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Vr=new B,Dn=new vt,iy=new B(0,0,0),ry=new B(1,1,1),Ni=new B,vo=new B,cn=new B,Np=new vt,Ip=new Os;class Ci{constructor(e=0,n=0,i=0,r=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Np,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ip.setFromEuler(this),this.setFromQuaternion(Ip,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class J_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sy=0;const Up=new B,Hr=new Os,oi=new vt,xo=new B,$s=new B,ay=new B,oy=new Os,Fp=new B(1,0,0),Op=new B(0,1,0),Bp=new B(0,0,1),kp={type:"added"},ly={type:"removed"},Gr={type:"childadded",child:null},Bu={type:"childremoved",child:null};class Jt extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new B,n=new Ci,i=new Os,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Fe}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new J_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Fp,e)}rotateY(e){return this.rotateOnAxis(Op,e)}rotateZ(e){return this.rotateOnAxis(Bp,e)}translateOnAxis(e,n){return Up.copy(e).applyQuaternion(this.quaternion),this.position.add(Up.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fp,e)}translateY(e){return this.translateOnAxis(Op,e)}translateZ(e){return this.translateOnAxis(Bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xo.copy(e):xo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt($s,xo,this.up):oi.lookAt(xo,$s,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(oi),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ly),Bu.child=e,this.dispatchEvent(Bu),Bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,ay),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,oy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new B(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class la extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uy={type:"move"};class ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new la,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new la,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new la,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),c=this._getHandJoint(u,y);g!==null&&(c.matrix.fromArray(g.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=g.radius),c.visible=g!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uy)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new la;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const e0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},So={h:0,s:0,l:0};function zu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=We.workingColorSpace){return this.r=e,this.g=n,this.b=i,We.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=We.workingColorSpace){if(e=eh(e,1),n=He(n,0,1),i=He(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=zu(a,s,e+1/3),this.g=zu(a,s,e),this.b=zu(a,s,e-1/3)}return We.colorSpaceToWorking(this,r),this}setStyle(e,n=Sn){function i(s){s!==void 0&&parseFloat(s)<1&&be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Sn){const i=e0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return We.workingToColorSpace(Wt.copy(this),e),Math.round(He(Wt.r*255,0,255))*65536+Math.round(He(Wt.g*255,0,255))*256+Math.round(He(Wt.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=We.workingColorSpace){We.workingToColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const d=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=We.workingColorSpace){return We.workingToColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Sn){We.workingToColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==Sn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+n,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ii),e.getHSL(So);const i=ya(Ii.h,So.h,n),r=ya(Ii.s,So.s,n),s=ya(Ii.l,So.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ke;Ke.NAMES=e0;class cy extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Nn=new B,li=new B,Vu=new B,ui=new B,Wr=new B,Xr=new B,zp=new B,Hu=new B,Gu=new B,Wu=new B,Xu=new Mt,ju=new Mt,Yu=new Mt;class Bn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nn.subVectors(r,n),li.subVectors(i,n),Vu.subVectors(e,n);const a=Nn.dot(Nn),o=Nn.dot(li),l=Nn.dot(Vu),u=li.dot(li),d=li.dot(Vu),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-o*d)*f,_=(a*d-o*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Xu.setScalar(0),ju.setScalar(0),Yu.setScalar(0),Xu.fromBufferAttribute(e,n),ju.fromBufferAttribute(e,i),Yu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xu,s.x),a.addScaledVector(ju,s.y),a.addScaledVector(Yu,s.z),a}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),li.subVectors(e,n),Nn.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Nn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Wr.subVectors(r,i),Xr.subVectors(s,i),Hu.subVectors(e,i);const l=Wr.dot(Hu),u=Xr.dot(Hu);if(l<=0&&u<=0)return n.copy(i);Gu.subVectors(e,r);const d=Wr.dot(Gu),h=Xr.dot(Gu);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*u;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Wr,a);Wu.subVectors(e,s);const p=Wr.dot(Wu),_=Xr.dot(Wu);if(_>=0&&p<=_)return n.copy(s);const y=p*u-l*_;if(y<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(Xr,o);const g=d*_-p*h;if(g<=0&&h-d>=0&&p-_>=0)return zp.subVectors(s,r),o=(h-d)/(h-d+(p-_)),n.copy(r).addScaledVector(zp,o);const c=1/(g+y+f);return a=y*c,o=f*c,n.copy(i).addScaledVector(Wr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qa{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(In.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(In.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=In.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(s,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Mo.subVectors(this.max,Ks),jr.subVectors(e.a,Ks),Yr.subVectors(e.b,Ks),qr.subVectors(e.c,Ks),Ui.subVectors(Yr,jr),Fi.subVectors(qr,Yr),ur.subVectors(jr,qr);let n=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-ur.z,ur.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,ur.z,0,-ur.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-ur.y,ur.x,0];return!qu(n,jr,Yr,qr,Mo)||(n=[1,0,0,0,1,0,0,0,1],!qu(n,jr,Yr,qr,Mo))?!1:(Eo.crossVectors(Ui,Fi),n=[Eo.x,Eo.y,Eo.z],qu(n,jr,Yr,qr,Mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ci=[new B,new B,new B,new B,new B,new B,new B,new B],In=new B,yo=new qa,jr=new B,Yr=new B,qr=new B,Ui=new B,Fi=new B,ur=new B,Ks=new B,Mo=new B,Eo=new B,cr=new B;function qu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){cr.fromArray(t,s);const o=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),l=e.dot(cr),u=n.dot(cr),d=i.dot(cr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const Tt=new B,To=new rt;let fy=0;class Cn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fy++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=wp,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)To.fromBufferAttribute(this,n),To.applyMatrix3(e),this.setXY(n,To.x,To.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Jr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Jr(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Jr(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Jr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Jr(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wp&&(e.usage=this.usage),e}}class t0 extends Cn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class n0 extends Cn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Hn extends Cn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const dy=new qa,Zs=new B,$u=new B;class $a{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):dy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const n=Zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add($u)),this.expandByPoint(Zs.copy(e.center).sub($u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hy=0;const xn=new vt,Ku=new Jt,$r=new B,fn=new qa,Qs=new qa,Dt=new B;class gn extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LS(e)?n0:t0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return Ku.lookAt(e),Ku.updateMatrix(),this.applyMatrix4(Ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Hn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(fn.min,Qs.min),fn.expandByPoint(Dt),Dt.addVectors(fn.max,Qs.max),fn.expandByPoint(Dt)):(fn.expandByPoint(Qs.min),fn.expandByPoint(Qs.max))}fn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)Dt.fromBufferAttribute(o,u),l&&($r.fromBufferAttribute(e,u),Dt.add($r)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new B,l[S]=new B;const u=new B,d=new B,h=new B,f=new rt,p=new rt,_=new rt,y=new B,g=new B;function c(S,T,I){u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,I),f.fromBufferAttribute(s,S),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,I),d.sub(u),h.sub(u),p.sub(f),_.sub(f);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(P),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(P),o[S].add(y),o[T].add(y),o[I].add(y),l[S].add(g),l[T].add(g),l[I].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let S=0,T=m.length;S<T;++S){const I=m[S],P=I.start,F=I.count;for(let z=P,j=P+F;z<j;z+=3)c(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new B,M=new B,C=new B,A=new B;function R(S){C.fromBufferAttribute(r,S),A.copy(C);const T=o[S];x.copy(T),x.sub(C.multiplyScalar(C.dot(T))).normalize(),M.crossVectors(A,T);const P=M.dot(l[S])<0?-1:1;a.setXYZW(S,x.x,x.y,x.z,P)}for(let S=0,T=m.length;S<T;++S){const I=m[S],P=I.start,F=I.count;for(let z=P,j=P+F;z<j;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,u=new B,d=new B,h=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,g),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,g),o.add(d),l.add(d),u.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const u=o.array,d=o.itemSize,h=o.normalized,f=new u.constructor(l.length*d);let p=0,_=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*d;for(let c=0;c<d;c++)f[_++]=u[p++]}return new Cn(f,d,h)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let d=0,h=u.length;d<h;d++){const f=u[d],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],h=s[u];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,d=a.length;u<d;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let py=0;class Bs extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=vs,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rf,this.blendDst=sf,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){be(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rf&&(i.blendSrc=this.blendSrc),this.blendDst!==sf&&(i.blendDst=this.blendDst),this.blendEquation!==vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fi=new B,Zu=new B,wo=new B,Oi=new B,Qu=new B,Ao=new B,Ju=new B;class nh{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zu.copy(e).add(n).multiplyScalar(.5),wo.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub(Zu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(wo),o=Oi.dot(this.direction),l=-Oi.dot(wo),u=Oi.lengthSq(),d=Math.abs(1-a*a);let h,f,p,_;if(d>0)if(h=a*l-o,f=a*o-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const y=1/d;h*=y,f*=y,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+u}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Zu).addScaledVector(wo,f),p}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){Qu.subVectors(n,e),Ao.subVectors(i,e),Ju.crossVectors(Qu,Ao);let a=this.direction.dot(Ju),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Oi.subVectors(this.origin,e);const l=o*this.direction.dot(Ao.crossVectors(Oi,Ao));if(l<0)return null;const u=o*this.direction.dot(Qu.cross(Oi));if(u<0||l+u>a)return null;const d=-o*Oi.dot(Ju);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class i0 extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=U_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vp=new vt,fr=new nh,Co=new $a,Hp=new B,Ro=new B,Po=new B,bo=new B,ec=new B,Lo=new B,Gp=new B,Do=new B;class Ri extends Jt{constructor(e=new gn,n=new i0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Lo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=o[l],h=s[l];d!==0&&(ec.fromBufferAttribute(h,e),a?Lo.addScaledVector(ec,d):Lo.addScaledVector(ec.sub(n),d))}n.add(Lo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Co.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Co,Hp)===null||fr.origin.distanceToSquared(Hp)>(e.far-e.near)**2))&&(Vp.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Vp),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){const g=f[_],c=a[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,C=x;M<C;M+=3){const A=o.getX(M),R=o.getX(M+1),S=o.getX(M+2);r=No(this,c,e,i,u,d,h,A,R,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=_,c=y;g<c;g+=3){const m=o.getX(g),x=o.getX(g+1),M=o.getX(g+2);r=No(this,a,e,i,u,d,h,m,x,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){const g=f[_],c=a[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,C=x;M<C;M+=3){const A=M,R=M+1,S=M+2;r=No(this,c,e,i,u,d,h,A,R,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=_,c=y;g<c;g+=3){const m=g,x=g+1,M=g+2;r=No(this,a,e,i,u,d,h,m,x,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function my(t,e,n,i,r,s,a,o){let l;if(e.side===ln?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ir,o),l===null)return null;Do.copy(o),Do.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Do);return u<n.near||u>n.far?null:{distance:u,point:Do.clone(),object:t}}function No(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Ro),t.getVertexPosition(l,Po),t.getVertexPosition(u,bo);const d=my(t,e,n,i,Ro,Po,bo,Gp);if(d){const h=new B;Bn.getBarycoord(Gp,Ro,Po,bo,h),r&&(d.uv=Bn.getInterpolatedAttribute(r,o,l,u,h,new rt)),s&&(d.uv1=Bn.getInterpolatedAttribute(s,o,l,u,h,new rt)),a&&(d.normal=Bn.getInterpolatedAttribute(a,o,l,u,h,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new B,materialIndex:0};Bn.getNormal(Ro,Po,bo,f.normal),d.face=f,d.barycoord=h}return d}class gy extends Qt{constructor(e=null,n=1,i=1,r,s,a,o,l,u=Ot,d=Ot,h,f){super(null,a,o,l,u,d,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tc=new B,_y=new B,vy=new Fe;class _r{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=tc.subVectors(i,n).cross(_y.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(tc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||vy.getNormalMatrix(e),r=this.coplanarPoint(tc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new $a,xy=new rt(.5,.5),Io=new B;class r0{constructor(e=new _r,n=new _r,i=new _r,r=new _r,s=new _r,a=new _r){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Qn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],d=s[4],h=s[5],f=s[6],p=s[7],_=s[8],y=s[9],g=s[10],c=s[11],m=s[12],x=s[13],M=s[14],C=s[15];if(r[0].setComponents(u-a,p-d,c-_,C-m).normalize(),r[1].setComponents(u+a,p+d,c+_,C+m).normalize(),r[2].setComponents(u+o,p+h,c+y,C+x).normalize(),r[3].setComponents(u-o,p-h,c-y,C-x).normalize(),i)r[4].setComponents(l,f,g,M).normalize(),r[5].setComponents(u-l,p-f,c-g,C-M).normalize();else if(r[4].setComponents(u-l,p-f,c-g,C-M).normalize(),n===Qn)r[5].setComponents(u+l,p+f,c+g,C+M).normalize();else if(n===Dl)r[5].setComponents(l,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);const n=xy.distanceTo(e.center);return dr.radius=.7071067811865476+n,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Io.x=r.normal.x>0?e.max.x:e.min.x,Io.y=r.normal.y>0?e.max.y:e.min.y,Io.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class s0 extends Bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ul=new B,Fl=new B,Wp=new vt,Js=new nh,Uo=new $a,nc=new B,Xp=new B;class Sy extends Jt{constructor(e=new gn,n=new s0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ul.fromBufferAttribute(n,r-1),Fl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ul.distanceTo(Fl);e.setAttribute("lineDistance",new Hn(i,1))}else be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),Uo.radius+=s,e.ray.intersectsSphere(Uo)===!1)return;Wp.copy(r).invert(),Js.copy(e.ray).applyMatrix4(Wp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let y=p,g=_-1;y<g;y+=u){const c=d.getX(y),m=d.getX(y+1),x=Fo(this,e,Js,l,c,m,y);x&&n.push(x)}if(this.isLineLoop){const y=d.getX(_-1),g=d.getX(p),c=Fo(this,e,Js,l,y,g,_-1);c&&n.push(c)}}else{const p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let y=p,g=_-1;y<g;y+=u){const c=Fo(this,e,Js,l,y,y+1,y);c&&n.push(c)}if(this.isLineLoop){const y=Fo(this,e,Js,l,_-1,p,_-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fo(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Ul.fromBufferAttribute(o,r),Fl.fromBufferAttribute(o,s),n.distanceSqToSegment(Ul,Fl,nc,Xp)>i)return;nc.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(nc);if(!(u<e.near||u>e.far))return{distance:u,point:Xp.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const jp=new B,Yp=new B;class yy extends Sy{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)jp.fromBufferAttribute(n,r),Yp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+jp.distanceTo(Yp);e.setAttribute("lineDistance",new Hn(i,1))}else be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yf extends Bs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qp=new vt,qf=new nh,Oo=new $a,Bo=new B;class $p extends Jt{constructor(e=new gn,n=new Yf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(r),Oo.radius+=s,e.ray.intersectsSphere(Oo)===!1)return;qp.copy(r).invert(),qf.copy(e.ray).applyMatrix4(qp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=f,y=p;_<y;_++){const g=u.getX(_);Bo.fromBufferAttribute(h,g),Kp(Bo,g,l,r,e,n,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,y=p;_<y;_++)Bo.fromBufferAttribute(h,_),Kp(Bo,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Kp(t,e,n,i,r,s,a){const o=qf.distanceSqToPoint(t);if(o<n){const l=new B;qf.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class a0 extends Qt{constructor(e=[],n=Nr,i,r,s,a,o,l,u,d){super(e,n,i,r,s,a,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ha extends Qt{constructor(e,n,i=ii,r,s,a,o=Ot,l=Ot,u,d=Ai,h=1){if(d!==Ai&&d!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,l,d,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new th(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class My extends Ha{constructor(e,n=ii,i=Nr,r,s,a=Ot,o=Ot,l,u=Ai){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,o,l,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class o0 extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ka extends gn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],d=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Hn(u,3)),this.setAttribute("normal",new Hn(d,3)),this.setAttribute("uv",new Hn(h,2));function _(y,g,c,m,x,M,C,A,R,S,T){const I=M/R,P=C/S,F=M/2,z=C/2,j=A/2,H=R+1,G=S+1;let U=0,k=0;const X=new B;for(let Z=0;Z<G;Z++){const oe=Z*P-z;for(let re=0;re<H;re++){const Le=re*I-F;X[y]=Le*m,X[g]=oe*x,X[c]=j,u.push(X.x,X.y,X.z),X[y]=0,X[g]=0,X[c]=A>0?1:-1,d.push(X.x,X.y,X.z),h.push(re/R),h.push(1-Z/S),U+=1}}for(let Z=0;Z<S;Z++)for(let oe=0;oe<R;oe++){const re=f+oe+H*Z,Le=f+oe+H*(Z+1),je=f+(oe+1)+H*(Z+1),Ze=f+(oe+1)+H*Z;l.push(re,Le,Ze),l.push(Le,je,Ze),k+=6}o.addGroup(p,k,T),p+=k,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class eu extends gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,d=l+1,h=e/o,f=n/l,p=[],_=[],y=[],g=[];for(let c=0;c<d;c++){const m=c*f-a;for(let x=0;x<u;x++){const M=x*h-s;_.push(M,-m,0),y.push(0,0,1),g.push(x/o),g.push(1-c/l)}}for(let c=0;c<l;c++)for(let m=0;m<o;m++){const x=m+u*c,M=m+u*(c+1),C=m+1+u*(c+1),A=m+1+u*c;p.push(x,M,A),p.push(M,C,A)}this.setIndex(p),this.setAttribute("position",new Hn(_,3)),this.setAttribute("normal",new Hn(y,3)),this.setAttribute("uv",new Hn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ls(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Ls(t[n]);for(const r in i)e[r]=i[r]}return e}function Ey(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function l0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Ty={clone:Ls,merge:$t};var wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wy,this.fragmentShader=Ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=Ey(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Cy extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ry extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Py extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ko=new B,zo=new Os,jn=new B;class u0 extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ko,zo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,zo,jn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(ko,zo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,zo,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new B,Zp=new rt,Qp=new rt;class En extends u0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Va*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,n){return this.getViewBounds(e,Zp,Qp),n.subVectors(Qp,Zp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Sa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class c0 extends u0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Kr=-90,Zr=1;class by extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(Kr,Zr,e,n);r.layers=this.layers,this.add(r);const s=new En(Kr,Zr,e,n);s.layers=this.layers,this.add(s);const a=new En(Kr,Zr,e,n);a.layers=this.layers,this.add(a);const o=new En(Kr,Zr,e,n);o.layers=this.layers,this.add(o);const l=new En(Kr,Zr,e,n);l.layers=this.layers,this.add(l);const u=new En(Kr,Zr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ly extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Dy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,be("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Jp(t,e,n,i){const r=Ny(i);switch(n){case q_:return t*e;case K_:return t*e/r.components*r.byteLength;case $d:return t*e/r.components*r.byteLength;case Ps:return t*e*2/r.components*r.byteLength;case Kd:return t*e*2/r.components*r.byteLength;case $_:return t*e*3/r.components*r.byteLength;case kn:return t*e*4/r.components*r.byteLength;case Zd:return t*e*4/r.components*r.byteLength;case nl:case il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rl:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gf:case vf:return Math.max(t,16)*Math.max(e,8)/4;case mf:case _f:return Math.max(t,8)*Math.max(e,8)/2;case xf:case Sf:case Mf:case Ef:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yf:case Tf:case wf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case bf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Df:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case If:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Of:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case kf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case zf:case Vf:case Hf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Gf:case Wf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Xf:case jf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ny(t){switch(t){case Tn:case W_:return{byteLength:1,components:1};case ka:case X_:case wi:return{byteLength:2,components:1};case Yd:case qd:return{byteLength:2,components:4};case ii:case jd:case Zn:return{byteLength:4,components:1};case j_:case Y_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xd}}));typeof window<"u"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function f0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Iy(t){const e=new WeakMap;function n(o,l){const u=o.array,d=o.usage,h=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,d),o.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,u){const d=l.array,h=l.updateRanges;if(t.bindBuffer(u,o),h.length===0)t.bufferSubData(u,0,d);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],y=h[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const y=h[p];t.bufferSubData(u,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var Uy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fy=`#ifdef USE_ALPHAHASH
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
#endif`,Oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,By=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vy=`#ifdef USE_AOMAP
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
#endif`,Hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gy=`#ifdef USE_BATCHING
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
#endif`,Wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qy=`#ifdef USE_IRIDESCENCE
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
#endif`,$y=`#ifdef USE_BUMPMAP
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
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,iM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rM=`#define PI 3.141592653589793
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
} // validated`,sM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aM=`vec3 transformedNormal = objectNormal;
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
#endif`,oM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fM="gl_FragColor = linearToOutputTexel( gl_FragColor );",dM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hM=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
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
#endif`,vM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MM=`#ifdef USE_GRADIENTMAP
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
}`,EM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AM=`uniform bool receiveShadow;
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
#endif`,CM=`#ifdef USE_ENVMAP
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
#endif`,RM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DM=`PhysicalMaterial material;
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
#endif`,NM=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
}`,IM=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UM=`#if defined( RE_IndirectDiffuse )
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
#endif`,FM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WM=`#if defined( USE_POINTS_UV )
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
#endif`,XM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KM=`#ifdef USE_MORPHTARGETS
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
#endif`,ZM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,JM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iE=`#ifdef USE_NORMALMAP
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
#endif`,rE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xE=`float getShadowMask() {
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
}`,SE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yE=`#ifdef USE_SKINNING
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
#endif`,ME=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EE=`#ifdef USE_SKINNING
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
#endif`,TE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RE=`#ifdef USE_TRANSMISSION
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
#endif`,PE=`#ifdef USE_TRANSMISSION
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
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UE=`uniform sampler2D t2D;
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
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`#include <common>
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
}`,VE=`#if DEPTH_PACKING == 3200
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
}`,HE=`#define DISTANCE
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
}`,GE=`#define DISTANCE
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
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`uniform float scale;
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
}`,YE=`uniform vec3 diffuse;
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
}`,qE=`#include <common>
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
}`,$E=`uniform vec3 diffuse;
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
}`,KE=`#define LAMBERT
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
}`,ZE=`#define LAMBERT
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
}`,QE=`#define MATCAP
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
}`,JE=`#define MATCAP
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
}`,eT=`#define NORMAL
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
}`,tT=`#define NORMAL
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
}`,nT=`#define PHONG
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
}`,iT=`#define PHONG
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
}`,rT=`#define STANDARD
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
}`,sT=`#define STANDARD
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
}`,aT=`#define TOON
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
}`,oT=`#define TOON
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
}`,lT=`uniform float size;
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
}`,uT=`uniform vec3 diffuse;
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
}`,cT=`#include <common>
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
}`,fT=`uniform vec3 color;
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
}`,dT=`uniform float rotation;
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
}`,hT=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Uy,alphahash_pars_fragment:Fy,alphamap_fragment:Oy,alphamap_pars_fragment:By,alphatest_fragment:ky,alphatest_pars_fragment:zy,aomap_fragment:Vy,aomap_pars_fragment:Hy,batching_pars_vertex:Gy,batching_vertex:Wy,begin_vertex:Xy,beginnormal_vertex:jy,bsdfs:Yy,iridescence_fragment:qy,bumpmap_pars_fragment:$y,clipping_planes_fragment:Ky,clipping_planes_pars_fragment:Zy,clipping_planes_pars_vertex:Qy,clipping_planes_vertex:Jy,color_fragment:eM,color_pars_fragment:tM,color_pars_vertex:nM,color_vertex:iM,common:rM,cube_uv_reflection_fragment:sM,defaultnormal_vertex:aM,displacementmap_pars_vertex:oM,displacementmap_vertex:lM,emissivemap_fragment:uM,emissivemap_pars_fragment:cM,colorspace_fragment:fM,colorspace_pars_fragment:dM,envmap_fragment:hM,envmap_common_pars_fragment:pM,envmap_pars_fragment:mM,envmap_pars_vertex:gM,envmap_physical_pars_fragment:CM,envmap_vertex:_M,fog_vertex:vM,fog_pars_vertex:xM,fog_fragment:SM,fog_pars_fragment:yM,gradientmap_pars_fragment:MM,lightmap_pars_fragment:EM,lights_lambert_fragment:TM,lights_lambert_pars_fragment:wM,lights_pars_begin:AM,lights_toon_fragment:RM,lights_toon_pars_fragment:PM,lights_phong_fragment:bM,lights_phong_pars_fragment:LM,lights_physical_fragment:DM,lights_physical_pars_fragment:NM,lights_fragment_begin:IM,lights_fragment_maps:UM,lights_fragment_end:FM,logdepthbuf_fragment:OM,logdepthbuf_pars_fragment:BM,logdepthbuf_pars_vertex:kM,logdepthbuf_vertex:zM,map_fragment:VM,map_pars_fragment:HM,map_particle_fragment:GM,map_particle_pars_fragment:WM,metalnessmap_fragment:XM,metalnessmap_pars_fragment:jM,morphinstance_vertex:YM,morphcolor_vertex:qM,morphnormal_vertex:$M,morphtarget_pars_vertex:KM,morphtarget_vertex:ZM,normal_fragment_begin:QM,normal_fragment_maps:JM,normal_pars_fragment:eE,normal_pars_vertex:tE,normal_vertex:nE,normalmap_pars_fragment:iE,clearcoat_normal_fragment_begin:rE,clearcoat_normal_fragment_maps:sE,clearcoat_pars_fragment:aE,iridescence_pars_fragment:oE,opaque_fragment:lE,packing:uE,premultiplied_alpha_fragment:cE,project_vertex:fE,dithering_fragment:dE,dithering_pars_fragment:hE,roughnessmap_fragment:pE,roughnessmap_pars_fragment:mE,shadowmap_pars_fragment:gE,shadowmap_pars_vertex:_E,shadowmap_vertex:vE,shadowmask_pars_fragment:xE,skinbase_vertex:SE,skinning_pars_vertex:yE,skinning_vertex:ME,skinnormal_vertex:EE,specularmap_fragment:TE,specularmap_pars_fragment:wE,tonemapping_fragment:AE,tonemapping_pars_fragment:CE,transmission_fragment:RE,transmission_pars_fragment:PE,uv_pars_fragment:bE,uv_pars_vertex:LE,uv_vertex:DE,worldpos_vertex:NE,background_vert:IE,background_frag:UE,backgroundCube_vert:FE,backgroundCube_frag:OE,cube_vert:BE,cube_frag:kE,depth_vert:zE,depth_frag:VE,distance_vert:HE,distance_frag:GE,equirect_vert:WE,equirect_frag:XE,linedashed_vert:jE,linedashed_frag:YE,meshbasic_vert:qE,meshbasic_frag:$E,meshlambert_vert:KE,meshlambert_frag:ZE,meshmatcap_vert:QE,meshmatcap_frag:JE,meshnormal_vert:eT,meshnormal_frag:tT,meshphong_vert:nT,meshphong_frag:iT,meshphysical_vert:rT,meshphysical_frag:sT,meshtoon_vert:aT,meshtoon_frag:oT,points_vert:lT,points_frag:uT,shadow_vert:cT,shadow_frag:fT,sprite_vert:dT,sprite_frag:hT},fe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},$n={basic:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:$t([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:$t([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:$t([fe.points,fe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:$t([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:$t([fe.common,fe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:$t([fe.sprite,fe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:$t([fe.common,fe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:$t([fe.lights,fe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};$n.physical={uniforms:$t([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Vo={r:0,b:0,g:0},hr=new Ci,pT=new vt;function mT(t,e,n,i,r,s){const a=new Ke(0);let o=r===!0?0:1,l,u,d=null,h=0,f=null;function p(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){const M=m.backgroundBlurriness>0;x=e.get(x,M)}return x}function _(m){let x=!1;const M=p(m);M===null?g(a,o):M&&M.isColor&&(g(M,1),x=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(m,x){const M=p(x);M&&(M.isCubeTexture||M.mapping===Jl)?(u===void 0&&(u=new Ri(new Ka(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Ls($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),hr.copy(x.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pT.makeRotationFromEuler(hr)),u.material.toneMapped=We.getTransfer(M.colorSpace)!==et,(d!==M||h!==M.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,f=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ri(new eu(2,2),new ri({name:"BackgroundMaterial",uniforms:Ls($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=We.getTransfer(M.colorSpace)!==et,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,d=M,h=M.version,f=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,x){m.getRGB(Vo,l0(t)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,x,s)}function c(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,x=1){a.set(m),o=x,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:_,addToRenderList:y,dispose:c}}function gT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(P,F,z,j,H){let G=!1;const U=h(P,j,z,F);s!==U&&(s=U,u(s.object)),G=p(P,j,z,H),G&&_(P,j,z,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(P,F,z,j),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function d(P){return t.deleteVertexArray(P)}function h(P,F,z,j){const H=j.wireframe===!0;let G=i[F.id];G===void 0&&(G={},i[F.id]=G);const U=P.isInstancedMesh===!0?P.id:0;let k=G[U];k===void 0&&(k={},G[U]=k);let X=k[z.id];X===void 0&&(X={},k[z.id]=X);let Z=X[H];return Z===void 0&&(Z=f(l()),X[H]=Z),Z}function f(P){const F=[],z=[],j=[];for(let H=0;H<n;H++)F[H]=0,z[H]=0,j[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:j,object:P,attributes:{},index:null}}function p(P,F,z,j){const H=s.attributes,G=F.attributes;let U=0;const k=z.getAttributes();for(const X in k)if(k[X].location>=0){const oe=H[X];let re=G[X];if(re===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),oe===void 0||oe.attribute!==re||re&&oe.data!==re.data)return!0;U++}return s.attributesNum!==U||s.index!==j}function _(P,F,z,j){const H={},G=F.attributes;let U=0;const k=z.getAttributes();for(const X in k)if(k[X].location>=0){let oe=G[X];oe===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor));const re={};re.attribute=oe,oe&&oe.data&&(re.data=oe.data),H[X]=re,U++}s.attributes=H,s.attributesNum=U,s.index=j}function y(){const P=s.newAttributes;for(let F=0,z=P.length;F<z;F++)P[F]=0}function g(P){c(P,0)}function c(P,F){const z=s.newAttributes,j=s.enabledAttributes,H=s.attributeDivisors;z[P]=1,j[P]===0&&(t.enableVertexAttribArray(P),j[P]=1),H[P]!==F&&(t.vertexAttribDivisor(P,F),H[P]=F)}function m(){const P=s.newAttributes,F=s.enabledAttributes;for(let z=0,j=F.length;z<j;z++)F[z]!==P[z]&&(t.disableVertexAttribArray(z),F[z]=0)}function x(P,F,z,j,H,G,U){U===!0?t.vertexAttribIPointer(P,F,z,H,G):t.vertexAttribPointer(P,F,z,j,H,G)}function M(P,F,z,j){y();const H=j.attributes,G=z.getAttributes(),U=F.defaultAttributeValues;for(const k in G){const X=G[k];if(X.location>=0){let Z=H[k];if(Z===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){const oe=Z.normalized,re=Z.itemSize,Le=e.get(Z);if(Le===void 0)continue;const je=Le.buffer,Ze=Le.type,$=Le.bytesPerElement,ie=Ze===t.INT||Ze===t.UNSIGNED_INT||Z.gpuType===jd;if(Z.isInterleavedBufferAttribute){const ce=Z.data,Ue=ce.stride,Re=Z.offset;if(ce.isInstancedInterleavedBuffer){for(let De=0;De<X.locationSize;De++)c(X.location+De,ce.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let De=0;De<X.locationSize;De++)g(X.location+De);t.bindBuffer(t.ARRAY_BUFFER,je);for(let De=0;De<X.locationSize;De++)x(X.location+De,re/X.locationSize,Ze,oe,Ue*$,(Re+re/X.locationSize*De)*$,ie)}else{if(Z.isInstancedBufferAttribute){for(let ce=0;ce<X.locationSize;ce++)c(X.location+ce,Z.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ce=0;ce<X.locationSize;ce++)g(X.location+ce);t.bindBuffer(t.ARRAY_BUFFER,je);for(let ce=0;ce<X.locationSize;ce++)x(X.location+ce,re/X.locationSize,Ze,oe,re*$,re/X.locationSize*ce*$,ie)}}else if(U!==void 0){const oe=U[k];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(X.location,oe);break;case 3:t.vertexAttrib3fv(X.location,oe);break;case 4:t.vertexAttrib4fv(X.location,oe);break;default:t.vertexAttrib1fv(X.location,oe)}}}}m()}function C(){T();for(const P in i){const F=i[P];for(const z in F){const j=F[z];for(const H in j){const G=j[H];for(const U in G)d(G[U].object),delete G[U];delete j[H]}}delete i[P]}}function A(P){if(i[P.id]===void 0)return;const F=i[P.id];for(const z in F){const j=F[z];for(const H in j){const G=j[H];for(const U in G)d(G[U].object),delete G[U];delete j[H]}}delete i[P.id]}function R(P){for(const F in i){const z=i[F];for(const j in z){const H=z[j];if(H[P.id]===void 0)continue;const G=H[P.id];for(const U in G)d(G[U].object),delete G[U];delete H[P.id]}}}function S(P){for(const F in i){const z=i[F],j=P.isInstancedMesh===!0?P.id:0,H=z[j];if(H!==void 0){for(const G in H){const U=H[G];for(const k in U)d(U[k].object),delete U[k];delete H[G]}delete z[j],Object.keys(z).length===0&&delete i[F]}}}function T(){I(),a=!0,s!==r&&(s=r,u(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:g,disableUnusedAttributes:m}}function _T(t,e,n){let i;function r(u){i=u}function s(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function a(u,d,h){h!==0&&(t.drawArraysInstanced(i,u,d,h),n.update(d,i,h))}function o(u,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=d[_];n.update(p,i,1)}function l(u,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)a(u[_],d[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,d,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=d[y]*f[y];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function vT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==kn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const S=R===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Tn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Zn&&!S)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(be("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:c,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:M,maxSamples:C,samples:A}}function xT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new _r,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,c=t.get(h);if(!r||_===null||_.length===0||s&&!g)s?d(null):u();else{const m=s?0:i,x=m*4;let M=c.clippingState||null;l.value=M,M=d(_,f,x,p);for(let C=0;C!==x;++C)M[C]=n[C];c.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,_){const y=h!==null?h.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const c=p+y*4,m=f.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<c)&&(g=new Float32Array(c));for(let x=0,M=p;x!==y;++x,M+=4)a.copy(h[x]).applyMatrix4(m,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}const ji=4,em=[.125,.215,.35,.446,.526,.582],xr=20,ST=256,ea=new c0,tm=new Ke;let ic=null,rc=0,sc=0,ac=!1;const yT=new B;class nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=yT}=s;ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ic,rc,sc),this._renderer.xr.enabled=ac,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Nr||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:wi,format:kn,colorSpace:bs,depthBuffer:!1},r=im(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=im(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=MT(s)),this._blurMaterial=TT(s,e,n),this._ggxMaterial=ET(s,e,n)}return r}_compileMaterial(e){const n=new Ri(new gn,e);this._renderer.compile(n,ea)}_sceneToCubeUV(e,n,i,r,s){const l=new En(90,1,n,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(tm),h.toneMapping=ti,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new Ka,new i0({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let c=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,c=!0):(g.color.copy(tm),c=!0);for(let x=0;x<6;x++){const M=x%3;M===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[x],s.y,s.z)):M===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[x]));const C=this._cubeSize;Qr(r,M*C,x>2?C:0,C,C),h.setRenderTarget(r),c&&h.render(y,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Nr||e.mapping===Rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Qr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ea)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(u*u-d*d),f=0+u*1.25,p=h*f,{_lodMax:_}=this,y=this._sizeLods[i],g=3*y*(i>_-ji?i-_+ji:0),c=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,Qr(s,g,c,3*y,2*y),r.setRenderTarget(s),r.render(o,ea),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Qr(e,g,c,3*y,2*y),r.setRenderTarget(e),r.render(o,ea)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=u;const f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xr-1),y=s/_,g=isFinite(s)?1+Math.floor(d*y):xr;g>xr&&be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${xr}`);const c=[];let m=0;for(let R=0;R<xr;++R){const S=R/y,T=Math.exp(-S*S/2);c.push(T),R===0?m+=T:R<g&&(m+=2*T)}for(let R=0;R<c.length;R++)c[R]=c[R]/m;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=c,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const M=this._sizeLods[r],C=3*M*(r>x-ji?r-x+ji:0),A=4*(this._cubeSize-M);Qr(n,C,A,3*M,2*M),l.setRenderTarget(n),l.render(h,ea)}}function MT(t){const e=[],n=[],i=[];let r=t;const s=t-ji+1+em.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ji?l=em[a-t+ji-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,_=6,y=3,g=2,c=1,m=new Float32Array(y*_*p),x=new Float32Array(g*_*p),M=new Float32Array(c*_*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,S=A>2?0:-1,T=[R,S,0,R+2/3,S,0,R+2/3,S+1,0,R,S,0,R+2/3,S+1,0,R,S+1,0];m.set(T,y*_*A),x.set(f,g*_*A);const I=[A,A,A,A,A,A];M.set(I,c*_*A)}const C=new gn;C.setAttribute("position",new Cn(m,y)),C.setAttribute("uv",new Cn(x,g)),C.setAttribute("faceIndex",new Cn(M,c)),i.push(new Ri(C,null)),r>ji&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function im(t,e,n){const i=new ni(t,e,n);return i.texture.mapping=Jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ET(t,e,n){return new ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ST,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function TT(t,e,n){const i=new Float32Array(xr),r=new B(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tu(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function rm(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function sm(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function tu(){return`

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
	`}class d0 extends ni{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new a0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ka(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:xi});s.uniforms.tEquirect.value=n;const a=new Ri(r,s),o=n.minFilter;return n.minFilter===Er&&(n.minFilter=jt),new by(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function wT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===Lu||p===Du)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const y=new d0(_.height);return y.fromEquirectangularTexture(t,f),e.set(f,y),f.addEventListener("dispose",u),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,_=p===Lu||p===Du,y=p===Nr||p===Rs;if(_||y){let g=n.get(f);const c=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==c)return i===null&&(i=new nm(t)),g=_?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const m=f.image;return _&&m&&m.height>0||y&&m&&l(m)?(i===null&&(i=new nm(t)),g=_?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",d),g.texture):null}}}return f}function o(f,p){return p===Lu?f.mapping=Nr:p===Du&&(f.mapping=Rs),f}function l(f){let p=0;const _=6;for(let y=0;y<_;y++)f[y]!==void 0&&p++;return p===_}function u(f){const p=f.target;p.removeEventListener("dispose",u);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function d(f){const p=f.target;p.removeEventListener("dispose",d);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function AT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Il("WebGLRenderer: "+i+" extension not supported."),r}}}function CT(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function u(h){const f=[],p=h.index,_=h.attributes.position;let y=0;if(_===void 0)return;if(p!==null){const m=p.array;y=p.version;for(let x=0,M=m.length;x<M;x+=3){const C=m[x+0],A=m[x+1],R=m[x+2];f.push(C,A,A,R,R,C)}}else{const m=_.array;y=_.version;for(let x=0,M=m.length/3-1;x<M;x+=3){const C=x+0,A=x+1,R=x+2;f.push(C,A,A,R,R,C)}}const g=new(_.count>=65535?n0:t0)(f,1);g.version=y;const c=s.get(h);c&&e.remove(c),s.set(h,g)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function RT(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*a),n.update(p,i,1)}function u(f,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,f*a,_),n.update(p,i,_))}function d(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let g=0;for(let c=0;c<_;c++)g+=p[c];n.update(g,i,1)}function h(f,p,_,y){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let c=0;c<f.length;c++)u(f[c]/a,p[c],y[c]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,_);let c=0;for(let m=0;m<_;m++)c+=p[m]*y[m];n.update(c,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function PT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function bT(t,e,n){const i=new WeakMap,r=new Mt;function s(a,o,l){const u=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let I=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",I)};var p=I;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),g===!0&&(M=3);let C=o.attributes.position.count*M,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*A*4*h),S=new Q_(R,C,A,h);S.type=Zn,S.needsUpdate=!0;const T=M*4;for(let P=0;P<h;P++){const F=c[P],z=m[P],j=x[P],H=C*A*4*P;for(let G=0;G<F.count;G++){const U=G*T;_===!0&&(r.fromBufferAttribute(F,G),R[H+U+0]=r.x,R[H+U+1]=r.y,R[H+U+2]=r.z,R[H+U+3]=0),y===!0&&(r.fromBufferAttribute(z,G),R[H+U+4]=r.x,R[H+U+5]=r.y,R[H+U+6]=r.z,R[H+U+7]=0),g===!0&&(r.fromBufferAttribute(j,G),R[H+U+8]=r.x,R[H+U+9]=r.y,R[H+U+10]=r.z,R[H+U+11]=j.itemSize===4?r.w:1)}}f={count:h,texture:S,size:new rt(C,A)},i.set(o,f),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function LT(t,e,n,i,r){let s=new WeakMap;function a(u){const d=r.render.frame,h=u.geometry,f=e.get(u,h);if(s.get(f)!==d&&(e.update(f),s.set(f,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==d&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return f}function o(){s=new WeakMap}function l(u){const d=u.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:o}}const DT={[F_]:"LINEAR_TONE_MAPPING",[O_]:"REINHARD_TONE_MAPPING",[B_]:"CINEON_TONE_MAPPING",[k_]:"ACES_FILMIC_TONE_MAPPING",[V_]:"AGX_TONE_MAPPING",[H_]:"NEUTRAL_TONE_MAPPING",[z_]:"CUSTOM_TONE_MAPPING"};function NT(t,e,n,i,r){const s=new ni(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new ni(e,n,{type:wi,depthBuffer:!1,stencilBuffer:!1}),o=new gn;o.setAttribute("position",new Hn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Hn([0,2,0,0,2,0],2));const l=new Cy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ri(o,l),d=new c0(-1,1,1,-1,0,1);let h=null,f=null,p=!1,_,y=null,g=[],c=!1;this.setSize=function(m,x){s.setSize(m,x),a.setSize(m,x);for(let M=0;M<g.length;M++){const C=g[M];C.setSize&&C.setSize(m,x)}},this.setEffects=function(m){g=m,c=g.length>0&&g[0].isRenderPass===!0;const x=s.width,M=s.height;for(let C=0;C<g.length;C++){const A=g[C];A.setSize&&A.setSize(x,M)}},this.begin=function(m,x){if(p||m.toneMapping===ti&&g.length===0)return!1;if(y=x,x!==null){const M=x.width,C=x.height;(s.width!==M||s.height!==C)&&this.setSize(M,C)}return c===!1&&m.setRenderTarget(s),_=m.toneMapping,m.toneMapping=ti,!0},this.hasRenderPass=function(){return c},this.end=function(m,x){m.toneMapping=_,p=!0;let M=s,C=a;for(let A=0;A<g.length;A++){const R=g[A];if(R.enabled!==!1&&(R.render(m,C,M,x),R.needsSwap!==!1)){const S=M;M=C,C=S}}if(h!==m.outputColorSpace||f!==m.toneMapping){h=m.outputColorSpace,f=m.toneMapping,l.defines={},We.getTransfer(h)===et&&(l.defines.SRGB_TRANSFER="");const A=DT[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(y),m.render(u,d),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const h0=new Qt,$f=new Ha(1,1),p0=new Q_,m0=new ny,g0=new a0,am=[],om=[],lm=new Float32Array(16),um=new Float32Array(9),cm=new Float32Array(4);function ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=am[r];if(s===void 0&&(s=new Float32Array(r),am[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function nu(t,e){let n=om[e];n===void 0&&(n=new Int32Array(e),om[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function IT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function OT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function BT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;cm.set(i),t.uniformMatrix2fv(this.addr,!1,cm),Pt(n,i)}}function kT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;um.set(i),t.uniformMatrix3fv(this.addr,!1,um),Pt(n,i)}}function zT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;lm.set(i),t.uniformMatrix4fv(this.addr,!1,lm),Pt(n,i)}}function VT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function HT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function GT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function XT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function $T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?($f.compareFunction=n.isReversedDepthBuffer()?Jd:Qd,s=$f):s=h0,n.setTexture2D(e||s,r)}function KT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||m0,r)}function ZT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||g0,r)}function QT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||p0,r)}function JT(t){switch(t){case 5126:return IT;case 35664:return UT;case 35665:return FT;case 35666:return OT;case 35674:return BT;case 35675:return kT;case 35676:return zT;case 5124:case 35670:return VT;case 35667:case 35671:return HT;case 35668:case 35672:return GT;case 35669:case 35673:return WT;case 5125:return XT;case 36294:return jT;case 36295:return YT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return QT}}function e1(t,e){t.uniform1fv(this.addr,e)}function t1(t,e){const n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function n1(t,e){const n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function i1(t,e){const n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function r1(t,e){const n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function s1(t,e){const n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function a1(t,e){const n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function o1(t,e){t.uniform1iv(this.addr,e)}function l1(t,e){t.uniform2iv(this.addr,e)}function u1(t,e){t.uniform3iv(this.addr,e)}function c1(t,e){t.uniform4iv(this.addr,e)}function f1(t,e){t.uniform1uiv(this.addr,e)}function d1(t,e){t.uniform2uiv(this.addr,e)}function h1(t,e){t.uniform3uiv(this.addr,e)}function p1(t,e){t.uniform4uiv(this.addr,e)}function m1(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=$f:a=h0;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function g1(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||m0,s[a])}function _1(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||g0,s[a])}function v1(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||p0,s[a])}function x1(t){switch(t){case 5126:return e1;case 35664:return t1;case 35665:return n1;case 35666:return i1;case 35674:return r1;case 35675:return s1;case 35676:return a1;case 5124:case 35670:return o1;case 35667:case 35671:return l1;case 35668:case 35672:return u1;case 35669:case 35673:return c1;case 5125:return f1;case 36294:return d1;case 36295:return h1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return v1}}class S1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=JT(n.type)}}class y1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=x1(n.type)}}class M1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const oc=/(\w+)(\])?(\[|\.)?/g;function fm(t,e){t.seq.push(e),t.map[e.id]=e}function E1(t,e,n){const i=t.name,r=i.length;for(oc.lastIndex=0;;){const s=oc.exec(i),a=oc.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){fm(n,u===void 0?new S1(o,t,e):new y1(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new M1(o),fm(n,h)),n=h}}}class al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);E1(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function dm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const T1=37297;let w1=0;function A1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const hm=new Fe;function C1(t){We._getMatrix(hm,We.workingColorSpace,t);const e=`mat3( ${hm.elements.map(n=>n.toFixed(4))} )`;switch(We.getTransfer(t)){case Ll:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function pm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+A1(t.getShaderSource(e),o)}else return s}function R1(t,e){const n=C1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const P1={[F_]:"Linear",[O_]:"Reinhard",[B_]:"Cineon",[k_]:"ACESFilmic",[V_]:"AgX",[H_]:"Neutral",[z_]:"Custom"};function b1(t,e){const n=P1[e];return n===void 0?(be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ho=new B;function L1(){We.getLuminanceCoefficients(Ho);const t=Ho.x.toFixed(4),e=Ho.y.toFixed(4),n=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function N1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function I1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ua(t){return t!==""}function mm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kf(t){return t.replace(U1,O1)}const F1=new Map;function O1(t,e){let n=Oe[e];if(n===void 0){const i=F1.get(e);if(i!==void 0)n=Oe[i],be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kf(n)}const B1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(t){return t.replace(B1,k1)}function k1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const z1={[tl]:"SHADOWMAP_TYPE_PCF",[oa]:"SHADOWMAP_TYPE_VSM"};function V1(t){return z1[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const H1={[Nr]:"ENVMAP_TYPE_CUBE",[Rs]:"ENVMAP_TYPE_CUBE",[Jl]:"ENVMAP_TYPE_CUBE_UV"};function G1(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":H1[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const W1={[Rs]:"ENVMAP_MODE_REFRACTION"};function X1(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":W1[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const j1={[U_]:"ENVMAP_BLENDING_MULTIPLY",[xS]:"ENVMAP_BLENDING_MIX",[SS]:"ENVMAP_BLENDING_ADD"};function Y1(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":j1[t.combine]||"ENVMAP_BLENDING_NONE"}function q1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $1(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=V1(n),u=G1(n),d=X1(n),h=Y1(n),f=q1(n),p=D1(n),_=N1(s),y=r.createProgram();let g,c,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ua).join(`
`),g.length>0&&(g+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ua).join(`
`),c.length>0&&(c+=`
`)):(g=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),c=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ti?"#define TONE_MAPPING":"",n.toneMapping!==ti?Oe.tonemapping_pars_fragment:"",n.toneMapping!==ti?b1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,R1("linearToOutputTexel",n.outputColorSpace),L1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ua).join(`
`)),a=Kf(a),a=mm(a,n),a=gm(a,n),o=Kf(o),o=mm(o,n),o=gm(o,n),a=_m(a),o=_m(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,c=["#define varying in",n.glslVersion===Ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const x=m+g+a,M=m+c+o,C=dm(r,r.VERTEX_SHADER,x),A=dm(r,r.FRAGMENT_SHADER,M);r.attachShader(y,C),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(P){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(y)||"",z=r.getShaderInfoLog(C)||"",j=r.getShaderInfoLog(A)||"",H=F.trim(),G=z.trim(),U=j.trim();let k=!0,X=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,A);else{const Z=pm(r,C,"vertex"),oe=pm(r,A,"fragment");qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+Z+`
`+oe)}else H!==""?be("WebGLProgram: Program Info Log:",H):(G===""||U==="")&&(X=!1);X&&(P.diagnostics={runnable:k,programLog:H,vertexShader:{log:G,prefix:g},fragmentShader:{log:U,prefix:c}})}r.deleteShader(C),r.deleteShader(A),S=new al(r,y),T=I1(r,y)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(y,T1)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=w1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=A,this}let K1=0;class Z1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Q1(e),n.set(e,i)),i}}class Q1{constructor(e){this.id=K1++,this.code=e,this.usedTimes=0}}function J1(t,e,n,i,r,s){const a=new J_,o=new Z1,l=new Set,u=[],d=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function y(S,T,I,P,F){const z=P.fog,j=F.geometry,H=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?P.environment:null,G=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,U=e.get(S.envMap||H,G),k=U&&U.mapping===Jl?U.image.height:null,X=p[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&be("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Z=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,oe=Z!==void 0?Z.length:0;let re=0;j.morphAttributes.position!==void 0&&(re=1),j.morphAttributes.normal!==void 0&&(re=2),j.morphAttributes.color!==void 0&&(re=3);let Le,je,Ze,$;if(X){const Je=$n[X];Le=Je.vertexShader,je=Je.fragmentShader}else Le=S.vertexShader,je=S.fragmentShader,o.update(S),Ze=o.getVertexShaderID(S),$=o.getFragmentShaderID(S);const ie=t.getRenderTarget(),ce=t.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,Re=F.isBatchedMesh===!0,De=!!S.map,bt=!!S.matcap,Ge=!!U,Qe=!!S.aoMap,st=!!S.lightMap,Be=!!S.bumpMap,xt=!!S.normalMap,b=!!S.displacementMap,Et=!!S.emissiveMap,$e=!!S.metalnessMap,ot=!!S.roughnessMap,Ee=S.anisotropy>0,w=S.clearcoat>0,v=S.dispersion>0,D=S.iridescence>0,K=S.sheen>0,Q=S.transmission>0,q=Ee&&!!S.anisotropyMap,ve=w&&!!S.clearcoatMap,le=w&&!!S.clearcoatNormalMap,Ce=w&&!!S.clearcoatRoughnessMap,Pe=D&&!!S.iridescenceMap,te=D&&!!S.iridescenceThicknessMap,se=K&&!!S.sheenColorMap,xe=K&&!!S.sheenRoughnessMap,ye=!!S.specularMap,pe=!!S.specularColorMap,ke=!!S.specularIntensityMap,L=Q&&!!S.transmissionMap,ue=Q&&!!S.thicknessMap,ae=!!S.gradientMap,_e=!!S.alphaMap,ne=S.alphaTest>0,Y=!!S.alphaHash,Se=!!S.extensions;let Ne=ti;S.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ne=t.toneMapping);const lt={shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:Le,fragmentShader:je,defines:S.defines,customVertexShaderID:Ze,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Re,batchingColor:Re&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:bs,alphaToCoverage:!!S.alphaToCoverage,map:De,matcap:bt,envMap:Ge,envMapMode:Ge&&U.mapping,envMapCubeUVHeight:k,aoMap:Qe,lightMap:st,bumpMap:Be,normalMap:xt,displacementMap:b,emissiveMap:Et,normalMapObjectSpace:xt&&S.normalMapType===TS,normalMapTangentSpace:xt&&S.normalMapType===ES,metalnessMap:$e,roughnessMap:ot,anisotropy:Ee,anisotropyMap:q,clearcoat:w,clearcoatMap:ve,clearcoatNormalMap:le,clearcoatRoughnessMap:Ce,dispersion:v,iridescence:D,iridescenceMap:Pe,iridescenceThicknessMap:te,sheen:K,sheenColorMap:se,sheenRoughnessMap:xe,specularMap:ye,specularColorMap:pe,specularIntensityMap:ke,transmission:Q,transmissionMap:L,thicknessMap:ue,gradientMap:ae,opaque:S.transparent===!1&&S.blending===vs&&S.alphaToCoverage===!1,alphaMap:_e,alphaTest:ne,alphaHash:Y,combine:S.combine,mapUv:De&&_(S.map.channel),aoMapUv:Qe&&_(S.aoMap.channel),lightMapUv:st&&_(S.lightMap.channel),bumpMapUv:Be&&_(S.bumpMap.channel),normalMapUv:xt&&_(S.normalMap.channel),displacementMapUv:b&&_(S.displacementMap.channel),emissiveMapUv:Et&&_(S.emissiveMap.channel),metalnessMapUv:$e&&_(S.metalnessMap.channel),roughnessMapUv:ot&&_(S.roughnessMap.channel),anisotropyMapUv:q&&_(S.anisotropyMap.channel),clearcoatMapUv:ve&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:se&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(S.sheenRoughnessMap.channel),specularMapUv:ye&&_(S.specularMap.channel),specularColorMapUv:pe&&_(S.specularColorMap.channel),specularIntensityMapUv:ke&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:ue&&_(S.thicknessMap.channel),alphaMapUv:_e&&_(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(xt||Ee),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(De||_e),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||j.attributes.normal===void 0&&xt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ce,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ne,decodeVideoTexture:De&&S.map.isVideoTexture===!0&&We.getTransfer(S.map.colorSpace)===et,decodeVideoTextureEmissive:Et&&S.emissiveMap.isVideoTexture===!0&&We.getTransfer(S.emissiveMap.colorSpace)===et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pi,flipSided:S.side===ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Se&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&S.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function g(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)T.push(I),T.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(c(T,S),m(T,S),T.push(t.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function c(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function m(S,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const T=p[S.type];let I;if(T){const P=$n[T];I=Ty.clone(P.uniforms)}else I=S.uniforms;return I}function M(S,T){let I=d.get(T);return I!==void 0?++I.usedTimes:(I=new $1(t,T,S,r),u.push(I),d.set(T,I)),I}function C(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),d.delete(S.cacheKey),S.destroy()}}function A(S){o.remove(S)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:x,acquireProgram:M,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:R}}function ew(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function tw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function xm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Sm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,_,y,g,c){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:p,material:_,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:g,group:c},t[e]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=_,m.materialVariant=a(f),m.groupOrder=y,m.renderOrder=f.renderOrder,m.z=g,m.group=c),e++,m}function l(f,p,_,y,g,c){const m=o(f,p,_,y,g,c);_.transmission>0?i.push(m):_.transparent===!0?r.push(m):n.push(m)}function u(f,p,_,y,g,c){const m=o(f,p,_,y,g,c);_.transmission>0?i.unshift(m):_.transparent===!0?r.unshift(m):n.unshift(m)}function d(f,p){n.length>1&&n.sort(f||tw),i.length>1&&i.sort(p||xm),r.length>1&&r.sort(p||xm)}function h(){for(let f=e,p=t.length;f<p;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:h,sort:d}}function nw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Sm,t.set(i,[a])):r>=s.length?(a=new Sm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function iw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Ke};break;case"SpotLight":n={position:new B,direction:new B,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function rw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let sw=0;function aw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ow(t){const e=new iw,n=rw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,s=new vt,a=new vt;function o(u){let d=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,y=0,g=0,c=0,m=0,x=0,M=0,C=0,A=0,R=0;u.sort(aw);for(let T=0,I=u.length;T<I;T++){const P=u[T],F=P.color,z=P.intensity,j=P.distance;let H=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ps?H=P.shadow.map.texture:H=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=F.r*z,h+=F.g*z,f+=F.b*z;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],z);R++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const U=P.shadow,k=n.get(P);k.shadowIntensity=U.intensity,k.shadowBias=U.bias,k.shadowNormalBias=U.normalBias,k.shadowRadius=U.radius,k.shadowMapSize=U.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=G,p++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(F).multiplyScalar(z),G.distance=j,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[y]=G;const U=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,U.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[y]=U.matrix,P.castShadow){const k=n.get(P);k.shadowIntensity=U.intensity,k.shadowBias=U.bias,k.shadowNormalBias=U.normalBias,k.shadowRadius=U.radius,k.shadowMapSize=U.mapSize,i.spotShadow[y]=k,i.spotShadowMap[y]=H,M++}y++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(F).multiplyScalar(z),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=G,g++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const U=P.shadow,k=n.get(P);k.shadowIntensity=U.intensity,k.shadowBias=U.bias,k.shadowNormalBias=U.normalBias,k.shadowRadius=U.radius,k.shadowMapSize=U.mapSize,k.shadowCameraNear=U.camera.near,k.shadowCameraFar=U.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=H,i.pointShadowMatrix[_]=P.shadow.matrix,x++}i.point[_]=G,_++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(z),G.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[c]=G,c++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==p||S.pointLength!==_||S.spotLength!==y||S.rectAreaLength!==g||S.hemiLength!==c||S.numDirectionalShadows!==m||S.numPointShadows!==x||S.numSpotShadows!==M||S.numSpotMaps!==C||S.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=_,i.hemi.length=c,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,S.directionalLength=p,S.pointLength=_,S.spotLength=y,S.rectAreaLength=g,S.hemiLength=c,S.numDirectionalShadows=m,S.numPointShadows=x,S.numSpotShadows=M,S.numSpotMaps=C,S.numLightProbes=R,i.version=sw++)}function l(u,d){let h=0,f=0,p=0,_=0,y=0;const g=d.matrixWorldInverse;for(let c=0,m=u.length;c<m;c++){const x=u[c];if(x.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(x.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:i}}function ym(t){const e=new ow(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function lw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ym(t),e.set(r,[o])):s>=a.length?(o=new ym(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const uw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cw=`uniform sampler2D shadow_pass;
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
}`,fw=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],dw=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Mm=new vt,ta=new B,lc=new B;function hw(t,e,n){let i=new r0;const r=new rt,s=new rt,a=new Mt,o=new Ry,l=new Py,u={},d=n.maxTextureSize,h={[ir]:ln,[ln]:ir,[pi]:pi},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:uw,fragmentShader:cw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new gn;_.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ri(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tl;let c=this.type;this.render=function(A,R,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===eS&&(be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tl);const T=t.getRenderTarget(),I=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),F=t.state;F.setBlending(xi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=c!==this.type;z&&R.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(H=>H.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,H=A.length;j<H;j++){const G=A[j],U=G.shadow;if(U===void 0){be("WebGLShadowMap:",G,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const k=U.getFrameExtents();r.multiply(k),s.copy(U.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/k.x),r.x=s.x*k.x,U.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/k.y),r.y=s.y*k.y,U.mapSize.y=s.y));const X=t.state.buffers.depth.getReversed();if(U.camera._reversedDepth=X,U.map===null||z===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===oa){if(G.isPointLight){be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new ni(r.x,r.y,{format:Ps,type:wi,minFilter:jt,magFilter:jt,generateMipmaps:!1}),U.map.texture.name=G.name+".shadowMap",U.map.depthTexture=new Ha(r.x,r.y,Zn),U.map.depthTexture.name=G.name+".shadowMapDepth",U.map.depthTexture.format=Ai,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ot,U.map.depthTexture.magFilter=Ot}else G.isPointLight?(U.map=new d0(r.x),U.map.depthTexture=new My(r.x,ii)):(U.map=new ni(r.x,r.y),U.map.depthTexture=new Ha(r.x,r.y,ii)),U.map.depthTexture.name=G.name+".shadowMap",U.map.depthTexture.format=Ai,this.type===tl?(U.map.depthTexture.compareFunction=X?Jd:Qd,U.map.depthTexture.minFilter=jt,U.map.depthTexture.magFilter=jt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ot,U.map.depthTexture.magFilter=Ot);U.camera.updateProjectionMatrix()}const Z=U.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<Z;oe++){if(U.map.isWebGLCubeRenderTarget)t.setRenderTarget(U.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(U.map),t.clear());const re=U.getViewport(oe);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),F.viewport(a)}if(G.isPointLight){const re=U.camera,Le=U.matrix,je=G.distance||re.far;je!==re.far&&(re.far=je,re.updateProjectionMatrix()),ta.setFromMatrixPosition(G.matrixWorld),re.position.copy(ta),lc.copy(re.position),lc.add(fw[oe]),re.up.copy(dw[oe]),re.lookAt(lc),re.updateMatrixWorld(),Le.makeTranslation(-ta.x,-ta.y,-ta.z),Mm.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Mm,re.coordinateSystem,re.reversedDepth)}else U.updateMatrices(G);i=U.getFrustum(),M(R,S,U.camera,G,this.type)}U.isPointLightShadow!==!0&&this.type===oa&&m(U,S),U.needsUpdate=!1}c=this.type,g.needsUpdate=!1,t.setRenderTarget(T,I,P)};function m(A,R){const S=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ni(r.x,r.y,{format:Ps,type:wi})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,S,f,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,S,p,y,null)}function x(A,R,S,T){let I=null;const P=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)I=P;else if(I=S.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=I.uuid,z=R.uuid;let j=u[F];j===void 0&&(j={},u[F]=j);let H=j[z];H===void 0&&(H=I.clone(),j[z]=H,R.addEventListener("dispose",C)),I=H}if(I.visible=R.visible,I.wireframe=R.wireframe,T===oa?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:h[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const F=t.properties.get(I);F.light=S}return I}function M(A,R,S,T,I){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===oa)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);const z=e.update(A),j=A.material;if(Array.isArray(j)){const H=z.groups;for(let G=0,U=H.length;G<U;G++){const k=H[G],X=j[k.materialIndex];if(X&&X.visible){const Z=x(A,X,T,I);A.onBeforeShadow(t,A,R,S,z,Z,k),t.renderBufferDirect(S,null,z,Z,A,k),A.onAfterShadow(t,A,R,S,z,Z,k)}}}else if(j.visible){const H=x(A,j,T,I);A.onBeforeShadow(t,A,R,S,z,H,null),t.renderBufferDirect(S,null,z,H,A,null),A.onAfterShadow(t,A,R,S,z,H,null)}}const F=A.children;for(let z=0,j=F.length;z<j;z++)M(F[z],R,S,T,I)}function C(A){A.target.removeEventListener("dispose",C);for(const S in u){const T=u[S],I=A.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function pw(t,e){function n(){let L=!1;const ue=new Mt;let ae=null;const _e=new Mt(0,0,0,0);return{setMask:function(ne){ae!==ne&&!L&&(t.colorMask(ne,ne,ne,ne),ae=ne)},setLocked:function(ne){L=ne},setClear:function(ne,Y,Se,Ne,lt){lt===!0&&(ne*=Ne,Y*=Ne,Se*=Ne),ue.set(ne,Y,Se,Ne),_e.equals(ue)===!1&&(t.clearColor(ne,Y,Se,Ne),_e.copy(ue))},reset:function(){L=!1,ae=null,_e.set(-1,0,0,0)}}}function i(){let L=!1,ue=!1,ae=null,_e=null,ne=null;return{setReversed:function(Y){if(ue!==Y){const Se=e.get("EXT_clip_control");Y?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ue=Y;const Ne=ne;ne=null,this.setClear(Ne)}},getReversed:function(){return ue},setTest:function(Y){Y?ie(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(Y){ae!==Y&&!L&&(t.depthMask(Y),ae=Y)},setFunc:function(Y){if(ue&&(Y=IS[Y]),_e!==Y){switch(Y){case af:t.depthFunc(t.NEVER);break;case of:t.depthFunc(t.ALWAYS);break;case lf:t.depthFunc(t.LESS);break;case Cs:t.depthFunc(t.LEQUAL);break;case uf:t.depthFunc(t.EQUAL);break;case cf:t.depthFunc(t.GEQUAL);break;case ff:t.depthFunc(t.GREATER);break;case df:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=Y}},setLocked:function(Y){L=Y},setClear:function(Y){ne!==Y&&(ne=Y,ue&&(Y=1-Y),t.clearDepth(Y))},reset:function(){L=!1,ae=null,_e=null,ne=null,ue=!1}}}function r(){let L=!1,ue=null,ae=null,_e=null,ne=null,Y=null,Se=null,Ne=null,lt=null;return{setTest:function(Je){L||(Je?ie(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Je){ue!==Je&&!L&&(t.stencilMask(Je),ue=Je)},setFunc:function(Je,si,ai){(ae!==Je||_e!==si||ne!==ai)&&(t.stencilFunc(Je,si,ai),ae=Je,_e=si,ne=ai)},setOp:function(Je,si,ai){(Y!==Je||Se!==si||Ne!==ai)&&(t.stencilOp(Je,si,ai),Y=Je,Se=si,Ne=ai)},setLocked:function(Je){L=Je},setClear:function(Je){lt!==Je&&(t.clearStencil(Je),lt=Je)},reset:function(){L=!1,ue=null,ae=null,_e=null,ne=null,Y=null,Se=null,Ne=null,lt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let d={},h={},f=new WeakMap,p=[],_=null,y=!1,g=null,c=null,m=null,x=null,M=null,C=null,A=null,R=new Ke(0,0,0),S=0,T=!1,I=null,P=null,F=null,z=null,j=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,U=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=U>=1):k.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=U>=2);let X=null,Z={};const oe=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),Le=new Mt().fromArray(oe),je=new Mt().fromArray(re);function Ze(L,ue,ae,_e){const ne=new Uint8Array(4),Y=t.createTexture();t.bindTexture(L,Y),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Se=0;Se<ae;Se++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,ne):t.texImage2D(ue+Se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ne);return Y}const $={};$[t.TEXTURE_2D]=Ze(t.TEXTURE_2D,t.TEXTURE_2D,1),$[t.TEXTURE_CUBE_MAP]=Ze(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[t.TEXTURE_2D_ARRAY]=Ze(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),$[t.TEXTURE_3D]=Ze(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(t.DEPTH_TEST),a.setFunc(Cs),Be(!1),xt(yp),ie(t.CULL_FACE),Qe(xi);function ie(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function ce(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Ue(L,ue){return h[L]!==ue?(t.bindFramebuffer(L,ue),h[L]=ue,L===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ue),L===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Re(L,ue){let ae=p,_e=!1;if(L){ae=f.get(ue),ae===void 0&&(ae=[],f.set(ue,ae));const ne=L.textures;if(ae.length!==ne.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let Y=0,Se=ne.length;Y<Se;Y++)ae[Y]=t.COLOR_ATTACHMENT0+Y;ae.length=ne.length,_e=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,_e=!0);_e&&t.drawBuffers(ae)}function De(L){return _!==L?(t.useProgram(L),_=L,!0):!1}const bt={[vr]:t.FUNC_ADD,[nS]:t.FUNC_SUBTRACT,[iS]:t.FUNC_REVERSE_SUBTRACT};bt[rS]=t.MIN,bt[sS]=t.MAX;const Ge={[aS]:t.ZERO,[oS]:t.ONE,[lS]:t.SRC_COLOR,[rf]:t.SRC_ALPHA,[pS]:t.SRC_ALPHA_SATURATE,[dS]:t.DST_COLOR,[cS]:t.DST_ALPHA,[uS]:t.ONE_MINUS_SRC_COLOR,[sf]:t.ONE_MINUS_SRC_ALPHA,[hS]:t.ONE_MINUS_DST_COLOR,[fS]:t.ONE_MINUS_DST_ALPHA,[mS]:t.CONSTANT_COLOR,[gS]:t.ONE_MINUS_CONSTANT_COLOR,[_S]:t.CONSTANT_ALPHA,[vS]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(L,ue,ae,_e,ne,Y,Se,Ne,lt,Je){if(L===xi){y===!0&&(ce(t.BLEND),y=!1);return}if(y===!1&&(ie(t.BLEND),y=!0),L!==tS){if(L!==g||Je!==T){if((c!==vr||M!==vr)&&(t.blendEquation(t.FUNC_ADD),c=vr,M=vr),Je)switch(L){case vs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xa:t.blendFunc(t.ONE,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ep:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:qe("WebGLState: Invalid blending: ",L);break}else switch(L){case vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Mp:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ep:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",L);break}m=null,x=null,C=null,A=null,R.set(0,0,0),S=0,g=L,T=Je}return}ne=ne||ue,Y=Y||ae,Se=Se||_e,(ue!==c||ne!==M)&&(t.blendEquationSeparate(bt[ue],bt[ne]),c=ue,M=ne),(ae!==m||_e!==x||Y!==C||Se!==A)&&(t.blendFuncSeparate(Ge[ae],Ge[_e],Ge[Y],Ge[Se]),m=ae,x=_e,C=Y,A=Se),(Ne.equals(R)===!1||lt!==S)&&(t.blendColor(Ne.r,Ne.g,Ne.b,lt),R.copy(Ne),S=lt),g=L,T=!1}function st(L,ue){L.side===pi?ce(t.CULL_FACE):ie(t.CULL_FACE);let ae=L.side===ln;ue&&(ae=!ae),Be(ae),L.blending===vs&&L.transparent===!1?Qe(xi):Qe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const _e=L.stencilWrite;o.setTest(_e),_e&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Et(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){I!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),I=L)}function xt(L){L!==Qx?(ie(t.CULL_FACE),L!==P&&(L===yp?t.cullFace(t.BACK):L===Jx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),P=L}function b(L){L!==F&&(G&&t.lineWidth(L),F=L)}function Et(L,ue,ae){L?(ie(t.POLYGON_OFFSET_FILL),(z!==ue||j!==ae)&&(z=ue,j=ae,a.getReversed()&&(ue=-ue),t.polygonOffset(ue,ae))):ce(t.POLYGON_OFFSET_FILL)}function $e(L){L?ie(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function ot(L){L===void 0&&(L=t.TEXTURE0+H-1),X!==L&&(t.activeTexture(L),X=L)}function Ee(L,ue,ae){ae===void 0&&(X===null?ae=t.TEXTURE0+H-1:ae=X);let _e=Z[ae];_e===void 0&&(_e={type:void 0,texture:void 0},Z[ae]=_e),(_e.type!==L||_e.texture!==ue)&&(X!==ae&&(t.activeTexture(ae),X=ae),t.bindTexture(L,ue||$[L]),_e.type=L,_e.texture=ue)}function w(){const L=Z[X];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{t.compressedTexImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function D(){try{t.compressedTexImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function K(){try{t.texSubImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function Q(){try{t.texSubImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function ve(){try{t.compressedTexSubImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function le(){try{t.texStorage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function Ce(){try{t.texStorage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function Pe(){try{t.texImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function te(){try{t.texImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function se(L){Le.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Le.copy(L))}function xe(L){je.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),je.copy(L))}function ye(L,ue){let ae=u.get(ue);ae===void 0&&(ae=new WeakMap,u.set(ue,ae));let _e=ae.get(L);_e===void 0&&(_e=t.getUniformBlockIndex(ue,L.name),ae.set(L,_e))}function pe(L,ue){const _e=u.get(ue).get(L);l.get(ue)!==_e&&(t.uniformBlockBinding(ue,_e,L.__bindingPointIndex),l.set(ue,_e))}function ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},X=null,Z={},h={},f=new WeakMap,p=[],_=null,y=!1,g=null,c=null,m=null,x=null,M=null,C=null,A=null,R=new Ke(0,0,0),S=0,T=!1,I=null,P=null,F=null,z=null,j=null,Le.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:ce,bindFramebuffer:Ue,drawBuffers:Re,useProgram:De,setBlending:Qe,setMaterial:st,setFlipSided:Be,setCullFace:xt,setLineWidth:b,setPolygonOffset:Et,setScissorTest:$e,activeTexture:ot,bindTexture:Ee,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:D,texImage2D:Pe,texImage3D:te,updateUBOMapping:ye,uniformBlockBinding:pe,texStorage2D:le,texStorage3D:Ce,texSubImage2D:K,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:ve,scissor:se,viewport:xe,reset:ke}}function mw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new rt,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,v){return p?new OffscreenCanvas(w,v):Nl("canvas")}function y(w,v,D){let K=1;const Q=Ee(w);if((Q.width>D||Q.height>D)&&(K=D/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(K*Q.width),ve=Math.floor(K*Q.height);h===void 0&&(h=_(q,ve));const le=v?_(q,ve):h;return le.width=q,le.height=ve,le.getContext("2d").drawImage(w,0,0,q,ve),be("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+ve+")."),le}else return"data"in w&&be("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function g(w){return w.generateMipmaps}function c(w){t.generateMipmap(w)}function m(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(w,v,D,K,Q=!1){if(w!==null){if(t[w]!==void 0)return t[w];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=v;if(v===t.RED&&(D===t.FLOAT&&(q=t.R32F),D===t.HALF_FLOAT&&(q=t.R16F),D===t.UNSIGNED_BYTE&&(q=t.R8)),v===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(q=t.R8UI),D===t.UNSIGNED_SHORT&&(q=t.R16UI),D===t.UNSIGNED_INT&&(q=t.R32UI),D===t.BYTE&&(q=t.R8I),D===t.SHORT&&(q=t.R16I),D===t.INT&&(q=t.R32I)),v===t.RG&&(D===t.FLOAT&&(q=t.RG32F),D===t.HALF_FLOAT&&(q=t.RG16F),D===t.UNSIGNED_BYTE&&(q=t.RG8)),v===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(q=t.RG8UI),D===t.UNSIGNED_SHORT&&(q=t.RG16UI),D===t.UNSIGNED_INT&&(q=t.RG32UI),D===t.BYTE&&(q=t.RG8I),D===t.SHORT&&(q=t.RG16I),D===t.INT&&(q=t.RG32I)),v===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(q=t.RGB8UI),D===t.UNSIGNED_SHORT&&(q=t.RGB16UI),D===t.UNSIGNED_INT&&(q=t.RGB32UI),D===t.BYTE&&(q=t.RGB8I),D===t.SHORT&&(q=t.RGB16I),D===t.INT&&(q=t.RGB32I)),v===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),D===t.UNSIGNED_INT&&(q=t.RGBA32UI),D===t.BYTE&&(q=t.RGBA8I),D===t.SHORT&&(q=t.RGBA16I),D===t.INT&&(q=t.RGBA32I)),v===t.RGB&&(D===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),v===t.RGBA){const ve=Q?Ll:We.getTransfer(K);D===t.FLOAT&&(q=t.RGBA32F),D===t.HALF_FLOAT&&(q=t.RGBA16F),D===t.UNSIGNED_BYTE&&(q=ve===et?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(w,v){let D;return w?v===null||v===ii||v===za?D=t.DEPTH24_STENCIL8:v===Zn?D=t.DEPTH32F_STENCIL8:v===ka&&(D=t.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ii||v===za?D=t.DEPTH_COMPONENT24:v===Zn?D=t.DEPTH_COMPONENT32F:v===ka&&(D=t.DEPTH_COMPONENT16),D}function C(w,v){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ot&&w.minFilter!==jt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function A(w){const v=w.target;v.removeEventListener("dispose",A),S(v),v.isVideoTexture&&d.delete(v)}function R(w){const v=w.target;v.removeEventListener("dispose",R),I(v)}function S(w){const v=i.get(w);if(v.__webglInit===void 0)return;const D=w.source,K=f.get(D);if(K){const Q=K[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(w),Object.keys(K).length===0&&f.delete(D)}i.remove(w)}function T(w){const v=i.get(w);t.deleteTexture(v.__webglTexture);const D=w.source,K=f.get(D);delete K[v.__cacheKey],a.memory.textures--}function I(w){const v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let Q=0;Q<v.__webglFramebuffer[K].length;Q++)t.deleteFramebuffer(v.__webglFramebuffer[K][Q]);else t.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)t.deleteFramebuffer(v.__webglFramebuffer[K]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=w.textures;for(let K=0,Q=D.length;K<Q;K++){const q=i.get(D[K]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(D[K])}i.remove(w)}let P=0;function F(){P=0}function z(){const w=P;return w>=r.maxTextures&&be("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),P+=1,w}function j(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function H(w,v){const D=i.get(w);if(w.isVideoTexture&&$e(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&D.__version!==w.version){const K=w.image;if(K===null)be("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)be("WebGLRenderer: Texture marked for update but image is incomplete");else{$(D,w,v);return}}else w.isExternalTexture&&(D.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+v)}function G(w,v){const D=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){$(D,w,v);return}else w.isExternalTexture&&(D.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+v)}function U(w,v){const D=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){$(D,w,v);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+v)}function k(w,v){const D=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&D.__version!==w.version){ie(D,w,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+v)}const X={[hf]:t.REPEAT,[_i]:t.CLAMP_TO_EDGE,[pf]:t.MIRRORED_REPEAT},Z={[Ot]:t.NEAREST,[yS]:t.NEAREST_MIPMAP_NEAREST,[_o]:t.NEAREST_MIPMAP_LINEAR,[jt]:t.LINEAR,[Nu]:t.LINEAR_MIPMAP_NEAREST,[Er]:t.LINEAR_MIPMAP_LINEAR},oe={[wS]:t.NEVER,[bS]:t.ALWAYS,[AS]:t.LESS,[Qd]:t.LEQUAL,[CS]:t.EQUAL,[Jd]:t.GEQUAL,[RS]:t.GREATER,[PS]:t.NOTEQUAL};function re(w,v){if(v.type===Zn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===jt||v.magFilter===Nu||v.magFilter===_o||v.magFilter===Er||v.minFilter===jt||v.minFilter===Nu||v.minFilter===_o||v.minFilter===Er)&&be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,X[v.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,X[v.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,X[v.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Z[v.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Z[v.minFilter]),v.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,oe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ot||v.minFilter!==_o&&v.minFilter!==Er||v.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Le(w,v){let D=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",A));const K=v.source;let Q=f.get(K);Q===void 0&&(Q={},f.set(K,Q));const q=j(v);if(q!==w.__cacheKey){Q[q]===void 0&&(Q[q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,D=!0),Q[q].usedTimes++;const ve=Q[w.__cacheKey];ve!==void 0&&(Q[w.__cacheKey].usedTimes--,ve.usedTimes===0&&T(v)),w.__cacheKey=q,w.__webglTexture=Q[q].texture}return D}function je(w,v,D){return Math.floor(Math.floor(w/D)/v)}function Ze(w,v,D,K){const q=w.updateRanges;if(q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,D,K,v.data);else{q.sort((te,se)=>te.start-se.start);let ve=0;for(let te=1;te<q.length;te++){const se=q[ve],xe=q[te],ye=se.start+se.count,pe=je(xe.start,v.width,4),ke=je(se.start,v.width,4);xe.start<=ye+1&&pe===ke&&je(xe.start+xe.count-1,v.width,4)===pe?se.count=Math.max(se.count,xe.start+xe.count-se.start):(++ve,q[ve]=xe)}q.length=ve+1;const le=t.getParameter(t.UNPACK_ROW_LENGTH),Ce=t.getParameter(t.UNPACK_SKIP_PIXELS),Pe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let te=0,se=q.length;te<se;te++){const xe=q[te],ye=Math.floor(xe.start/4),pe=Math.ceil(xe.count/4),ke=ye%v.width,L=Math.floor(ye/v.width),ue=pe,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,ke,L,ue,ae,D,K,v.data)}w.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,le),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(t.UNPACK_SKIP_ROWS,Pe)}}function $(w,v,D){let K=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=t.TEXTURE_3D);const Q=Le(w,v),q=v.source;n.bindTexture(K,w.__webglTexture,t.TEXTURE0+D);const ve=i.get(q);if(q.version!==ve.__version||Q===!0){n.activeTexture(t.TEXTURE0+D);const le=We.getPrimaries(We.workingColorSpace),Ce=v.colorSpace===Gi?null:We.getPrimaries(v.colorSpace),Pe=v.colorSpace===Gi||le===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let te=y(v.image,!1,r.maxTextureSize);te=ot(v,te);const se=s.convert(v.format,v.colorSpace),xe=s.convert(v.type);let ye=x(v.internalFormat,se,xe,v.colorSpace,v.isVideoTexture);re(K,v);let pe;const ke=v.mipmaps,L=v.isVideoTexture!==!0,ue=ve.__version===void 0||Q===!0,ae=q.dataReady,_e=C(v,te);if(v.isDepthTexture)ye=M(v.format===Tr,v.type),ue&&(L?n.texStorage2D(t.TEXTURE_2D,1,ye,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,ye,te.width,te.height,0,se,xe,null));else if(v.isDataTexture)if(ke.length>0){L&&ue&&n.texStorage2D(t.TEXTURE_2D,_e,ye,ke[0].width,ke[0].height);for(let ne=0,Y=ke.length;ne<Y;ne++)pe=ke[ne],L?ae&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,xe,pe.data):n.texImage2D(t.TEXTURE_2D,ne,ye,pe.width,pe.height,0,se,xe,pe.data);v.generateMipmaps=!1}else L?(ue&&n.texStorage2D(t.TEXTURE_2D,_e,ye,te.width,te.height),ae&&Ze(v,te,se,xe)):n.texImage2D(t.TEXTURE_2D,0,ye,te.width,te.height,0,se,xe,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,ye,ke[0].width,ke[0].height,te.depth);for(let ne=0,Y=ke.length;ne<Y;ne++)if(pe=ke[ne],v.format!==kn)if(se!==null)if(L){if(ae)if(v.layerUpdates.size>0){const Se=Jp(pe.width,pe.height,v.format,v.type);for(const Ne of v.layerUpdates){const lt=pe.data.subarray(Ne*Se/pe.data.BYTES_PER_ELEMENT,(Ne+1)*Se/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,Ne,pe.width,pe.height,1,se,lt)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,se,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,ye,pe.width,pe.height,te.depth,0,pe.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,se,xe,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,ye,pe.width,pe.height,te.depth,0,se,xe,pe.data)}else{L&&ue&&n.texStorage2D(t.TEXTURE_2D,_e,ye,ke[0].width,ke[0].height);for(let ne=0,Y=ke.length;ne<Y;ne++)pe=ke[ne],v.format!==kn?se!==null?L?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,ye,pe.width,pe.height,0,pe.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ae&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,xe,pe.data):n.texImage2D(t.TEXTURE_2D,ne,ye,pe.width,pe.height,0,se,xe,pe.data)}else if(v.isDataArrayTexture)if(L){if(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,ye,te.width,te.height,te.depth),ae)if(v.layerUpdates.size>0){const ne=Jp(te.width,te.height,v.format,v.type);for(const Y of v.layerUpdates){const Se=te.data.subarray(Y*ne/te.data.BYTES_PER_ELEMENT,(Y+1)*ne/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,te.width,te.height,1,se,xe,Se)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,se,xe,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,te.width,te.height,te.depth,0,se,xe,te.data);else if(v.isData3DTexture)L?(ue&&n.texStorage3D(t.TEXTURE_3D,_e,ye,te.width,te.height,te.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,se,xe,te.data)):n.texImage3D(t.TEXTURE_3D,0,ye,te.width,te.height,te.depth,0,se,xe,te.data);else if(v.isFramebufferTexture){if(ue)if(L)n.texStorage2D(t.TEXTURE_2D,_e,ye,te.width,te.height);else{let ne=te.width,Y=te.height;for(let Se=0;Se<_e;Se++)n.texImage2D(t.TEXTURE_2D,Se,ye,ne,Y,0,se,xe,null),ne>>=1,Y>>=1}}else if(ke.length>0){if(L&&ue){const ne=Ee(ke[0]);n.texStorage2D(t.TEXTURE_2D,_e,ye,ne.width,ne.height)}for(let ne=0,Y=ke.length;ne<Y;ne++)pe=ke[ne],L?ae&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,se,xe,pe):n.texImage2D(t.TEXTURE_2D,ne,ye,se,xe,pe);v.generateMipmaps=!1}else if(L){if(ue){const ne=Ee(te);n.texStorage2D(t.TEXTURE_2D,_e,ye,ne.width,ne.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se,xe,te)}else n.texImage2D(t.TEXTURE_2D,0,ye,se,xe,te);g(v)&&c(K),ve.__version=q.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ie(w,v,D){if(v.image.length!==6)return;const K=Le(w,v),Q=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+D);const q=i.get(Q);if(Q.version!==q.__version||K===!0){n.activeTexture(t.TEXTURE0+D);const ve=We.getPrimaries(We.workingColorSpace),le=v.colorSpace===Gi?null:We.getPrimaries(v.colorSpace),Ce=v.colorSpace===Gi||ve===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Pe=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,se=[];for(let Y=0;Y<6;Y++)!Pe&&!te?se[Y]=y(v.image[Y],!0,r.maxCubemapSize):se[Y]=te?v.image[Y].image:v.image[Y],se[Y]=ot(v,se[Y]);const xe=se[0],ye=s.convert(v.format,v.colorSpace),pe=s.convert(v.type),ke=x(v.internalFormat,ye,pe,v.colorSpace),L=v.isVideoTexture!==!0,ue=q.__version===void 0||K===!0,ae=Q.dataReady;let _e=C(v,xe);re(t.TEXTURE_CUBE_MAP,v);let ne;if(Pe){L&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,ke,xe.width,xe.height);for(let Y=0;Y<6;Y++){ne=se[Y].mipmaps;for(let Se=0;Se<ne.length;Se++){const Ne=ne[Se];v.format!==kn?ye!==null?L?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,0,0,Ne.width,Ne.height,ye,Ne.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,ke,Ne.width,Ne.height,0,Ne.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,0,0,Ne.width,Ne.height,ye,pe,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,ke,Ne.width,Ne.height,0,ye,pe,Ne.data)}}}else{if(ne=v.mipmaps,L&&ue){ne.length>0&&_e++;const Y=Ee(se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,ke,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(te){L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,se[Y].width,se[Y].height,ye,pe,se[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ke,se[Y].width,se[Y].height,0,ye,pe,se[Y].data);for(let Se=0;Se<ne.length;Se++){const lt=ne[Se].image[Y].image;L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,0,0,lt.width,lt.height,ye,pe,lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,ke,lt.width,lt.height,0,ye,pe,lt.data)}}else{L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ye,pe,se[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ke,ye,pe,se[Y]);for(let Se=0;Se<ne.length;Se++){const Ne=ne[Se];L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,0,0,ye,pe,Ne.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,ke,ye,pe,Ne.image[Y])}}}g(v)&&c(t.TEXTURE_CUBE_MAP),q.__version=Q.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ce(w,v,D,K,Q,q){const ve=s.convert(D.format,D.colorSpace),le=s.convert(D.type),Ce=x(D.internalFormat,ve,le,D.colorSpace),Pe=i.get(v),te=i.get(D);if(te.__renderTarget=v,!Pe.__hasExternalTextures){const se=Math.max(1,v.width>>q),xe=Math.max(1,v.height>>q);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,q,Ce,se,xe,v.depth,0,ve,le,null):n.texImage2D(Q,q,Ce,se,xe,0,ve,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),Et(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,Q,te.__webglTexture,0,b(v)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,Q,te.__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(w,v,D){if(t.bindRenderbuffer(t.RENDERBUFFER,w),v.depthBuffer){const K=v.depthTexture,Q=K&&K.isDepthTexture?K.type:null,q=M(v.stencilBuffer,Q),ve=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Et(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,b(v),q,v.width,v.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,b(v),q,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,q,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ve,t.RENDERBUFFER,w)}else{const K=v.textures;for(let Q=0;Q<K.length;Q++){const q=K[Q],ve=s.convert(q.format,q.colorSpace),le=s.convert(q.type),Ce=x(q.internalFormat,ve,le,q.colorSpace);Et(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,b(v),Ce,v.width,v.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,b(v),Ce,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Ce,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Re(w,v,D){const K=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),re(t.TEXTURE_CUBE_MAP,v.depthTexture);const Pe=s.convert(v.depthTexture.format),te=s.convert(v.depthTexture.type);let se;v.depthTexture.format===Ai?se=t.DEPTH_COMPONENT24:v.depthTexture.format===Tr&&(se=t.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,se,v.width,v.height,0,Pe,te,null)}}else H(v.depthTexture,0);const q=Q.__webglTexture,ve=b(v),le=K?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,Ce=v.depthTexture.format===Tr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ai)Et(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ce,le,q,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,Ce,le,q,0);else if(v.depthTexture.format===Tr)Et(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ce,le,q,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,Ce,le,q,0);else throw new Error("Unknown depthTexture format")}function De(w){const v=i.get(w),D=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=K}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(D)for(let K=0;K<6;K++)Re(v.__webglFramebuffer[K],w,K);else{const K=w.texture.mipmaps;K&&K.length>0?Re(v.__webglFramebuffer[0],w,0):Re(v.__webglFramebuffer,w,0)}else if(D){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=t.createRenderbuffer(),Ue(v.__webglDepthbuffer[K],w,!1);else{const Q=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,q)}}else{const K=w.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),Ue(v.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function bt(w,v,D){const K=i.get(w);v!==void 0&&ce(K.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&De(w)}function Ge(w){const v=w.texture,D=i.get(w),K=i.get(v);w.addEventListener("dispose",R);const Q=w.textures,q=w.isWebGLCubeRenderTarget===!0,ve=Q.length>1;if(ve||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=v.version,a.memory.textures++),q){D.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[le]=[];for(let Ce=0;Ce<v.mipmaps.length;Ce++)D.__webglFramebuffer[le][Ce]=t.createFramebuffer()}else D.__webglFramebuffer[le]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)D.__webglFramebuffer[le]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(ve)for(let le=0,Ce=Q.length;le<Ce;le++){const Pe=i.get(Q[le]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),a.memory.textures++)}if(w.samples>0&&Et(w)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const Ce=Q[le];D.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[le]);const Pe=s.convert(Ce.format,Ce.colorSpace),te=s.convert(Ce.type),se=x(Ce.internalFormat,Pe,te,Ce.colorSpace,w.isXRRenderTarget===!0),xe=b(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,se,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,D.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(D.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),re(t.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)ce(D.__webglFramebuffer[le][Ce],w,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce);else ce(D.__webglFramebuffer[le],w,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(v)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){for(let le=0,Ce=Q.length;le<Ce;le++){const Pe=Q[le],te=i.get(Pe);let se=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(se,te.__webglTexture),re(se,Pe),ce(D.__webglFramebuffer,w,Pe,t.COLOR_ATTACHMENT0+le,se,0),g(Pe)&&c(se)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,K.__webglTexture),re(le,v),v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)ce(D.__webglFramebuffer[Ce],w,v,t.COLOR_ATTACHMENT0,le,Ce);else ce(D.__webglFramebuffer,w,v,t.COLOR_ATTACHMENT0,le,0);g(v)&&c(le),n.unbindTexture()}w.depthBuffer&&De(w)}function Qe(w){const v=w.textures;for(let D=0,K=v.length;D<K;D++){const Q=v[D];if(g(Q)){const q=m(w),ve=i.get(Q).__webglTexture;n.bindTexture(q,ve),c(q),n.unbindTexture()}}}const st=[],Be=[];function xt(w){if(w.samples>0){if(Et(w)===!1){const v=w.textures,D=w.width,K=w.height;let Q=t.COLOR_BUFFER_BIT;const q=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(w),le=v.length>1;if(le)for(let Pe=0;Pe<v.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Ce=w.texture.mipmaps;Ce&&Ce.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Pe=0;Pe<v.length;Pe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Pe]);const te=i.get(v[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,D,K,0,0,D,K,Q,t.NEAREST),l===!0&&(st.length=0,Be.length=0,st.push(t.COLOR_ATTACHMENT0+Pe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(st.push(q),Be.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Be)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let Pe=0;Pe<v.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Pe]);const te=i.get(v[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function b(w){return Math.min(r.maxSamples,w.samples)}function Et(w){const v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function $e(w){const v=a.render.frame;d.get(w)!==v&&(d.set(w,v),w.update())}function ot(w,v){const D=w.colorSpace,K=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||D!==bs&&D!==Gi&&(We.getTransfer(D)===et?(K!==kn||Q!==Tn)&&be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",D)),v}function Ee(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=U,this.setTextureCube=k,this.rebindTextures=bt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function gw(t,e){function n(i,r=Gi){let s;const a=We.getTransfer(r);if(i===Tn)return t.UNSIGNED_BYTE;if(i===Yd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===qd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===j_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Y_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===W_)return t.BYTE;if(i===X_)return t.SHORT;if(i===ka)return t.UNSIGNED_SHORT;if(i===jd)return t.INT;if(i===ii)return t.UNSIGNED_INT;if(i===Zn)return t.FLOAT;if(i===wi)return t.HALF_FLOAT;if(i===q_)return t.ALPHA;if(i===$_)return t.RGB;if(i===kn)return t.RGBA;if(i===Ai)return t.DEPTH_COMPONENT;if(i===Tr)return t.DEPTH_STENCIL;if(i===K_)return t.RED;if(i===$d)return t.RED_INTEGER;if(i===Ps)return t.RG;if(i===Kd)return t.RG_INTEGER;if(i===Zd)return t.RGBA_INTEGER;if(i===nl||i===il||i===rl||i===sl)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mf||i===gf||i===_f||i===vf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_f)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xf||i===Sf||i===yf||i===Mf||i===Ef||i===Tf||i===wf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xf||i===Sf)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Mf)return s.COMPRESSED_R11_EAC;if(i===Ef)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Tf)return s.COMPRESSED_RG11_EAC;if(i===wf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Af||i===Cf||i===Rf||i===Pf||i===bf||i===Lf||i===Df||i===Nf||i===If||i===Uf||i===Ff||i===Of||i===Bf||i===kf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Af)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Df)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===If)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ff)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Of)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zf||i===Vf||i===Hf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zf)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gf||i===Wf||i===Xf||i===jf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Gf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===za?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const _w=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vw=`
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

}`;class xw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new o0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ri({vertexShader:_w,fragmentShader:vw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ri(new eu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sw extends Us{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,d=null,h=null,f=null,p=null,_=null;const y=typeof XRWebGLBinding<"u",g=new xw,c={},m=n.getContextAttributes();let x=null,M=null;const C=[],A=[],R=new rt;let S=null;const T=new En;T.viewport=new Mt;const I=new En;I.viewport=new Mt;const P=[T,I],F=new Ly;let z=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=C[$];return ie===void 0&&(ie=new ku,C[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=C[$];return ie===void 0&&(ie=new ku,C[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=C[$];return ie===void 0&&(ie=new ku,C[$]=ie),ie.getHandSpace()};function H($){const ie=A.indexOf($.inputSource);if(ie===-1)return;const ce=C[ie];ce!==void 0&&(ce.update($.inputSource,$.frame,u||a),ce.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",U);for(let $=0;$<C.length;$++){const ie=A[$];ie!==null&&(A[$]=null,C[$].disconnect(ie))}z=null,j=null,g.reset();for(const $ in c)delete c[$];e.setRenderTarget(x),p=null,f=null,h=null,r=null,M=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",G),r.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Ue=null,Re=null;m.depth&&(Re=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=m.stencil?Tr:Ai,Ue=m.stencil?za:ii);const De={colorFormat:n.RGBA8,depthFormat:Re,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new ni(f.textureWidth,f.textureHeight,{format:kn,type:Tn,depthTexture:new Ha(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ni(p.framebufferWidth,p.framebufferHeight,{format:kn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function U($){for(let ie=0;ie<$.removed.length;ie++){const ce=$.removed[ie],Ue=A.indexOf(ce);Ue>=0&&(A[Ue]=null,C[Ue].disconnect(ce))}for(let ie=0;ie<$.added.length;ie++){const ce=$.added[ie];let Ue=A.indexOf(ce);if(Ue===-1){for(let De=0;De<C.length;De++)if(De>=A.length){A.push(ce),Ue=De;break}else if(A[De]===null){A[De]=ce,Ue=De;break}if(Ue===-1)break}const Re=C[Ue];Re&&Re.connect(ce)}}const k=new B,X=new B;function Z($,ie,ce){k.setFromMatrixPosition(ie.matrixWorld),X.setFromMatrixPosition(ce.matrixWorld);const Ue=k.distanceTo(X),Re=ie.projectionMatrix.elements,De=ce.projectionMatrix.elements,bt=Re[14]/(Re[10]-1),Ge=Re[14]/(Re[10]+1),Qe=(Re[9]+1)/Re[5],st=(Re[9]-1)/Re[5],Be=(Re[8]-1)/Re[0],xt=(De[8]+1)/De[0],b=bt*Be,Et=bt*xt,$e=Ue/(-Be+xt),ot=$e*-Be;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ot),$.translateZ($e),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Re[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ee=bt+$e,w=Ge+$e,v=b-ot,D=Et+(Ue-ot),K=Qe*Ge/w*Ee,Q=st*Ge/w*Ee;$.projectionMatrix.makePerspective(v,D,K,Q,Ee,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function oe($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ie=$.near,ce=$.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),F.near=I.near=T.near=ie,F.far=I.far=T.far=ce,(z!==F.near||j!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,j=F.far),F.layers.mask=$.layers.mask|6,T.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;const Ue=$.parent,Re=F.cameras;oe(F,Ue);for(let De=0;De<Re.length;De++)oe(Re[De],Ue);Re.length===2?Z(F,T,I):F.projectionMatrix.copy(T.projectionMatrix),re($,F,Ue)};function re($,ie,ce){ce===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(ce.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Va*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function($){return c[$]};let Le=null;function je($,ie){if(d=ie.getViewerPose(u||a),_=ie,d!==null){const ce=d.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Ue=!1;ce.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let Ge=0;Ge<ce.length;Ge++){const Qe=ce[Ge];let st=null;if(p!==null)st=p.getViewport(Qe);else{const xt=h.getViewSubImage(f,Qe);st=xt.viewport,Ge===0&&(e.setRenderTargetTextures(M,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(M))}let Be=P[Ge];Be===void 0&&(Be=new En,Be.layers.enable(Ge),Be.viewport=new Mt,P[Ge]=Be),Be.matrix.fromArray(Qe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Qe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(st.x,st.y,st.width,st.height),Ge===0&&(F.matrix.copy(Be.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(Be)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const Ge=h.getDepthInformation(ce[0]);Ge&&Ge.isValid&&Ge.texture&&g.init(Ge,r.renderState)}if(Re&&Re.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let Ge=0;Ge<ce.length;Ge++){const Qe=ce[Ge].camera;if(Qe){let st=c[Qe];st||(st=new o0,c[Qe]=st);const Be=h.getCameraImage(Qe);st.sourceTexture=Be}}}}for(let ce=0;ce<C.length;ce++){const Ue=A[ce],Re=C[ce];Ue!==null&&Re!==void 0&&Re.update(Ue,ie,u||a)}Le&&Le($,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const Ze=new f0;Ze.setAnimationLoop(je),this.setAnimationLoop=function($){Le=$},this.dispose=function(){}}}const pr=new Ci,yw=new vt;function Mw(t,e){function n(g,c){g.matrixAutoUpdate===!0&&g.updateMatrix(),c.value.copy(g.matrix)}function i(g,c){c.color.getRGB(g.fogColor.value,l0(t)),c.isFog?(g.fogNear.value=c.near,g.fogFar.value=c.far):c.isFogExp2&&(g.fogDensity.value=c.density)}function r(g,c,m,x,M){c.isMeshBasicMaterial?s(g,c):c.isMeshLambertMaterial?(s(g,c),c.envMap&&(g.envMapIntensity.value=c.envMapIntensity)):c.isMeshToonMaterial?(s(g,c),h(g,c)):c.isMeshPhongMaterial?(s(g,c),d(g,c),c.envMap&&(g.envMapIntensity.value=c.envMapIntensity)):c.isMeshStandardMaterial?(s(g,c),f(g,c),c.isMeshPhysicalMaterial&&p(g,c,M)):c.isMeshMatcapMaterial?(s(g,c),_(g,c)):c.isMeshDepthMaterial?s(g,c):c.isMeshDistanceMaterial?(s(g,c),y(g,c)):c.isMeshNormalMaterial?s(g,c):c.isLineBasicMaterial?(a(g,c),c.isLineDashedMaterial&&o(g,c)):c.isPointsMaterial?l(g,c,m,x):c.isSpriteMaterial?u(g,c):c.isShadowMaterial?(g.color.value.copy(c.color),g.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(g,c){g.opacity.value=c.opacity,c.color&&g.diffuse.value.copy(c.color),c.emissive&&g.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(g.map.value=c.map,n(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.bumpMap&&(g.bumpMap.value=c.bumpMap,n(c.bumpMap,g.bumpMapTransform),g.bumpScale.value=c.bumpScale,c.side===ln&&(g.bumpScale.value*=-1)),c.normalMap&&(g.normalMap.value=c.normalMap,n(c.normalMap,g.normalMapTransform),g.normalScale.value.copy(c.normalScale),c.side===ln&&g.normalScale.value.negate()),c.displacementMap&&(g.displacementMap.value=c.displacementMap,n(c.displacementMap,g.displacementMapTransform),g.displacementScale.value=c.displacementScale,g.displacementBias.value=c.displacementBias),c.emissiveMap&&(g.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,g.emissiveMapTransform)),c.specularMap&&(g.specularMap.value=c.specularMap,n(c.specularMap,g.specularMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest);const m=e.get(c),x=m.envMap,M=m.envMapRotation;x&&(g.envMap.value=x,pr.copy(M),pr.x*=-1,pr.y*=-1,pr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),g.envMapRotation.value.setFromMatrix4(yw.makeRotationFromEuler(pr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=c.reflectivity,g.ior.value=c.ior,g.refractionRatio.value=c.refractionRatio),c.lightMap&&(g.lightMap.value=c.lightMap,g.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,g.lightMapTransform)),c.aoMap&&(g.aoMap.value=c.aoMap,g.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,g.aoMapTransform))}function a(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,c.map&&(g.map.value=c.map,n(c.map,g.mapTransform))}function o(g,c){g.dashSize.value=c.dashSize,g.totalSize.value=c.dashSize+c.gapSize,g.scale.value=c.scale}function l(g,c,m,x){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.size.value=c.size*m,g.scale.value=x*.5,c.map&&(g.map.value=c.map,n(c.map,g.uvTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function u(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.rotation.value=c.rotation,c.map&&(g.map.value=c.map,n(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function d(g,c){g.specular.value.copy(c.specular),g.shininess.value=Math.max(c.shininess,1e-4)}function h(g,c){c.gradientMap&&(g.gradientMap.value=c.gradientMap)}function f(g,c){g.metalness.value=c.metalness,c.metalnessMap&&(g.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,g.metalnessMapTransform)),g.roughness.value=c.roughness,c.roughnessMap&&(g.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,g.roughnessMapTransform)),c.envMap&&(g.envMapIntensity.value=c.envMapIntensity)}function p(g,c,m){g.ior.value=c.ior,c.sheen>0&&(g.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),g.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(g.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,g.sheenColorMapTransform)),c.sheenRoughnessMap&&(g.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,g.sheenRoughnessMapTransform))),c.clearcoat>0&&(g.clearcoat.value=c.clearcoat,g.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(g.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,g.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(g.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===ln&&g.clearcoatNormalScale.value.negate())),c.dispersion>0&&(g.dispersion.value=c.dispersion),c.iridescence>0&&(g.iridescence.value=c.iridescence,g.iridescenceIOR.value=c.iridescenceIOR,g.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(g.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,g.iridescenceMapTransform)),c.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),c.transmission>0&&(g.transmission.value=c.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),c.transmissionMap&&(g.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,g.transmissionMapTransform)),g.thickness.value=c.thickness,c.thicknessMap&&(g.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=c.attenuationDistance,g.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(g.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(g.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=c.specularIntensity,g.specularColor.value.copy(c.specularColor),c.specularColorMap&&(g.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,g.specularColorMapTransform)),c.specularIntensityMap&&(g.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,c){c.matcap&&(g.matcap.value=c.matcap)}function y(g,c){const m=e.get(c).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ew(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){const M=x.program;i.uniformBlockBinding(m,M)}function u(m,x){let M=r[m.id];M===void 0&&(_(m),M=d(m),r[m.id]=M,m.addEventListener("dispose",g));const C=x.program;i.updateUBOMapping(m,C);const A=e.render.frame;s[m.id]!==A&&(f(m),s[m.id]=A)}function d(m){const x=h();m.__bindingPointIndex=x;const M=t.createBuffer(),C=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function h(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(m){const x=r[m.id],M=m.uniforms,C=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,R=M.length;A<R;A++){const S=Array.isArray(M[A])?M[A]:[M[A]];for(let T=0,I=S.length;T<I;T++){const P=S[T];if(p(P,A,T,C)===!0){const F=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let H=0;H<z.length;H++){const G=z[H],U=y(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,F+j,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,j),j+=U.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,x,M,C){const A=m.value,R=x+"_"+M;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const S=C[R];if(typeof A=="number"||typeof A=="boolean"){if(S!==A)return C[R]=A,!0}else if(S.equals(A)===!1)return S.copy(A),!0}return!1}function _(m){const x=m.uniforms;let M=0;const C=16;for(let R=0,S=x.length;R<S;R++){const T=Array.isArray(x[R])?x[R]:[x[R]];for(let I=0,P=T.length;I<P;I++){const F=T[I],z=Array.isArray(F.value)?F.value:[F.value];for(let j=0,H=z.length;j<H;j++){const G=z[j],U=y(G),k=M%C,X=k%U.boundary,Z=k+X;M+=X,Z!==0&&C-Z<U.storage&&(M+=C-Z),F.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=U.storage}}}const A=M%C;return A>0&&(M+=C-A),m.__size=M,m.__cache={},this}function y(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):be("WebGLRenderer: Unsupported uniform value type.",m),x}function g(m){const x=m.target;x.removeEventListener("dispose",g);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function c(){for(const m in r)t.deleteBuffer(r[m]);a=[],r={},s={}}return{bind:l,update:u,dispose:c}}const Tw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yn=null;function ww(){return Yn===null&&(Yn=new gy(Tw,16,16,Ps,wi),Yn.name="DFG_LUT",Yn.minFilter=jt,Yn.magFilter=jt,Yn.wrapS=_i,Yn.wrapT=_i,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}class Aw{constructor(e={}){const{canvas:n=DS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Tn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const y=p,g=new Set([Zd,Kd,$d]),c=new Set([Tn,ii,ka,za,Yd,qd]),m=new Uint32Array(4),x=new Int32Array(4);let M=null,C=null;const A=[],R=[];let S=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let I=!1;this._outputColorSpace=Sn;let P=0,F=0,z=null,j=-1,H=null;const G=new Mt,U=new Mt;let k=null;const X=new Ke(0);let Z=0,oe=n.width,re=n.height,Le=1,je=null,Ze=null;const $=new Mt(0,0,oe,re),ie=new Mt(0,0,oe,re);let ce=!1;const Ue=new r0;let Re=!1,De=!1;const bt=new vt,Ge=new B,Qe=new Mt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function xt(){return z===null?Le:1}let b=i;function Et(E,N){return n.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xd}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",Ne,!1),n.addEventListener("webglcontextcreationerror",lt,!1),b===null){const N="webgl2";if(b=Et(N,E),b===null)throw Et(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw qe("WebGLRenderer: "+E.message),E}let $e,ot,Ee,w,v,D,K,Q,q,ve,le,Ce,Pe,te,se,xe,ye,pe,ke,L,ue,ae,_e;function ne(){$e=new AT(b),$e.init(),ue=new gw(b,$e),ot=new vT(b,$e,e,ue),Ee=new pw(b,$e),ot.reversedDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),w=new PT(b),v=new ew,D=new mw(b,$e,Ee,v,ot,ue,w),K=new wT(T),Q=new Iy(b),ae=new gT(b,Q),q=new CT(b,Q,w,ae),ve=new LT(b,q,Q,ae,w),pe=new bT(b,ot,D),se=new xT(v),le=new J1(T,K,$e,ot,ae,se),Ce=new Mw(T,v),Pe=new nw,te=new lw($e),ye=new mT(T,K,Ee,ve,_,l),xe=new hw(T,ve,ot),_e=new Ew(b,w,ot,Ee),ke=new _T(b,$e,w),L=new RT(b,$e,w),w.programs=le.programs,T.capabilities=ot,T.extensions=$e,T.properties=v,T.renderLists=Pe,T.shadowMap=xe,T.state=Ee,T.info=w}ne(),y!==Tn&&(S=new NT(y,n.width,n.height,r,s));const Y=new Sw(T,b);this.xr=Y,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const E=$e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(E){E!==void 0&&(Le=E,this.setSize(oe,re,!1))},this.getSize=function(E){return E.set(oe,re)},this.setSize=function(E,N,W=!0){if(Y.isPresenting){be("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=E,re=N,n.width=Math.floor(E*Le),n.height=Math.floor(N*Le),W===!0&&(n.style.width=E+"px",n.style.height=N+"px"),S!==null&&S.setSize(n.width,n.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(oe*Le,re*Le).floor()},this.setDrawingBufferSize=function(E,N,W){oe=E,re=N,Le=W,n.width=Math.floor(E*W),n.height=Math.floor(N*W),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(y===Tn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(G)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,N,W,V){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,N,W,V),Ee.viewport(G.copy($).multiplyScalar(Le).round())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,N,W,V){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,N,W,V),Ee.scissor(U.copy(ie).multiplyScalar(Le).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){Ee.setScissorTest(ce=E)},this.setOpaqueSort=function(E){je=E},this.setTransparentSort=function(E){Ze=E},this.getClearColor=function(E){return E.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,W=!0){let V=0;if(E){let O=!1;if(z!==null){const de=z.texture.format;O=g.has(de)}if(O){const de=z.texture.type,me=c.has(de),he=ye.getClearColor(),Me=ye.getClearAlpha(),we=he.r,Ie=he.g,ze=he.b;me?(m[0]=we,m[1]=Ie,m[2]=ze,m[3]=Me,b.clearBufferuiv(b.COLOR,0,m)):(x[0]=we,x[1]=Ie,x[2]=ze,x[3]=Me,b.clearBufferiv(b.COLOR,0,x))}else V|=b.COLOR_BUFFER_BIT}N&&(V|=b.DEPTH_BUFFER_BIT),W&&(V|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&b.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",Ne,!1),n.removeEventListener("webglcontextcreationerror",lt,!1),ye.dispose(),Pe.dispose(),te.dispose(),v.dispose(),K.dispose(),ve.dispose(),ae.dispose(),_e.dispose(),le.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",rh),Y.removeEventListener("sessionend",sh),or.stop()};function Se(E){E.preventDefault(),Rp("WebGLRenderer: Context Lost."),I=!0}function Ne(){Rp("WebGLRenderer: Context Restored."),I=!1;const E=w.autoReset,N=xe.enabled,W=xe.autoUpdate,V=xe.needsUpdate,O=xe.type;ne(),w.autoReset=E,xe.enabled=N,xe.autoUpdate=W,xe.needsUpdate=V,xe.type=O}function lt(E){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Je(E){const N=E.target;N.removeEventListener("dispose",Je),si(N)}function si(E){ai(E),v.remove(E)}function ai(E){const N=v.get(E).programs;N!==void 0&&(N.forEach(function(W){le.releaseProgram(W)}),E.isShaderMaterial&&le.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,W,V,O,de){N===null&&(N=st);const me=O.isMesh&&O.matrixWorld.determinant()<0,he=v0(E,N,W,V,O);Ee.setMaterial(V,me);let Me=W.index,we=1;if(V.wireframe===!0){if(Me=q.getWireframeAttribute(W),Me===void 0)return;we=2}const Ie=W.drawRange,ze=W.attributes.position;let Ae=Ie.start*we,nt=(Ie.start+Ie.count)*we;de!==null&&(Ae=Math.max(Ae,de.start*we),nt=Math.min(nt,(de.start+de.count)*we)),Me!==null?(Ae=Math.max(Ae,0),nt=Math.min(nt,Me.count)):ze!=null&&(Ae=Math.max(Ae,0),nt=Math.min(nt,ze.count));const St=nt-Ae;if(St<0||St===1/0)return;ae.setup(O,V,he,W,Me);let gt,it=ke;if(Me!==null&&(gt=Q.get(Me),it=L,it.setIndex(gt)),O.isMesh)V.wireframe===!0?(Ee.setLineWidth(V.wireframeLinewidth*xt()),it.setMode(b.LINES)):it.setMode(b.TRIANGLES);else if(O.isLine){let zt=V.linewidth;zt===void 0&&(zt=1),Ee.setLineWidth(zt*xt()),O.isLineSegments?it.setMode(b.LINES):O.isLineLoop?it.setMode(b.LINE_LOOP):it.setMode(b.LINE_STRIP)}else O.isPoints?it.setMode(b.POINTS):O.isSprite&&it.setMode(b.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Il("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))it.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const zt=O._multiDrawStarts,Te=O._multiDrawCounts,un=O._multiDrawCount,Ye=Me?Q.get(Me).bytesPerElement:1,bn=v.get(V).currentProgram.getUniforms();for(let Wn=0;Wn<un;Wn++)bn.setValue(b,"_gl_DrawID",Wn),it.render(zt[Wn]/Ye,Te[Wn])}else if(O.isInstancedMesh)it.renderInstances(Ae,St,O.count);else if(W.isInstancedBufferGeometry){const zt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Te=Math.min(W.instanceCount,zt);it.renderInstances(Ae,St,Te)}else it.render(Ae,St)};function ih(E,N,W){E.transparent===!0&&E.side===pi&&E.forceSinglePass===!1?(E.side=ln,E.needsUpdate=!0,Qa(E,N,W),E.side=ir,E.needsUpdate=!0,Qa(E,N,W),E.side=pi):Qa(E,N,W)}this.compile=function(E,N,W=null){W===null&&(W=E),C=te.get(W),C.init(N),R.push(C),W.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(C.pushLight(O),O.castShadow&&C.pushShadow(O))}),E!==W&&E.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(C.pushLight(O),O.castShadow&&C.pushShadow(O))}),C.setupLights();const V=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const de=O.material;if(de)if(Array.isArray(de))for(let me=0;me<de.length;me++){const he=de[me];ih(he,W,O),V.add(he)}else ih(de,W,O),V.add(de)}),C=R.pop(),V},this.compileAsync=function(E,N,W=null){const V=this.compile(E,N,W);return new Promise(O=>{function de(){if(V.forEach(function(me){v.get(me).currentProgram.isReady()&&V.delete(me)}),V.size===0){O(E);return}setTimeout(de,10)}$e.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let iu=null;function _0(E){iu&&iu(E)}function rh(){or.stop()}function sh(){or.start()}const or=new f0;or.setAnimationLoop(_0),typeof self<"u"&&or.setContext(self),this.setAnimationLoop=function(E){iu=E,Y.setAnimationLoop(E),E===null?or.stop():or.start()},Y.addEventListener("sessionstart",rh),Y.addEventListener("sessionend",sh),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;const W=Y.enabled===!0&&Y.isPresenting===!0,V=S!==null&&(z===null||W)&&S.begin(T,z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,N,z),C=te.get(E,R.length),C.init(N),R.push(C),bt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ue.setFromProjectionMatrix(bt,Qn,N.reversedDepth),De=this.localClippingEnabled,Re=se.init(this.clippingPlanes,De),M=Pe.get(E,A.length),M.init(),A.push(M),Y.enabled===!0&&Y.isPresenting===!0){const me=T.xr.getDepthSensingMesh();me!==null&&ru(me,N,-1/0,T.sortObjects)}ru(E,N,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(je,Ze),Be=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Be&&ye.addToRenderList(M,E),this.info.render.frame++,Re===!0&&se.beginShadows();const O=C.state.shadowsArray;if(xe.render(O,E,N),Re===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&S.hasRenderPass())===!1){const me=M.opaque,he=M.transmissive;if(C.setupLights(),N.isArrayCamera){const Me=N.cameras;if(he.length>0)for(let we=0,Ie=Me.length;we<Ie;we++){const ze=Me[we];oh(me,he,E,ze)}Be&&ye.render(E);for(let we=0,Ie=Me.length;we<Ie;we++){const ze=Me[we];ah(M,E,ze,ze.viewport)}}else he.length>0&&oh(me,he,E,N),Be&&ye.render(E),ah(M,E,N)}z!==null&&F===0&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),V&&S.end(T),E.isScene===!0&&E.onAfterRender(T,E,N),ae.resetDefaultState(),j=-1,H=null,R.pop(),R.length>0?(C=R[R.length-1],Re===!0&&se.setGlobalState(T.clippingPlanes,C.state.camera)):C=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function ru(E,N,W,V){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)C.pushLight(E),E.castShadow&&C.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ue.intersectsSprite(E)){V&&Qe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(bt);const me=ve.update(E),he=E.material;he.visible&&M.push(E,me,he,W,Qe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ue.intersectsObject(E))){const me=ve.update(E),he=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Qe.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Qe.copy(me.boundingSphere.center)),Qe.applyMatrix4(E.matrixWorld).applyMatrix4(bt)),Array.isArray(he)){const Me=me.groups;for(let we=0,Ie=Me.length;we<Ie;we++){const ze=Me[we],Ae=he[ze.materialIndex];Ae&&Ae.visible&&M.push(E,me,Ae,W,Qe.z,ze)}}else he.visible&&M.push(E,me,he,W,Qe.z,null)}}const de=E.children;for(let me=0,he=de.length;me<he;me++)ru(de[me],N,W,V)}function ah(E,N,W,V){const{opaque:O,transmissive:de,transparent:me}=E;C.setupLightsView(W),Re===!0&&se.setGlobalState(T.clippingPlanes,W),V&&Ee.viewport(G.copy(V)),O.length>0&&Za(O,N,W),de.length>0&&Za(de,N,W),me.length>0&&Za(me,N,W),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function oh(E,N,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[V.id]===void 0){const Ae=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[V.id]=new ni(1,1,{generateMipmaps:!0,type:Ae?wi:Tn,minFilter:Er,samples:Math.max(4,ot.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}const de=C.state.transmissionRenderTarget[V.id],me=V.viewport||G;de.setSize(me.z*T.transmissionResolutionScale,me.w*T.transmissionResolutionScale);const he=T.getRenderTarget(),Me=T.getActiveCubeFace(),we=T.getActiveMipmapLevel();T.setRenderTarget(de),T.getClearColor(X),Z=T.getClearAlpha(),Z<1&&T.setClearColor(16777215,.5),T.clear(),Be&&ye.render(W);const Ie=T.toneMapping;T.toneMapping=ti;const ze=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),C.setupLightsView(V),Re===!0&&se.setGlobalState(T.clippingPlanes,V),Za(E,W,V),D.updateMultisampleRenderTarget(de),D.updateRenderTargetMipmap(de),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let nt=0,St=N.length;nt<St;nt++){const gt=N[nt],{object:it,geometry:zt,material:Te,group:un}=gt;if(Te.side===pi&&it.layers.test(V.layers)){const Ye=Te.side;Te.side=ln,Te.needsUpdate=!0,lh(it,W,V,zt,Te,un),Te.side=Ye,Te.needsUpdate=!0,Ae=!0}}Ae===!0&&(D.updateMultisampleRenderTarget(de),D.updateRenderTargetMipmap(de))}T.setRenderTarget(he,Me,we),T.setClearColor(X,Z),ze!==void 0&&(V.viewport=ze),T.toneMapping=Ie}function Za(E,N,W){const V=N.isScene===!0?N.overrideMaterial:null;for(let O=0,de=E.length;O<de;O++){const me=E[O],{object:he,geometry:Me,group:we}=me;let Ie=me.material;Ie.allowOverride===!0&&V!==null&&(Ie=V),he.layers.test(W.layers)&&lh(he,N,W,Me,Ie,we)}}function lh(E,N,W,V,O,de){E.onBeforeRender(T,N,W,V,O,de),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(T,N,W,V,E,de),O.transparent===!0&&O.side===pi&&O.forceSinglePass===!1?(O.side=ln,O.needsUpdate=!0,T.renderBufferDirect(W,N,V,O,E,de),O.side=ir,O.needsUpdate=!0,T.renderBufferDirect(W,N,V,O,E,de),O.side=pi):T.renderBufferDirect(W,N,V,O,E,de),E.onAfterRender(T,N,W,V,O,de)}function Qa(E,N,W){N.isScene!==!0&&(N=st);const V=v.get(E),O=C.state.lights,de=C.state.shadowsArray,me=O.state.version,he=le.getParameters(E,O.state,de,N,W),Me=le.getProgramCacheKey(he);let we=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;const Ie=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=K.get(E.envMap||V.environment,Ie),V.envMapRotation=V.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",Je),we=new Map,V.programs=we);let ze=we.get(Me);if(ze!==void 0){if(V.currentProgram===ze&&V.lightsStateVersion===me)return ch(E,he),ze}else he.uniforms=le.getUniforms(E),E.onBeforeCompile(he,T),ze=le.acquireProgram(he,Me),we.set(Me,ze),V.uniforms=he.uniforms;const Ae=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=se.uniform),ch(E,he),V.needsLights=S0(E),V.lightsStateVersion=me,V.needsLights&&(Ae.ambientLightColor.value=O.state.ambient,Ae.lightProbe.value=O.state.probe,Ae.directionalLights.value=O.state.directional,Ae.directionalLightShadows.value=O.state.directionalShadow,Ae.spotLights.value=O.state.spot,Ae.spotLightShadows.value=O.state.spotShadow,Ae.rectAreaLights.value=O.state.rectArea,Ae.ltc_1.value=O.state.rectAreaLTC1,Ae.ltc_2.value=O.state.rectAreaLTC2,Ae.pointLights.value=O.state.point,Ae.pointLightShadows.value=O.state.pointShadow,Ae.hemisphereLights.value=O.state.hemi,Ae.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ae.spotLightMatrix.value=O.state.spotLightMatrix,Ae.spotLightMap.value=O.state.spotLightMap,Ae.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=ze,V.uniformsList=null,ze}function uh(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=al.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function ch(E,N){const W=v.get(E);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function v0(E,N,W,V,O){N.isScene!==!0&&(N=st),D.resetTextureUnits();const de=N.fog,me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,he=z===null?T.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:bs,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,we=K.get(V.envMap||me,Me),Ie=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ze=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!W.morphAttributes.position,nt=!!W.morphAttributes.normal,St=!!W.morphAttributes.color;let gt=ti;V.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(gt=T.toneMapping);const it=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,zt=it!==void 0?it.length:0,Te=v.get(V),un=C.state.lights;if(Re===!0&&(De===!0||E!==H)){const Lt=E===H&&V.id===j;se.setState(V,E,Lt)}let Ye=!1;V.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==un.state.version||Te.outputColorSpace!==he||O.isBatchedMesh&&Te.batching===!1||!O.isBatchedMesh&&Te.batching===!0||O.isBatchedMesh&&Te.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Te.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Te.instancing===!1||!O.isInstancedMesh&&Te.instancing===!0||O.isSkinnedMesh&&Te.skinning===!1||!O.isSkinnedMesh&&Te.skinning===!0||O.isInstancedMesh&&Te.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Te.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Te.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Te.instancingMorph===!1&&O.morphTexture!==null||Te.envMap!==we||V.fog===!0&&Te.fog!==de||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==se.numPlanes||Te.numIntersection!==se.numIntersection)||Te.vertexAlphas!==Ie||Te.vertexTangents!==ze||Te.morphTargets!==Ae||Te.morphNormals!==nt||Te.morphColors!==St||Te.toneMapping!==gt||Te.morphTargetsCount!==zt)&&(Ye=!0):(Ye=!0,Te.__version=V.version);let bn=Te.currentProgram;Ye===!0&&(bn=Qa(V,N,O));let Wn=!1,lr=!1,Fr=!1;const at=bn.getUniforms(),Ut=Te.uniforms;if(Ee.useProgram(bn.program)&&(Wn=!0,lr=!0,Fr=!0),V.id!==j&&(j=V.id,lr=!0),Wn||H!==E){Ee.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),at.setValue(b,"projectionMatrix",E.projectionMatrix),at.setValue(b,"viewMatrix",E.matrixWorldInverse);const Li=at.map.cameraPosition;Li!==void 0&&Li.setValue(b,Ge.setFromMatrixPosition(E.matrixWorld)),ot.logarithmicDepthBuffer&&at.setValue(b,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&at.setValue(b,"isOrthographic",E.isOrthographicCamera===!0),H!==E&&(H=E,lr=!0,Fr=!0)}if(Te.needsLights&&(un.state.directionalShadowMap.length>0&&at.setValue(b,"directionalShadowMap",un.state.directionalShadowMap,D),un.state.spotShadowMap.length>0&&at.setValue(b,"spotShadowMap",un.state.spotShadowMap,D),un.state.pointShadowMap.length>0&&at.setValue(b,"pointShadowMap",un.state.pointShadowMap,D)),O.isSkinnedMesh){at.setOptional(b,O,"bindMatrix"),at.setOptional(b,O,"bindMatrixInverse");const Lt=O.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),at.setValue(b,"boneTexture",Lt.boneTexture,D))}O.isBatchedMesh&&(at.setOptional(b,O,"batchingTexture"),at.setValue(b,"batchingTexture",O._matricesTexture,D),at.setOptional(b,O,"batchingIdTexture"),at.setValue(b,"batchingIdTexture",O._indirectTexture,D),at.setOptional(b,O,"batchingColorTexture"),O._colorsTexture!==null&&at.setValue(b,"batchingColorTexture",O._colorsTexture,D));const bi=W.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&pe.update(O,W,bn),(lr||Te.receiveShadow!==O.receiveShadow)&&(Te.receiveShadow=O.receiveShadow,at.setValue(b,"receiveShadow",O.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(Ut.envMapIntensity.value=N.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=ww()),lr&&(at.setValue(b,"toneMappingExposure",T.toneMappingExposure),Te.needsLights&&x0(Ut,Fr),de&&V.fog===!0&&Ce.refreshFogUniforms(Ut,de),Ce.refreshMaterialUniforms(Ut,V,Le,re,C.state.transmissionRenderTarget[E.id]),al.upload(b,uh(Te),Ut,D)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(al.upload(b,uh(Te),Ut,D),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&at.setValue(b,"center",O.center),at.setValue(b,"modelViewMatrix",O.modelViewMatrix),at.setValue(b,"normalMatrix",O.normalMatrix),at.setValue(b,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Lt=V.uniformsGroups;for(let Li=0,Or=Lt.length;Li<Or;Li++){const fh=Lt[Li];_e.update(fh,bn),_e.bind(fh,bn)}}return bn}function x0(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function S0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,N,W){const V=v.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=N,v.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const W=v.get(E);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0};const y0=b.createFramebuffer();this.setRenderTarget=function(E,N=0,W=0){z=E,P=N,F=W;let V=null,O=!1,de=!1;if(E){const he=v.get(E);if(he.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(b.FRAMEBUFFER,he.__webglFramebuffer),G.copy(E.viewport),U.copy(E.scissor),k=E.scissorTest,Ee.viewport(G),Ee.scissor(U),Ee.setScissorTest(k),j=-1;return}else if(he.__webglFramebuffer===void 0)D.setupRenderTarget(E);else if(he.__hasExternalTextures)D.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ie=E.depthTexture;if(he.__boundDepthTexture!==Ie){if(Ie!==null&&v.has(Ie)&&(E.width!==Ie.image.width||E.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(E)}}const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(de=!0);const we=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[N])?V=we[N][W]:V=we[N],O=!0):E.samples>0&&D.useMultisampledRTT(E)===!1?V=v.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?V=we[W]:V=we,G.copy(E.viewport),U.copy(E.scissor),k=E.scissorTest}else G.copy($).multiplyScalar(Le).floor(),U.copy(ie).multiplyScalar(Le).floor(),k=ce;if(W!==0&&(V=y0),Ee.bindFramebuffer(b.FRAMEBUFFER,V)&&Ee.drawBuffers(E,V),Ee.viewport(G),Ee.scissor(U),Ee.setScissorTest(k),O){const he=v.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+N,he.__webglTexture,W)}else if(de){const he=N;for(let Me=0;Me<E.textures.length;Me++){const we=v.get(E.textures[Me]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Me,we.__webglTexture,W,he)}}else if(E!==null&&W!==0){const he=v.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,he.__webglTexture,W)}j=-1},this.readRenderTargetPixels=function(E,N,W,V,O,de,me,he=0){if(!(E&&E.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){Ee.bindFramebuffer(b.FRAMEBUFFER,Me);try{const we=E.textures[he],Ie=we.format,ze=we.type;if(E.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+he),!ot.textureFormatReadable(Ie)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(ze)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-V&&W>=0&&W<=E.height-O&&b.readPixels(N,W,V,O,ue.convert(Ie),ue.convert(ze),de)}finally{const we=z!==null?v.get(z).__webglFramebuffer:null;Ee.bindFramebuffer(b.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,N,W,V,O,de,me,he=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me)if(N>=0&&N<=E.width-V&&W>=0&&W<=E.height-O){Ee.bindFramebuffer(b.FRAMEBUFFER,Me);const we=E.textures[he],Ie=we.format,ze=we.type;if(E.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+he),!ot.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ae),b.bufferData(b.PIXEL_PACK_BUFFER,de.byteLength,b.STREAM_READ),b.readPixels(N,W,V,O,ue.convert(Ie),ue.convert(ze),0);const nt=z!==null?v.get(z).__webglFramebuffer:null;Ee.bindFramebuffer(b.FRAMEBUFFER,nt);const St=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await NS(b,St,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Ae),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,de),b.deleteBuffer(Ae),b.deleteSync(St),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,W=0){const V=Math.pow(2,-W),O=Math.floor(E.image.width*V),de=Math.floor(E.image.height*V),me=N!==null?N.x:0,he=N!==null?N.y:0;D.setTexture2D(E,0),b.copyTexSubImage2D(b.TEXTURE_2D,W,0,0,me,he,O,de),Ee.unbindTexture()};const M0=b.createFramebuffer(),E0=b.createFramebuffer();this.copyTextureToTexture=function(E,N,W=null,V=null,O=0,de=0){let me,he,Me,we,Ie,ze,Ae,nt,St;const gt=E.isCompressedTexture?E.mipmaps[de]:E.image;if(W!==null)me=W.max.x-W.min.x,he=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,we=W.min.x,Ie=W.min.y,ze=W.isBox3?W.min.z:0;else{const Ut=Math.pow(2,-O);me=Math.floor(gt.width*Ut),he=Math.floor(gt.height*Ut),E.isDataArrayTexture?Me=gt.depth:E.isData3DTexture?Me=Math.floor(gt.depth*Ut):Me=1,we=0,Ie=0,ze=0}V!==null?(Ae=V.x,nt=V.y,St=V.z):(Ae=0,nt=0,St=0);const it=ue.convert(N.format),zt=ue.convert(N.type);let Te;N.isData3DTexture?(D.setTexture3D(N,0),Te=b.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(D.setTexture2DArray(N,0),Te=b.TEXTURE_2D_ARRAY):(D.setTexture2D(N,0),Te=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,N.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,N.unpackAlignment);const un=b.getParameter(b.UNPACK_ROW_LENGTH),Ye=b.getParameter(b.UNPACK_IMAGE_HEIGHT),bn=b.getParameter(b.UNPACK_SKIP_PIXELS),Wn=b.getParameter(b.UNPACK_SKIP_ROWS),lr=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,gt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,gt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,we),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ie),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ze);const Fr=E.isDataArrayTexture||E.isData3DTexture,at=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const Ut=v.get(E),bi=v.get(N),Lt=v.get(Ut.__renderTarget),Li=v.get(bi.__renderTarget);Ee.bindFramebuffer(b.READ_FRAMEBUFFER,Lt.__webglFramebuffer),Ee.bindFramebuffer(b.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Or=0;Or<Me;Or++)Fr&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,v.get(E).__webglTexture,O,ze+Or),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,v.get(N).__webglTexture,de,St+Or)),b.blitFramebuffer(we,Ie,me,he,Ae,nt,me,he,b.DEPTH_BUFFER_BIT,b.NEAREST);Ee.bindFramebuffer(b.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||v.has(E)){const Ut=v.get(E),bi=v.get(N);Ee.bindFramebuffer(b.READ_FRAMEBUFFER,M0),Ee.bindFramebuffer(b.DRAW_FRAMEBUFFER,E0);for(let Lt=0;Lt<Me;Lt++)Fr?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ut.__webglTexture,O,ze+Lt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ut.__webglTexture,O),at?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,bi.__webglTexture,de,St+Lt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,bi.__webglTexture,de),O!==0?b.blitFramebuffer(we,Ie,me,he,Ae,nt,me,he,b.COLOR_BUFFER_BIT,b.NEAREST):at?b.copyTexSubImage3D(Te,de,Ae,nt,St+Lt,we,Ie,me,he):b.copyTexSubImage2D(Te,de,Ae,nt,we,Ie,me,he);Ee.bindFramebuffer(b.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else at?E.isDataTexture||E.isData3DTexture?b.texSubImage3D(Te,de,Ae,nt,St,me,he,Me,it,zt,gt.data):N.isCompressedArrayTexture?b.compressedTexSubImage3D(Te,de,Ae,nt,St,me,he,Me,it,gt.data):b.texSubImage3D(Te,de,Ae,nt,St,me,he,Me,it,zt,gt):E.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,de,Ae,nt,me,he,it,zt,gt.data):E.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,de,Ae,nt,gt.width,gt.height,it,gt.data):b.texSubImage2D(b.TEXTURE_2D,de,Ae,nt,me,he,it,zt,gt);b.pixelStorei(b.UNPACK_ROW_LENGTH,un),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ye),b.pixelStorei(b.UNPACK_SKIP_PIXELS,bn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Wn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,lr),de===0&&N.generateMipmaps&&b.generateMipmap(Te),Ee.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&D.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?D.setTextureCube(E,0):E.isData3DTexture?D.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?D.setTexture2DArray(E,0):D.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){P=0,F=0,z=null,Ee.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),n.unpackColorSpace=We._getUnpackColorSpace()}}const na=400,uc=1,Cw=.26;function Rw(){const t=Cr.useRef(null);return Cr.useEffect(()=>{const e=t.current;if(!e)return;const n=new cy,i=new En(50,window.innerWidth/window.innerHeight,.1,100);i.position.set(0,0,8);const r=new Aw({alpha:!0,antialias:!0});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(r.domElement);const s=new la;n.add(s);const a=new Float32Array(na*3),o=2.399963;for(let T=0;T<na;T++){const I=T/(na-1),P=T*o,F=Math.acos(1-2*I);a[T*3]=uc*Math.sin(F)*Math.cos(P),a[T*3+1]=uc*Math.sin(F)*Math.sin(P),a[T*3+2]=uc*Math.cos(F)}const l=[];for(let T=0;T<na;T++)for(let I=T+1;I<na;I++){const P=a[T*3]-a[I*3],F=a[T*3+1]-a[I*3+1],z=a[T*3+2]-a[I*3+2];Math.sqrt(P*P+F*F+z*z)<Cw&&l.push(a[T*3],a[T*3+1],a[T*3+2],a[I*3],a[I*3+1],a[I*3+2])}const u=new gn;u.setAttribute("position",new Cn(a,3));const d=new Yf({color:"#ff2142",size:.085,transparent:!0,opacity:.16,depthWrite:!1,blending:xa,sizeAttenuation:!0}),h=new $p(u,d);s.add(h);const f=new Yf({color:"#ff2142",size:.045,transparent:!0,opacity:.9,depthWrite:!1,blending:xa,sizeAttenuation:!0}),p=new $p(u,f);s.add(p);const _=new gn;_.setAttribute("position",new Cn(new Float32Array(l),3));const y=new s0({color:"#ff2142",transparent:!0,opacity:.15,depthWrite:!1,blending:xa}),g=new yy(_,y);s.add(g);let c=window.scrollY,m=0,x=0;const M=()=>{const T=window.scrollY,I=T-c;m+=I*.008,x+=I*.0015,c=T};window.addEventListener("scroll",M,{passive:!0});const C=new Dy;let A;const R=()=>{A=requestAnimationFrame(R);const T=C.getDelta(),I=1-Math.exp(-7*T);s.rotation.y=qs.lerp(s.rotation.y,m,I),s.rotation.x=qs.lerp(s.rotation.x,x,I);const P=window.innerHeight,F=P*.08,z=P*.9,j=qs.clamp((window.scrollY-F)/(z-F),0,1),H=qs.lerp(3,6,j),G=1-Math.exp(-8*T),U=qs.lerp(s.scale.x,H,G);s.scale.setScalar(U),y.opacity=.12+.035*Math.sin(C.elapsedTime*.5),r.render(n,i)};R();const S=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",S),()=>{window.removeEventListener("scroll",M),window.removeEventListener("resize",S),cancelAnimationFrame(A),u.dispose(),_.dispose(),d.dispose(),f.dispose(),y.dispose(),r.dispose(),e.contains(r.domElement)&&e.removeChild(r.domElement)}},[]),J.jsx("div",{ref:t,className:"holo-background"})}function Pw(){const[t,e]=Cr.useState(0);Cr.useEffect(()=>{const i=()=>{const r=document.documentElement.scrollHeight-window.innerHeight,s=r>0?window.scrollY/r:0;e(Math.min(s,1))};return window.addEventListener("scroll",i),i(),()=>window.removeEventListener("scroll",i)},[]);const n=["./gallery/OAK_7002.JPG","./gallery/OAK_7003.JPG","./gallery/OAK_7031.JPG","./gallery/OAK_7049.JPG","./gallery/OAK_7075.JPG","./gallery/OAK_7095.JPG","./gallery/OAK_7128.JPG","./gallery/OAK_7143.JPG"];return J.jsxs(J.Fragment,{children:[J.jsx(Rw,{}),J.jsxs("main",{children:[J.jsxs("header",{className:"navbar",children:[J.jsx("div",{className:"nav-logo",children:J.jsx("img",{src:"./aisf-logo.png",alt:"AISF Logo",className:"logo-img"})}),J.jsxs("nav",{className:"event-navbar",children:[J.jsx("a",{href:"/",className:"nav-item",children:"Home"}),J.jsx("a",{href:"/events",className:"nav-item active",children:"Events"}),J.jsx("a",{href:"/team",className:"nav-item",children:"Team"}),J.jsx("a",{href:"#contact",className:"nav-contact",children:"Contact"})]})]}),J.jsxs("section",{id:"home",className:"hero",children:[J.jsx("div",{className:"hero-glow"}),J.jsxs("div",{className:"hero-content",children:[J.jsx("p",{className:"eyebrow",children:"AISF — ARTIFICIAL INTELLIGENCE STUDENT FORUM"}),J.jsxs("h1",{children:["CODE ",J.jsx("span",{children:"APEX"})]}),J.jsx("div",{className:"version",children:"2.0"}),J.jsx("p",{className:"subtitle",children:"24 — Hour Hackathon"}),J.jsx("p",{className:"location",children:"VIT Pune · Departmental Club"})]}),J.jsxs("section",{className:"downloads-section",children:[J.jsx("h2",{children:"Resources"}),J.jsxs("div",{className:"download-grid",children:[J.jsxs("a",{href:"./ROUND_2_RESULTS.pdf",target:"_blank",rel:"noopener noreferrer",className:"download-card",children:[J.jsx("span",{className:"download-icon",children:"🏆"}),J.jsxs("div",{children:[J.jsx("h3",{children:"Round 2 Results"}),J.jsx("p",{children:"View shortlisted teams"})]}),J.jsx("span",{className:"download-arrow",children:"↗"})]}),J.jsxs("a",{href:"./CODEAPEX_Problem Statements.pdf",download:!0,className:"download-card",children:[J.jsx("span",{className:"download-icon",children:"📄"}),J.jsxs("div",{children:[J.jsx("h3",{children:"Download Problem Statements"}),J.jsx("p",{children:"View all challenge statements"})]}),J.jsx("span",{className:"download-arrow",children:"↓"})]}),J.jsxs("a",{href:"./Participants Handbook - AISF_ CODE APEX 2.0.pdf",download:!0,className:"download-card",children:[J.jsx("span",{className:"download-icon",children:"📘"}),J.jsxs("div",{children:[J.jsx("h3",{children:"Download Handbook"}),J.jsx("p",{children:"Rules, guidelines and event details"})]}),J.jsx("span",{className:"download-arrow",children:"↓"})]})]})]})]}),J.jsxs("section",{id:"timeline",className:"timeline-section",children:[J.jsx("div",{className:"section-label",children:"EVENT SEQUENCE"}),J.jsxs("h2",{children:["THE ",J.jsx("span",{children:"RUN"})]}),J.jsxs("div",{className:"timeline",children:[J.jsx("div",{className:"timeline-item left",children:J.jsxs("div",{className:"timeline-card",children:[J.jsx("div",{className:"date",children:"16 MAR 26"}),J.jsx("div",{className:"number",children:"01"}),J.jsx("h3",{children:"Round 1 Starts"}),J.jsx("p",{children:"Online PPT Submission opens. Teams submit a detailed presentation outlining their proposed solution, including problem understanding, solution framework, technical approach, technology stack, implementation roadmap, and expected impact."})]})}),J.jsx("div",{className:"timeline-item right",children:J.jsxs("div",{className:"timeline-card",children:[J.jsx("div",{className:"date",children:"19 MAR 26"}),J.jsx("div",{className:"number",children:"02"}),J.jsx("h3",{children:"Round 1 Ends"}),J.jsx("p",{children:"Submissions are evaluated based on conceptual clarity, innovation, structured problem-solving, and technical feasibility. Shortlisted teams are announced for Round 2."})]})}),J.jsx("div",{className:"timeline-item left",children:J.jsxs("div",{className:"timeline-card",children:[J.jsx("div",{className:"date",children:"20 MAR 26"}),J.jsx("div",{className:"number",children:"03"}),J.jsx("h3",{children:"Round 2 Starts"}),J.jsx("p",{children:"Shortlisted teams present their solutions virtually to the jury panel. Presentations focus on design justification, feasibility, and technical approach."})]})}),J.jsx("div",{className:"timeline-item right",children:J.jsxs("div",{className:"timeline-card",children:[J.jsx("div",{className:"date",children:"22 MAR 26"}),J.jsx("div",{className:"number",children:"04"}),J.jsx("h3",{children:"Round 2 Ends"}),J.jsx("p",{children:"The jury evaluates live presentations and announces the teams selected for the Grand Finale."})]})}),J.jsx("div",{className:"timeline-item left",children:J.jsxs("div",{className:"timeline-card",children:[J.jsx("div",{className:"date",children:"27 MAR 26"}),J.jsx("div",{className:"number",children:"05"}),J.jsx("h3",{children:"Round 3 Starts"}),J.jsx("p",{children:"The Grand Finale begins at VIT Pune. Finalists participate in a 24-hour hackathon, build and implement their solution, and receive mentorship from industry experts."})]})}),J.jsx("div",{className:"timeline-item right",children:J.jsxs("div",{className:"timeline-card",children:[J.jsx("div",{className:"date",children:"28 MAR 26"}),J.jsx("div",{className:"number",children:"06"}),J.jsx("h3",{children:"Round 3 Ends"}),J.jsx("p",{children:"Final prototypes are presented to the jury panel. Overall winners of VIT CODE VERSE 2.0 are announced during the closing ceremony."})]})})]})]}),J.jsxs("section",{id:"archive",className:"gallery-section",children:[J.jsx("div",{className:"section-label",children:"EVENT ARCHIVE"}),J.jsxs("h2",{children:["CODE APEX ",J.jsx("span",{children:"ARCHIVE"})]}),J.jsx("div",{className:"gallery-track",children:[...n,...n].map((i,r)=>J.jsx("div",{className:"gallery-card",children:J.jsx("img",{src:i,alt:`Code Apex ${r+1}`})},r))})]}),J.jsxs("footer",{id:"contact",className:"footer",children:[J.jsx("img",{src:"./aisf-logo.png",alt:"AISF Logo",className:"logo-img"}),J.jsxs("div",{children:[J.jsx("h3",{children:"ARTIFICIAL INTELLIGENCE STUDENT FORUM"}),J.jsx("p",{children:"VIT Pune"})]}),J.jsx("p",{className:"copyright",children:"© 2026 AISF VIT Pune"})]})]})]})}cc.createRoot(document.getElementById("root")).render(J.jsx(z0.StrictMode,{children:J.jsx(Pw,{})}));
