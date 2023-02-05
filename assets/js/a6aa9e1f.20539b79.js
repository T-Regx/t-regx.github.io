"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3089],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,g=d["".concat(c,".").concat(u)]||d[u]||p[u]||l;return a?r.createElement(g,i(i({ref:t},m),{},{components:a})):r.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2868:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var r=a(7294),n=a(2263),l=a(7635),i=a(3146),o=a(6742),c=a(4973);const s=function(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(o.Z,{className:"pagination-nav__link",to:a},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(o.Z,{className:"pagination-nav__link",to:n},r.createElement("div",{className:"pagination-nav__label"},r.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var m=a(6010);const d={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};function p(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("div",{className:(0,m.Z)(d.sidebar,"thin-scrollbar")},r.createElement("h3",{className:d.sidebarItemTitle},t.title),r.createElement("ul",{className:d.sidebarItemList},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d.sidebarItem},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d.sidebarItemLink,activeClassName:d.sidebarItemLinkActive},e.title))}))))}var u=a(6700);const g=function(e){var t=e.metadata,a=e.items,o=e.sidebar,c=(0,n.default)().siteConfig.title,m=t.blogDescription,d=t.blogTitle,g="/"===t.permalink?c:d;return r.createElement(l.Z,{title:g,description:m,wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(p,{sidebar:o})),r.createElement("main",{className:"col col--7"},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(s,{metadata:t})))))}},3146:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(7294),n=a(6010),l=a(3905),i=a(4973),o=a(6742),c=a(3491),s=a(1217);const m={blogPostTitle:"blogPostTitle_d4p0",blogPostDate:"blogPostDate_iEnO"};var d=a(6700);const p=function(e){var t,a,p=(t=(0,d.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),u=e.children,g=e.frontMatter,b=e.metadata,v=e.truncated,h=e.isBlogPostPage,E=void 0!==h&&h,f=b.date,y=b.formattedDate,_=b.permalink,N=b.tags,k=b.readingTime,Z=g.author,O=g.title,w=g.image,T=g.keywords,P=g.author_url||g.authorURL,I=g.author_title||g.authorTitle,L=g.author_image_url||g.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(s.Z,{keywords:T,image:w}),r.createElement("article",{className:E?void 0:"margin-bottom--xl"},(a=E?"h1":"h2",r.createElement("header",null,r.createElement(a,{className:(0,n.Z)("margin-bottom--sm",m.blogPostTitle)},E?O:r.createElement(o.Z,{to:_},O)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:f,className:m.blogPostDate},y,k&&r.createElement(r.Fragment,null," \xb7 ",p(k)))),r.createElement("div",{className:"avatar margin-vert--md"},L&&r.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:P},r.createElement("img",{src:L,alt:Z})),r.createElement("div",{className:"avatar__intro"},Z&&r.createElement(r.Fragment,null,r.createElement("h4",{className:"avatar__name"},r.createElement(o.Z,{href:P},Z)),r.createElement("small",{className:"avatar__subtitle"},I)))))),r.createElement("div",{className:"markdown"},r.createElement(l.Zo,{components:c.Z},u)),(N.length>0||v)&&r.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&r.createElement("div",{className:"col"},r.createElement("strong",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),N.map((function(e){var t=e.label,a=e.permalink;return r.createElement(o.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),v&&r.createElement("div",{className:"col text--right"},r.createElement(o.Z,{to:b.permalink,"aria-label":"Read more about "+O},r.createElement("strong",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},6159:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(3366),n=a(7294),l=a(6010),i=a(4973),o=a(6700);const c="enhancedAnchor_WiXH";var s=["id"];const m=function(e){return function(t){var a,m=t.id,d=(0,r.Z)(t,s),p=(0,o.LU)().navbar.hideOnScroll;return m?n.createElement(e,d,n.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",(a={},a[c]=!p,a)),id:m}),d.children,n.createElement("a",{className:"hash-link",href:"#"+m,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):n.createElement(e,d)}}},3491:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6742),l=a(5558),i=a(6159);const o={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(l.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(n.Z,e)},pre:function(e){var t,a=e.children;return(0,r.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?null==a?void 0:a.props.children:r.createElement(l.Z,(0,r.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:(0,i.Z)("h1"),h2:(0,i.Z)("h2"),h3:(0,i.Z)("h3"),h4:(0,i.Z)("h4"),h5:(0,i.Z)("h5"),h6:(0,i.Z)("h6")}}}]);