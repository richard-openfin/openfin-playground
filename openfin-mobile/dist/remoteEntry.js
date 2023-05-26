var openfin_mobile;(()=>{"use strict";var e,r,t,n,o,i,a,l,u,f,s,p,d,c,h={133:(e,r,t)=>{var n={"./OpenFinMobile":()=>Promise.all([t.e(369),t.e(359)]).then((()=>()=>t(359)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),i=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>i})}},v={};function m(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={exports:{}};return h[e](t,t.exports,m),t.exports}m.m=h,m.c=v,m.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return m.d(r,{a:r}),r},m.d=(e,r)=>{for(var t in r)m.o(r,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},m.f={},m.e=e=>Promise.all(Object.keys(m.f).reduce(((r,t)=>(m.f[t](e,r),r)),[])),m.u=e=>e+".js",m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),m.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="openfin-mobile:",m.l=(t,n,o,i)=>{if(e[t])e[t].push(n);else{var a,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var s=u[f];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){a=s;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,m.nc&&a.setAttribute("nonce",m.nc),a.setAttribute("data-webpack",r+o),a.src=t),e[t]=[n];var p=(r,n)=>{a.onerror=a.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}},m.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{m.S={};var e={},r={};m.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];m.o(m.S,t)||(m.S[t]={});var i=m.S[t],a="openfin-mobile",l=(e,r,t,n)=>{var o=i[e]=i[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:a>l.from))&&(o[r]={get:t,from:a,eager:!!n})},u=[];return"default"===t&&(l("react-dom","16.14.0",(()=>Promise.all([m.e(542),m.e(369)]).then((()=>()=>m(542))))),l("react","16.14.0",(()=>m.e(378).then((()=>()=>m(378)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;m.g.importScripts&&(e=m.g.location+"");var r=m.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],i=(typeof o)[0];if(n>=r.length)return"u"==i;var a=r[n],l=(typeof a)[0];if(i!=l)return"o"==i&&"n"==l||"s"==l||"u"==i;if("o"!=i&&"u"!=i&&o!=a)return o<a;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,i=1;i<e.length;i++)n--,t+="u"==(typeof(l=e[i]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var a=[];for(i=1;i<e.length;i++){var l=e[i];a.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?a.pop()+" "+a.pop():o(l))}return u();function u(){return a.pop().replace(/^\((.+)\)$/,"$1")}},i=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var a=0,l=1,u=!0;;l++,a++){var f,s,p=l<e.length?(typeof e[l])[0]:"";if(a>=r.length||"o"==(s=(typeof(f=r[a]))[0]))return!u||("u"==p?l>n&&!o:""==p!=o);if("u"==s){if(!u||"u"!=p)return!1}else if(u)if(p==s)if(l<=n){if(f!=e[l])return!1}else{if(o?f>e[l]:f<e[l])return!1;f!=e[l]&&(u=!1)}else if("s"!=p&&"n"!=p){if(o||l<=n)return!1;u=!1,l--}else{if(l<=n||s<p!=o)return!1;u=!1}else"s"!=p&&"n"!=p&&(u=!1,l--)}}var d=[],c=d.pop.bind(d);for(a=1;a<e.length;a++){var h=e[a];d.push(1==h?c()|c():2==h?c()&c():h?i(h,r):!c())}return!!c()},a=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",u=(e,r,t,n)=>{var o=a(e,t);return i(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(l(e,t,o,n)),f(e[t][o])},f=e=>(e.loaded=1,e.get()),s=(e=>function(r,t,n,o){var i=m.I(r);return i&&i.then?i.then(e.bind(e,r,m.S[r],t,n,o)):e(0,m.S[r],t,n,o)})(((e,r,t,n,o)=>r&&m.o(r,t)?u(r,0,t,n):o())),p={},d={369:()=>s("default","react",[1,16,13,0],(()=>m.e(378).then((()=>()=>m(378)))))},c={369:[369]},m.f.consumes=(e,r)=>{m.o(c,e)&&c[e].forEach((e=>{if(m.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,m.m[e]=t=>{delete m.c[e],t.exports=r()}},n=r=>{delete p[e],m.m[e]=t=>{throw delete m.c[e],r}};try{var o=d[e]();o.then?r.push(p[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={473:0};m.f.j=(r,t)=>{var n=m.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(369!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var i=m.p+m.u(r),a=new Error;m.l(i,(t=>{if(m.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[i,a,l]=t,u=0;if(i.some((r=>0!==e[r]))){for(n in a)m.o(a,n)&&(m.m[n]=a[n]);l&&l(m)}for(r&&r(t);u<i.length;u++)o=i[u],m.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkopenfin_mobile=self.webpackChunkopenfin_mobile||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var g=m(133);openfin_mobile=g})();