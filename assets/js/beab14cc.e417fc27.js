"use strict";(self.webpackChunksoftpack_docs=self.webpackChunksoftpack_docs||[]).push([[256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,h=m["".concat(l,".").concat(c)]||m[c]||p[c]||r;return n?o.createElement(h,s(s({ref:t},d),{},{components:n})):o.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},s="Getting Started",i={unversionedId:"tutorials/getting_started",id:"tutorials/getting_started",title:"Getting Started",description:"This documentation is under development and may be incomplete.",source:"@site/docs/tutorials/getting_started.md",sourceDirName:"tutorials",slug:"/tutorials/getting_started",permalink:"/docs/tutorials/getting_started",draft:!1,tags:[],version:"current",lastUpdatedAt:1684265489,formattedLastUpdatedAt:"May 16, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Tutorials",permalink:"/docs/category/tutorials"},next:{title:"How-to Guides",permalink:"/docs/category/how-to-guides"}},l={},u=[{value:"Using a SoftPack environment",id:"using-a-softpack-environment",level:3},{value:"module whatis",id:"module-whatis",level:4},{value:"module help",id:"module-help",level:4},{value:"Loading a module",id:"loading-a-module",level:4},{value:"Running RStudio",id:"running-rstudio",level:3}],d={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This documentation is under development and may be incomplete.")),(0,a.kt)("h3",{id:"using-a-softpack-environment"},"Using a SoftPack environment"),(0,a.kt)("p",null,"This tutorial describes how to use a previously created SoftPack environment\nfor running Python, R or RStudio."),(0,a.kt)("p",null,"SoftPack environments are made available through the ",(0,a.kt)("inlineCode",{parentName:"p"},"module")," command. It's the\nonly command you need to learn in order to use a SoftPack environment.\nDocumentation for the ",(0,a.kt)("inlineCode",{parentName:"p"},"module")," command is available at the ",(0,a.kt)("a",{parentName:"p",href:"https://modules.sourceforge.net"},"Environment Modules"),"\nsite if you're new to modules."),(0,a.kt)("p",null,"The first step is to tell the ",(0,a.kt)("inlineCode",{parentName:"p"},"module")," command where to look for your\nenvironments. The following ",(0,a.kt)("inlineCode",{parentName:"p"},"module use")," command adds the directory where\nyour modules are installed. It's generally a good idea to add this command to\nyou shell startup file (",(0,a.kt)("inlineCode",{parentName:"p"},".bashrc")," or equivalent) so you don't have to do this\nmanually each time you start a new shell."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ module use --append /software/hgi/softpack/modules/users/$USER\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"module use")," command can also be used to verify that ",(0,a.kt)("inlineCode",{parentName:"p"},"module")," knows about\nall the directories where your modules are installed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ module use\nSearch path for module files (in search order):\n  /etc/environment-modules/modules\n  /usr/share/modules/versions\n  /usr/share/modules/modulefiles\n  /software/hgi/softpack/modules/users/aa27\n")),(0,a.kt)("p",null,"You can now run ",(0,a.kt)("inlineCode",{parentName:"p"},"module avail")," to get a list of all environments available to\nyou."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ module avail\n--------------------- /usr/share/modules/modulefiles --------------------- \ndot  module-git  module-info  modules  null  use.own\n\n---------------- /software/hgi/softpack/modules/users/aa27 ----------------\nseurat5/1.0\n")),(0,a.kt)("p",null,"There are two additional ",(0,a.kt)("inlineCode",{parentName:"p"},"module")," subcommands worth noting here."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"module whatis")," gives you a brief synopsis of what the module is about."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"module help")," describes the module in more detail.")),(0,a.kt)("h4",{id:"module-whatis"},"module whatis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ module whatis seurat5\n---------------- /software/hgi/softpack/modules/users/aa27 ----------------\n         seurat5/1.0: Softpack pilot with seurat 5, bpcells and monocle3\n")),(0,a.kt)("h4",{id:"module-help"},"module help"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ module help seurat5\n-------------------------------------------------------------------\nModule Specific Help for /software/hgi/softpack/modules/users/aa27/seurat5/1.0:\n\ndescription: Softpack pilot with seurat 5, bpcells and monocle3\nbuild:\n  id: 6cb0fb19-19c2-4cc6-8e4a-9587cca739a0\n  image: /software/hgi/softpack/images/6cb0fb19-19c2-4cc6-8e4a-9587cca739a0.sif\n  created: 2023-04-28 16:34:42\n  updated: 2023-04-28 22:15:44\npackages:\n  - r-afex\n  - r-affy\n  - r-affyio\n  - r-annotationfilter\n:  \n")),(0,a.kt)("h4",{id:"loading-a-module"},"Loading a module"),(0,a.kt)("p",null,"To load a module, simply run ",(0,a.kt)("inlineCode",{parentName:"p"},"module load")," with the name of an available module."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ module load seurat5\nLoading seurat5/1.0\n  Loading requirement: /software/modules/ISG/singularity/3.10.0\n")),(0,a.kt)("p",null,"You can get a list of all loaded modules using the ",(0,a.kt)("inlineCode",{parentName:"p"},"module list")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ module list\nCurrently Loaded Modulefiles:\n 1) /software/modules/ISG/singularity/3.10.0   2) seurat5/1.0\n\n")),(0,a.kt)("p",null,"Now that the module is loaded, you can run Python, R or RStudio."),(0,a.kt)("h3",{id:"running-rstudio"},"Running RStudio"),(0,a.kt)("p",null,"SoftPack environments that include RStudio will include a new ",(0,a.kt)("inlineCode",{parentName:"p"},"rstudio")," command\nthat starts a batch job on your high performance cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ rstudio\nUsage: rstudio [OPTIONS] COMMAND [ARGS]...\n\nOptions:\n  --help  Show this message and exit.\n\nCommands:\n  list   List running RStudio servers.\n  start  Start RStudio server.\n  stop   Stop RStudio server.\n")),(0,a.kt)("p",null,"To start a new RStudio session, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"rstudio start")," command. The\n",(0,a.kt)("inlineCode",{parentName:"p"},"rstudio start")," command supports the following optional arguments."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ rstudio start --help\nUsage: rstudio start [OPTIONS]\n\n  Start RStudio server.\n\nOptions:\n  --home PATH            home directory inside the container.  [default:\n                         /nfs/users/nfs_a/aa27]\n  -M MB                  sets the memory limit for the job (in MB).  [default:\n                         15000]\n  -n MIN[,MAX]           submits a parallel job and specifies the number of\n                         tasks in the job.  [default: 2]\n  -o, --output FILENAME  output filename.  [default: rstudio_session.log]\n  --pwd PATH             initial working directory inside the container.\n                         [default: /nfs/users/nfs_a/aa27]\n  -q, --queue QUEUE      submits the job to the specified queue.\n  --r-libs-user PATH     specifies additional directories for R packages.\n  --help                 Show this message and exit.\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can change the home directory used inside RStudio using ",(0,a.kt)("inlineCode",{parentName:"p"},"--home")," argument\nor by changing you current directory before starting the RStudio session.")),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"rstudio start")," submits a batch job, starts RStudio server and provides\nyou with instructions on how to connect to your RStudio session as shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ rstudio start\nLSF job options:\n\nio:\n  errorAppendFile: rstudio_session.log\n  outputAppendFile: rstudio_session.log\nlimit:\n  memLimit: 15000\nproperties:\n  jobName: aa27/rstudio-server\nresource:\n  numTasks: '2'\n  resReq: select[model==Intel_Platinum && mem>15000] rusage[tmp=5000, mem=15000] span[hosts=1]\n\nJob <22845162> is submitted to default queue <normal>.\n\nWaiting for RStudio server to start ...\n\nTo access the server, open one of these URLs in a browser and login with the credentials below:\n\n    http://node-10-3-4.internal.sanger.ac.uk:33025\n    http://172.27.224.27:33025\n\n    username: aa27\n    password: iJX7MCV1w+6IPyXcYs9H\n")),(0,a.kt)("p",null,"Once you're finished with RStudio, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"rstudio stop")," command to terminate\nthe session."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ rstudio stop\nJob <22845162> is being terminated\n")),(0,a.kt)("p",null,"You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"rstudio list")," command to get a list of all running\nsessions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ rstudio list\nJOBID   USER    STAT  QUEUE      FROM_HOST   EXEC_HOST   JOB_NAME   SUBMIT_TIME\n22845162 aa27    RUN   normal     hgi-farm5   node-10-3-4:node-10-3-4 aa27/rstudio-server May  2 11:21\n")))}p.isMDXComponent=!0}}]);