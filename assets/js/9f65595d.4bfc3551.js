"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8703],{6159:(e,t,n)=>{n.d(t,{Z:()=>u});var l=n(3366),r=n(7294),a=n(6010),c=n(4973),s=n(6700);const o="enhancedAnchor_WiXH";var i=["id"];const u=function(e){return function(t){var n,u=t.id,m=(0,l.Z)(t,i),p=(0,s.LU)().navbar.hideOnScroll;return u?r.createElement(e,m,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,a.Z)("anchor",(n={},n[o]=!p,n)),id:u}),m.children,r.createElement("a",{className:"hash-link",href:"#"+u,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(e,m)}}},571:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(7294),r=n(6010);const a=function(e,t,n){var r=(0,l.useState)(void 0),a=r[0],c=r[1];(0,l.useEffect)((function(){function l(){var l=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var l=e[e.indexOf(t)-1];return null!=l?l:t}return t}return e[e.length-1]}();if(l)for(var r=0,s=!1,o=document.getElementsByClassName(e);r<o.length&&!s;){var i=o[r],u=i.href,m=decodeURIComponent(u.substring(u.indexOf("#")+1));l.id===m&&(a&&a.classList.remove(t),i.classList.add(t),c(i),s=!0),r+=1}}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}))},c="tableOfContents_vrFS";var s="table-of-contents__link";function o(e){var t=e.toc,n=e.isChild;return t.length?l.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(o,{isChild:!0,toc:e.children}))}))):null}const i=function(e){var t=e.toc;return a(s,"table-of-contents__link--active",100),l.createElement("div",{className:(0,r.Z)(c,"thin-scrollbar")},l.createElement(o,{toc:t}))}},2924:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n(7294).createContext(void 0)},5350:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(7294),r=n(2924);const a=function(){var e=(0,l.useContext)(r.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},4028:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(7294),r=n(2263);function a(e){var t=e.title,n=e.identifier,a=((0,r.default)(),function(){this.page.identifier=n,this.page.disqus_identifiers=n,t&&(this.page.title=t),this.page.url="https://t-regx.com"+location.pathname});return(0,l.useEffect)((function(){if(window.DISQUS)window.DISQUS.reset({reload:!0,config:a});else{window.disqus_config=a;var e=document.createElement("script");e.src="https://t-regx.disqus.com/embed.js",e.setAttribute("data-timestamp",""+ +new Date),e.setAttribute("async","true"),document.body.appendChild(e)}})),l.createElement("div",{id:"disqus_thread"})}},9122:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(7294),r=n(6742),a=n(4409);const c=function(e){var t=e.issue,n=e.to,c=e.children,u=e.title;if(t)return l.createElement(r.Z,{href:a.cx},c);if(n)return l.createElement(r.Z,{to:n,title:u},c);var m=function(e){if(o.hasOwnProperty(e))return{content:l.createElement("code",null,e),link:o[e]};if(i.hasOwnProperty(e))return{content:e,link:i[e]};if(s.hasOwnProperty(e))return s[e];return console.log("No default link for '"+e+"'"),{content:l.createElement("code",null,e)}}(c),p=m.link,d=m.content;return p?l.createElement(r.Z,{to:p,title:u,children:d}):d};var s={"pattern().match()":{content:"pattern()->match()",link:"docs/match"},"pattern().replace()":{content:"pattern()->replace()",link:"docs/replace"}},o={"pattern()":"/docs/introduction#entry-points","Pattern::of()":"/docs/introduction#entry-points","PcrePattern::of()":"/docs/introduction#entry-points","Pattern::inject()":"/docs/prepared-patterns","pattern()->test()":"/docs/match#test-a-subject",Detail:"/docs/match-details","preg_last_error()":a.YF,"preg_match_all()":a.hO,"error_reporting()":a.qC,'"display_errors"':a.hP,PREG_NO_ERROR:a.Xc,PREG_OFFSET_CAPTURE:a.Xc,stdClass:a.f5,"__toString()":a.QC,"\\InvalidArgumentException":a.wA},i={"try it online":a.vL,sandbox:a.vL,"T-Regx on repl.it":a.vL,"prepared patterns":"/docs/prepared-patterns","Prepared Patterns":"/docs/prepared-patterns",Blog:"blog"}},4409:(e,t,n)=>{n.d(t,{A$:()=>i,B9:()=>s,Cd:()=>c,QC:()=>f,Xc:()=>m,YF:()=>d,cx:()=>r,f5:()=>g,hO:()=>p,hP:()=>h,hV:()=>o,n5:()=>u,qC:()=>E,vL:()=>l,w8:()=>a,wA:()=>v});var l="https://repl.it/github/T-Regx/fiddle",r="https://github.com/T-Regx/T-Regx/issues/new/choose",a="https://github.com/T-Regx/T-Regx/issues/new?template=feature-request.md",c="https://github.com/T-Regx/T-Regx/issues/new?template=i-found-a-bug.md",s="https://github.com/T-Regx/T-Regx/issues/new?template=i-have-a-question.md",o="https://travis-ci.org/T-Regx/T-Regx",i="https://github.com/T-Regx/T-Regx",u="https://www.php.net/manual/en/ref.pcre.php",m="https://www.php.net/manual/en/pcre.constants.php",p="https://www.php.net/manual/en/function.preg-match-all.php",d="https://www.php.net/manual/en/function.preg-last-error.php",h="https://www.php.net/manual/en/errorfunc.configuration.php",E="https://www.php.net/manual/en/function.error-reporting.php",g="https://www.php.net/manual/en/reserved.classes.php",f="https://www.php.net/manual/en/language.oop5.magic.php#object.tostring",v="https://www.php.net/manual/en/class.invalidargumentexception.php"},8951:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var l={};n.r(l);var r={};n.r(r);var a={};n.r(a);var c=n(7294),s=n(7635),o=n(571),i=n(1721);const u="parent_-WJR",m="container_8rsU";var p=function(){function e(e,t){this.method=e,this.delay=t,this.interval=null}var t=e.prototype;return t.start=function(){null===this.interval&&(this.interval=setInterval(this.method,this.delay))},t.stop=function(){null!==this.interval&&(clearInterval(this.interval),this.interval=null)},e}(),d=function(e){function t(t){var n;n=e.call(this,t)||this;var l=t.texts;if(!l||0===l.length)throw"TextSuperposition doesn't make sense without values";return n.state={items:[].concat(l,[l[0]]),slide:0},n.stopwatch=new p((function(){return n.nextSlide()}),1e3),n}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.stopwatch.start()},n.componentWillUnmount=function(){this.stopwatch.stop()},n.nextSlide=function(){var e=this,t=(this.state.slide+1)%this.state.items.length;return t===this.state.items.length-1&&setTimeout((function(){return e.setState({slide:0})}),500),this.setState({slide:t})},n.render=function(){var e=this;return c.createElement("span",{className:u,onMouseEnter:function(){return e.stopwatch.stop()},onMouseLeave:function(){return e.stopwatch.start()}},c.createElement("span",{className:m,style:h(this.state.slide)},this.state.items.map((function(e,t){return c.createElement("span",{key:t,children:e})}))))},t}(c.Component);function h(e){var t=-26*e-1;return 0===e?{transition:"none",transform:"translateY("+t+"px)"}:{transition:"transform .3s",transform:"translateY("+t+"px)"}}var E=n(9122);function g(){var e=[c.createElement("code",{className:l.wide},"preg::match()"),c.createElement("code",{className:l.narrow},"preg::match_all()"),c.createElement("code",null,"preg::replace()"),c.createElement("code",{className:l.wide},"preg::split()"),c.createElement("code",{className:l.wider},"preg::grep()"),c.createElement("code",null,"preg::filter()")];return c.createElement(E.Z,{to:"/docs/introduction-preg#about-saferegex",title:"Each preg::_ method in T-Regx (so preg::match, preg::replace, etc.)"},c.createElement(d,{texts:e}))}var f=n(4409);function v(){var e=[c.createElement("code",{className:r.wide},"preg_match()"),c.createElement("code",{className:r.narrow},"preg_match_all()"),c.createElement("code",null,"preg_replace()"),c.createElement("code",{className:r.wide},"preg_split()"),c.createElement("code",{className:r.wider},"preg_grep()"),c.createElement("code",null,"preg_filter()")];return c.createElement(E.Z,{to:f.n5,title:"Each preg_ method in PHP (so preg_match, preg_replace, etc.)"},c.createElement(d,{texts:e}))}var w=n(4028);const x="rotatedTable_h7qL",R="php_MKjd",_="tregx_NJ-u",b="heading_AEGo",P="img_ftiW";function y(e){var t=e.rows;return c.createElement("table",{className:x,width:"100%",border:"0",cellSpacing:"0",cellPadding:"0"},c.createElement("tbody",null,t.map((function(e,t){return c.createElement(c.Fragment,{key:t},c.createElement("tr",{className:b},c.createElement("td",null,e.title)),c.createElement("tr",null,c.createElement("td",null,e.php),c.createElement("td",{className:R},c.createElement(E.Z,{to:f.n5},c.createElement("div",{className:P})))),c.createElement("tr",null,c.createElement("td",null,e.tRegx),c.createElement("td",{className:_},c.createElement(E.Z,{to:"/"},c.createElement("div",{className:P})))))}))))}var T=n(6159);var C=(0,T.Z)("h1"),N=(0,T.Z)("h2"),Z=(0,T.Z)("h3");function F(e){var t=e.h2,n=e.h3,l=e.id,r=e.children,s=t?N:n?Z:C;return c.createElement(s,{id:l,children:r,className:a.heading})}var S=c.createElement(c.Fragment,null,"Actually tries to get the group",c.createElement("sup",null,"Depending on PHP settings, either returns ",c.createElement("code",null,"null")," and/or issues a warning")),k=c.createElement("li",null,c.createElement(E.Z,null,"preg_last_error()")," returns ",c.createElement("b",null,"success")," code",c.createElement("sup",null,"(returns ",c.createElement(E.Z,null,"PREG_NO_ERROR"),")")),O=c.createElement("li",null,"Methods ",c.createElement(v,null)," return different error values",c.createElement("sup",null,"(some return ",c.createElement("code",null,"false"),", others ",c.createElement("code",null,"null")," or ",c.createElement("code",null,"[]"),")")),H=c.createElement("li",null,c.createElement(E.Z,null,"preg_last_error()")," returns error code"),A=c.createElement("li",null,"PHP issues a warning",c.createElement("sup",null,"(depending on the setting of ",c.createElement(E.Z,null,'"display_errors"')," and ",c.createElement(E.Z,null,"error_reporting()"))),L=c.createElement("li",null,"PHP doesn't issue any other warning or error"),U=[{title:c.createElement(c.Fragment,null,"Using na invalid pattern",c.createElement("sup",null,"(eg. ",c.createElement("code",null,"/unclosed[A-/"),")")),php:c.createElement("ul",null,O,k,A),tRegx:c.createElement(c.Fragment,null,"T-Regx throws ",c.createElement("code",null,"MalformedPatternException"),c.createElement("sup",null,"with descriptive message"))},{title:c.createElement(c.Fragment,null,"Corrupted subject",c.createElement("sup",null,"(eg. malformed utf-8 sequence)")),php:c.createElement("ul",null,O,H,L),tRegx:c.createElement(c.Fragment,null,"T-Regx throws ",c.createElement("code",null,"RuntimeCleanRegexException")," ",c.createElement("sup",null,"with descriptive message"))},{title:c.createElement(c.Fragment,null,"Using an overly complex pattern",c.createElement("sup",null,"(eg. containing ",c.createElement("code",null,"?R"),")")),php:c.createElement("ul",null,O,H,L),tRegx:c.createElement(c.Fragment,null,"T-Regx throws ",c.createElement("code",null,"RuntimeCleanRegexException")," ",c.createElement("sup",null,"with descriptive message"))},{title:"Returning an invalid replacement value",php:c.createElement("ul",null,k,c.createElement("li",null,"Depending on the value, PHP:",c.createElement("ul",null,c.createElement("li",null,"Silently converts the value to string",c.createElement("sup",null,"(for example for ",c.createElement("code",null,"int")," or ",c.createElement("code",null,'"1"'),"/",c.createElement("code",null,'"0"')," for ",c.createElement("code",null,"bool"),")")),c.createElement("li",null,"Raises a warning ",c.createElement("sup",null,"(for example for ",c.createElement("code",null,"array"),")")),c.createElement("li",null,"Throws a fatal error, terminating the application",c.createElement("sup",null,"(for example for ",c.createElement(E.Z,null,"stdClass")," or objects without ",c.createElement(E.Z,null,"__toString()"),")"),"`")))),tRegx:c.createElement(c.Fragment,null,"T-Regx throws ",c.createElement("code",null,"InvalidReplacementException")," ",c.createElement("sup",null,"with descriptive message"))}],I=[{title:c.createElement(c.Fragment,null,"Using an invalid capturing group name",c.createElement("sup",null,"(eg. name ",c.createElement("code",null,'"!@#$"')," or index ",c.createElement("code",null,"-2"),")")),php:S,tRegx:c.createElement(c.Fragment,null,"T-Regx throws ",c.createElement(E.Z,null,"\\InvalidArgumentException")," ",c.createElement("sup",null,"with descriptive message"))},{title:c.createElement(c.Fragment,null,"Using a nonexistent group",c.createElement("sup",null,"(group name typo, group deleted)")),php:S,tRegx:c.createElement(c.Fragment,null,"T-Regx throws ",c.createElement("code",null,"NonexistentGroupException")," ",c.createElement("sup",null,"with descriptive message"))},{title:c.createElement(c.Fragment,null,"Using an unmatched optional group",c.createElement("sup",null,"(conditional group, unmatched by subject)")),php:S,tRegx:c.createElement(c.Fragment,null,"T-Regx throws ",c.createElement("code",null,"GroupNotMatchedException")," ",c.createElement("sup",null,"with descriptive message"))},{title:c.createElement(c.Fragment,null,"Offsets in UTF-8, for example for ",c.createElement("code",null,'"18\u20ac"')),php:c.createElement(c.Fragment,null,"5 bytes",c.createElement("sup",null,"PHP offsets are in bytes")),tRegx:c.createElement("ul",null,c.createElement("li",null,"3 characters",c.createElement("sup",null,"With method ",c.createElement("code",null,"offset()"))),c.createElement("li",null,"5 bytes",c.createElement("sup",null,"With method ",c.createElement("code",null,"byteOffset()"))))},{title:"Offset while replacing",php:"PHP doesn't keep offsets while replacing",tRegx:c.createElement(c.Fragment,null,"With T-Regx, you can use ",c.createElement("code",null,"offset()")," or ",c.createElement("code",null,"modifiedOffset()"))},{title:"Worst case complexity",php:c.createElement(c.Fragment,null,c.createElement("p",null,c.createElement("code",null,"(string|int|null)[][][]")),"array of arrays of arrays of ",c.createElement("code",null,"string"),"/",c.createElement("code",null,"null")," and ",c.createElement("code",null,"int"),c.createElement("sup",null,c.createElement(E.Z,null,"preg_match_all()")," with ",c.createElement(E.Z,null,"PREG_OFFSET_CAPTURE"))),tRegx:c.createElement(c.Fragment,null,c.createElement("code",null,"string[]"),c.createElement("sup",null,"array of strings"))},{title:"Possible outcomes when testing a subject",php:c.createElement("ul",null,c.createElement("li",null,c.createElement("code",null,"1"),"/",c.createElement("code",null,"0")," - matches or differs"),c.createElement("li",null,c.createElement("code",null,"false")," - for certain errors"),c.createElement("li",null,"issues a warning - for other errors")),tRegx:c.createElement("ul",null,c.createElement("li",null,c.createElement("code",null,"true"),"/",c.createElement("code",null,"false")," - matches or differs"),c.createElement("li",null,c.createElement("code",null,"MalformedPatternException")," - malformed pattern"))}],q=String.fromCharCode(8209),j=function(){return c.createElement(c.Fragment,null,"T\u2011Regx")},M="T"+q+"Regx";const D="comparison_Ozfx",W=function(){return c.createElement(s.Z,{title:"Comparison of T-Regx and PHP methods",description:"Comparison of standard PHP regex methods (preg_match(), preg_replace()...) and "+M+" functions (preg::match(), preg::replace()...) and as well as pattern() function."},c.createElement("div",{className:"container margin-vert--xl "+D},c.createElement("div",{className:"row"},c.createElement("div",{className:"col"},c.createElement("div",{className:"text--center1 margin-bottom--xl"},c.createElement(F,{id:"overview"},"Comparison table of plain PHP and ",c.createElement(j,null)),c.createElement("p",null,"Here's a little table of some of the differences between the behaviour of plain PHP ",c.createElement(v,null)," methods and ",c.createElement(j,null)," API. This table intentionally shows the corner-cases and edge-cases, because that's the best way to illustrate differences between ",c.createElement(j,null)," and vanilla-PHP.")),c.createElement(F,{h2:!0,id:"safe-regex"},"SafeRegex compared to PHP"),c.createElement("p",null,"Table presents the most important differences in error handling and general maturity between ",c.createElement(j,null)," ",c.createElement(g,null)," methods and PHP ",c.createElement(v,null)," methods."),c.createElement(y,{rows:U}),c.createElement(F,{h2:!0,id:"clean-regex"},"CleanRegex compared PHP"),c.createElement("p",null,"This table shows difference between higher-level CleanRegex API ",c.createElement(E.Z,null,"pattern()")," and SafeRegex ",c.createElement(g,null)," methods (which share the same interface as ",c.createElement(v,null),")."),c.createElement(y,{rows:I}),c.createElement(w.Z,{title:"Questions about T-Regx Comparison",identifier:"7eb37bee54d5e7315fd19ebdc4c56cf7"})),c.createElement("div",{className:"col col--3"},c.createElement(o.Z,{toc:[{value:"Comparison table overview",id:"overview",children:[]},{value:"preg::method() vs. preg_method()",id:"safe-regex",children:[]},{value:"pattern() vs. preg_method()",id:"clean-regex",children:[]}]})))))}}}]);