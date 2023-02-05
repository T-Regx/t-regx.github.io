"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8068],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),i=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(a),d=n,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(h,c(c({ref:t},s),{},{components:a})):r.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:n,c[1]=p;for(var i=2;i<l;i++)c[i]=a[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},92:(e,t,a)=>{a.d(t,{x:()=>o});var r=a(7294),n=a(5558);const l="code_JkvM",c=function(e){var t=e.children,a=e.language;return r.createElement("div",{className:l},r.createElement(n.Z,{className:"language-"+(a||"php")},function(e){if("string"==typeof e)return e;if(!Array.isArray(e))throw console.log(this.props.children),"Unexpected child of <Code>";if(e.every((function(e){return"string"==typeof e})))return e.join("")}(t)))};const p="result_6Tn1",o=function(e){var t=e.text,a=e.children;return r.createElement("div",{className:p},r.createElement(c,{language:t?"text":"php"},a))}},448:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),c=a(92),p=["components"],o={id:"match-map",title:"Map occurrences"},i={unversionedId:"match-map",id:"match-map",isDocsHomePage:!1,title:"Map occurrences",description:"Mapping works a bit like a combination of [all()] and [forEach()]. It returns all matched elements, after",source:"@site/../docs/match-map.mdx",sourceDirName:".",slug:"/match-map",permalink:"/docs/match-map",version:"current",lastUpdatedAt:1675597644,formattedLastUpdatedAt:"2/5/2023",frontMatter:{id:"match-map",title:"Map occurrences"},sidebar:"docs",previous:{title:"Iterating matches",permalink:"/docs/match-for-each"},next:{title:"Map with keys (Flat map)",permalink:"/docs/match-flat-map"}},s=[{value:"Map matched occurrences",id:"map-matched-occurrences",children:[]},{value:"Variable callbacks",id:"variable-callbacks",children:[]},{value:"Arbitrary return types",id:"arbitrary-return-types",children:[]},{value:"<code>flatMap()</code>",id:"flatmap",children:[]}],m={toc:s},u="wrapper";function d(e){var t=e.components,a=(0,n.Z)(e,p);return(0,l.kt)(u,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Mapping works a bit like a combination of ",(0,l.kt)("a",{parentName:"p",href:"/docs/match#many"},(0,l.kt)("inlineCode",{parentName:"a"},"all()"))," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/match-for-each"},(0,l.kt)("inlineCode",{parentName:"a"},"forEach()")),". It returns all matched elements, after\nthey have been iterated (and potentially altered) using ",(0,l.kt)("inlineCode",{parentName:"p"},"map()")," callback (which accepts ",(0,l.kt)("a",{parentName:"p",href:"/docs/match-details"},(0,l.kt)("inlineCode",{parentName:"a"},"Detail"))," details)."),(0,l.kt)("h2",{id:"map-matched-occurrences"},"Map matched occurrences"),(0,l.kt)("p",null,"So instead of returning all elements:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'pattern("[\\w\']+")->search("I\'m 19 years old")->all();\n')),(0,l.kt)(c.x,{mdxType:"Result"},"[\"I'm\", '19', 'years', 'old']"),(0,l.kt)("p",null,"...you can map them - to any other value, by callback:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'pattern("[\\\\w\']+")->match("I\'m 19 years old")->map(function (Detail $detail) {\n    return strLen($detail->text());\n});\n')),(0,l.kt)(c.x,{mdxType:"Result"},"[3, 2, 5, 3]"),(0,l.kt)("h2",{id:"variable-callbacks"},"Variable callbacks"),(0,l.kt)("p",null,"You can invoke ",(0,l.kt)("inlineCode",{parentName:"p"},"map()")," with any valid PHP ",(0,l.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/language.types.callable.php"},(0,l.kt)("inlineCode",{parentName:"a"},"callable"))," which accepts one\nstring parameter (or no parameters) - just like ",(0,l.kt)("a",{parentName:"p",href:"/docs/match-first"},(0,l.kt)("inlineCode",{parentName:"a"},"first()")),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"pattern(\"[\\w']+\")->match(\"I'm 19 years old\")->map('strToUpper');\n")),(0,l.kt)(c.x,{mdxType:"Result"},'["I\'M", "19", "YEARS", "OLD"]'),(0,l.kt)("h2",{id:"arbitrary-return-types"},"Arbitrary return types"),(0,l.kt)("p",null,"Again, just like ",(0,l.kt)("a",{parentName:"p",href:"/docs/match-first"},(0,l.kt)("inlineCode",{parentName:"a"},"first()")),", this method can return values of any type, including: objects, arrays,\nbooleans and ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"pattern(\"[\\w']+\")->match(\"I'm 19 years old\")->map('str_split');\n")),(0,l.kt)(c.x,{mdxType:"Result"},"[ ['I', '\\'', 'm'], ['1', '9'], ['y', 'e', 'a', 'r', 's'], ['o', 'l', 'd'] ]"),(0,l.kt)("h2",{id:"flatmap"},(0,l.kt)("inlineCode",{parentName:"h2"},"flatMap()")),(0,l.kt)("p",null,"You can just as easily create a flattened map."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"pattern(\"[\\w']+\")->match(\"I'm 19 years old\")->flatMap('str_split');\n")),(0,l.kt)(c.x,{mdxType:"Result"},"['I', '\\'', 'm', '1', '9', 'y', 'e', 'a', 'r', 's', 'o', 'l', 'd']"),(0,l.kt)("p",null,"Read more about ",(0,l.kt)("a",{parentName:"p",href:"/docs/match-flat-map"},(0,l.kt)("inlineCode",{parentName:"a"},"flatMap()"))," on the next page."))}d.isMDXComponent=!0}}]);