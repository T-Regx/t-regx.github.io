"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8823],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,d=m["".concat(i,".").concat(u)]||m[u]||h[u]||c;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<c;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1755:(e,t,a)=>{a.d(t,{O2:()=>f,x4:()=>y});var n=a(7294),r=a(944),c=a(6010);const o="tabItem_vU9c",l="tabItemActive_cw6a";var i=37,s=39;const p=function(e){var t=e.lazy,a=e.block,p=e.defaultValue,h=e.values,m=e.groupId,u=e.className,d=(0,r.Z)(),f=d.tabGroupChoices,v=d.setTabGroupChoices,g=(0,n.useState)(p),y=g[0],b=g[1],k=n.Children.toArray(e.children),x=[];if(null!=m){var O=f[m];null!=O&&O!==y&&h.some((function(e){return e.value===O}))&&b(O)}var w=function(e){var t=e.currentTarget,a=x.indexOf(t),n=h[a].value;b(n),null!=m&&(v(m,n),setTimeout((function(){var e,a,n,r,c,o,i,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,c=e.right,o=window,i=o.innerHeight,s=o.innerWidth,a>=0&&c<=s&&r<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},E=function(e){var t,a;switch(e.keyCode){case s:var n=x.indexOf(e.target)+1;a=x[n]||x[0];break;case i:var r=x.indexOf(e.target)-1;a=x[r]||x[x.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":a},u)},h.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,c.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:E,onFocus:w,onClick:w},a)}))),t?(0,n.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))};const h=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)};var m=a(5558);const u="code_JkvM",d=function(e){var t=e.children,a=e.language;return n.createElement("div",{className:u},n.createElement(m.Z,{className:"language-"+(a||"php")},function(e){if("string"==typeof e)return e;if(!Array.isArray(e))throw console.log(this.props.children),"Unexpected child of <Code>";if(e.every((function(e){return"string"==typeof e})))return e.join("")}(t)))};const f=function(e){var t=e.tregx,a=e.php;return n.createElement(p,{defaultValue:"t-regx",values:v(t,a)},t&&n.createElement(h,{value:"t-regx"},n.createElement(d,null,t)),a&&n.createElement(h,{value:"php"},n.createElement(d,null,a)))};function v(e,t){return[e?{label:"T-Regx",value:"t-regx"}:{},t?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}const g="result_6Tn1",y=function(e){var t=e.text,a=e.children;return n.createElement("div",{className:g},n.createElement(d,{language:t?"text":"php"},a))}},7110:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=a(3366),c=(a(7294),a(3905)),o=a(1755),l=["components"],i={id:"match-for-each",title:"Iterate matches (For each)"},s={unversionedId:"match-for-each",id:"match-for-each",isDocsHomePage:!1,title:"Iterate matches (For each)",description:"Use forEach() to easily iterate matched occurrences with your callback. You can call forEach() with a callback,",source:"@site/../docs/match-for-each.mdx",sourceDirName:".",slug:"/match-for-each",permalink:"/docs/match-for-each",version:"current",lastUpdatedAt:1663873231,formattedLastUpdatedAt:"9/22/2022",frontMatter:{id:"match-for-each",title:"Iterate matches (For each)"},sidebar:"docs",previous:{title:"Optional matches (Find first)",permalink:"/docs/match-find-first"},next:{title:"Map occurrences",permalink:"/docs/match-map"}},p=[{value:"Vanilla PHP <code>foreach</code>",id:"vanilla-php-foreach",children:[]}],h={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,c.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Use ",(0,c.kt)("inlineCode",{parentName:"p"},"forEach()")," to easily iterate matched occurrences with your callback. You can call ",(0,c.kt)("inlineCode",{parentName:"p"},"forEach()")," with a callback,\nthat's invoked with ",(0,c.kt)("a",{parentName:"p",href:"/docs/match-details"},(0,c.kt)("inlineCode",{parentName:"a"},"Detail")),"."),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"forEach()")," is identical to simply iterating the matcher."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-php"},"$matcher = Pattern::of('\\w+')->match('I like trains');\n\nforeach ($matcher as $detail) {\n    // use detail\n}\n")),(0,c.kt)(o.O2,{tregx:"// highlight-next-line\npattern('\\w+')->match('Apples are cool')->forEach(function (Detail $match) {\n    echo \"I matched $match, \";\n});",php:"// highlight-next-line\npreg::match_all('/\\w+/', 'Apples are cool', $matches);\n// highlight-next-line\narray_map(function (string $text) {\n    echo \"I matched $text, \";\n}, $matches[0]);",mdxType:"CodeTabs"}),(0,c.kt)(o.x4,{text:!0,mdxType:"Result"},"I matched Apples, I matched are, I matched cool, "),(0,c.kt)("p",null,"Using ",(0,c.kt)("a",{parentName:"p",href:"/docs/match-details"},(0,c.kt)("inlineCode",{parentName:"a"},"Detail"))," you can get detailed information such as ",(0,c.kt)("a",{parentName:"p",href:"/docs/match-details#offsets"},(0,c.kt)("inlineCode",{parentName:"a"},"offset()")),", ",(0,c.kt)("a",{parentName:"p",href:"/docs/match-details#ordinal-value-index"},(0,c.kt)("inlineCode",{parentName:"a"},"index()"))," etc."),(0,c.kt)("h2",{id:"vanilla-php-foreach"},"Vanilla PHP ",(0,c.kt)("inlineCode",{parentName:"h2"},"foreach")),(0,c.kt)("p",null,"You can also use the result of ",(0,c.kt)("inlineCode",{parentName:"p"},"pattern()->match()")," directly in PHP ",(0,c.kt)("inlineCode",{parentName:"p"},"foreach")," loop."),(0,c.kt)(o.O2,{tregx:"// highlight-next-line\nforeach (pattern('\\w+')->match('Apples are cool') as $match) {\n    echo \"I matched \" . $match->text() . \", \";\n};",php:"// highlight-next-line\npreg::match_all('/\\w+/', 'Apples are cool', $matches);\n// highlight-next-line\nforeach ($matches[0] as $text) {\n    echo \"I matched $text, \";\n}",mdxType:"CodeTabs"}),(0,c.kt)(o.x4,{text:!0,mdxType:"Result"},"I matched Apples, I matched are, I matched cool, "))}m.isMDXComponent=!0}}]);