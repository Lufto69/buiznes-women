(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},8005:e=>{e.exports={style:{fontFamily:"'__Roboto_e2e8c2', '__Roboto_Fallback_e2e8c2'",fontStyle:"normal"},className:"__className_e2e8c2"}},6968:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>y,default:()=>d,getServerSideProps:()=>h,getStaticPaths:()=>f,getStaticProps:()=>p,reportWebVitals:()=>g,routeModule:()=>v,unstable_getServerProps:()=>x,unstable_getServerSideProps:()=>P,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>_,unstable_getStaticProps:()=>m});var a=r(7093),o=r(5244),i=r(1323),s=r(7471),l=r(1763),u=r(8529),c=e([l]);l=(c.then?(await c)():c)[0];let d=(0,i.l)(u,"default"),p=(0,i.l)(u,"getStaticProps"),f=(0,i.l)(u,"getStaticPaths"),h=(0,i.l)(u,"getServerSideProps"),y=(0,i.l)(u,"config"),g=(0,i.l)(u,"reportWebVitals"),m=(0,i.l)(u,"unstable_getStaticProps"),_=(0,i.l)(u,"unstable_getStaticPaths"),b=(0,i.l)(u,"unstable_getStaticParams"),x=(0,i.l)(u,"unstable_getServerProps"),P=(0,i.l)(u,"unstable_getServerSideProps"),v=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:l.default,Document:s.default},userland:u});n()}catch(e){n(e)}})},8529:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let n=r(167),a=r(997),o=n._(r(6689)),i=n._(r(494)),s={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function l(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let u={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class c extends o.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||s[e]||"An unexpected error has occurred";return(0,a.jsxs)("div",{style:u.error,children:[(0,a.jsx)(i.default,{children:(0,a.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,a.jsxs)("div",{style:u.desc,children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,a.jsx)("h1",{className:"next-error-h1",style:u.h1,children:e}):null,(0,a.jsx)("div",{style:u.wrap,children:(0,a.jsxs)("h2",{style:u.h2,children:[this.props.title||e?r:(0,a.jsx)(a.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}c.displayName="ErrorPage",c.getInitialProps=l,c.origGetInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8579:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},494:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return y},defaultHead:function(){return d}});let n=r(167),a=r(8760),o=r(997),i=a._(r(6689)),s=n._(r(3657)),l=r(8039),u=r(1988),c=r(8579);function d(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(9784);let f=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(d(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return a=>{let o=!0,i=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){i=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=a.props[t],r=n[t]||new Set;("name"!==t||!i)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:n})})}let y=function(e){let{children:t}=e,r=(0,i.useContext)(l.AmpStateContext),n=(0,i.useContext)(u.HeadManagerContext);return(0,o.jsx)(s.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3657:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=r(6689),a=()=>{},o=()=>{};function i(e){var t;let{headManager:r,reduceComponentsToState:i}=e;function s(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(i(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),s(),a(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),a(()=>(r&&(r._pendingUpdate=s),()=>{r&&(r._pendingUpdate=s)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},9784:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},1763:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>i});var a=r(7648);r(4542);var o=e([a]);let i=(a=(o.then?(await o)():o)[0]).g;n()}catch(e){n(e)}})},7471:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(997),a=r(6859);function o(){return(0,n.jsxs)(a.Html,{lang:"ru",children:[n.jsx(a.Head,{}),(0,n.jsxs)("body",{children:[n.jsx(a.Main,{}),n.jsx(a.NextScript,{})]})]})}},5092:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{w:()=>l});var a=r(997),o=r(7903),i=r(9752),s=e([o,i]);function l({children:e}){return a.jsx(i.QueryClientProvider,{client:o.E,children:e})}[o,i]=s.then?(await s)():s,n()}catch(e){n(e)}})},7880:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{g:()=>u});var a=r(997),o=r(8005),i=r.n(o),s=r(5092),l=e([s]);function u({Component:e,pageProps:t}){return a.jsx(s.w,{children:a.jsx("div",{className:i().className,children:a.jsx(e,{...t})})})}s=(l.then?(await l)():l)[0],n()}catch(e){n(e)}})},7648:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{g:()=>a.g});var a=r(7880),o=e([a]);a=(o.then?(await o)():o)[0],n()}catch(e){n(e)}})},7903:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{E:()=>i});var a=r(9752),o=e([a]);let i=new(a=(o.then?(await o)():o)[0]).QueryClient;n()}catch(e){n(e)}})},4542:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},1988:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.HeadManagerContext},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},9752:e=>{"use strict";e.exports=import("@tanstack/react-query")},1017:e=>{"use strict";e.exports=require("path")},8760:(e,t)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(a,i,s):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[859],()=>r(6968));module.exports=n})();