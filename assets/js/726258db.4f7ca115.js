"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2309],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,A=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(A,i(i({ref:t},u),{},{components:r})):n.createElement(A,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7726:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={id:"installation",title:"Installation"},l={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"T-Regx recommended way of installation is using Composer.",source:"@site/../docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",version:"current",lastUpdatedAt:1663873231,formattedLastUpdatedAt:"9/22/2022",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"What's T-Regx?",permalink:"/docs/overview"},next:{title:"Start with SafeRegex",permalink:"/docs/introduction-safe"}},s=[{value:"PHP 7.1 and later",id:"php-71-and-later",children:[]},{value:"Try T-Regx online (repl.it)",id:"try-t-regx-online-replit",children:[]},{value:"Install composer",id:"install-composer",children:[]}],u={toc:s};function c(e){var t=e.components,p=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"T-Regx recommended way of installation is using ",(0,o.kt)("a",{href:"https://packagist.org/packages/rawr/t-regx",target:"_blank"},"Composer"),"."),(0,o.kt)("h2",{id:"php-71-and-later"},"PHP 7.1 and later"),(0,o.kt)("p",null,"The installation of T-Regx is really simple - just add a composer dependency:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"composer require rawr/t-regx\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#install-composer"},'Scroll to "How to install Composer"')),(0,o.kt)("h2",{id:"try-t-regx-online-replit"},"Try T-Regx online (repl.it)"),(0,o.kt)("p",null,"Before you install, you can try T-Regx online, right in your browser. "),(0,o.kt)("p",null,"Just visit ",(0,o.kt)("a",{parentName:"p",href:"https://repl.it/github/T-Regx/fiddle"},"T-Regx on repl.it"),', and when it boots up (after about 4 seconds), just click "Run" at the top.'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://repl.it/github/T-Regx/fiddle"},(0,o.kt)("img",{alt:"repl.it example",src:r(8326).Z}))),(0,o.kt)("p",null,"You can log in to ",(0,o.kt)("a",{parentName:"p",href:"https://repl.it/github/T-Regx/fiddle"},"repl.it")," with Github account, Google account, Facebook account or regular credentials."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://repl.it/github/T-Regx/fiddle"},(0,o.kt)("img",{alt:"repl.it login",src:r(5005).Z}))),(0,o.kt)("p",null,"There are two files in the fiddle: You can edit ",(0,o.kt)("inlineCode",{parentName:"p"},"EDIT_HERE.php")," as you please;\n",(0,o.kt)("inlineCode",{parentName:"p"},"EXAMPLES.php")," contains many basic and complicated examples of T-Regx."),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://repl.it/github/T-Regx/fiddle"},"repl.it")," and run the ",(0,o.kt)("inlineCode",{parentName:"p"},"EXAMPLES.php")," or your file in ",(0,o.kt)("inlineCode",{parentName:"p"},"EDIT_HERE.php"),":"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://repl.it/github/T-Regx/fiddle"},(0,o.kt)("img",{alt:"repl.it login",src:r(4108).Z}))),(0,o.kt)("h2",{id:"install-composer"},"Install composer"),(0,o.kt)("p",null,"You can either download an executable setup from ",(0,o.kt)("a",{parentName:"p",href:"https://getcomposer.org/download/"},"https://getcomposer.org/download/"),", or use a script to download it,\nright from your terminal (Windows and Unix)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"php -r \"copy('https://getcomposer.org/installer', 'composer-setup.php');\"\nphp composer-setup.php\nphp -r \"unlink('composer-setup.php');\"\n")),(0,o.kt)("p",null,"Once downloaded, install T-Regx."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"php composer.phar require rawr/t-regx\n")))}c.isMDXComponent=!0},8326:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/replit.example-86362b819ba5287339dd34ac08c58916.png"},5005:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},4108:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAAxCAMAAAAWYYxlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABpUExURf////X19e3t7enp6fz8/PHx8fPz8+/v79np3bHavNbo2zSpUyGiQ6HTrr7fx1a2b7ndwyqlSy6nTorLm+Tt50ixY3zFkDusWVu5dHHBhnDAhebu6Mvk0i2nTW/AhTusWIrKm1W2blK1bPQaSTcAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAESSURBVFhH7ZjbDoIwDIahiKBWVNwUz4f3f0i3UQkRmE1wuzD7rvpDsi9rgYRFnoghcQLEJJgApFMnpAATo4CMrjggA22IgaITTK9cdakm1dtIKDgiCQoeQcEkKJgEBZORinxGhQW7Yr5AzZJilwJXOZWDfFPo1debQUeBWG6pHoKjEHJXxy5KgbgvKPXDVQipq6pSxUEiVuY2KRCPJ8p9cBTLzbqtUKlpHSmwPNe5D+64WwrdNVUY3oqLZejfdyGkXs6uuI5slO6TVXEbPW6zjWbljuJyr8tBuOOeVlKoKXcVj5+8ekKq5YV6VOXzU3Ea/QH5CUHBJCiYBAWT/1F4+GP18N/t4fTAxxmIh5Mct0TRCxgLb8Goq3GDAAAAAElFTkSuQmCC"}}]);