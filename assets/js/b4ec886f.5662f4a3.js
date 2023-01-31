"use strict";(self.webpackChunkarkreen_docs=self.webpackChunkarkreen_docs||[]).push([[827],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,m=d["".concat(l,".").concat(u)]||d[u]||k[u]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3698:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="Network Primitives",c={unversionedId:"token/network-primitives",id:"token/network-primitives",title:"Network Primitives",description:"Epochs",source:"@site/docs/token/network-primitives.md",sourceDirName:"token",slug:"/token/network-primitives",permalink:"/token/network-primitives",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"ArkreenSidebar",previous:{title:"What is AKRE?",permalink:"/token/what-is-akre"},next:{title:"Token Distribution",permalink:"/token/token-distribution"}},l={},s=[{value:"Epochs",id:"epochs",level:2},{value:"Transactions",id:"transactions",level:2},{value:"Accounts, Wallets and Keys",id:"accounts-wallets-and-keys",level:2}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"network-primitives"},"Network Primitives"),(0,a.kt)("h2",{id:"epochs"},"Epochs"),(0,a.kt)("p",null,"Arkreen Network marks the passing of an epoch **** approximately every 60 minutes (one hour). Mining rewards are distributed per epoch (as opposed to per block in most blockchain-based systems). At the conclusion of each epoch, the Arkreen Foundation will update the ledger for all the AKRE produced from that epoch period."),(0,a.kt)("p",null,"The epochs in different duration is listed in the below table:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("div",{style:{width:"200px"}},"Duration ")),(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("div",{style:{width:"200px"}},"Epochs")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Day"),(0,a.kt)("td",{parentName:"tr",align:"center"},"24")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Week"),(0,a.kt)("td",{parentName:"tr",align:"center"},"168")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Month"),(0,a.kt)("td",{parentName:"tr",align:"center"},"720")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Year"),(0,a.kt)("td",{parentName:"tr",align:"center"},"8,640")))),(0,a.kt)("h2",{id:"transactions"},"Transactions"),(0,a.kt)("p",null,"The Arkreen Network has many transaction types. The following are the most important ones: Registration transaction: adding a Solar Miner to the Arkreen network; Rewards transaction: trigger the Arkreen network to reward each participant."),(0,a.kt)("h2",{id:"accounts-wallets-and-keys"},"Accounts, Wallets and Keys"),(0,a.kt)("p",null,"The Arkreen Network uses an EVM compatible ERC20 smart contract to manage participant\u2019s token balance. Users can use the Arkreen mobile application wallet and manage their balance."))}d.isMDXComponent=!0}}]);