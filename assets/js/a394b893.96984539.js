"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1066:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"Toss a coin to your T-Regx!",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},p={permalink:"/blog/2020/03/19/sponsor-t-regx",source:"@site/blog/2020-03-19-sponsor-t-regx.md",title:"Toss a coin to your T-Regx!",description:'Hello, back again! :) We\'ve added a "Sponsor" button on github.com/T-Regx.',date:"2020-03-19T00:00:00.000Z",formattedDate:"March 19, 2020",tags:[],readingTime:.615,truncated:!1,prevItem:{title:"Release 0.9.6 - First/all changes!",permalink:"/blog/2020/04/02/release-0.9.6"},nextItem:{title:"Release 0.9.5 - Alternation in prepared patterns!",permalink:"/blog/2020/03/15/release-0.9.5"}},s=[{value:"Next release",id:"next-release",children:[]}],c={toc:s},u="wrapper";function m(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)(u,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Hello, back again! :) We\'ve added a "Sponsor" button on ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/T-Regx/T-Regx"},"github.com/T-Regx"),". "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/sponsors/Danon"},(0,o.kt)("img",{alt:"Sponsor",src:n(1547).Z}))),(0,o.kt)("p",null,"If you like T-Regx going in the right direction, now you have the opportunity to throw us buck or two."),(0,o.kt)("h2",{id:"next-release"},"Next release"),(0,o.kt)("p",null,"And a heads up, in the new 0.9.6 release, we'll add a really smart ",(0,o.kt)("inlineCode",{parentName:"p"},"asInt()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fluent()")," methods; which are already present,\nbut will get an upgrade."),(0,o.kt)("p",null,"You see, ",(0,o.kt)("inlineCode",{parentName:"p"},"match()->first()")," calls ",(0,o.kt)("inlineCode",{parentName:"p"},"preg_match()")," and that makes sense. Also ",(0,o.kt)("inlineCode",{parentName:"p"},"match()->fluent()")," calls ",(0,o.kt)("inlineCode",{parentName:"p"},"preg_match_all()"),",\nbecause later ",(0,o.kt)("inlineCode",{parentName:"p"},"fluent()->map()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"fluent()->filter()->first()")," can be called, for example. And that also, sorta makes sense.\nBut, unfortunately ",(0,o.kt)("inlineCode",{parentName:"p"},"match()->fluent()->first()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"match()->asInt()->first()")," also call ",(0,o.kt)("inlineCode",{parentName:"p"},"preg_match_all()"),", and that's a bit\nwasteful. "),(0,o.kt)("p",null,"So now we're introducing a change (similar to Java 8 Streams) that will call ",(0,o.kt)("inlineCode",{parentName:"p"},"preg_match()")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"fluent()->first()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"asInt()->first()"),"."))}m.isMDXComponent=!0},1547:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);