"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[2842,865],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,v=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(6010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},4259:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),r=n(7294),o=n(6010),i=n(1048),l=n(3609),s=n(1943),u=n(2957),c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,p=e.defaultValue,v=e.values,f=e.groupId,b=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),T=w.tabGroupChoices,N=w.setTabGroupChoices,x=(0,r.useState)(k),O=x[0],Z=x[1],E=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=T[f];null!=C&&C!==O&&h.some((function(e){return e.value===C}))&&Z(C)}var S=function(e){var t=e.currentTarget,n=E.indexOf(t),a=h[n].value;a!==O&&(I(t),Z(a),null!=f&&N(f,String(a)))},j=function(e){var t,n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var o,i=E.indexOf(e.currentTarget)-1;n=null!=(o=E[i])?o:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:j,onClick:S},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},4546:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(9124),l=["components"],s={id:"navidrome",title:"Navidrome",sidebar_label:"Navidrome"},u=void 0,c={unversionedId:"applications/navidrome",id:"applications/navidrome",title:"Navidrome",description:"Navidrome is an open source web-based music collection server and streamer. It gives you freedom to listen to your music collection from any browser or mobile device. It's like your personal Spotify!",source:"@site/docs/applications/navidrome.mdx",sourceDirName:"applications",slug:"/applications/navidrome",permalink:"/applications/navidrome",draft:!1,editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/navidrome.mdx",tags:[],version:"current",frontMatter:{id:"navidrome",title:"Navidrome",sidebar_label:"Navidrome"},sidebar:"docs",previous:{title:"Mango",permalink:"/applications/mango"},next:{title:"Plex",permalink:"/applications/plex"}},d={},m=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"Upgrade",id:"upgrade",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Service Management",id:"service-management",level:2},{value:"Configuration",id:"configuration",level:2}],p={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Navidrome is an open source web-based music collection server and streamer. It gives you freedom to listen to your music collection from any browser or mobile device. It's like your personal Spotify!"),(0,o.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",null,"Installing navidrome is easy. Simply issue the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install navidrome\n")),(0,o.kt)("p",null,"This command will configure navidrome for your user."),(0,o.kt)("h2",{id:"upgrade"},"Upgrade"),(0,o.kt)("p",null,"Upgrading navidrome is as easy. Simply issue the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box upgrade navidrome\n")),(0,o.kt)("h2",{id:"how-to-access"},"How to Access"),(0,o.kt)("p",null,"After navidrome has been installed, it will be available for access at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/navidrome"),"."),(0,o.kt)("p",null,"The port is 4533."),(0,o.kt)("h2",{id:"service-management"},"Service Management"),(0,o.kt)(i.default,{service:"navidrome",mdxType:"SystemdTabs"}),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In order to get navidrome working, you need to do the following steps:"),(0,o.kt)("p",null,"After installing Navidrome in your platform, you need to create your first user. This will be your admin user, a super user that can manage all aspects of Navidrome, including the ability to manage other users. Just browse to Navidrome\u2019s homepage."),(0,o.kt)("p",null,"Just fill out the username and password you want to use, confirm the password and click on the \u201cCreate Admin\u201d button."),(0,o.kt)("p",null,"That\u2019s it! You should now be able to browse and listen to all your music."),(0,o.kt)("p",null,"You can find your music folder at ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/<username>/music"),"."),(0,o.kt)("p",null,"Note: It usually take a couple of minutes for your music to start appearing in Navidrome\u2019s UI. You can check the logs to see what is the scan progress."))}v.isMDXComponent=!0},9124:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return v}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(4259),l=n(425),s=n(9319),u=["components"],c={},d=void 0,m={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},p={},v=[],f={toc:v};function b(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"code"},(0,o.kt)(i.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"status",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"start",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"stop",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"restart",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"enable",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"disable",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0}}]);