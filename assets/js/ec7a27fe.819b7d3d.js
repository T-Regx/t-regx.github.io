"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,p(p({ref:t},s),{},{components:n})):r.createElement(h,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2964:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],i={title:"Release 0.9.4 - Exception changes and groupBy()",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},c={permalink:"/blog/2020/02/28/release-0.9.4",source:"@site/blog/2020-02-28-release-0.9.4.md",title:"Release 0.9.4 - Exception changes and groupBy()",description:"This release brings updates in exceptions (namespaces, new detailed exceptions) and a groupBy() method.",date:"2020-02-28T00:00:00.000Z",formattedDate:"February 28, 2020",tags:[],readingTime:1.06,truncated:!1,prevItem:{title:"Release 0.9.5 - Alternation in prepared patterns!",permalink:"/blog/2020/03/15/release-0.9.5"},nextItem:{title:"Release 0.9.3 - Minor changes",permalink:"/blog/2020/02/22/release-0.9.3"}},l=[{value:"Exceptions",id:"exceptions",children:[]},{value:"New method <code>groupBy()</code>",id:"new-method-groupby",children:[]}],s={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This release brings updates in exceptions (namespaces, new detailed exceptions) and a ",(0,o.kt)("inlineCode",{parentName:"p"},"groupBy()")," method."),(0,o.kt)("h3",{id:"exceptions"},"Exceptions"),(0,o.kt)("p",null,"In previous release we renamed ",(0,o.kt)("inlineCode",{parentName:"p"},"SafeRegexException")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"PregException"),". In this, we're renaming ",(0,o.kt)("inlineCode",{parentName:"p"},"CleanRegexException")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"PatternException"),". So now, those two general exceptions sync nicely with their base methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"try {\n  return preg::match('/Foo/', $subject);\n} catch (PregException $e) {\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"try {\n  return pattern('Foo')->test($subject);\n} catch (PatternException $e) {\n")),(0,o.kt)("p",null,"They both extend ",(0,o.kt)("inlineCode",{parentName:"p"},"RegexException")," - base for all exceptions thrown by T-Regx. So that's the first thing."),(0,o.kt)("p",null,"The second exception update - previously, every exception thrown based on ",(0,o.kt)("inlineCode",{parentName:"p"},"preg_last_error()")," method was ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimePregException"),". Now, each error has a dedicated exception, which can be caught separately:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"try {\n  return preg::match($pattern, $subject);\n} catch (BacktrackLimitPregException $exception) {\n} catch (Utf8OffsetPregException $exception) {\n")),(0,o.kt)("p",null,"The detailed list of changes is in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/T-Regx/T-Regx/blob/develop/ChangeLog.md"},"ChangeLog.md"),"."),(0,o.kt)("h3",{id:"new-method-groupby"},"New method ",(0,o.kt)("inlineCode",{parentName:"h3"},"groupBy()")),(0,o.kt)("p",null,"This release also comes with a brand new method - ",(0,o.kt)("inlineCode",{parentName:"p"},"groupBy()")," which groups matches by a capturing group (name or index). It can match strings, offsets and also map them with ",(0,o.kt)("inlineCode",{parentName:"p"},"map()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"flatMap()"),". Additionally, it can be chained with ",(0,o.kt)("inlineCode",{parentName:"p"},"filter()")," to leave out unwanted matches:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"return pattern('(\\d)(?<unit>cm|mm)')->match($strings)\n  ->filter(function (Match $match) {\n    return $match->group(1)->toInt() % 2 == 0;\n  })\n  ->groupBy('unit')\n  ->map(function (Match $match) {\n    return $match->group(1)->toInt() * 100;\n  });\n")))}u.isMDXComponent=!0}}]);