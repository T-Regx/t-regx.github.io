"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1755:(e,t,n)=>{n.d(t,{O2:()=>h,x4:()=>g});var r=n(7294),a=n(944),l=n(6010);const i="tabItem_vU9c",c="tabItemActive_cw6a";var o=37,p=39;const s=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,u=e.values,m=e.groupId,d=e.className,f=(0,a.Z)(),h=f.tabGroupChoices,v=f.setTabGroupChoices,b=(0,r.useState)(s),g=b[0],y=b[1],k=r.Children.toArray(e.children),w=[];if(null!=m){var _=h[m];null!=_&&_!==g&&u.some((function(e){return e.value===_}))&&y(_)}var N=function(e){var t=e.currentTarget,n=w.indexOf(t),r=u[n].value;y(r),null!=m&&(v(m,r),setTimeout((function(){var e,n,r,a,l,i,o,p;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,l=e.right,i=window,o=i.innerHeight,p=i.innerWidth,n>=0&&l<=p&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case p:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case o:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:N,onClick:N},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))};const u=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)};var m=n(5558);const d="code_JkvM",f=function(e){var t=e.children,n=e.language;return r.createElement("div",{className:d},r.createElement(m.Z,{className:"language-"+(n||"php")},function(e){if("string"==typeof e)return e;if(!Array.isArray(e))throw console.log(this.props.children),"Unexpected child of <Code>";if(e.every((function(e){return"string"==typeof e})))return e.join("")}(t)))};const h=function(e){var t=e.tregx,n=e.php;return r.createElement(s,{defaultValue:"t-regx",values:v(t,n)},t&&r.createElement(u,{value:"t-regx"},r.createElement(f,null,t)),n&&r.createElement(u,{value:"php"},r.createElement(f,null,n)))};function v(e,t){return[e?{label:"T-Regx",value:"t-regx"}:{},t?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}const b="result_6Tn1",g=function(e){var t=e.text,n=e.children;return r.createElement("div",{className:b},r.createElement(f,{language:t?"text":"php"},n))}},1597:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=n(1755),c=["components"],o={id:"replace",title:"Replacing a string"},p={unversionedId:"replace",id:"replace",isDocsHomePage:!1,title:"Replacing a string",description:"Using pattern()->replace() you can:",source:"@site/../docs/replace.mdx",sourceDirName:".",slug:"/replace",permalink:"/docs/replace",version:"current",lastUpdatedAt:1663873231,formattedLastUpdatedAt:"9/22/2022",frontMatter:{id:"replace",title:"Replacing a string"},sidebar:"docs",previous:{title:"Handling integers",permalink:"/docs/match-as-int"},next:{title:"Replace with a constant value",permalink:"/docs/replace-with"}},s=[{value:"Limiting replacements",id:"limiting-replacements",children:[]}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"pattern()->replace()")," you can:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Limit replacements with:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replace()->first()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replace()->all()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replace()->only(int)")))),(0,l.kt)("li",{parentName:"ul"},"replace with a constant value - ",(0,l.kt)("a",{parentName:"li",href:"/docs/replace-with"},(0,l.kt)("inlineCode",{parentName:"a"},"with()")),"/",(0,l.kt)("a",{parentName:"li",href:"/docs/replace-with"},(0,l.kt)("inlineCode",{parentName:"a"},"withReferences()"))),(0,l.kt)("li",{parentName:"ul"},"replace with a computed value - ",(0,l.kt)("a",{parentName:"li",href:"/docs/replace-callback"},(0,l.kt)("inlineCode",{parentName:"a"},"callback()"))),(0,l.kt)("li",{parentName:"ul"},"handle subjects that don't match the pattern for replacements - ",(0,l.kt)("inlineCode",{parentName:"li"},"otherwise()"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"throwingOtherwise()"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"returningOtherwise()"))),(0,l.kt)("h2",{id:"limiting-replacements"},"Limiting replacements"),(0,l.kt)("p",null,"After ",(0,l.kt)("inlineCode",{parentName:"p"},"replace()"),", you need to explicitly use one of ",(0,l.kt)("inlineCode",{parentName:"p"},"first()"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"all()"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"only(int)")," methods, to express how many\nreplacements should be done."),(0,l.kt)(i.O2,{tregx:'$subject = "I\'m 19, I have 192cm and I was born in 1999";\n\npattern("\\d+")->replace($subject)->first()->with("___");\npattern("\\d+")->replace($subject)->only(2)->with("___");\npattern("\\d+")->replace($subject)->all()->with("___");',php:'$subject = "I\'m 19, I have 192cm and I was born in 1999";\n\npreg_replace("/\\d+/", "___", $subject, 1);\npreg_replace("/\\d+/", "___", $subject, 2);\npreg_replace("/\\d+/", "___", $subject);',mdxType:"CodeTabs"}),(0,l.kt)(i.x4,{mdxType:"Result"},'"I\'m ___, I have 192cm and I was born in 1999"\n"I\'m ___, I have ___cm and I was born in 1999"\n"I\'m ___, I have ___cm and I was born in ___"'),(0,l.kt)("p",null,"Read on to learn more about replacing with ",(0,l.kt)("a",{parentName:"p",href:"/docs/replace-with"},"a constant value"),"."))}m.isMDXComponent=!0}}]);