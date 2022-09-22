"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2532],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,h=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5906:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"Release 0.9.8 - foreach baby, foreach!",author:"Daniel Wilkowski"},c={permalink:"/blog/2020/04/13/release-0.9.8",source:"@site/blog/2020-04-13-release-0.9.8.md",title:"Release 0.9.8 - foreach baby, foreach!",description:"Iterables",date:"2020-04-13T00:00:00.000Z",formattedDate:"April 13, 2020",tags:[],readingTime:.505,truncated:!1,prevItem:{title:"PHP Quiz for you!",permalink:"/blog/2020/09/10/quiz"},nextItem:{title:"Release 0.9.7 - Match as vanilla array!",permalink:"/blog/2020/04/08/release-0.9.7"}},p=[{value:"Iterables",id:"iterables",children:[]},{value:"Shorthand method",id:"shorthand-method",children:[]}],m={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"iterables"},"Iterables"),(0,o.kt)("p",null,"Up to this point, you could either use T-Regx methods that return ",(0,o.kt)("inlineCode",{parentName:"p"},"array"),", in order to iterate them, or use\none of the collection methods ",(0,o.kt)("a",{parentName:"p",href:"/docs/match-map"},(0,o.kt)("inlineCode",{parentName:"a"},"map()")),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/match-for-each"},(0,o.kt)("inlineCode",{parentName:"a"},"forEach()")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"filter()"),", etc."),(0,o.kt)("p",null,"Right now any chainable method in T-Regx is also iterate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"foreach (pattern('\\d+')->match('127.0.0.1') as $match) {\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"foreach (pattern('\\d+')->match('127.0.0.1')->asInt() as $digit) {\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"foreach (pattern('\\d+')->match('127.0.0.1')->all() as $text) {\n")),(0,o.kt)("h3",{id:"shorthand-method"},"Shorthand method"),(0,o.kt)("p",null,"In addition to previous release, when we added ",(0,o.kt)("inlineCode",{parentName:"p"},"asArray()")," method, we also added a shorthand ",(0,o.kt)("inlineCode",{parentName:"p"},"get()")," method for\ncapturing groups."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pattern('(origin/)?master')->match('master')->first(function (Match $match) {\n    $match->get(1); // same as $match->group(1)->text();\n});\n")))}s.isMDXComponent=!0}}]);