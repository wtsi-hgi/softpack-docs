"use strict";(self.webpackChunksoftpack_docs=self.webpackChunksoftpack_docs||[]).push([[256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},i="Getting Started",l={unversionedId:"tutorials/getting_started",id:"tutorials/getting_started",title:"Getting Started",description:"This documentation is under development and may be incomplete.",source:"@site/docs/tutorials/getting_started.md",sourceDirName:"tutorials",slug:"/tutorials/getting_started",permalink:"/softpack-docs/docs/tutorials/getting_started",draft:!1,tags:[],version:"current",lastUpdatedAt:1677053943,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Tutorials",permalink:"/softpack-docs/docs/category/tutorials"},next:{title:"How-to Guides",permalink:"/softpack-docs/docs/category/how-to-guides"}},s={},c=[{value:"Using a SoftPack environment",id:"using-a-softpack-environment",level:3},{value:"The module command",id:"the-module-command",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This documentation is under development and may be incomplete.")),(0,a.kt)("p",null,"This is a sneak-preview of the getting started guide. A detailed guide will be\navailable in ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/development_roadmap/#milestone-1"},"Milestone 1")),(0,a.kt)("h3",{id:"using-a-softpack-environment"},"Using a SoftPack environment"),(0,a.kt)("p",null,"Let's consider the scenario that you've somehow acquired a SoftPack environment\nthat you'd like to use for running some analysis in R."),(0,a.kt)("p",null,"The first step is to see what environments are available to you. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The exact mechanics of how modules appear in your shell are not covered in this\nguide yet.")),(0,a.kt)("h3",{id:"the-module-command"},"The module command"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"module")," command is the only command you need to learn in order to use an\nexisting SoftPack environment."),(0,a.kt)("p",null,"To get a list of all available modules, type ",(0,a.kt)("inlineCode",{parentName:"p"},"module avail")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ module avail\n-------------------------- /opt/softpack/modules ---------------------------\naa27/cairo/1  aa27/cairo/2  \n")),(0,a.kt)("p",null,"In the example above, there are two versions of the ",(0,a.kt)("inlineCode",{parentName:"p"},"aa27/cairo")," environment\navailable. The version number is automatically incremented when changes are\nmade to an environment. This ensures that users can rely on a stable\nenvironment when using a specific version number."),(0,a.kt)("p",null,"Having SoftPack environments version controlled the same way you use Git for\nversion controlling your code, allows the environments to be updated without\nrunning the risk of breaking any existing analysis that relies on a previous\nworking version of the environment."),(0,a.kt)("p",null,"Once you've identified the environment to use, you can load it with\n",(0,a.kt)("inlineCode",{parentName:"p"},"module load")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ module load aa27/cairo/2 \n")),(0,a.kt)("p",null,"Although not necessary, you can show a list of all modules currently loaded\nusing the ",(0,a.kt)("inlineCode",{parentName:"p"},"module list")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ module list\nCurrently Loaded Modulefiles:\n1) aa27/cairo/2\n")),(0,a.kt)("p",null,"Now that the module is loaded, you can run R and everyone's happy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-R"},"$ R\n\nR version 4.2.2 (2022-10-31) -- \"Innocent and Trusting\"\nCopyright (C) 2022 The R Foundation for Statistical Computing\nPlatform: x86_64-pc-linux-gnu (64-bit)\n\nR is free software and comes with ABSOLUTELY NO WARRANTY.\nYou are welcome to redistribute it under certain conditions.\nType 'license()' or 'licence()' for distribution details.\n\nR is a collaborative project with many contributors.\nType 'contributors()' for more information and\n'citation()' on how to cite R or R packages in publications.\n\nType 'demo()' for some demos, 'help()' for on-line help, or\n'help.start()' for an HTML browser interface to help.\nType 'q()' to quit R.\n\n>\n")))}p.isMDXComponent=!0}}]);