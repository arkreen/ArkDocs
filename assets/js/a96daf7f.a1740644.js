"use strict";(self.webpackChunkarkreen_docs=self.webpackChunkarkreen_docs||[]).push([[5461],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(a),d=n,k=c["".concat(l,".").concat(d)]||c[d]||h[d]||o;return a?r.createElement(k,s(s({ref:t},p),{},{components:a})):r.createElement(k,s({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var m=2;m<o;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7258:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const o={},s="Proof of Green-Energy Generation",i={unversionedId:"technical-details/proof-of-green-energy-generation",id:"technical-details/proof-of-green-energy-generation",title:"Proof of Green-Energy Generation",description:"The Arkreen Network uses a novel algorithm called Proof of Green-Energy Generation (PoGG) to monitor Arkreen Network\u2019s green power generation. All miners who correctly fulfill the PoGG task will be rewarded. The PoGG helps the Arkreen Network measure its generation capacity, which is the basis for the network to provide green energy data asset related services.",source:"@site/docs/technical-details/proof-of-green-energy-generation.md",sourceDirName:"technical-details",slug:"/technical-details/proof-of-green-energy-generation",permalink:"/ArkDocs/docs/technical-details/proof-of-green-energy-generation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/technical-details/proof-of-green-energy-generation.md",tags:[],version:"current",frontMatter:{},sidebar:"ArkreenSidebar",previous:{title:"Standard Miner Installation",permalink:"/ArkDocs/docs/how-to-use/standard-miner-installation"},next:{title:"Electricity-generation data Storage in Filecoin",permalink:"/ArkDocs/docs/technical-details/electricity-generation-data-storage-in-filecoin"}},l={},m=[{value:"How does a Miner fulfill the PoGG task?",id:"how-does-a-miner-fulfill-the-pogg-task",level:2},{value:"How does Arkreen Network determine which Miner will be rewarded?",id:"how-does-arkreen-network-determine-which-miner-will-be-rewarded",level:2},{value:"How does Arkreen Network calculate the token amount that a Miner will earn?",id:"how-does-arkreen-network-calculate-the-token-amount-that-a-miner-will-earn",level:2},{value:"How does Arkreen Network verify the trustworthiness of PoGG data?",id:"how-does-arkreen-network-verify-the-trustworthiness-of-pogg-data",level:2},{value:"How does Arkreen Network calculate a miner\u2019s normalized* data quantity?",id:"how-does-arkreen-network-calculate-a-miners-normalized-data-quantity",level:2},{value:"How does Arkreen Network calculate a miner\u2019s normalized energy volume?",id:"how-does-arkreen-network-calculate-a-miners-normalized-energy-volume",level:2}],p={toc:m};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"proof-of-green-energy-generation"},"Proof of Green-Energy Generation"),(0,n.kt)("p",null,"The Arkreen Network uses a novel algorithm called ",(0,n.kt)("strong",{parentName:"p"},"Proof of Green-Energy Generation")," (PoGG) to monitor Arkreen Network\u2019s green power generation. All miners who correctly fulfill the PoGG task will be rewarded. The PoGG helps the Arkreen Network measure its generation capacity, which is the basis for the network to provide green energy data asset related services."),(0,n.kt)("h2",{id:"how-does-a-miner-fulfill-the-pogg-task"},"How does a Miner fulfill the PoGG task?"),(0,n.kt)("p",null,"The Arkreen network rewards Miners who consistently report high-quality green electricity production data. All Miners connected to the Arkreen network need to sample data every 5 minutes and cache it locally, and report the data cached in the current time period every 1 hour. After the Miner reports this data, it can clear the local cache data and prepare for the next data report. The green electricity production data that each miner will sample includes the following below:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"second"),(0,n.kt)("td",{parentName:"tr",align:null},"Sample time, seconds since 1970/01/01 00:00:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"power"),(0,n.kt)("td",{parentName:"tr",align:null},"mW (milliWatt)"),(0,n.kt)("td",{parentName:"tr",align:null},"Real-time power generation at sampling")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"total"),(0,n.kt)("td",{parentName:"tr",align:null},"mWh (milliwatt","*","hour)"),(0,n.kt)("td",{parentName:"tr",align:null},"Miner's cumulative energy generation since onboarding")))),(0,n.kt)("h2",{id:"how-does-arkreen-network-determine-which-miner-will-be-rewarded"},"How does Arkreen Network determine which Miner will be rewarded?"),(0,n.kt)("p",null,"Every miner has a chance to earn the PoGG reward about every 60 epochs. In the first block of every epoch, Arkreen Network will generate a key pair, and publish the public key (verifiable random number). In the first block of the next epoch, Arkreen Network will use the private key of the key pair to decide the miners that will be rewarded and publish the private key (verifiable evidence). The decision process flow is listed hereunder:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Each reward period (epoch) starts, assuming the block height is H, Arkreen Network randomly generates key pairs SK and PK, the public key PK is submitted to the network as the commitment transaction content, the private key SK is kept by the network."),(0,n.kt)("li",{parentName:"ul"},"When the block height is H+60, the reward will be distributed. Assume that the number of legal data sent by Miner in the statistical period is N, and assuming that Miner is eligible for 1 reward roughly every K blocks, the initial state K=60."),(0,n.kt)("li",{parentName:"ul"},"Calculate a SEED for each Miner, the calculation method is: SEED = SHA256(ECDH(SK, PKMiner) ","*"," N, BlockHashH..., BlockHashH+59) % K, PKMiner is the public key corresponding to the miner address"),(0,n.kt)("li",{parentName:"ul"},"When the SEED = 0 and the miner has legal uploaded data in the current epoch, then the miner can participate in the reward distribution."),(0,n.kt)("li",{parentName:"ul"},"In the reward distribution transaction phase, the network needs to disclose the private key SK , any miner can later judge whether the reward distribution is fair or not based on the private key SK disclosed by the network. In any epoch, if no miner is rewarded, the token of the reward pool will be given to Arkreen Treasury.")),(0,n.kt)("h2",{id:"how-does-arkreen-network-calculate-the-token-amount-that-a-miner-will-earn"},"How does Arkreen Network calculate the token amount that a Miner will earn?"),(0,n.kt)("p",null,"Arkreen Network distributes the reward to the miners according to the trustworthiness of green energy generation data, the normalized quantity of data and the normalized volume of energy, the detailed calculation process is as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"According to verifiable evidence, filter out a list of all miners eligible for rewards."),(0,n.kt)("li",{parentName:"ul"},"Calculate the data authenticity of all miners eligible for rewards in the current epoch, the quantity of normalized reported data, and the normalized energy volume."),(0,n.kt)("li",{parentName:"ul"},"Calculate the contributions per each miner as: authenticity ","*"," quantity ","*"," volume"),(0,n.kt)("li",{parentName:"ul"},"Calculate the reward proportion that each miner should receive, which is the proportion of each miner's total contribution to all winning miners."),(0,n.kt)("li",{parentName:"ul"},"Proportionately distributed to each winning miner based on the amount of AKRE minted per epoch.")),(0,n.kt)("h2",{id:"how-does-arkreen-network-verify-the-trustworthiness-of-pogg-data"},"How does Arkreen Network verify the trustworthiness of PoGG data?"),(0,n.kt)("p",null,"In order to avoid miners reporting false power generation data to the network, Arkreen Network uses a novel method for data authenticity judgment. The judging method is as follows: firstly, according to the external weather and photovoltaic oracle data, it is judged whether the power generation data is within the legal range. If the data exceeds the upper limit of the theoretical power generation capacity, the data trustworthiness score will be 0, and the miners will not be able to obtain reward income. Secondly, according to the average real-time power of the miner, the real-time power data obtained by sampling the data statistics window is normalized, and the real-time power vector is obtained."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(3385).Z,width:"434",height:"438"})),(0,n.kt)("p",null,"Thirdly, find other miners within a certain distance around the miner, and calculate the similarity between the target miner and the real-time power vector of each surrounding miner. The more similarities between the surrounding miners and the target miner's real-time power vector, the more rewards the target miner gets, but the total number does not exceed 6."),(0,n.kt)("h2",{id:"how-does-arkreen-network-calculate-a-miners-normalized-data-quantity"},"How does Arkreen Network calculate a miner\u2019s normalized","*"," data quantity?"),(0,n.kt)("p",null,"In order to encourage miners to report power generation data stably for a long time, and avoid miners reporting too much data to harm the normal operation of Arkreen Network, Arkreen Network uses the following regularization calculation method to count the amount of power generation data reported by miners."),(0,n.kt)("p",null,"The statistical time window for the network to calculate the amount of data sent by each miner is 168 epochs (about 1 week). In each epoch time period, a miner can report data multiple times, but the number of legal data recognized in one epoch is 12 (sampling once every 5 minutes, each epoch is 60 minutes, so the number of legal sampling data is 12 ). Therefore, the amount of data reported by the miner is the total amount of data reported by all epochs within the statistical time window. If the miner does not report data within an epoch, the number of data in the epoch is 0."),(0,n.kt)("h2",{id:"how-does-arkreen-network-calculate-a-miners-normalized-energy-volume"},"How does Arkreen Network calculate a miner\u2019s normalized energy volume?"),(0,n.kt)("p",null,"Because the power generation of large power plants is much larger than that of small power plants, in order to avoid most of the rewards from being allocated to large power plants and the enthusiasm of small power plants to participate, Arkreen Network regularizes the power generation of miners. The calculation method is: The power generation of each miner in the statistical time window is calculated in mWh (milliwatt-hour) units, and the power generation data is calculated per the formula:"),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"v"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"m"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"e"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"m"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"z"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"d"))),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mroot",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mroot"},(0,n.kt)("mi",{parentName:"mrow"},"v"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"m"),(0,n.kt)("mi",{parentName:"mrow"},"e")),(0,n.kt)("mn",{parentName:"mroot"},"5"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"volume_{normalized} = \\sqrt[5]{volume}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"or"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"ma"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.01968em"}},"l"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"ze"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.04em",verticalAlign:"-0.0589em"}}),(0,n.kt)("span",{parentName:"span",className:"mord sqrt"},(0,n.kt)("span",{parentName:"span",className:"root"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8755em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.0533em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"5")))))))),(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9811em"}},(0,n.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord",style:{paddingLeft:"0.833em"}},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"))),(0,n.kt)("span",{parentName:"span",style:{top:"-2.9411em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"}},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},(0,n.kt)("path",{parentName:"svg",d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"}))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.0589em"}},(0,n.kt)("span",{parentName:"span"})))))))))),(0,n.kt)("p",null,"Arkreen Network uses the normalized volume to calculate PoGG reward."))}c.isMDXComponent=!0},3385:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/POGG_1-30e90977d2db4d0cb93e7879f5028078.png"}}]);