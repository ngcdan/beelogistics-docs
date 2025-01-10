"use strict";(self.webpackChunkbeelogistics_docs=self.webpackChunkbeelogistics_docs||[]).push([[259],{6642:(n,i,c)=>{c.r(i),c.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>o,frontMatter:()=>t,metadata:()=>r,toc:()=>g});var h=c(216),e=c(9304);const t={sidebar_position:4},s="Quy tr\xecnh LCL",r={id:"crm/sales/lcl_process",title:"Quy tr\xecnh LCL",description:"1. T\xecm ki\u1ebfm gi\xe1",source:"@site/docs/crm/sales/lcl_process.md",sourceDirName:"crm/sales",slug:"/crm/sales/lcl_process",permalink:"/zh-Hans/docs/crm/sales/lcl_process",draft:!1,unlisted:!1,editUrl:"https://github.com/ngcdan/beelogistics-docs/tree/main/docs/crm/sales/lcl_process.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quy tr\xecnh FCL",permalink:"/zh-Hans/docs/crm/sales/fcl_process"},next:{title:"Quy tr\xecnh Air Freight",permalink:"/zh-Hans/docs/crm/sales/air_process"}},l={},g=[{value:"1. T\xecm ki\u1ebfm gi\xe1",id:"1-t\xecm-ki\u1ebfm-gi\xe1",level:2},{value:"2. T\u1ea1o b\xe1o gi\xe1.",id:"2-t\u1ea1o-b\xe1o-gi\xe1",level:2},{value:"Tr\u01b0\u1eddng h\u1ee3p 1: C\xf3 gi\xe1 trong h\u1ec7 th\u1ed1ng",id:"tr\u01b0\u1eddng-h\u1ee3p-1-c\xf3-gi\xe1-trong-h\u1ec7-th\u1ed1ng",level:3},{value:"Tr\u01b0\u1eddng h\u1ee3p 2: Kh\xf4ng c\xf3 gi\xe1 trong h\u1ec7 th\u1ed1ng",id:"tr\u01b0\u1eddng-h\u1ee3p-2-kh\xf4ng-c\xf3-gi\xe1-trong-h\u1ec7-th\u1ed1ng",level:3},{value:"Th\xf4ng tin c\u01b0\u1edbc bi\u1ec3n v\xe0 Local Charge.",id:"th\xf4ng-tin-c\u01b0\u1edbc-bi\u1ec3n-v\xe0-local-charge",level:3},{value:"(1) \u1ede m\xe0n h\xecnh Ocean Freight c\xf3 c\xe1c n\xfat ch\u1ee9c n\u0103ng nh\u01b0:",id:"1-\u1edf-m\xe0n-h\xecnh-ocean-freight-c\xf3-c\xe1c-n\xfat-ch\u1ee9c-n\u0103ng-nh\u01b0",level:5},{value:"(2) C\xe1c ch\u1ee9c n\u0103ng li\xean quan \u0111\u1ebfn Local Charge:",id:"2-c\xe1c-ch\u1ee9c-n\u0103ng-li\xean-quan-\u0111\u1ebfn-local-charge",level:5},{value:"Khai quan/ Trucking",id:"khai-quan-trucking",level:4},{value:"Ch\u1ec9nh s\u1eeda v\xe0 l\u01b0u b\xe1o gi\xe1",id:"ch\u1ec9nh-s\u1eeda-v\xe0-l\u01b0u-b\xe1o-gi\xe1",level:4},{value:"C\xe1c ch\u1ee9c n\u0103ng kh\xe1c",id:"c\xe1c-ch\u1ee9c-n\u0103ng-kh\xe1c",level:4},{value:"3. T\u1ea1o IB, \u0111\u1ea9y th\xf4ng tin qua h\u1ec7 th\u1ed1ng BFSOne.",id:"3-t\u1ea1o-ib-\u0111\u1ea9y-th\xf4ng-tin-qua-h\u1ec7-th\u1ed1ng-bfsone",level:2}];function a(n){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,e.R)(),...n.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.header,{children:(0,h.jsx)(i.h1,{id:"quy-tr\xecnh-lcl",children:"Quy tr\xecnh LCL"})}),"\n",(0,h.jsx)(i.h2,{id:"1-t\xecm-ki\u1ebfm-gi\xe1",children:"1. T\xecm ki\u1ebfm gi\xe1"}),"\n",(0,h.jsx)(i.p,{children:"\u0110\u1ec3 t\xecm ki\u1ebfm gi\xe1 c\xf3 s\u1eb5n t\u1eeb h\u1ec7 th\u1ed1ng Pricing Tools (Logistics Prices), th\u1ef1c hi\u1ec7n c\xe1c b\u01b0\u1edbc sau:"}),"\n",(0,h.jsx)(i.p,{children:"Thao t\xe1c t\xecm ki\u1ebfm gi\xe1, check gi\xe1 nh\u01b0 \u0111\xe3 h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc \u0111\xf3."}),"\n",(0,h.jsx)(i.h2,{id:"2-t\u1ea1o-b\xe1o-gi\xe1",children:"2. T\u1ea1o b\xe1o gi\xe1."}),"\n",(0,h.jsx)(i.h3,{id:"tr\u01b0\u1eddng-h\u1ee3p-1-c\xf3-gi\xe1-trong-h\u1ec7-th\u1ed1ng",children:"Tr\u01b0\u1eddng h\u1ee3p 1: C\xf3 gi\xe1 trong h\u1ec7 th\u1ed1ng"}),"\n",(0,h.jsx)(i.p,{children:"Sau khi check v\xe0 t\xecm th\u1ea5y gi\xe1 ph\xf9 h\u1ee3p, anh ch\u1ecb click ch\u1ecdn v\xe0o gi\xe1 \u0111\xf3\n(c\xf3 th\u1ec3 ch\u1ecdn nhi\u1ec1u gi\xe1 t\u1eeb c\xe1c carrier kh\xe1c nhau - \u0111\u1ea3m b\u1ea3o chung tuy\u1ebfn)."}),"\n",(0,h.jsxs)(i.p,{children:["Click ti\u1ebfp n\xfat ",(0,h.jsx)(i.code,{children:"Request a Quote"})," \u0111\u1ec3 ti\u1ebfn h\xe0nh t\u1ea1o b\xe1o gi\xe1."]}),"\n",(0,h.jsx)(i.p,{children:"V\xed d\u1ee5, thao t\xe1c ch\u1ecdn gi\xe1 nh\u01b0 h\xecnh. Ph\u1ea7n m\u1ec1m chuy\u1ec3n qua m\xe0n h\xecnh b\xe1o gi\xe1."}),"\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.img,{alt:"Placeholder for Select the Rates",src:c(4929).A+"",width:"1920",height:"1080"})}),"\n",(0,h.jsx)(i.h3,{id:"tr\u01b0\u1eddng-h\u1ee3p-2-kh\xf4ng-c\xf3-gi\xe1-trong-h\u1ec7-th\u1ed1ng",children:"Tr\u01b0\u1eddng h\u1ee3p 2: Kh\xf4ng c\xf3 gi\xe1 trong h\u1ec7 th\u1ed1ng"}),"\n",(0,h.jsxs)(i.p,{children:["N\u1ebfu gi\xe1 kh\xf4ng c\xf3 s\u1eb5n, anh ch\u1ecb c\xf3 th\u1ec3 t\u1ef1 t\u1ea1o b\xe1o gi\xe1 custom b\u1eb1ng c\xe1ch click v\xe0o n\xfat ",(0,h.jsx)(i.code,{children:"Request a Quote"}),"."]}),"\n",(0,h.jsxs)(i.p,{children:["Ngo\xe0i ra, anh ch\u1ecb c\u0169ng c\xf3 th\u1ec3 g\u1eedi request y/c check gi\xe1 \u0111\u1ebfn pricing team b\u1eb1ng c\xe1ch click v\xe0o n\xfat ",(0,h.jsx)(i.code,{children:"Request Pricing"}),"."]}),"\n",(0,h.jsx)(i.p,{children:"M\xe0n h\xecnh b\xe1o gi\xe1 g\u1ed3m:"}),"\n",(0,h.jsxs)(i.ul,{children:["\n",(0,h.jsx)(i.li,{children:"M\xe0n h\xecnh th\xf4ng tin Inquiry (b\xean ph\u1ea3i)."}),"\n"]}),"\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.img,{alt:"Placeholder for Inquiry Info",src:c(9859).A+"",width:"1920",height:"867"})}),"\n",(0,h.jsxs)(i.ul,{children:["\n",(0,h.jsx)(i.li,{children:"M\xe0n h\xecnh th\xf4ng tin container/ b\u1ea3ng th\xf4ng tin b\xe1o gi\xe1. (b\xean tr\xe1i)"}),"\n"]}),"\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.img,{alt:"Placeholder for Container/ Quote List",src:c(9870).A+"",width:"1920",height:"871"})}),"\n",(0,h.jsx)(i.h3,{id:"th\xf4ng-tin-c\u01b0\u1edbc-bi\u1ec3n-v\xe0-local-charge",children:"Th\xf4ng tin c\u01b0\u1edbc bi\u1ec3n v\xe0 Local Charge."}),"\n",(0,h.jsx)(i.p,{children:"M\xe0n h\xecnh danh s\xe1ch c\u01b0\u1edbc Ocean Freight"}),"\n",(0,h.jsxs)(i.p,{children:["(",(0,h.jsx)(i.strong,{children:"L\u01b0u \xfd"}),": h\xe0ng LCL, c\u01b0\u1edbc \u0111\xe3 c\u1ed9ng th\xeam ph\u1ea7n commission cho Sales c\u1ee7a Lines)."]}),"\n",(0,h.jsx)(i.p,{children:"M\xe0n h\xecnh Local Charge t\u01b0\u01a1ng \u1ee9ng.\n(n\u1ebfu ch\u1ecdn nhi\u1ec1u gi\xe1, anh ch\u1ecb nh\xecn tr\xean b\u1ea3ng Ocean Freight, Local Charge \u0111ang hi\u1ec3n th\u1ecb t\u01b0\u01a1ng \u1ee9ng v\u1edbi gi\xe1 c\xf3 m\xe0u v\xe0ng - m\u1ed7i Local Charge t\u01b0\u01a1ng \u1ee9ng v\u1edbi t\u1eebng gi\xe1 c\u01b0\u1edbc)"}),"\n",(0,h.jsx)(i.h5,{id:"1-\u1edf-m\xe0n-h\xecnh-ocean-freight-c\xf3-c\xe1c-n\xfat-ch\u1ee9c-n\u0103ng-nh\u01b0",children:"(1) \u1ede m\xe0n h\xecnh Ocean Freight c\xf3 c\xe1c n\xfat ch\u1ee9c n\u0103ng nh\u01b0:"}),"\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.img,{alt:"Placeholder for Ocean Freight/Local Charge Image",src:c(8893).A+"",width:"1742",height:"1289"})}),"\n",(0,h.jsxs)(i.ul,{children:["\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsxs)(i.p,{children:[(0,h.jsx)(i.strong,{children:"Apply Margin"})," : \xc1p d\u1ee5ng t\u1ef7 l\u1ec7 margin v\u1edbi gi\xe1 g\u1ed1c (percent/amount)."]}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsxs)(i.p,{children:[(0,h.jsx)(i.strong,{children:"Match Price"}),": T\xecm l\u1ea1i gi\xe1 t\u1eeb h\u1ec7 th\u1ed1ng pricing. (TH pricing \u0111\xe3 updated b\u1ed5 sung th\xeam gi\xe1)"]}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsxs)(i.p,{children:[(0,h.jsx)(i.strong,{children:"Add Price"}),": Th\xeam gi\xe1 Ocean Freight th\u1ee7 c\xf4ng, t\u1ea1o th\xeam d\xf2ng m\u1edbi tr\xean b\u1ea3ng (TH kh\xf4ng c\xf3 s\u1eb5n gi\xe1 t\u1eeb h\u1ec7 th\u1ed1ng pricing tools)."]}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsxs)(i.p,{children:[(0,h.jsx)(i.strong,{children:"Clear Prices"}),": X\xf3a t\u1ea5t c\u1ea3 tr\xean b\u1ea3ng. (ch\u1ec9 xo\xe1 tr\xean b\xe1o gi\xe1 \u0111ang th\u1ef1c hi\u1ec7n, kh\xf4ng \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn d\u1eef li\u1ec7u pricing)"]}),"\n"]}),"\n"]}),"\n",(0,h.jsxs)(i.p,{children:["Ngo\xe0i ra, \u1edf \u0111\u1ea7u m\u1ed7i d\xf2ng b\xe1o gi\xe1 c\xf3 c\xe1c n\xfat l\u1ea7n l\u01b0\u1ee3t l\xe0 ",(0,h.jsx)(i.strong,{children:"copy, xem chi ti\u1ebft, x\xf3a"})]}),"\n",(0,h.jsx)(i.h5,{id:"2-c\xe1c-ch\u1ee9c-n\u0103ng-li\xean-quan-\u0111\u1ebfn-local-charge",children:"(2) C\xe1c ch\u1ee9c n\u0103ng li\xean quan \u0111\u1ebfn Local Charge:"}),"\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.img,{alt:"Placeholder for Ocean Freight/Local Charge Image",src:c(4776).A+"",width:"1735",height:"1272"})}),"\n",(0,h.jsxs)(i.ul,{children:["\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsxs)(i.p,{children:[(0,h.jsx)(i.strong,{children:"Add Origin"}),": Th\xeam Local Charge at Origin."]}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsxs)(i.p,{children:[(0,h.jsx)(i.strong,{children:"Add Dest"}),": Th\xeam Local Charge at Destination."]}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsxs)(i.p,{children:[(0,h.jsx)(i.strong,{children:"Apply Margin"})," : \xc1p d\u1ee5ng t\u1ef7 l\u1ec7 margin v\u1edbi gi\xe1 g\u1ed1c (percent/amount)."]}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsxs)(i.p,{children:[(0,h.jsx)(i.strong,{children:"Clear Prices"}),": X\xf3a t\u1ea5t c\u1ea3 tr\xean b\u1ea3ng."]}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(i.h4,{id:"khai-quan-trucking",children:"Khai quan/ Trucking"}),"\n",(0,h.jsx)(i.p,{children:"L\u01b0u \xfd, m\xe0n h\xecnh nh\u1eadp th\xf4ng tin gi\xe1 Trucking c\xf3 th\u1ec3 kh\xf4ng hi\u1ec3n th\u1ecb, \u0111i\u1ec1u n\xe0y ph\u1ee5 thu\u1ed9c v\xe0o incoterm (Tab th\xf4ng tin Inquiry)."}),"\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.img,{alt:"Placeholder for Custom / Trucking",src:c(5471).A+"",width:"1918",height:"871"})}),"\n",(0,h.jsxs)(i.ul,{children:["\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsxs)(i.p,{children:[(0,h.jsx)(i.strong,{children:"Add Origin"}),": Th\xeam Trucking/ Khai quan at Origin."]}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsxs)(i.p,{children:[(0,h.jsx)(i.strong,{children:"Add Dest"}),": Th\xeam Trucking/ Khai quan at Destination."]}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsxs)(i.p,{children:[(0,h.jsx)(i.strong,{children:"Clear Prices"}),": X\xf3a t\u1ea5t c\u1ea3 tr\xean b\u1ea3ng."]}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(i.h4,{id:"ch\u1ec9nh-s\u1eeda-v\xe0-l\u01b0u-b\xe1o-gi\xe1",children:"Ch\u1ec9nh s\u1eeda v\xe0 l\u01b0u b\xe1o gi\xe1"}),"\n",(0,h.jsxs)(i.ul,{children:["\n",(0,h.jsxs)(i.li,{children:["Sau khi ch\u1ec9nh s\u1eeda xong b\u1ea3ng gi\xe1, nh\u1ea5n ",(0,h.jsx)(i.strong,{children:"Save"})," \u0111\u1ec3 l\u01b0u b\xe1o gi\xe1."]}),"\n"]}),"\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.img,{alt:"Placeholder for Ocean Freight/Local Charge Image",src:c(2004).A+"",width:"1920",height:"866"})}),"\n",(0,h.jsx)(i.h4,{id:"c\xe1c-ch\u1ee9c-n\u0103ng-kh\xe1c",children:"C\xe1c ch\u1ee9c n\u0103ng kh\xe1c"}),"\n",(0,h.jsxs)(i.ul,{children:["\n",(0,h.jsxs)(i.li,{children:[(0,h.jsx)(i.em,{children:(0,h.jsx)(i.strong,{children:"Export Quotation"})}),": Xu\u1ea5t th\xf4ng tin b\xe1o gi\xe1."]}),"\n",(0,h.jsxs)(i.li,{children:[(0,h.jsx)(i.em,{children:(0,h.jsx)(i.strong,{children:"Mail"})}),": G\u1eedi mail cho kh\xe1ch h\xe0ng b\xe1o gi\xe1."]}),"\n",(0,h.jsxs)(i.li,{children:[(0,h.jsx)(i.em,{children:(0,h.jsx)(i.strong,{children:"Copy"})}),": T\u1ea1o b\u1ea3n sao quotation."]}),"\n",(0,h.jsxs)(i.li,{children:[(0,h.jsx)(i.em,{children:(0,h.jsx)(i.strong,{children:"Internal Booking"})}),": T\u1ea1o Booking trong h\u1ec7 th\u1ed1ng"]}),"\n"]}),"\n",(0,h.jsx)(i.h2,{id:"3-t\u1ea1o-ib-\u0111\u1ea9y-th\xf4ng-tin-qua-h\u1ec7-th\u1ed1ng-bfsone",children:"3. T\u1ea1o IB, \u0111\u1ea9y th\xf4ng tin qua h\u1ec7 th\u1ed1ng BFSOne."}),"\n",(0,h.jsx)(i.p,{children:"\u1ede m\xe0n h\xecnh Quotation, sau khi c\u1eadp nh\u1eadt th\xf4ng tin, kh\xe1ch h\xe0ng confirm gi\xe1."}),"\n",(0,h.jsx)(i.p,{children:"Anh ch\u1ecb ti\u1ebfn h\xe0nh t\u1ea1o IB, request cus m\u1edf File, thao t\xe1c nh\u01b0 sau:\nT\xedch ch\u1ecdn gi\xe1 Freight \u1edf m\xe0n h\xecnh danh s\xe1ch, sau \u0111\xf3 click ch\u1ecdn Internal Booking tr\xean thanh c\xf4ng c\u1ee5,"}),"\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.img,{alt:"Placeholder for Create IB Image",src:c(2823).A+"",width:"1920",height:"1080"})}),"\n",(0,h.jsx)(i.p,{children:"Ph\u1ea7n m\u1ec1m chuy\u1ec3n qua m\xe0n h\xecnh th\xf4ng tin IB:"}),"\n",(0,h.jsxs)(i.p,{children:["\u0110i\u1ec1n c\xe1c th\xf4ng tin c\u1ea7n thi\u1ebft, sau \u0111\xf3 nh\u1ea5p ",(0,h.jsx)(i.strong,{children:"Create"})," \u0111\u1ec3 ti\u1ebfn h\xe0nh t\u1ea1o. L\u01b0u \xfd r\u1eb1ng c\xe1c th\xf4ng tin b\u1eaft bu\u1ed9c bao g\u1ed3m: Kh\xe1ch h\xe0ng, \u0110\u1ea1i l\xfd, H\xe3ng t\xe0u/Colader, Ng\u01b0\u1eddi g\u1eedi, Ng\u01b0\u1eddi nh\u1eadn, ..."]}),"\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.img,{alt:"Placeholder for Create IB Image",src:c(2721).A+"",width:"1920",height:"870"})}),"\n",(0,h.jsx)(i.p,{children:"Sau khi t\u1ea1o, ph\u1ea7n m\u1ec1m hi\u1ec3n th\u1ecb n\xfat IBooking (BFSOne),\nanh ch\u1ecb click \u0111\u1ec3 g\u1eedi th\xf4ng tin cho customer service m\u1edf file."}),"\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.img,{alt:"Placeholder for Create IB Image",src:c(7419).A+"",width:"1663",height:"911"})})]})}function o(n={}){const{wrapper:i}={...(0,e.R)(),...n.components};return i?(0,h.jsx)(i,{...n,children:(0,h.jsx)(a,{...n})}):a(n)}},2823:(n,i,c)=>{c.d(i,{A:()=>h});const h=c.p+"assets/images/createIB-74f6587d80bddfdff24c960767fdf96f.gif"},7419:(n,i,c)=>{c.d(i,{A:()=>h});const h=c.p+"assets/images/push_to_bfsone-6c492a460ca076bb75b8a2a948212e3d.png"},5471:(n,i,c)=>{c.d(i,{A:()=>h});const h=c.p+"assets/images/lcl_custom_trucking_quote-95532244c2a9548e7b02670733395010.png"},2721:(n,i,c)=>{c.d(i,{A:()=>h});const h=c.p+"assets/images/lcl_ib_info-11b295e06210e690bad6d5c4235e2034.png"},9859:(n,i,c)=>{c.d(i,{A:()=>h});const h=c.p+"assets/images/lcl_inquiry_info-74a7dbd2ae3f622956e670a63b2e12d0.png"},2004:(n,i,c)=>{c.d(i,{A:()=>h});const h=c.p+"assets/images/lcl_quote_func-d5932dbe1e90a1189b9ba263c603354e.png"},9870:(n,i,c)=>{c.d(i,{A:()=>h});const h=c.p+"assets/images/lcl_quote_list-fd57c0e73e66f043b33d393566b25349.png"},4776:(n,i,c)=>{c.d(i,{A:()=>h});const h=c.p+"assets/images/local-charge-quote-2cf202cb8335067aac6d7ca3982aeccc.png"},8893:(n,i,c)=>{c.d(i,{A:()=>h});const h=c.p+"assets/images/ocean_freight_quote-b1e141288135727f82e07dae697c240e.png"},4929:(n,i,c)=>{c.d(i,{A:()=>h});const h=c.p+"assets/images/sales_request_quote-20c2f0cfff87df7e94cd7553a5f31724.gif"},9304:(n,i,c)=>{c.d(i,{R:()=>s,x:()=>r});var h=c(6372);const e={},t=h.createContext(e);function s(n){const i=h.useContext(t);return h.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function r(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:s(n.components),h.createElement(t.Provider,{value:i},n.children)}}}]);