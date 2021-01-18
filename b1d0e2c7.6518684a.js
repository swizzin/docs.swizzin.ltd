(window.webpackJsonp=window.webpackJsonp||[]).push([[59,15],{133:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),s=(a(0),a(156)),i=a(56),o={id:"medusa",title:"Medusa",sidebar_label:"Medusa"},c={unversionedId:"applications/medusa",id:"applications/medusa",isDocsHomePage:!1,title:"Medusa",description:"(py)Medusa is an automatic video library manager for TV Shows written in Python. It watches for new episodes of your favorite shows, and when they are posted it does its magic.",source:"@site/docs/applications/medusa.mdx",slug:"/applications/medusa",permalink:"/applications/medusa",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/medusa.mdx",version:"current",sidebar_label:"Medusa",sidebar:"docs",previous:{title:"Lidarr",permalink:"/applications/lidarr"},next:{title:"Ombi",permalink:"/applications/ombi"}},l=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]}],u={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"(py)Medusa is an automatic video library manager for TV Shows written in Python. It watches for new episodes of your favorite shows, and when they are posted it does its magic."),Object(s.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(s.b)("p",null,"Installing Medusa is easy. Simply issue the following command from SSH:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-plaintext",metastring:"main",main:!0}),"sudo box install medusa\n")),Object(s.b)("p",null,"This command will install and configure medusa for your user."),Object(s.b)("h2",{id:"how-to-access"},"How to Access"),Object(s.b)("p",null,"After installation, you can access Medusa at the url: ",Object(s.b)("inlineCode",{parentName:"p"},"https://<yourhostname.ltd>/medusa")),Object(s.b)("h2",{id:"service-management"},"Service Management"),Object(s.b)("p",null,"Despite using a multi-user service name, multi-user for medusa is not enabled by default."),Object(s.b)("p",null,"The systemd service file resides at:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"/etc/systemd/system/medusa@.service\n")),Object(s.b)(i.default,{service:"medusa@<username>",mdxType:"SystemdTabs"}))}d.isMDXComponent=!0},156:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,p=d["".concat(i,".").concat(m)]||d[m]||b[m]||s;return a?r.a.createElement(p,o(o({ref:t},l),{},{components:a})):r.a.createElement(p,o({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},157:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(160),i=a(159),o=a(58),c=a.n(o),l=37,u=39;t.a=function(e){var t=e.block,a=e.children,o=e.defaultValue,d=e.values,b=e.groupId,m=e.className,p=Object(s.a)(),f=p.tabGroupChoices,y=p.setTabGroupChoices,v=Object(n.useState)(o),O=v[0],h=v[1],j=Object(n.useState)(!1),w=j[0],g=j[1];if(null!=b){var T=f[b];null!=T&&T!==O&&d.some((function(e){return e.value===T}))&&h(T)}var x=function(e){h(e),null!=b&&y(b,e)},k=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},N=function(){g(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",E),window.addEventListener("mousedown",N),function(){window.removeEventListener("keydown",E),window.removeEventListener("mousedown",N)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},m)},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",t,c.a.tabItem,{"tabs__item--active":O===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),E(e)},onFocus:function(){return x(t)},onClick:function(){x(t),g(!1)},onPointerDown:function(){return g(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===O}))[0]))}},158:function(e,t,a){"use strict";var n=a(3),r=a(0),s=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return s.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},56:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),s=(a(0),a(156)),i=a(157),o=a(158),c=a(161),l={},u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current"},d=[],b={toc:d};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"code"},Object(s.b)(i.a,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(s.b)(o.a,{value:"status",mdxType:"TabItem"},Object(s.b)(c.a,{children:"sudo systemctl status "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(o.a,{value:"start",mdxType:"TabItem"},Object(s.b)(c.a,{children:"sudo systemctl start "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(o.a,{value:"stop",mdxType:"TabItem"},Object(s.b)(c.a,{children:"sudo systemctl stop "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(o.a,{value:"restart",mdxType:"TabItem"},Object(s.b)(c.a,{children:"sudo systemctl restart "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(o.a,{value:"enable",mdxType:"TabItem"},Object(s.b)(c.a,{children:"sudo systemctl enable "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(o.a,{value:"disable",mdxType:"TabItem"},Object(s.b)(c.a,{children:"sudo systemctl disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}m.isMDXComponent=!0}}]);