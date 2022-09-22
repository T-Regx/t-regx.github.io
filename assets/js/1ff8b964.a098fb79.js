"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5193:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Implicit all() in replace()",author:"Daniel Wilkowski"},p={permalink:"/blog/2021/03/06/release-0.10.2",source:"@site/blog/2021-03-06-release-0.10.2.md",title:"Implicit all() in replace()",description:"Rawwrrrr!",date:"2021-03-06T00:00:00.000Z",formattedDate:"March 6, 2021",tags:[],readingTime:1.055,truncated:!1,prevItem:{title:"Templates and builders",permalink:"/blog/2021/05/11/release-0.11.0"},nextItem:{title:"Valentine's release",permalink:"/blog/2021/02/14/release-0.10.1"}},c=[],s={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Rawwrrrr!"),(0,l.kt)("p",null,"We've release T-Regx ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/T-Regx/T-Regx/releases/tag/v0.10.2"},"0.10.2"),"."),(0,l.kt)("p",null,"Normally, when doing replacements, you always had to specify explicitly the number of them, so:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replace()->all()->with()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replace()->first()->by()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replace()->only(2)->focus()"))),(0,l.kt)("p",null,"Since ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/T-Regx/T-Regx/releases/tag/v0.10.2"},"0.10.2"),", you can skip the quantifier, and just use ",(0,l.kt)("inlineCode",{parentName:"p"},"with()"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"callback()"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"by()"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"focus()")," or\nany other replace methods, like so:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replace()->with()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replace()->by()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replace()->focus()"))),(0,l.kt)("p",null,"And they will replace every occurrence, just like ",(0,l.kt)("inlineCode",{parentName:"p"},"all()"),"."),(0,l.kt)("p",null,"Don't worry, we don't use any kind of meta-programing with magic methods or anything. We used simple\npolymorphism and design patterns (delegation and adapter in this case), so if you\nclick ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl"),"+",(0,l.kt)("inlineCode",{parentName:"p"},"B"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"Go to declaration")," in your IDE, you will see exactly what code is being run."),(0,l.kt)("p",null,"Additionally, we customized some exceptions messages. Now, depending on the nature of your exception,\nyou will see one of these additional exception messages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Expected to get the 3-nth element from fluent pattern, but the subject backing the feed was not matched")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Expected to get the first match as integer, but subject was not matched")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Expected to get the first element from fluent pattern, but the elements feed has 0 element(s)")),(0,l.kt)("li",{parentName:"ul"},"and more. You can see them all on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/T-Regx/T-Regx/tree/master/src/CleanRegex/Internal/Exception/Messages"},"github in /CleanRegex/Internal/Exception/Messages"))),(0,l.kt)("p",null,"As always, everything is described in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/T-Regx/T-Regx/blob/develop/ChangeLog.md"},"ChangeLog.md")," on github."))}u.isMDXComponent=!0}}]);