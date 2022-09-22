"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1682:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"introduction-safe",title:"Start with SafeRegex"},p={unversionedId:"introduction-safe",id:"introduction-safe",isDocsHomePage:!1,title:"Start with SafeRegex",description:"Here are the absolute basics you need to get familiar with, before we can learn T-Regx.",source:"@site/../docs/introduction-safe.md",sourceDirName:".",slug:"/introduction-safe",permalink:"/docs/introduction-safe",version:"current",lastUpdatedAt:1663873231,formattedLastUpdatedAt:"9/22/2022",frontMatter:{id:"introduction-safe",title:"Start with SafeRegex"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Migrate to T-Regx",permalink:"/docs/introduction-clean"}},c=[{value:"Overview - T-Regx duality",id:"overview---t-regx-duality",children:[]},{value:"About SafeRegex",id:"about-saferegex",children:[]},{value:"What does SafeRegex do",id:"what-does-saferegex-do",children:[]},{value:"Mix and match",id:"mix-and-match",children:[]},{value:"Word about exceptions",id:"word-about-exceptions",children:[]},{value:"Final words",id:"final-words",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here are the absolute basics you need to get familiar with, before we can learn T-Regx."),(0,i.kt)("h2",{id:"overview---t-regx-duality"},"Overview - T-Regx duality"),(0,i.kt)("p",null,"When you add T-Regx to your project, you can actually choose the API, with which you are most comfortable."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SafeRegex")," - the wrapper on PCRE (making the ",(0,i.kt)("inlineCode",{parentName:"li"},"preg_")," methods throw exceptions)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CleanRegex")," - the higher-level API, build on top of ",(0,i.kt)("inlineCode",{parentName:"li"},"SafeRegex"),".")),(0,i.kt)("p",null,"You can work with either or both them in your project - they're both part of T-Regx."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We suggest, after installing T-Regx, to use SafeRegex everywhere you can (to protect yourself against obvious errors),\nand then gradually migrate from ",(0,i.kt)("inlineCode",{parentName:"p"},"preg::")," (SafeRegex) to ",(0,i.kt)("inlineCode",{parentName:"p"},"pattern()")," (CleanRegex)."))),(0,i.kt)("h2",{id:"about-saferegex"},"About SafeRegex"),(0,i.kt)("p",null,"With SafeRegex, you can safely replace every ",(0,i.kt)("inlineCode",{parentName:"p"},"preg_")," method with ",(0,i.kt)("inlineCode",{parentName:"p"},"preg::"),". It handles ",(0,i.kt)("strong",{parentName:"p"},"any possible")," ",(0,i.kt)("inlineCode",{parentName:"p"},"preg_"),"\nerror:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"runtime errors (malformed subject, malformed utf8), ",(0,i.kt)("inlineCode",{parentName:"li"},"preg_last_error()")," codes."),(0,i.kt)("li",{parentName:"ul"},"preg compile errors, preg syntax errors, warnings/notices with ",(0,i.kt)("inlineCode",{parentName:"li"},"error_get_last()"),"."),(0,i.kt)("li",{parentName:"ul"},"invalid input arguments, invalid callback return values."),(0,i.kt)("li",{parentName:"ul"},"Additionally, sometimes certain arguments  (like ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),") or other unexpected parameters cause ",(0,i.kt)("inlineCode",{parentName:"li"},"preg_")," to misbehave in strange ways. In those cases, SafeRegex also throws exceptions. "),(0,i.kt)("li",{parentName:"ul"},"Some arguments cause ",(0,i.kt)("inlineCode",{parentName:"li"},"preg_")," methods to throw fatal errors. SafeRegex handles them as well with a proper exception,\npreventing fatal errors.")),(0,i.kt)("p",null,"Anything! If something's not right with ",(0,i.kt)("inlineCode",{parentName:"p"},"preg_")," - SafeRegex will throw a proper exception, you can be sure of that). "),(0,i.kt)("p",null,"You should replace this code in your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'// highlight-next-line\nif (($result = preg_match(\'/^foo:\\d+$\', $string, $match)) !== false) {\n  if ($result) {\n    return $match[0];\n  }\n  return "no match";\n} else {\n    switch (preg_last_error()) {\n      case PREG_BAD_UTF8_ERROR:\n        return "utf8 error";\n      case PREG_BAD_UTF8_OFFSET_ERROR:\n        return "utf8 offset error";\n      case PREG_BACKTRACK_LIMIT_ERROR:\n        return "optimize your pattern";\n      case PREG_RECURSION_LIMIT_ERROR:\n        return "went a little too far, buddy";\n    }   \n}\n')),(0,i.kt)("p",null,"...with SafeRegex methods (which never return ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"null")," and map errors to exceptions):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use \\TRegx\\SafeRegex\\preg;\n\ntry {\n  // highlight-next-line\n  if (preg::match(\'/^foo:\\d+$\', $string, $match)) {\n    return $match[0];\n  }\n  return "no match";\n} \ncatch (SubjectEncodingPregException $exception) {\n  return "utf8 error";\n}\ncatch (Utf8OffsetPregException $exception) {\n  return "utf8 offset error";\n}\ncatch (CatastrophicBacktrackingPregException $exception) {\n  return "optimize your pattern";\n}\ncatch (RecursionLimitPregException $exception) {\n  return "went a little too far, buddy";\n}\ncatch (MalformedPatternException $exception) {\n  return "your pattern has a syntax error";\n  // this one is actually impossible to catch with traditional methods,\n  // but with T-Regx it\'s just as easy as any other \n}\n')),(0,i.kt)("p",null,"or just :)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'try {\n  // highlight-next-line\n  if (preg::match(\'/^foo:\\d+$\', $string, $match)) {\n    return $match[0];\n  }\n  return "no match";\n} \ncatch (PregException $exception) {\n  return "any kind of error, literally anything";\n}\n')),(0,i.kt)("p",null,"You don't need ",(0,i.kt)("inlineCode",{parentName:"p"},"!== false")," anymore, because ",(0,i.kt)("inlineCode",{parentName:"p"},"preg::match()")," never returns error-indicating values like\n",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,i.kt)("inlineCode",{parentName:"p"},'""')," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-1"),". Proper exception is throw in case of an error."),(0,i.kt)("p",null,"You don't need to call ",(0,i.kt)("inlineCode",{parentName:"p"},"preg_last_error()")," either, because in case of runtime errors/warnings, ",(0,i.kt)("inlineCode",{parentName:"p"},"preg::")," throws\nproper exceptions as well!"),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"preg_")," method (like ",(0,i.kt)("inlineCode",{parentName:"p"},"preg_replace()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"preg_split()"),") has its own SafeRegex wrapper (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"preg::replace()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"preg::split()"),", etc.)."),(0,i.kt)("h2",{id:"what-does-saferegex-do"},"What does SafeRegex do"),(0,i.kt)("p",null,"In fact, you should replace every ",(0,i.kt)("inlineCode",{parentName:"p"},"preg_match()")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"preg::match()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"preg_replace()"),"\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"preg::replace()"),", right away! It's very safe, since their APIs are exactly the same."),(0,i.kt)("p",null,"SafeRegex (",(0,i.kt)("inlineCode",{parentName:"p"},"preg::")," methods) is an exact copy of ",(0,i.kt)("inlineCode",{parentName:"p"},"preg_")," methods, but with additional safety features built-in."),(0,i.kt)("p",null,"Most importantly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On error, ",(0,i.kt)("inlineCode",{parentName:"li"},"preg_match()")," would return ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", and you need to use ",(0,i.kt)("inlineCode",{parentName:"li"},"preg_last_error()")," to see the error code.\n",(0,i.kt)("inlineCode",{parentName:"li"},"preg::match()"),", on the other hand, will throw a proper exception, depending on the nature of the error."),(0,i.kt)("li",{parentName:"ul"},"When building a pattern, PHP would raise a compile-time warning/error, which is impossible to try/catch or react to.\nSafeRegex will just throw ",(0,i.kt)("inlineCode",{parentName:"li"},"MalformedPatternException"),"."),(0,i.kt)("li",{parentName:"ul"},"When passing invalid arguments (",(0,i.kt)("inlineCode",{parentName:"li"},"null"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),", objects) by accident into some PCRE methods, you might actually\ncause a fatal error, that terminates the application. ",(0,i.kt)("inlineCode",{parentName:"li"},"preg::")," methods in any of those case will just throw\n",(0,i.kt)("inlineCode",{parentName:"li"},"InvalidReturnValueException"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preg_quote()")," quotes different characters on different PHP versions, whereas ",(0,i.kt)("inlineCode",{parentName:"li"},"preg::quote()")," works consistently everywhere."),(0,i.kt)("li",{parentName:"ul"},"Most of ",(0,i.kt)("inlineCode",{parentName:"li"},"preg_()")," methods ignore invalid arguments, ",(0,i.kt)("inlineCode",{parentName:"li"},"preg::()")," methods throw ",(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/class.invalidargumentexception.php"},(0,i.kt)("inlineCode",{parentName:"a"},"\\InvalidArgumentException"))," in that case.")),(0,i.kt)("p",null,"There are other safety features added by SafeRegex, like PHP bug fixes."),(0,i.kt)("h2",{id:"mix-and-match"},"Mix and match"),(0,i.kt)("p",null,"In Vanilla-PHP, if you mix and match multiple calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"preg")," methods, like maybe calling ",(0,i.kt)("inlineCode",{parentName:"p"},"preg_match()"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"preg_replace()"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"preg_split()")," right after each other, it may be really difficult to figure out\nwhich method was prone to error. "),(0,i.kt)("p",null,"SafeRegex can always narrow down the error to the exact method to one particular call (even nested ones,\nlike malformed preg call inside ",(0,i.kt)("inlineCode",{parentName:"p"},"preg_replace_callback()"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"preg::replace_callback('pattern', function ($match) {  // this method won't throw exception\n    try {\n        return preg::replace_callback('({%invalid', 'strlen', '');  // this will throw exception\n    } catch (PregException $e) {\n        return '';  // it will be handled\n    }\n}, $subject); \n")),(0,i.kt)("p",null,"Basically, SafeRegex can isolate the preg call to one method. "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Don't worry! T-Regx doesn't touch global ",(0,i.kt)("inlineCode",{parentName:"p"},"set_error_handler()")," nor ",(0,i.kt)("inlineCode",{parentName:"p"},"set_exception_handler()"),"! We don't want to\nmess with your project. :)"))),(0,i.kt)("h2",{id:"word-about-exceptions"},"Word about exceptions"),(0,i.kt)("p",null,"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"preg::...()")," methods, any error-prone situation is handled with an exception. Not only will it\ngive you insight about the nature of the error (",(0,i.kt)("inlineCode",{parentName:"p"},"MalformedPattern"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CatastrophicBacktracking"),", utf8 exceptions),\nit will allow you to get even more details with the methods on the exception:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"try {\n    preg::match('/(foo/', 'foo');\n} catch (PregException $exception) {\n    $exception->getInvokingMethod();  // 'preg_match'\n    $exception->getPregPattern();     // '/(foo/' \n}\n")),(0,i.kt)("h2",{id:"final-words"},"Final words"),(0,i.kt)("p",null,"That's it about SafeRegex! Really!"),(0,i.kt)("p",null,"SafeRegex method names, arguments, return types are exactly the same as vanilla PHP ",(0,i.kt)("inlineCode",{parentName:"p"},"preg_")," methods, so you only\nneed to change ",(0,i.kt)("inlineCode",{parentName:"p"},"preg_")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"preg::")," and you're already protected against every compile-time or runtime warning/error/notice, magic value and other code-smells\npresent in PCRE. Every callback, flag, argument is copied 1:1. In terms of programming usage - they're identical. The\nonly difference is ",(0,i.kt)("inlineCode",{parentName:"p"},"preg::")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"preg_"),"."),(0,i.kt)("p",null,"In the next chapters, we'll talk about CleanRegex - the higher level API solving more complicated problems of\nPHP regular expressions, other than the complete lack of exceptions."))}d.isMDXComponent=!0}}]);