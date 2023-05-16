"use strict";(self.webpackChunksoftpack_docs=self.webpackChunksoftpack_docs||[]).push([[839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Introduction",s={unversionedId:"overview/introduction",id:"overview/introduction",title:"Introduction",description:"This documentation is under development and may be incomplete.",source:"@site/docs/overview/introduction.md",sourceDirName:"overview",slug:"/overview/introduction",permalink:"/softpack-docs/docs/overview/introduction",draft:!1,tags:[],version:"current",lastUpdatedAt:1684270157,formattedLastUpdatedAt:"May 16, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Overview",permalink:"/softpack-docs/docs/category/overview"},next:{title:"Features",permalink:"/softpack-docs/docs/overview/features"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Documentation",id:"documentation",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This documentation is under development and may be incomplete.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SoftPack")," is an open-source software packaging platform for any operating\nsystem where Docker or Singularity are supported."),(0,o.kt)("p",null,"SoftPack is primarily aimed at scientific research community where running a\nstable yet flexible research software environment is a necessity. It is not\nuncommon for researchers to require their environments to be shared with other\nmembers of their team, either locally or across organizations."),(0,o.kt)("p",null,"A number of software packaging solutions already exist and generally work well\nwhen the number of dependencies remains manageable and the research environment\neither doesn't change very often or doesn't need to be shared with others,\nor both."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/"},"Conda")," (and its reimplementation\n",(0,o.kt)("a",{parentName:"p",href:"https://mamba.readthedocs.io/en/latest"},"Mamba"),") are the de-facto standard for\npython based scientific computing in single user environments.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/venv.html"},"venv")," combined with\n",(0,o.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable"},"Pip")," or especially ",(0,o.kt)("a",{parentName:"p",href:"https://python-poetry.org"},"Poetry"),"\noffer an excellent option for python package development but are limited elsewhere.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For R users, ",(0,o.kt)("a",{parentName:"p",href:"https://rstudio.github.io/renv/articles/renv.html"},"renv")," has\nsuperceded the now out-dated ",(0,o.kt)("a",{parentName:"p",href:"https://rstudio.github.io/packrat/"},"packrat")," and\nis a great option for managing different versions of a package or even different\nversions of R, but its utility is limited outside of R.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Other solutions like ",(0,o.kt)("a",{parentName:"p",href:"https://nixos.org"},"Nix"),", ",(0,o.kt)("a",{parentName:"p",href:"https://guix.gnu.org"},"Guix")," or\n",(0,o.kt)("a",{parentName:"p",href:"https://spack.io"},"Spack")," offer some promise but generally require higher\nlevels of maintenance and administration for the end-user to tackle on their\nown.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.sylabs.io/"},"Singularity"),", and\n",(0,o.kt)("a",{parentName:"p",href:"https://podman.io"},"Podman")," offer unmatched stability and reproducibility by")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"using containerization but with the added cost of steeper learning curve.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A number of home-grown tools have surfaced over the years but no solution\noffers stability, flexibility and ease of use in a multi-user shareable\nenvironment."))),(0,o.kt)("p",null,"SoftPack attempts to overcome the shortcomings of previous efforts, not by\nreinventing the wheel, but by leveraging the strengths of some of the packaging\nsolutions listed above and offering flexible multi-user environments with the\nstability of containers necessary for reproducible research."),(0,o.kt)("p",null,"SoftPack is more than just a package management tool, as it offers managed\nmulti-user software environments and administration tools for creating,\nmanaging, and discovering shareable environments. Under the hood, SoftPack uses\n",(0,o.kt)("a",{parentName:"p",href:"https://spack.io"},"Spack"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://rstudio.github.io/renv/articles/renv.html"},"renv"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.sylabs.io/"},"Singularity"),"\nbut without exposing the complexities of the underlying technology to the\nend-user."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"SoftPack runs on any POSIX-compliant operating system including any\ndistribution of Linux, FreeBSD, and macOS. SoftPack also supports virtual\nmachine environments including VirtualBox, Vagrant and VMware, provided the\noperating system running on the virtual machine supports Docker or Singularity.\nSoftPack has been tested on OpenStack and will  support Google Cloud\nPlatform (GCP) and Amazon Web Services (AWS)."),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"This documentation repository serves a dual-purpose -- it provides the\nspecifications needed for the development phase of the project, but it also\nincludes user-centric documentation with tutorials and how-to guides.\nSince the project is being developed with close cooperation with the\nresearchers in our scientific community, combining the developer's and\nend-user's documentation serves a valuable purpose at this time. However,\nonce the project has matured, the end-user documentation will branch off and\nwill be hosted elsewhere."))}d.isMDXComponent=!0}}]);