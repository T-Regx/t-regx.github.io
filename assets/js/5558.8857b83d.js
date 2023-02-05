(self.webpackChunk=self.webpackChunk||[]).push([[5558],{5558:(e,t,o)=>{"use strict";o.d(t,{Z:()=>N});var n=o(7462),r=o(7294),s=o(6010);const l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var c={Prism:o(7410).Z,theme:l};function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},i.apply(this,arguments)}var p=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},y=function(e,t){var o=e.length;return o>0&&e[o-1]===t?e:e.concat(t)},d=function(e,t){var o=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,o){var n=o.languages,r=o.style;return n&&!n.includes(t)||o.types.forEach((function(t){var o=i({},e[t],r);e[t]=o})),e}),n);return r.root=o,r.plain=i({},o,{backgroundColor:null}),r};function h(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(o[n]=e[n]);return o}const g=function(e){function t(){for(var t=this,o=[],n=arguments.length;n--;)o[n]=arguments[n];e.apply(this,o),a(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var o=e.theme?d(e.theme,e.language):void 0;return t.themeDict=o})),a(this,"getLineProps",(function(e){var o=e.key,n=e.className,r=e.style,s=i({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(s.style=l.plain),void 0!==r&&(s.style=void 0!==s.style?i({},s.style,r):r),void 0!==o&&(s.key=o),n&&(s.className+=" "+n),s})),a(this,"getStyleForToken",(function(e){var o=e.types,n=e.empty,r=o.length,s=t.getThemeDict(t.props);if(void 0!==s){if(1===r&&"plain"===o[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return s[o[0]];var l=n?{display:"inline-block"}:{},c=o.map((function(e){return s[e]}));return Object.assign.apply(Object,[l].concat(c))}})),a(this,"getTokenProps",(function(e){var o=e.key,n=e.className,r=e.style,s=e.token,l=i({},h(e,["key","className","style","token"]),{className:"token "+s.types.join(" "),children:s.content,style:t.getStyleForToken(s),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?i({},l.style,r):r),void 0!==o&&(l.key=o),n&&(l.className+=" "+n),l})),a(this,"tokenize",(function(e,t,o,n){var r={code:t,grammar:o,language:n,tokens:[]};e.hooks.run("before-tokenize",r);var s=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,o=e.language,n=e.code,r=e.children,s=this.getThemeDict(this.props),l=t.languages[o];return r({tokens:function(e){for(var t=[[]],o=[e],n=[0],r=[e.length],s=0,l=0,c=[],a=[c];l>-1;){for(;(s=n[l]++)<r[l];){var i=void 0,d=t[l],h=o[l][s];if("string"==typeof h?(d=l>0?d:["plain"],i=h):(d=y(d,h.type),h.alias&&(d=y(d,h.alias)),i=h.content),"string"==typeof i){var g=i.split(p),m=g.length;c.push({types:d,content:g[0]});for(var f=1;f<m;f++)u(c),a.push(c=[]),c.push({types:d,content:g[f]})}else l++,t.push(d),o.push(i),n.push(0),r.push(i.length)}l--,t.pop(),o.pop(),n.pop(),r.pop()}return u(c),a}(void 0!==l?this.tokenize(t,n,l,o):[n]),className:"prism-code language-"+o,style:void 0!==s?s.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var m=o(7594),f=o.n(m);const v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var k=o(5350),b=o(6700);const B=function(){var e=(0,b.LU)().prism,t=(0,k.Z)().isDarkTheme,o=e.theme||v,n=e.darkTheme||o;return t?n:o};var j=o(4973);const T={codeBlockContainer:"codeBlockContainer_J+bg",codeBlockContent:"codeBlockContent_csEI",codeBlockTitle:"codeBlockTitle_oQzk",codeBlock:"codeBlock_rtdJ",codeBlockWithTitle:"codeBlockWithTitle_ZT05",copyButton:"copyButton_M3SB",codeBlockLines:"codeBlockLines_1zSZ"};var C=/{([\d,-]+)}/,x=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},o=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+o+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},E=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}};function N(e){var t=e.children,o=e.className,l=e.metastring,a=e.title,i=(0,b.LU)().prism,p=(0,r.useState)(!1),u=p[0],y=p[1],d=(0,r.useState)(!1),h=d[0],m=d[1];(0,r.useEffect)((function(){m(!0)}),[]);var v=(0,b.bc)(l)||a,k=(0,r.useRef)(null),x=[],N=B(),L=Array.isArray(t)?t.join(""):t;if(l&&C.test(l)){var Z=l.match(C)[1];x=f()(Z).filter((function(e){return e>0}))}var S=o&&o.replace(/language-/,"");!S&&i.defaultLanguage&&(S=i.defaultLanguage);var P=L.replace(/\n$/,"");if(0===x.length&&void 0!==S){for(var w,O="",_=E(S),D=L.replace(/\n$/,"").split("\n"),z=0;z<D.length;){var A=z+1,I=D[z].match(_);if(null!==I){switch(I.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":O+=A+",";break;case"highlight-start":w=A;break;case"highlight-end":O+=w+"-"+(A-1)+","}D.splice(z,1)}else z+=1}x=f()(O),P=D.join("\n")}var R=function(){!function(e,{target:t=document.body}={}){const o=document.createElement("textarea"),n=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const r=document.getSelection();let s=!1;r.rangeCount>0&&(s=r.getRangeAt(0)),t.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}o.remove(),s&&(r.removeAllRanges(),r.addRange(s)),n&&n.focus()}(P),y(!0),setTimeout((function(){return y(!1)}),2e3)};return r.createElement(g,(0,n.Z)({},c,{key:String(h),theme:N,code:P,language:S}),(function(e){var t,o=e.className,l=e.style,c=e.tokens,a=e.getLineProps,i=e.getTokenProps;return r.createElement("div",{className:T.codeBlockContainer},v&&r.createElement("div",{style:l,className:T.codeBlockTitle},v),r.createElement("div",{className:(0,s.Z)(T.codeBlockContent,S)},r.createElement("div",{tabIndex:0,className:(0,s.Z)(o,T.codeBlock,"thin-scrollbar",(t={},t[T.codeBlockWithTitle]=v,t))},r.createElement("div",{className:T.codeBlockLines,style:l},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var o=a({line:e,key:t});return x.includes(t+1)&&(o.className=o.className+" docusaurus-highlight-code-line"),r.createElement("div",(0,n.Z)({key:t},o),e.map((function(e,t){return r.createElement("span",(0,n.Z)({key:t},i({token:e,key:t})))})))})))),r.createElement("button",{ref:k,type:"button","aria-label":(0,j.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,s.Z)(T.copyButton),onClick:R},u?r.createElement(j.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(j.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},2924:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o(7294).createContext(void 0)},5350:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var n=o(7294),r=o(2924);const s=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},7594:(e,t)=>{function o(e){let t,o=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))o.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,s]=t;if(n&&s){n=parseInt(n),s=parseInt(s);const e=n<s?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(s+=e);for(let t=n;t!==s;t+=e)o.push(t)}}return o}t.default=o,e.exports=o}}]);