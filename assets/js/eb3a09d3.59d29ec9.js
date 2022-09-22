"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9353:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"What's new, new, new!",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},p={permalink:"/blog/2017/12/30/delimiters",source:"@site/blog/2017-12-30-delimiters.md",title:"What's new, new, new!",description:"Another quickly update what's going on with CleanRegex :)",date:"2017-12-30T00:00:00.000Z",formattedDate:"December 30, 2017",tags:[],readingTime:.44,truncated:!1,prevItem:{title:"Support for PHP 5.3",permalink:"/blog/2018/03/03/php-5.3-support"},nextItem:{title:"What's new, new, new! Part 2",permalink:"/blog/2017/12/30/safe-regex"}},c=[],s={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Another quickly update what's going on with CleanRegex :)"),(0,o.kt)("p",null,"Most important of these two is that patterns used with CleanRegex no longer need delimiters :> I'm pretty happy with it,\nI don't see any reason why developers should keep including those."),(0,o.kt)("p",null,"How delimiting works? CleanRegex has a number of potential delimiters. At first, it checks whether a pattern is already\ndelimited and if it's not, it adds a potential delimiter - one that isn't used in a pattern. Then in adds the\nflags :) As simple as that."))}u.isMDXComponent=!0}}]);