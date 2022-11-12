"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,u=m["".concat(c,".").concat(d)]||m[d]||h[d]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7601:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"match",title:"Matching overview"},c={unversionedId:"match",id:"match",isDocsHomePage:!1,title:"Matching overview",description:"Matching a subject with regular expressions is the most frequent usage of T-Regx.",source:"@site/../docs/match.mdx",sourceDirName:".",slug:"/match",permalink:"/docs/match",version:"current",lastUpdatedAt:1668215267,formattedLastUpdatedAt:"11/12/2022",frontMatter:{id:"match",title:"Matching overview"},sidebar:"docs",previous:{title:"Summary of preg methods",permalink:"/docs/introduction-preg"},next:{title:"First occurrence",permalink:"/docs/match-first"}},s=[{value:"Predication overview",id:"predication-overview",children:[]},{value:"Matching overview",id:"matching-overview",children:[{value:"Retrieve the first match",id:"retrieve-the-first-match",children:[]},{value:"Iterating multiple matches",id:"iterating-multiple-matches",children:[]},{value:"Retrieving multiple matches",id:"retrieving-multiple-matches",children:[]}]}],p={toc:s};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Matching a subject with regular expressions is the most frequent usage of T-Regx."),(0,i.kt)("h2",{id:"predication-overview"},"Predication overview"),(0,i.kt)("p",null,"Conditions on subject matching certain ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern")," are the most common. Methods ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern.test(string)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern.fails(string)"),"\ncan be used to determine whether a pattern matches the subject."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$agePattern = Pattern::of('[0-9]{2,}');\n\n$agePattern->test(\"I'm 19 years old\");   // bool (true)\n$agePattern->fails(\"I'm 9 years old\");   // bool (false)\n")),(0,i.kt)("p",null,"Methods ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern.test(string)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern.fails(string)")," throw ",(0,i.kt)("inlineCode",{parentName:"p"},"MalformedPatternExceptions"),", should they be called for\na pattern with a malformed regular expression. Similarly to other T-Regx methods, ",(0,i.kt)("inlineCode",{parentName:"p"},"test()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fails()")," throw\nother kinds of appropriate exceptions, for instance ",(0,i.kt)("inlineCode",{parentName:"p"},"CatastrophicBacktrackingException")," should the subject happen to be\ntoo complex. Detailed reference to T-Regx exception handling is presented in the further chapters of the documentation."),(0,i.kt)("h2",{id:"matching-overview"},"Matching overview"),(0,i.kt)("p",null,"To match a subject, invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"match(string)")," on an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern")," to receive the matcher.\nInvocation of ",(0,i.kt)("inlineCode",{parentName:"p"},"match(string)")," doesn't perform any regular expression search just yet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Instantiate your pattern\n */\n$pattern = Pattern::of('\\d+');\n\n/**\n * Receive the subject matcher\n */\n$matcher = $pattern->match('I have 140 apples');\n")),(0,i.kt)("p",null,"The detailed reference of ",(0,i.kt)("inlineCode",{parentName:"p"},"Matcher")," functionalities is presented in the further chapters of the documentation.\nFor overview, ",(0,i.kt)("inlineCode",{parentName:"p"},"Matcher")," interface consists of methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Test a subject against a pattern: ",(0,i.kt)("a",{parentName:"li",href:"#test-a-subject"},(0,i.kt)("inlineCode",{parentName:"a"},"test()")),"/",(0,i.kt)("a",{parentName:"li",href:"#test-a-subject"},(0,i.kt)("inlineCode",{parentName:"a"},"fails()"))),(0,i.kt)("li",{parentName:"ul"},"Retrieve matches from the subject: ",(0,i.kt)("a",{parentName:"li",href:"#one"},(0,i.kt)("inlineCode",{parentName:"a"},"first()")),"/",(0,i.kt)("a",{parentName:"li",href:"#many"},(0,i.kt)("inlineCode",{parentName:"a"},"all()")),"/",(0,i.kt)("a",{parentName:"li",href:"#many"},(0,i.kt)("inlineCode",{parentName:"a"},"only(int)"))),(0,i.kt)("li",{parentName:"ul"},"Get the matched capturing groups: ",(0,i.kt)("a",{parentName:"li",href:"/docs/match-details"},(0,i.kt)("inlineCode",{parentName:"a"},"Detail.get(int|string)")),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/match-details"},(0,i.kt)("inlineCode",{parentName:"a"},"Detail.group(int|string)")))),(0,i.kt)("p",null,"The complete ",(0,i.kt)("inlineCode",{parentName:"p"},"Matcher")," reference is present in the further chapters of the documentation."),(0,i.kt)("h3",{id:"retrieve-the-first-match"},"Retrieve the first match"),(0,i.kt)("p",null,"Method ",(0,i.kt)("inlineCode",{parentName:"p"},"Matcher.first()")," can be used to perform a single regular expression match against\nthe subject."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Instantiate digit pattern\n */\n$digitPattern = Pattern::of('[0-9]+');\n\n/**\n * Receive matcher for the subject\n */\n$matcher = $digitPattern->match(\"I'm 19 years old. I was born in 1999\");\n\n/**\n * Perform a single regular expression match\n */\n$firstMatch = $matcher->first(); // object (Detail)\n")),(0,i.kt)("p",null,"Instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Detail")," represents the matched occurrence of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern")," in the subject.\nMethods ",(0,i.kt)("inlineCode",{parentName:"p"},"Detail.text()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Detail.offset()")," can be used to read information about the\nmatched occurrence."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * Read the whole matched occurrence\n */\n$firstMatch->text();   // string ("19")\n\n/**\n * Read the whole match, as integer in base 10\n */\n$firstMatch->toInt();  // int (19)\n\n/**\n * Read the occurrence position in subject (in characters)\n */\n$firstMatch->offset(); // int (4)\n')),(0,i.kt)("p",null,"More information on ",(0,i.kt)("a",{parentName:"p",href:"#one"},(0,i.kt)("inlineCode",{parentName:"a"},"first()"))," is present in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/match-first"},"next chapter"),"."),(0,i.kt)("h3",{id:"iterating-multiple-matches"},"Iterating multiple matches"),(0,i.kt)("p",null,"Instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Matcher")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"\\Iterable"),", so it can be used directly in a ",(0,i.kt)("inlineCode",{parentName:"p"},"foreach")," loop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * Instantiate digit pattern\n */\n$digitPattern = Pattern::of(\'[0-9]+\');\n\n/**\n * Receive matcher for the subject\n */\n$matcher = $digitPattern->match("I\'m 22 years old. I was born in 1999, so the current year must be 2021 or 2022");\n\n/**\n * Perform global regular expression search and iterate matches\n */\nforeach ($matcher as $detail) {\n  /**\n   * Detail used in string interpolation is the same as using Detail.text()\n   */\n  echo "Match found is \'$detail\' at position " . $detail->offset() . PHP_EOL;\n}\n\nif ($matcher->fails()) {\n  echo "Unfortunately, no occurrences of pattern were present in the subject";\n} else {\n  echo "In total, {$matcher->count()} occurrences found in the subject";\n}\n')),(0,i.kt)("p",null,"The example above iterates occurrences of ",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern")," in the subject, retrieving\nthe whole matches' values and their positions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"Match found is '22' at position 4\nMatch found is '1999' at position 32\nMatch found is '2021' at position 66\nMatch found is '2022' at position 74\nIn total, 4 occurrences found in the subject\n")),(0,i.kt)("p",null,"Calling ",(0,i.kt)("inlineCode",{parentName:"p"},"Matcher.fails()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Matcher.count()")," will not perform another global regular\nexpressions searches, if the search has already been invoked by iterating the ",(0,i.kt)("inlineCode",{parentName:"p"},"Matcher"),".\nIn the example above ",(0,i.kt)("inlineCode",{parentName:"p"},"Matcher")," is being iterated for occurrences of ",(0,i.kt)("inlineCode",{parentName:"p"},"Detail")," in the subject,\nthus T-Regx performs the global regular expression search, finding occurrences ",(0,i.kt)("inlineCode",{parentName:"p"},"['22', '1999', '2021', '2022']"),".\nFurther call to ",(0,i.kt)("inlineCode",{parentName:"p"},"Matcher.fails()")," uses the results from the iteration and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," without\nany additional search. ",(0,i.kt)("inlineCode",{parentName:"p"},"Matcher.count()")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"4")," immediately, using the number of occurrences\nfound from the previous iteration. Of course, iterating the same instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Matcher")," again\nwill not perform unnecessary global search either. Further details about performance optimisations\nin T-Regx are presented in the next chapters of the documentation."),(0,i.kt)("h3",{id:"retrieving-multiple-matches"},"Retrieving multiple matches"),(0,i.kt)("p",null,"Method ",(0,i.kt)("inlineCode",{parentName:"p"},"Matcher.all()")," can also be used to perform global regular expression search. ",(0,i.kt)("inlineCode",{parentName:"p"},"Matcher.all()"),"\nreturns PHP ",(0,i.kt)("inlineCode",{parentName:"p"},"array"),", precisely ",(0,i.kt)("inlineCode",{parentName:"p"},"Detail[]"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * Receive matcher for the subject\n */\n$matcher = $digitPattern->match("I\'m 22 years old. I was born in 1999, so the current year must be 2021 or 2022");\n\n/**\n * Perform global regular expression search and return matches\n */\n$details = $matcher->all(); // array ([Detail, Detail, Detail, Detail])\n\n/**\n * Detail used in string interpolation is the same as using Detail.text()\n */\necho "Match found is \'{$details[0]}\' at position " . $detail->offset() . PHP_EOL;\n')),(0,i.kt)("p",null,"Methods ",(0,i.kt)("inlineCode",{parentName:"p"},"Matcher.all()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Matcher.fails()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Matcher.count()")," throw ",(0,i.kt)("inlineCode",{parentName:"p"},"MalformedPatternExceptions"),", should\nthey be called for a pattern with a malformed regular expression. Similarly to other T-Regx\nmethods, ",(0,i.kt)("inlineCode",{parentName:"p"},"fails()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"all()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"count()")," throw other kinds of appropriate exceptions, for\ninstance ",(0,i.kt)("inlineCode",{parentName:"p"},"CatastrophicBacktrackingException")," should the subject happen to be too complex. Detailed reference\nto T-Regx exception handling is presented in the further chapters of the documentation."))}h.isMDXComponent=!0}}]);