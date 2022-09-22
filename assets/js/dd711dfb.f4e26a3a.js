"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8068],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return a?r.createElement(h,c(c({ref:t},s),{},{components:a})):r.createElement(h,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<l;p++)c[p]=a[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1755:(e,t,a)=>{a.d(t,{O2:()=>f,x4:()=>v});var r=a(7294),n=a(944),l=a(6010);const c="tabItem_vU9c",o="tabItemActive_cw6a";var i=37,p=39;const s=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,m=e.values,u=e.groupId,d=e.className,h=(0,n.Z)(),f=h.tabGroupChoices,y=h.setTabGroupChoices,b=(0,r.useState)(s),v=b[0],k=b[1],g=r.Children.toArray(e.children),x=[];if(null!=u){var w=f[u];null!=w&&w!==v&&m.some((function(e){return e.value===w}))&&k(w)}var O=function(e){var t=e.currentTarget,a=x.indexOf(t),r=m[a].value;k(r),null!=u&&(y(u,r),setTimeout((function(){var e,a,r,n,l,c,i,p;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,l=e.right,c=window,i=c.innerHeight,p=c.innerWidth,a>=0&&l<=p&&n<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},N=function(e){var t,a;switch(e.keyCode){case p:var r=x.indexOf(e.target)+1;a=x[r]||x[0];break;case i:var n=x.indexOf(e.target)-1;a=x[n]||x[x.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},m.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":v===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:N,onFocus:O,onClick:O},a)}))),t?(0,r.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))};const m=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)};var u=a(5558);const d="code_JkvM",h=function(e){var t=e.children,a=e.language;return r.createElement("div",{className:d},r.createElement(u.Z,{className:"language-"+(a||"php")},function(e){if("string"==typeof e)return e;if(!Array.isArray(e))throw console.log(this.props.children),"Unexpected child of <Code>";if(e.every((function(e){return"string"==typeof e})))return e.join("")}(t)))};const f=function(e){var t=e.tregx,a=e.php;return r.createElement(s,{defaultValue:"t-regx",values:y(t,a)},t&&r.createElement(m,{value:"t-regx"},r.createElement(h,null,t)),a&&r.createElement(m,{value:"php"},r.createElement(h,null,a)))};function y(e,t){return[e?{label:"T-Regx",value:"t-regx"}:{},t?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}const b="result_6Tn1",v=function(e){var t=e.text,a=e.children;return r.createElement("div",{className:b},r.createElement(h,{language:t?"text":"php"},a))}},448:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),c=a(1755),o=["components"],i={id:"match-map",title:"Map occurrences"},p={unversionedId:"match-map",id:"match-map",isDocsHomePage:!1,title:"Map occurrences",description:"Mapping works a bit like a combination of [all()] and [forEach()]. It returns all matched elements, after",source:"@site/../docs/match-map.mdx",sourceDirName:".",slug:"/match-map",permalink:"/docs/match-map",version:"current",lastUpdatedAt:1663873231,formattedLastUpdatedAt:"9/22/2022",frontMatter:{id:"match-map",title:"Map occurrences"},sidebar:"docs",previous:{title:"Iterate matches (For each)",permalink:"/docs/match-for-each"},next:{title:"Map with keys (Flat map)",permalink:"/docs/match-flat-map"}},s=[{value:"Map matched occurrences",id:"map-matched-occurrences",children:[]},{value:"Variable callbacks",id:"variable-callbacks",children:[]},{value:"Arbitrary return types",id:"arbitrary-return-types",children:[]},{value:"<code>flatMap()</code>",id:"flatmap",children:[]}],m={toc:s};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Mapping works a bit like a combination of ",(0,l.kt)("a",{parentName:"p",href:"/docs/match#many"},(0,l.kt)("inlineCode",{parentName:"a"},"all()"))," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/match-for-each"},(0,l.kt)("inlineCode",{parentName:"a"},"forEach()")),". It returns all matched elements, after\nthey have been iterated (and potentially altered) using ",(0,l.kt)("inlineCode",{parentName:"p"},"map()")," callback (which accepts ",(0,l.kt)("a",{parentName:"p",href:"/docs/match-details"},(0,l.kt)("inlineCode",{parentName:"a"},"Detail"))," details)."),(0,l.kt)("h2",{id:"map-matched-occurrences"},"Map matched occurrences"),(0,l.kt)("p",null,"So instead of returning all elements:"),(0,l.kt)(c.O2,{tregx:'pattern("[\\w\']+")->search("I\'m 19 years old")->all();',php:'preg::match_all("/[\\w\']+/", "I\'m 19 years old", $matches);\nreturn $matches[0];',mdxType:"CodeTabs"}),(0,l.kt)(c.x4,{mdxType:"Result"},"[\"I'm\", '19', 'years', 'old']"),(0,l.kt)("p",null,"...you can map them - to any other value, by callback:"),(0,l.kt)(c.O2,{tregx:'pattern("[\\w\']+")->match("I\'m 19 years old")->map(function (Detail $detail) {\n    return strLen($detail->text());\n});',php:'preg::match_all("/[\\w\']+/", "I\'m 19 years old", $matches);\nreturn array_map(function ($text) {\n    return strLen($text);\n}, $matches[0]);',mdxType:"CodeTabs"}),(0,l.kt)(c.x4,{mdxType:"Result"},"[3, 2, 5, 3]"),(0,l.kt)("h2",{id:"variable-callbacks"},"Variable callbacks"),(0,l.kt)("p",null,"You can invoke ",(0,l.kt)("inlineCode",{parentName:"p"},"map()")," with any valid PHP ",(0,l.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/language.types.callable.php"},(0,l.kt)("inlineCode",{parentName:"a"},"callable"))," which accepts one\nstring parameter (or no parameters) - just like ",(0,l.kt)("a",{parentName:"p",href:"/docs/match-first"},(0,l.kt)("inlineCode",{parentName:"a"},"first()")),"."),(0,l.kt)(c.O2,{tregx:"pattern(\"[\\w']+\")->match(\"I'm 19 years old\")->map('strToUpper');",php:"preg::match_all(\"/[\\w']+/\", \"I'm 19 years old\", $matches);\nreturn array_map('strToUpper', $matches[0]);",mdxType:"CodeTabs"}),(0,l.kt)(c.x4,{mdxType:"Result"},'["I\'M", "19", "YEARS", "OLD"]'),(0,l.kt)("h2",{id:"arbitrary-return-types"},"Arbitrary return types"),(0,l.kt)("p",null,"Again, just like ",(0,l.kt)("a",{parentName:"p",href:"/docs/match-first"},(0,l.kt)("inlineCode",{parentName:"a"},"first()")),", this method can return values of any type, including: objects, arrays,\nbooleans and ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)(c.O2,{tregx:"pattern(\"[\\w']+\")->match(\"I'm 19 years old\")->map('str_split');",php:"preg::match_all(\"/[\\w']+/\", \"I'm 19 years old\", $matches);\nreturn array_map('str_split', $matches[0]);",mdxType:"CodeTabs"}),(0,l.kt)(c.x4,{mdxType:"Result"},"[ ['I', '\\'', 'm'], ['1', '9'], ['y', 'e', 'a', 'r', 's'], ['o', 'l', 'd'] ]"),(0,l.kt)("h2",{id:"flatmap"},(0,l.kt)("inlineCode",{parentName:"h2"},"flatMap()")),(0,l.kt)("p",null,"You can just as easily create a flattened map."),(0,l.kt)(c.O2,{tregx:"pattern(\"[\\w']+\")->match(\"I'm 19 years old\")->flatMap('str_split');",php:"preg::match_all(\"/[\\w']+/\", \"I'm 19 years old\", $matches);\nreturn array_merge(...array_map('str_split', $matches[0]));",mdxType:"CodeTabs"}),(0,l.kt)(c.x4,{mdxType:"Result"},"['I', '\\'', 'm', '1', '9', 'y', 'e', 'a', 'r', 's', 'o', 'l', 'd']"),(0,l.kt)("p",null,"Read more about ",(0,l.kt)("a",{parentName:"p",href:"/docs/match-flat-map"},(0,l.kt)("inlineCode",{parentName:"a"},"flatMap()"))," on the next page."))}u.isMDXComponent=!0}}]);