(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{429:function(e,t,n){Promise.resolve().then(n.bind(n,2659)),Promise.resolve().then(n.bind(n,3754)),Promise.resolve().then(n.t.bind(n,54,23)),Promise.resolve().then(n.t.bind(n,1679,23)),Promise.resolve().then(n.t.bind(n,4342,23))},3754:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(9268),o=n(6008),i=n(1295);function u(){let e=(0,o.usePathname)(),t=(0,o.useRouter)(),n="/portfolio",u=["".concat(n),"".concat(n,"/content")];return(0,r.jsx)("div",{className:"mix-blend-difference fixed top-0 hover:bg-white hover:text-black cursor-pointer text-3xl p-2 text-gray-200 font-display",onClick:()=>{u.includes(e.endsWith("/")?e.slice(0,-1):e)?scrollTo({top:0}):t.push("/content")},children:u.includes(e)?"ts.":(0,r.jsx)(i.Z,{sequence:["< back"]})})}},1295:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(9268),o=n(6006);function i(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(u,c)}s((r=r.apply(e,t||[])).next())})}function u(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function c(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function a(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function l(e,t,n,r){for(var o=[],l=4;l<arguments.length;l++)o[l-4]=arguments[l];return i(this,void 0,void 0,function(){var l,d,p,h,m;return u(this,function(y){switch(y.label){case 0:y.trys.push([0,12,13,14]),d=(l=c(o)).next(),y.label=1;case 1:if(d.done)return[3,11];switch(typeof(p=d.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,function(e,t,n,r,o){return i(this,void 0,void 0,function(){var l;return u(this,function(d){switch(d.label){case 0:var p,h;return p=e.textContent,h=s(t).slice(0),l=a(a([],s(p),!1),[NaN],!1).findIndex(function(e,t){return h[t]!==e}),[4,function(e,t,n,r,o){return i(this,void 0,void 0,function(){var i,a,l,d,p,h,m,y,v,b,_,x;return u(this,function(g){switch(g.label){case 0:if(i=t,o){for(a=0,l=1;l<t.length;l++)if(p=(d=s([t[l-1],t[l]],2))[0],(h=d[1]).length>p.length||""===h){a=l;break}i=t.slice(a,t.length)}g.label=1;case 1:g.trys.push([1,6,7,8]),y=(m=c(function(e){var t,n,r,o,i;return u(this,function(s){switch(s.label){case 0:t=function(e){return u(this,function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame(function(){return t.textContent=e})},opCode:function(t){return""===e||t.textContent.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}})},s.label=1;case 1:s.trys.push([1,6,7,8]),r=(n=c(e)).next(),s.label=2;case 2:return r.done?[3,5]:[5,t(r.value)];case 3:s.sent(),s.label=4;case 4:return r=n.next(),[3,2];case 5:return[3,8];case 6:return o={error:s.sent()},[3,8];case 7:try{r&&!r.done&&(i=n.return)&&i.call(n)}finally{if(o)throw o.error}return[7];case 8:return[2]}})}(i))).next(),g.label=2;case 2:return y.done?[3,5]:(b="WRITING"===(v=y.value).opCode(e)?n+n*(Math.random()-.5):r+r*(Math.random()-.5),v.op(e),[4,f(b)]);case 3:g.sent(),g.label=4;case 4:return y=m.next(),[3,2];case 5:return[3,8];case 6:return _={error:g.sent()},[3,8];case 7:try{y&&!y.done&&(x=m.return)&&x.call(m)}finally{if(_)throw _.error}return[7];case 8:return[2]}})})}(e,a(a([],s(function(e,t,n){var r=s(e).slice(0);return void 0===t&&(t=0),void 0===n&&(n=r.length),u(this,function(e){switch(e.label){case 0:return n>t?[4,r.slice(0,--n).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})}(e.textContent,l)),!1),s(function(e,t,n){var r=s(e).slice(0);return void 0===t&&(t=0),void 0===n&&(n=r.length),u(this,function(e){switch(e.label){case 0:return t<n?[4,r.slice(0,++t).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})}(t,l)),!1),n,r,o)];case 1:return d.sent(),[2]}})})}(e,p,t,n,r)];case 3:case 5:case 7:return y.sent(),[3,10];case 4:return[4,f(p)];case 6:return[4,p.apply(void 0,a([e,t,n,r],s(o),!1))];case 8:return[4,p];case 9:y.sent(),y.label=10;case 10:return d=l.next(),[3,1];case 11:return[3,14];case 12:return h={error:y.sent()},[3,14];case 13:try{d&&!d.done&&(m=l.return)&&m.call(l)}finally{if(h)throw h.error}return[7];case 14:return[2]}})})}function f(e){return i(this,void 0,void 0,function(){return u(this,function(t){switch(t.label){case 0:return[4,new Promise(function(t){return setTimeout(t,e)})];case 1:return t.sent(),[2]}})})}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var d=(0,o.memo)((0,o.forwardRef)(function(e,t){var n=e.sequence,r=e.repeat,i=e.className,u=e.speed,c=void 0===u?40:u,f=e.deletionSpeed,d=e.omitDeletionAnimation,p=void 0!==d&&d,h=e.preRenderFirstString,m=e.wrapper,y=e.cursor,v=void 0===y||y,b=e.style,_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","cursor","style"]),x=_["aria-label"],g=_["aria-hidden"];f||(f=c);var w=[,,].fill(40);[c,f].forEach(function(e,t){switch(typeof e){case"number":w[t]=Math.abs(e-100);break;case"object":var n=e.type,r=e.value;if("number"!=typeof r)break;"keyStrokeDelayInMs"===n&&(w[t]=r)}});var E,k,R,P,S,O,C,N,j=w[0],I=w[1],M=(void 0===E&&(E=null),k=(0,o.useRef)(E),(0,o.useEffect)(function(){t&&("function"==typeof t?t(k.current):t.current=k.current)},[t]),k),L="index-module_type__E-SaG";R=i?"".concat(v?L+" ":"").concat(i):v?L:"",P=(0,o.useRef)(function(){var e,t=n;return r===1/0?e=l:"number"==typeof r&&(t=Array(1+r).fill(n).flat()),l.apply(void 0,a(a([M.current,j,I,p],s(t),!1),[e],!1)),function(){M.current}}),S=(0,o.useRef)(),O=(0,o.useRef)(!1),C=(0,o.useRef)(!1),N=s((0,o.useState)(0),2)[1],O.current&&(C.current=!0),(0,o.useEffect)(function(){return O.current||(S.current=P.current(),O.current=!0),N(function(e){return e+1}),function(){C.current&&S.current&&S.current()}},[]);var T=void 0!==h&&h?n.find(function(e){return"string"==typeof e})||"":null;return o.createElement(void 0===m?"span":m,{"aria-hidden":g,"aria-label":x,style:b,className:R,children:x?o.createElement("span",{"aria-hidden":"true",ref:M,children:T}):T,ref:x?void 0:M})}),function(e,t){return!0});let p=()=>{let e=document.getElementsByClassName("typewriter");for(let t=0;t<e.length;t++)e[t].classList.remove("typewriter")};function h(e){let{sequence:t,style:n,cursor:o,wrapper:i,repeat:u,speed:c,className:s}=e;return(0,r.jsx)(d,{style:null!=n?n:{},sequence:[...t,()=>p()],cursor:null!=o&&o,wrapper:null!=i?i:"span",repeat:null!=u?u:0,speed:null!=c?c:{type:"keyStrokeDelayInMs",value:200},className:null!=s?s:"typewriter"})}},2659:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(9268),o=n(6006),i=n(3398);function u(){let e=(0,o.useRef)(!1);return(0,i.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var c=n(1253),s=n(3043),a=n(789);class l extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function f({children:e,isPresent:t}){let n=(0,o.useId)(),r=(0,o.useRef)(null),i=(0,o.useRef)({width:0,height:0,top:0,left:0});return(0,o.useInsertionEffect)(()=>{let{width:e,height:o,top:u,left:c}=i.current;if(t||!r.current||!e||!o)return;r.current.dataset.motionPopId=n;let s=document.createElement("style");return document.head.appendChild(s),s.sheet&&s.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${u}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(s)}},[t]),o.createElement(l,{isPresent:t,childRef:r,sizeRef:i},o.cloneElement(e,{ref:r}))}let d=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:u,mode:c})=>{let l=(0,a.h)(p),d=(0,o.useId)(),h=(0,o.useMemo)(()=>({id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{for(let t of(l.set(e,!0),l.values()))if(!t)return;r&&r()},register:e=>(l.set(e,!1),()=>l.delete(e))}),u?void 0:[n]);return(0,o.useMemo)(()=>{l.forEach((e,t)=>l.set(t,!1))},[n]),o.useEffect(()=>{n||l.size||!r||r()},[n]),"popLayout"===c&&(e=o.createElement(f,{isPresent:n},e)),o.createElement(s.O.Provider,{value:h},e)};function p(){return new Map}var h=n(2115),m=n(2864);let y=e=>e.key||"",v=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:s,presenceAffectsLayout:a=!0,mode:l="sync"})=>{var f;(0,m.k)(!s,"Replace exitBeforeEnter with mode='wait'");let p=(0,o.useContext)(h.p).forceRender||function(){let e=u(),[t,n]=(0,o.useState)(0),r=(0,o.useCallback)(()=>{e.current&&n(t+1)},[t]),i=(0,o.useCallback)(()=>c.Wi.postRender(r),[r]);return[i,t]}()[0],v=u(),b=function(e){let t=[];return o.Children.forEach(e,e=>{(0,o.isValidElement)(e)&&t.push(e)}),t}(e),_=b,x=(0,o.useRef)(new Map).current,g=(0,o.useRef)(_),w=(0,o.useRef)(new Map).current,E=(0,o.useRef)(!0);if((0,i.L)(()=>{E.current=!1,function(e,t){e.forEach(e=>{let n=y(e);t.set(n,e)})}(b,w),g.current=_}),f=()=>{E.current=!0,w.clear(),x.clear()},(0,o.useEffect)(()=>()=>f(),[]),E.current)return o.createElement(o.Fragment,null,_.map(e=>o.createElement(d,{key:y(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:a,mode:l},e)));_=[..._];let k=g.current.map(y),R=b.map(y),P=k.length;for(let e=0;e<P;e++){let t=k[e];-1!==R.indexOf(t)||x.has(t)||x.set(t,void 0)}return"wait"===l&&x.size&&(_=[]),x.forEach((e,n)=>{if(-1!==R.indexOf(n))return;let i=w.get(n);if(!i)return;let u=k.indexOf(n),c=e;c||(c=o.createElement(d,{key:y(i),isPresent:!1,onExitComplete:()=>{w.delete(n),x.delete(n);let e=g.current.findIndex(e=>e.key===n);if(g.current.splice(e,1),!x.size){if(g.current=b,!1===v.current)return;p(),r&&r()}},custom:t,presenceAffectsLayout:a,mode:l},i),x.set(n,c)),_.splice(u,0,c)}),_=_.map(e=>{let t=e.key;return x.has(t)?e:o.createElement(d,{key:y(e),isPresent:!0,presenceAffectsLayout:a,mode:l},e)}),o.createElement(o.Fragment,null,x.size?_:_.map(e=>(0,o.cloneElement)(e)))};function b(e){let{children:t}=e;return(0,r.jsx)(v,{initial:!0,mode:"popLayout",children:t})}},54:function(){},4342:function(e){e.exports={style:{fontFamily:"'__Major_Mono_Display_d97f3f', '__Major_Mono_Display_Fallback_d97f3f'",fontWeight:400,fontStyle:"normal"},className:"__className_d97f3f",variable:"__variable_d97f3f"}},1679:function(e){e.exports={style:{fontFamily:"'__Nixie_One_545871', '__Nixie_One_Fallback_545871'",fontWeight:400,fontStyle:"normal"},className:"__className_545871",variable:"__variable_545871"}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,i={},a=null,l=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:c.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},9268:function(e,t,n){"use strict";e.exports=n(3177)},6008:function(e,t,n){e.exports=n(8170)},2115:function(e,t,n){"use strict";n.d(t,{p:function(){return o}});var r=n(6006);let o=(0,r.createContext)({})},3043:function(e,t,n){"use strict";n.d(t,{O:function(){return o}});var r=n(6006);let o=(0,r.createContext)(null)},1253:function(e,t,n){"use strict";n.d(t,{Pn:function(){return u},Wi:function(){return i},frameData:function(){return c},S6:function(){return s}});var r=n(9153);let o=["prepare","read","update","preRender","render","postRender"],{schedule:i,cancel:u,state:c,steps:s}=function(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},u=o.reduce((e,t)=>(e[t]=function(e){let t=[],n=[],r=0,o=!1,i=!1,u=new WeakSet,c={schedule:(e,i=!1,c=!1)=>{let s=c&&o,a=s?t:n;return i&&u.add(e),-1===a.indexOf(e)&&(a.push(e),s&&o&&(r=t.length)),e},cancel:e=>{let t=n.indexOf(e);-1!==t&&n.splice(t,1),u.delete(e)},process:s=>{if(o){i=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,r=t.length)for(let n=0;n<r;n++){let r=t[n];r(s),u.has(r)&&(c.schedule(r),e())}o=!1,i&&(i=!1,c.process(s))}};return c}(()=>n=!0),e),{}),c=e=>u[e].process(i),s=u=>{n=!1,i.delta=r?1e3/60:Math.max(Math.min(u-i.timestamp,40),1),i.timestamp=u,i.isProcessing=!0,o.forEach(c),i.isProcessing=!1,n&&t&&(r=!1,e(s))},a=()=>{n=!0,r=!0,i.isProcessing||e(s)},l=o.reduce((e,t)=>{let r=u[t];return e[t]=(e,t=!1,o=!1)=>(n||a(),r.schedule(e,t,o)),e},{});return{schedule:l,cancel:e=>o.forEach(t=>u[t].cancel(e)),state:i,steps:u}}("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:r.Z,!0)},2864:function(e,t,n){"use strict";n.d(t,{K:function(){return o},k:function(){return i}});var r=n(9153);let o=r.Z,i=r.Z},5532:function(e,t,n){"use strict";n.d(t,{j:function(){return r}});let r="undefined"!=typeof document},9153:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=e=>e},789:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var r=n(6006);function o(e){let t=(0,r.useRef)(null);return null===t.current&&(t.current=e()),t.current}},3398:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var r=n(6006),o=n(5532);let i=o.j?r.useLayoutEffect:r.useEffect}},function(e){e.O(0,[253,961,560],function(){return e(e.s=429)}),_N_E=e.O()}]);