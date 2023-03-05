"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[6796],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:i,l[1]=r;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5734:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(4137)),l=["components"],r={id:"setup",title:"Getting a developer setup",sidebar_label:"Setup"},s=void 0,u={unversionedId:"dev/setup",id:"dev/setup",title:"Getting a developer setup",description:"VM",source:"@site/docs/dev/setup.md",sourceDirName:"dev",slug:"/dev/setup",permalink:"/dev/setup",draft:!1,editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/dev/setup.md",tags:[],version:"current",frontMatter:{id:"setup",title:"Getting a developer setup",sidebar_label:"Setup"},sidebar:"docs",previous:{title:"Introduction",permalink:"/dev/intro"},next:{title:"Structure",permalink:"/dev/structure"}},p={},c=[{value:"VM",id:"vm",level:2},{value:"Multipass",id:"multipass",level:3},{value:"LXD",id:"lxd",level:3},{value:"Parallels",id:"parallels",level:3},{value:"Editor and source code",id:"editor-and-source-code",level:2},{value:"Plugins",id:"plugins",level:3},{value:"Installation",id:"installation",level:2},{value:"Updating mechanism",id:"updating-mechanism",level:3},{value:"Testing mechanism",id:"testing-mechanism",level:2},{value:"Working across forks",id:"working-across-forks",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"vm"},"VM"),(0,o.kt)("p",null,"We highly suggest you use a virtualized environment to test your swizzin set up. It is extremely convenient to have this isolated from the rest of your system, and be able to discard and initialize a system within minutes."),(0,o.kt)("h3",{id:"multipass"},"Multipass"),(0,o.kt)("admonition",{title:"Sausage's preferred development setup",type:"tip"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enable virtualization OS and BIOS side"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://multipass.run"},"Install multipass")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"multipass shell")," to start a default primary VM and join the shell. "),(0,o.kt)("li",{parentName:"ol"},"Get swizzin repo on your VM",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"You can mount it wherever you want (your user directory should be auto-mounted into ",(0,o.kt)("inlineCode",{parentName:"li"},"/home/ubuntu")," if you're using the ",(0,o.kt)("inlineCode",{parentName:"li"},"primary")," instance)"),(0,o.kt)("li",{parentName:"ol"},"You can clone it wherever you want"))),(0,o.kt)("li",{parentName:"ol"},"Install swizzin with ",(0,o.kt)("inlineCode",{parentName:"li"},"bash /path/to/setup.sh --local"))),(0,o.kt)("h3",{id:"lxd"},"LXD"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TODO")),(0,o.kt)("h3",{id:"parallels"},"Parallels"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download your image"),(0,o.kt)("li",{parentName:"ol"},"Create a VM"),(0,o.kt)("li",{parentName:"ol"},"Run through the OS install"),(0,o.kt)("li",{parentName:"ol"},"Get swizzin repo on your VM",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"You can mount it wherever you want"),(0,o.kt)("li",{parentName:"ol"},"You can clone it wherever you want"))),(0,o.kt)("li",{parentName:"ol"},"Install swizzin with ",(0,o.kt)("inlineCode",{parentName:"li"},"bash /path/to/setup.sh --local")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Make a snapshot"))),(0,o.kt)("h2",{id:"editor-and-source-code"},"Editor and source code"),(0,o.kt)("p",null,"We highly suggest you keep your code on your host and mount it into your VM so your changes are kept when you throw away VMs, and so that you need to set up your git environment only once"),(0,o.kt)("p",null,"Our development setup is basically made for VSCode/Codium"),(0,o.kt)("h3",{id:"plugins"},"Plugins"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TODO")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please see contributors.md in the main repo while this is under development")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"This will install swizzin and as part of the setup, symlink your folder to ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/swizzin/"),". This is useful if your virtualization auto-mounts from your host. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash /path/to/setup.sh --local\n")),(0,o.kt)("p",null,"You can also already have the swizzin folder mounted/cloned in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/"),", this option will switch to use the ",(0,o.kt)("inlineCode",{parentName:"p"},".dev.lock")," option. This is useful if you're manually mounting the folder from your host, or have cloned directly into your VM."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash /etc/swizzin/setup.sh --local\n")),(0,o.kt)("h3",{id:"updating-mechanism"},"Updating mechanism"),(0,o.kt)("p",null,"The updater will always reset ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/swizzin")," to the latest commit in ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),", which you don't necessarily always want."),(0,o.kt)("p",null,"We have made a couple ways to make sure that you can skip that, so that you can then manipulate the content of the directory on your own."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Running ",(0,o.kt)("inlineCode",{parentName:"li"},"box update --local")),(0,o.kt)("li",{parentName:"ul"},"Making ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/swizzin")," a symlink to some other directory on your FS",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This should be done for you if you ran ",(0,o.kt)("inlineCode",{parentName:"li"},"setup.sh")," when it was located outside of ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/swizzin")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"--local")))),(0,o.kt)("li",{parentName:"ul"},"Adding ",(0,o.kt)("inlineCode",{parentName:"li"},".dev.lock")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/swizzin/"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This should be done for you if you ran ",(0,o.kt)("inlineCode",{parentName:"li"},"setup.sh")," when it was located in ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/swizzin")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"--local")),(0,o.kt)("li",{parentName:"ul"},"You can do ",(0,o.kt)("inlineCode",{parentName:"li"},"touch /etc/swizzin/.dev.lock"))))),(0,o.kt)("h2",{id:"testing-mechanism"},"Testing mechanism"),(0,o.kt)("p",null,"You can run ",(0,o.kt)("inlineCode",{parentName:"p"},"box test")," to test whether all packages are performing as intended. You can supply a specific set of packages (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"box test app1 app2"),") to test specifically those."),(0,o.kt)("p",null,"If you create  ",(0,o.kt)("inlineCode",{parentName:"p"},".test.lock")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/swizzin"),", the test will be performed on every applicable ",(0,o.kt)("inlineCode",{parentName:"p"},"box")," command executed (package and user management ones)"),(0,o.kt)("h2",{id:"working-across-forks"},"Working across forks"),(0,o.kt)("p",null,"If you need a branch from someplace else, please use the GitHub CLI tool ",(0,o.kt)("inlineCode",{parentName:"p"},"gh")),(0,o.kt)("p",null,"You can read how to install and use the tool on the ",(0,o.kt)("a",{parentName:"p",href:"https://cli.github.com/"},"GitHub CLI website"),"."),(0,o.kt)("p",null,"You can then just run ",(0,o.kt)("inlineCode",{parentName:"p"},"gh pr checkout 401")," to checkout PR #401"))}m.isMDXComponent=!0}}]);