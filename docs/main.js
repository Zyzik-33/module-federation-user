(()=>{var e,r,t,n,o,a,u,i,l,s,f,p,d,h,c={},v={};function m(e){if(v[e])return v[e].exports;var r=v[e]={exports:{}};return c[e](r,r.exports,m),r.exports}m.m=c,m.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return m.d(r,{a:r}),r},m.d=(e,r)=>{for(var t in r)m.o(r,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},m.f={},m.e=e=>Promise.all(Object.keys(m.f).reduce((r,t)=>(m.f[t](e,r),r),[])),m.u=e=>e+".js",m.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@basic-host-remote/app2:",m.l=(t,n,o)=>{if(e[t])e[t].push(n);else{var a,u;if(void 0!==o)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var s=i[l];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){a=s;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,m.nc&&a.setAttribute("nonce",m.nc),a.setAttribute("data-webpack",r+o),a.src=t),e[t]=[n];var f=(r,n)=>{a.onerror=a.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach(e=>e(n)),r)return r(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),u&&document.head.appendChild(a)}},m.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.p="https://filipemerker.github.io/module-federation-user/",(()=>{m.S={};var e={};m.I=r=>{if(e[r])return e[r];e[r]=1,m.o(m.S,r)||(m.S[r]={});var t=m.S[r],n="@basic-host-remote/app2",o=(e,r,o)=>{var a=t[e]=t[e]||{},u=a[r];(!u||!u.loaded&&n>u.from)&&(a[r]={get:o,from:n})},a=[];switch(r){case"default":o("react-dom","16.13.1",()=>Promise.all([m.e(935),m.e(150)]).then(()=>()=>m(935))),o("react","16.13.1",()=>m.e(976).then(()=>()=>m(294)))}return a.length&&(e[r]=Promise.all(a).then(()=>e[r]=1))}})(),t=e=>{var r=e=>e.split(".").map(e=>+e==e?+e:e),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var u=r[n],i=(typeof u)[0];if(a!=i)return"o"==a&&"n"==i||"s"==i||"u"==a;if("o"!=a&&"u"!=a&&o!=u)return o<u;n++}},o=e=>{if(1===e.length)return"*";if(0 in e){var r="",t=e[0];r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(i=e[a]))[0]?"-":(n>0?".":"")+(n=2,i);return r}var u=[];for(a=1;a<e.length;a++){var i=e[a];u.push(0===i?"not("+l()+")":1===i?"("+l()+" || "+l()+")":2===i?u.pop()+" "+u.pop():o(i))}return l();function l(){return u.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var u=0,i=1,l=!0;;i++,u++){var s,f,p=i<e.length?(typeof e[i])[0]:"";if(u>=r.length||"o"==(f=(typeof(s=r[u]))[0]))return!l||("u"==p?i>n&&!o:""==p!=o);if("u"==f){if(!l||"u"!=p)return!1}else if(l)if(p==f)if(i<=n){if(s!=e[i])return!1}else{if(o?s>e[i]:s<e[i])return!1;s!=e[i]&&(l=!1)}else if("s"!=p&&"n"!=p){if(o||i<=n)return!1;l=!1,i--}else{if(i<=n||f<p!=o)return!1;l=!1}else"s"!=p&&"n"!=p&&(l=!1,i--)}}var d=[],h=d.pop.bind(d);for(u=1;u<e.length;u++){var c=e[u];d.push(1==c?h()|h():2==c?h()&h():c?a(c,r):!h())}return!!h()},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e,0)},i=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+o(t)+")",l=(e,r,t,n)=>{var o=u(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(i(t,o,n)),s(e[t][o])},s=e=>(e.loaded=1,e.get()),f=(e=>function(r,t,n,o){var a=m.I(r);return a.then?a.then(e.bind(e,r,m.S[r],t,n,o)):e(0,m.S[r],t,n,o)})((e,r,t,n,o)=>r&&m.o(r,t)?l(r,0,t,n):o()),p={},d={558:()=>f("default","react",[1,16,13,0],()=>m.e(976).then(()=>()=>m(294))),965:()=>f("default","react",[,[4,16,8,0],[0],2],()=>m.e(976).then(()=>()=>m(294))),169:()=>f("default","react-dom",[1,16,13,0],()=>Promise.all([m.e(935),m.e(150)]).then(()=>()=>m(935))),150:()=>f("default","react",[1,16,13,1],()=>m.e(294).then(()=>()=>m(294)))},h={150:[150],593:[558,965],838:[169]},m.f.consumes=(e,r)=>{m.o(h,e)&&h[e].forEach(e=>{if(m.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,c[e]=t=>{delete v[e],t.exports=r()}},n=r=>{delete p[e],c[e]=t=>{throw delete v[e],r}};try{var o=d[e]();o.then?r.push(p[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}})},(()=>{var e={179:0};m.f.j=(r,t)=>{var n=m.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(150|593)$/.test(r))e[r]=0;else{var o=new Promise((t,o)=>{n=e[r]=[t,o]});t.push(n[2]=o);var a=m.p+m.u(r),u=new Error;m.l(a,t=>{if(m.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}},"chunk-"+r)}};var r=self.webpackChunk_basic_host_remote_app2=self.webpackChunk_basic_host_remote_app2||[],t=r.push.bind(r);r.push=r=>{for(var n,o,[a,u,i]=r,l=0,s=[];l<a.length;l++)o=a[l],m.o(e,o)&&e[o]&&s.push(e[o][0]),e[o]=0;for(n in u)m.o(u,n)&&(m.m[n]=u[n]);for(i&&i(m),t(r);s.length;)s.shift()()}})(),Promise.all([m.e(163),m.e(593),m.e(838)]).then(m.bind(m,838))})();