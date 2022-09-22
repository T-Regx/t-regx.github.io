"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7323],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1755:(e,t,r)=>{r.d(t,{O2:()=>y,x4:()=>b});var n=r(7294),a=r(944),l=r(6010);const i="tabItem_vU9c",o="tabItemActive_cw6a";var c=37,s=39;const u=function(e){var t=e.lazy,r=e.block,u=e.defaultValue,p=e.values,d=e.groupId,f=e.className,m=(0,a.Z)(),y=m.tabGroupChoices,v=m.setTabGroupChoices,g=(0,n.useState)(u),b=g[0],h=g[1],x=n.Children.toArray(e.children),O=[];if(null!=d){var E=y[d];null!=E&&E!==b&&p.some((function(e){return e.value===E}))&&h(E)}var T=function(e){var t=e.currentTarget,r=O.indexOf(t),n=p[r].value;h(n),null!=d&&(v(d,n),setTimeout((function(){var e,r,n,a,l,i,c,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,l=e.right,i=window,c=i.innerHeight,s=i.innerWidth,r>=0&&l<=s&&a<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},k=function(e){var t,r;switch(e.keyCode){case s:var n=O.indexOf(e.target)+1;r=O[n]||O[0];break;case c:var a=O.indexOf(e.target)-1;r=O[a]||O[O.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},f)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:k,onFocus:T,onClick:T},r)}))),t?(0,n.cloneElement)(x.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))};const p=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)};var d=r(5558);const f="code_JkvM",m=function(e){var t=e.children,r=e.language;return n.createElement("div",{className:f},n.createElement(d.Z,{className:"language-"+(r||"php")},function(e){if("string"==typeof e)return e;if(!Array.isArray(e))throw console.log(this.props.children),"Unexpected child of <Code>";if(e.every((function(e){return"string"==typeof e})))return e.join("")}(t)))};const y=function(e){var t=e.tregx,r=e.php;return n.createElement(u,{defaultValue:"t-regx",values:v(t,r)},t&&n.createElement(p,{value:"t-regx"},n.createElement(m,null,t)),r&&n.createElement(p,{value:"php"},n.createElement(m,null,r)))};function v(e,t){return[e?{label:"T-Regx",value:"t-regx"}:{},t?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}const g="result_6Tn1",b=function(e){var t=e.text,r=e.children;return n.createElement("div",{className:g},n.createElement(m,{language:t?"text":"php"},r))}},1882:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i=r(1755),o=["components"],c={id:"split",title:"Split a string",hide_table_of_contents:!0},s={unversionedId:"split",id:"split",isDocsHomePage:!1,title:"Split a string",description:"T-Regx also allows to split a string by regular expression.",source:"@site/../docs/split.mdx",sourceDirName:".",slug:"/split",permalink:"/docs/split",version:"current",lastUpdatedAt:1663873231,formattedLastUpdatedAt:"9/22/2022",frontMatter:{id:"split",title:"Split a string",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Count occurrences",permalink:"/docs/count"},next:{title:"Filter an array",permalink:"/docs/filter"}},u=[{value:"Including the delimiter",id:"including-the-delimiter",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"T-Regx also allows to split a string by regular expression."),(0,l.kt)(i.O2,{tregx:"pattern('[ ,]{2}')->split('Joffrey, Cersei, Ilyn Payne, The Hound');",php:"preg::split('/[ ,]{2}/', 'Joffrey, Cersei, Ilyn Payne, The Hound');",mdxType:"CodeTabs"}),(0,l.kt)(i.x4,{mdxType:"Result"},"['Joffrey', 'Cersei', 'Ilyn Payne', 'The Hound']"),(0,l.kt)("h2",{id:"including-the-delimiter"},"Including the delimiter"),(0,l.kt)("p",null,"To include a delimiter in the results, enclose it with a capturing group."),(0,l.kt)(i.O2,{tregx:"pattern('([ ,]{2})')->split('Joffrey, Cersei, Ilyn Payne');",php:"preg::split('/([ ,]{2})/', 'Joffrey, Cersei, Ilyn Payne', -1, PREG_SPLIT_DELIM_CAPTURE);",mdxType:"CodeTabs"}),(0,l.kt)(i.x4,{mdxType:"Result"},"['Joffrey', ', ', 'Cersei', ', ', 'Ilyn Payne']"))}d.isMDXComponent=!0}}]);