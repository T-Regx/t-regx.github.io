"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),h=r,u=m["".concat(o,".").concat(h)]||m[h]||d[h]||i;return n?a.createElement(u,l(l({ref:t},c),{},{components:n})):a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1342:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],p={id:"pattern-list",title:"Multiple patterns"},o={unversionedId:"pattern-list",id:"pattern-list",isDocsHomePage:!1,title:"Multiple patterns",description:"Documentation for version: 0.41.2",source:"@site/../docs/pattern-list.md",sourceDirName:".",slug:"/pattern-list",permalink:"/docs/pattern-list",version:"current",lastUpdatedAt:1675597644,formattedLastUpdatedAt:"2/5/2023",frontMatter:{id:"pattern-list",title:"Multiple patterns"},sidebar:"docs",previous:{title:"Template Syntax",permalink:"/docs/template-syntax"},next:{title:"Automatic delimiters",permalink:"/docs/delimiters"}},s=[{value:"Available methods",id:"available-methods",children:[]},{value:"Constructing the pattern list",id:"constructing-the-pattern-list",children:[{value:"<code>PatternList</code> with <code>Pattern</code> instances",id:"patternlist-with-pattern-instances",children:[]},{value:"<code>PatternList</code> with prepared patterns",id:"patternlist-with-prepared-patterns",children:[]},{value:"<code>PatternList</code> with <code>string</code> patterns",id:"patternlist-with-string-patterns",children:[]}]},{value:"Available methods",id:"available-methods-1",children:[{value:"Matching either pattern",id:"matching-either-pattern",children:[]},{value:"Matching collective patterns",id:"matching-collective-patterns",children:[]}]},{value:"Subject modification",id:"subject-modification",children:[{value:"Prune a subject with the list",id:"prune-a-subject-with-the-list",children:[]},{value:"Collective replace <code>with()</code>",id:"collective-replace-with",children:[]}]}],c={toc:s},m="wrapper";function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Documentation for version: 0.41.2"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PatternList")," allows you to perform performance-optimized operations on a collection of\npatterns."),(0,i.kt)("p",null,"While using an array of ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern")," in a loop is perfectly viable, it doesn't leave any room\nfor performance optimisation. Operations of ",(0,i.kt)("inlineCode",{parentName:"p"},"PatternList")," are designed to use minimal resources,\nsuch as a single call to PCRE. On the other hand - looping over ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern")," will issue as many\ncalls as there are patterns in the array."),(0,i.kt)("h2",{id:"available-methods"},"Available methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#constructing-the-pattern-list"},"Constructing ",(0,i.kt)("inlineCode",{parentName:"a"},"PatternList")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#patternlist-with-pattern-instances"},(0,i.kt)("inlineCode",{parentName:"a"},"PatternList")," with ",(0,i.kt)("inlineCode",{parentName:"a"},"Pattern")," instances")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#patternlist-with-prepared-patterns"},(0,i.kt)("inlineCode",{parentName:"a"},"PatternList")," with prepared patterns")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#patternlist-with-string-patterns"},(0,i.kt)("inlineCode",{parentName:"a"},"PatternList")," with ",(0,i.kt)("inlineCode",{parentName:"a"},"string")," patterns")))),(0,i.kt)("li",{parentName:"ul"},"Available methods",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Predicates",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#matching-either-pattern"},(0,i.kt)("inlineCode",{parentName:"a"},"testAny()")),", ",(0,i.kt)("a",{parentName:"li",href:"#matching-either-pattern"},(0,i.kt)("inlineCode",{parentName:"a"},"failAny()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#matching-collective-patterns"},(0,i.kt)("inlineCode",{parentName:"a"},"testAll()")),", ",(0,i.kt)("a",{parentName:"li",href:"#matching-collective-patterns"},(0,i.kt)("inlineCode",{parentName:"a"},"failAll()"))))),(0,i.kt)("li",{parentName:"ul"},"Replacements",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#prune-a-subject-with-the-list"},(0,i.kt)("inlineCode",{parentName:"a"},"prune()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#collective-replace-with"},(0,i.kt)("inlineCode",{parentName:"a"},"replace()->with()")))))))),(0,i.kt)("h2",{id:"constructing-the-pattern-list"},"Constructing the pattern list"),(0,i.kt)("p",null,"To create a pattern list, simply pass an ",(0,i.kt)("inlineCode",{parentName:"p"},"array")," of patterns to ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern::list()")," method. The elements\nin the ",(0,i.kt)("inlineCode",{parentName:"p"},"array")," can either be ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern"),", or a mixture of those."),(0,i.kt)("h3",{id:"patternlist-with-pattern-instances"},(0,i.kt)("inlineCode",{parentName:"h3"},"PatternList")," with ",(0,i.kt)("inlineCode",{parentName:"h3"},"Pattern")," instances"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$pattern1 = Pattern::of('https://(www)?\\.google\\.com');\n$pattern2 = Pattern::of('facebook.com/messages')\n\n$patternList = Pattern::list([ $pattern1, $pattern2 ]);\n")),(0,i.kt)("h3",{id:"patternlist-with-prepared-patterns"},(0,i.kt)("inlineCode",{parentName:"h3"},"PatternList")," with prepared patterns"),(0,i.kt)("p",null,"Any instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern")," can be added into the list, including patterns created with ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern::inject()"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern::template()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern::mask()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern::builder()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$pattern1 = Pattern::inject('https://@', [$domain]);\n$pattern2 = Pattern::mask($mask, ['%' => '.*'])\n$pattern3 = Pattern::alteration(['{one}', '{two}']);\n\n$patternList = Pattern::list([ $pattern1, $pattern2, $pattern3 ]);\n")),(0,i.kt)("h3",{id:"patternlist-with-string-patterns"},(0,i.kt)("inlineCode",{parentName:"h3"},"PatternList")," with ",(0,i.kt)("inlineCode",{parentName:"h3"},"string")," patterns"),(0,i.kt)("p",null,"Additionally, for convenience, passing ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," is allowed into ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern::list()"),".\nPassing ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern::list()")," behaves in exactly the same way, as wrapping the\nstring in ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern::of()")," beforehand."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$patternList = Pattern::list([ 'https://(www)?\\.google\\.com', 'facebook.com/messages' ]);\n")),(0,i.kt)("p",null,"Using either type is acceptable in a single ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern::list()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$patternList = Pattern::list([ \n    'https://(www)?\\.google\\.com', \n    Pattern::of('facebook.com/messages'),\n    Pattern::inject('https://@', [$domain])\n]);\n")),(0,i.kt)("p",null,"To be precise, ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern::list()")," accepts ",(0,i.kt)("inlineCode",{parentName:"p"},"(Pattern|string)[]")," as argument."),(0,i.kt)("h2",{id:"available-methods-1"},"Available methods"),(0,i.kt)("h3",{id:"matching-either-pattern"},"Matching either pattern"),(0,i.kt)("p",null,"After you have created ",(0,i.kt)("inlineCode",{parentName:"p"},"PatternList"),", you can match the list against a certain subject."),(0,i.kt)("p",null,"Method ",(0,i.kt)("inlineCode",{parentName:"p"},"PatternList.testAny()")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," when at least one of the patterns matches the subject, and ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\nwhen none of the patterns matches the subject."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$patternList = Pattern::list([\n  'bo{2}k',\n  'bet(ter)?'\n]);\n\nif ($patternList->testAny('book')) {\n    // one of the patterns in the list matched 'book'\n}\n")),(0,i.kt)("p",null,"Method ",(0,i.kt)("inlineCode",{parentName:"p"},"PatternList.failAny()")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," when at least one of the patterns fails to match the subject, and ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\nwhen all the patterns match the subject."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$patternList = Pattern::list([\n  'bo{2}k',\n  'bet(ter)?'\n]);\n\nif ($patternList->failAny('book')) {\n    // one of the patterns in the list failed to match 'book'\n}\n")),(0,i.kt)("h3",{id:"matching-collective-patterns"},"Matching collective patterns"),(0,i.kt)("p",null,"Method ",(0,i.kt)("inlineCode",{parentName:"p"},"PatternList.testAll()")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," only when all of the patterns match the subject, and ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\nwhen any of the patterns fails to match the subject."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$patternList = Pattern::list([\n  '^fro',\n  'do$'\n]);\n\nif ($patternList->testAll('frodo')) {\n    // all the patterns in the list match 'frodo'\n}\n")),(0,i.kt)("p",null,"Method ",(0,i.kt)("inlineCode",{parentName:"p"},"PatternList.failAll()")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," only when none of the patterns match the subject, and ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\nwhen any of the patterns matches the subject."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$patternList = Pattern::list([\n  '^fro',\n  'do$'\n]);\n\nif ($patternList->failAll('boromir')) {\n    // none of the patterns in the list matches 'frodo'\n}\n")),(0,i.kt)("h2",{id:"subject-modification"},"Subject modification"),(0,i.kt)("h3",{id:"prune-a-subject-with-the-list"},"Prune a subject with the list"),(0,i.kt)("p",null,"Method ",(0,i.kt)("inlineCode",{parentName:"p"},"PatternList.prune()")," allows to remove all occurrences of all the patterns in the list from the subject.\n",(0,i.kt)("inlineCode",{parentName:"p"},"prune()")," is useful for cleaning subject of unwanted elements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$unwanted = Pattern::list([\n  '\\w+@\\w+\\.\\w{1,4}' // anything that looks like mail\n  '^ +',             // leading spaces\n  ' +$',             // trailing spaces\n]);\n\n$unwanted->prune(' Welcome (mail@gmail.com)! '); // \"Welcome ()!\"\n")),(0,i.kt)("p",null,"It's preferable over iterating the patterns and calling ",(0,i.kt)("inlineCode",{parentName:"p"},"prune()")," individually, because of\nperformance optimisations in ",(0,i.kt)("inlineCode",{parentName:"p"},"PatternList.prune()"),"."),(0,i.kt)("p",null,"Overlapping patterns are being removed sequentially, based on the order of patterns in the list.\nIn the example above, first the mails will be removed, then the leading spaces and the the trailing\nspaces."),(0,i.kt)("p",null,"Here's an example to illustrate the order of ",(0,i.kt)("inlineCode",{parentName:"p"},"prune()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$list = Pattern::list([\n  'Hel',\n  'ello'\n]);\n\n$list->prune('Hello jello'); // \"lo j\"\n")),(0,i.kt)("h3",{id:"collective-replace-with"},"Collective replace ",(0,i.kt)("inlineCode",{parentName:"h3"},"with()")),(0,i.kt)("p",null,"Method ",(0,i.kt)("inlineCode",{parentName:"p"},"PatternList.replace()")," works very similarly to ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern.replace()"),". To replace\na subject with the collective list of patterns, call method ",(0,i.kt)("inlineCode",{parentName:"p"},"replace()"),", which accepts the\nsubject as an argument."),(0,i.kt)("p",null,"In this example, we'll replace every HTML tag and every number with string ",(0,i.kt)("inlineCode",{parentName:"p"},'"XXX"'),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$pattern = Pattern::list([\n  '<(b|div|span)>',\n  '</(b|div|span)>'\n]);\n\n$replacer = $pattern->replace($subject);\n\n$replacer->with('XXX'); // HTML tags and numbers replaced with \"XXX\"\n")),(0,i.kt)("p",null,"Please, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags"},"StackOverflow")," ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags"},"question")," regarding matching HTML entities with regular expressions."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PatternList.replace()")," also supports Perl-Compatible group references in the replacements,\navailable with method ",(0,i.kt)("inlineCode",{parentName:"p"},"withReferences()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$pattern = Pattern::list([\n  '<(b|div|span)>',\n  '</(b|div|span)>'\n]);\n\n$replacer = $pattern->replace(\"Hello <b>there</b>! How are <span>you</span>?\");\n\n$replaced = $replacer->withReferences('[$1]'); // \"Hello [b]there[/b]! How are [span]you[/span]?\"\n")),(0,i.kt)("p",null,"Remember that ",(0,i.kt)("inlineCode",{parentName:"p"},"with()")," doesn't accept references, so ",(0,i.kt)("inlineCode",{parentName:"p"},"with('[$1]')")," will replace occurrences with\nliteral string ",(0,i.kt)("inlineCode",{parentName:"p"},'"[$1]"')," exactly, while ",(0,i.kt)("inlineCode",{parentName:"p"},"withReferences('[$1]')")," will replace occurrences with the\nreplacement string ",(0,i.kt)("inlineCode",{parentName:"p"},'"[$1]"')," where ",(0,i.kt)("inlineCode",{parentName:"p"},"$1")," will be replaced with the capturing group of index ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),".\nThe references syntax is identical to ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern.replace().withReferences()"),", so all syntaxes of\nreferences are supported: ",(0,i.kt)("inlineCode",{parentName:"p"},"$1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"\\1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"${1}"),"."))}d.isMDXComponent=!0}}]);