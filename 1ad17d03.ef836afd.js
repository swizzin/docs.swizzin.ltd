(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{139:function(e,t,a){"use strict";var s=a(0),n=a.n(s),c=a(142),o=a(140),r=a(50),l=a.n(r),i=37,u=39;t.a=function(e){var t=e.block,a=e.children,r=e.defaultValue,b=e.values,d=e.groupId,m=e.className,p=Object(c.a)(),v=p.tabGroupChoices,f=p.setTabGroupChoices,y=Object(s.useState)(r),h=y[0],w=y[1],O=Object(s.useState)(!1),T=O[0],j=O[1];if(null!=d){var x=v[d];null!=x&&x!==h&&b.some((function(e){return e.value===x}))&&w(x)}var k=function(e){w(e),null!=d&&f(d,e)},C=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},N=function(){j(!1)};return Object(s.useEffect)((function(){return window.addEventListener("keydown",E),window.addEventListener("mousedown",N),function(){window.removeEventListener("keydown",E),window.removeEventListener("mousedown",N)}}),[]),n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},m)},b.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",t,l.a.tabItem,{"tabs__item--active":h===t}),style:T?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),E(e)},onFocus:function(){return k(t)},onClick:function(){k(t),j(!1)},onPointerDown:function(){return j(!1)}},a)}))),n.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},s.Children.toArray(a).filter((function(e){return e.props.value===h}))[0]))}},48:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return m}));var s=a(2),n=a(6),c=(a(0),a(138)),o=a(139),r=a(141),l=a(143),i={},u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/snippets/systemdtabs.mdx",version:"current"},b=[],d={rightToc:b};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(s.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"code"},Object(c.b)(o.a,{defaultValue:"start",values:[{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(c.b)(r.a,{value:"start",mdxType:"TabItem"},Object(c.b)(l.a,{children:"sudo systemctl start "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(c.b)(r.a,{value:"stop",mdxType:"TabItem"},Object(c.b)(l.a,{children:"sudo systemctl stop "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(c.b)(r.a,{value:"restart",mdxType:"TabItem"},Object(c.b)(l.a,{children:"sudo systemctl restart "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(c.b)(r.a,{value:"enable",mdxType:"TabItem"},Object(c.b)(l.a,{children:"sudo systemctl enable "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(c.b)(r.a,{value:"disable",mdxType:"TabItem"},Object(c.b)(l.a,{children:"sudo systemctl disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}m.isMDXComponent=!0}}]);