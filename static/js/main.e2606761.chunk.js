(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{123:function(e,t,n){e.exports={link:"CustomToasts_link__1FhVf",button:"CustomToasts_button__1TDac"}},124:function(e,t,n){e.exports={header:"Header_header__3mwC4",inner:"Header_inner__2M9F8",links:"Header_links__2o1XA",link:"Header_link__khm6Y"}},179:function(e,t,n){e.exports={title:"Headings_title__3Cmug",type_h1:"Headings_type_h1__1_YtQ",type_h2:"Headings_type_h2__1C7s1",type_h3:"Headings_type_h3__xtYGt",align_left:"Headings_align_left__2J2wV",align_center:"Headings_align_center__2-LQQ",align_right:"Headings_align_right__-P_eW",color_main:"Headings_color_main__33PQq"}},283:function(e,t,n){e.exports={block:"FirstBlock_block__25tft",arrow:"FirstBlock_arrow__17xIF"}},448:function(e,t,n){e.exports={button:"Button_button__2hcU_"}},46:function(e,t,n){e.exports={section:"MintSection_section__3koS-",right:"MintSection_right__HUHqd",left:"MintSection_left__5-fkN",mint:"MintSection_mint__ttgiH",title:"MintSection_title__L7CEi",subtitle:"MintSection_subtitle__1gSqs",info:"MintSection_info__2N7gw",amount:"MintSection_amount__2zDjr",value:"MintSection_value__3djbA",change:"MintSection_change__37oTN",button:"MintSection_button__3WSL4",center:"MintSection_center__1xM7W"}},468:function(e,t){},471:function(e,t){},473:function(e,t){},477:function(e,t){},501:function(e,t){},503:function(e,t){},512:function(e,t){},514:function(e,t){},524:function(e,t){},526:function(e,t){},55:function(e,t,n){e.exports={popup:"WalletConnectPopUp_popup__2Jaf3",active:"WalletConnectPopUp_active__16NJC",inner:"WalletConnectPopUp_inner__1F_1O",title:"WalletConnectPopUp_title__uQrAM",wallet:"WalletConnectPopUp_wallet__25Qd_",wallet_title:"WalletConnectPopUp_wallet_title__3SCG7"}},640:function(e,t){},642:function(e,t){},649:function(e,t){},650:function(e,t){},674:function(e,t){},681:function(e,t){},731:function(e,t){},758:function(e,t){},86:function(e,t,n){e.exports={content:"About_content__1njAx",left:"About_left__3mISc",right:"About_right__1ZWpC",right_title:"About_right_title__3Leh5",text:"About_text__18nYr",roadmap_title:"About_roadmap_title__2Bhbh",video:"About_video__2HFgl"}},873:function(e,t){},919:function(e,t,n){},92:function(e,t,n){e.exports={ham:"Burger_ham__31dR6",hamRotate:"Burger_hamRotate__OiUjg",active:"Burger_active__1UvPs",hamRotate180:"Burger_hamRotate180__36o2d",line:"Burger_line__1aZru",top:"Burger_top__3t4tC",bottom:"Burger_bottom__cnojB"}},920:function(e,t,n){"use strict";n.r(t);var a=n(213),i=n.n(a),s=n(152),r=n(1),o=n.n(r),l=n(9),c=n(85),u=n(6),p=n.n(u),d=n(281),b=n(11),m=n(14),y=n(439),f=n(60),h={network:{chainID:137,chainName:"Polygon",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpc:"https://rpc-mainnet.maticvigil.com/",blockExplorerUrl:"https://explorer.matic.network/"},provider:{MetaMask:{name:"MetaMask"},WalletConnect:{name:"WalletConnect",useProvider:"rpc",provider:{rpc:{rpc:Object(f.a)({},137,"https://rpc-mainnet.maticvigil.com/"),chainId:137}}}}},_={abi:[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"addressMintedBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"airdrop",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"airdropAddresses",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"airdropCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"cost",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"hiddenMetadataUri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"isWhitelisted",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxMintAmountPerTx",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_mintAmount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"nftPerAddressLimit",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"onlyWhitelisted",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"payments",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"processedAirdrops",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"revealed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"_users",type:"address[]"}],name:"setAirdropUsers",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_cost",type:"uint256"}],name:"setCost",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_hiddenMetadataUri",type:"string"}],name:"setHiddenMetadataUri",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxMintAmountPerTx",type:"uint256"}],name:"setMaxMintAmountPerTx",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_limit",type:"uint256"}],name:"setNftPerAddressLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_state",type:"bool"}],name:"setOnlyWhitelisted",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_state",type:"bool"}],name:"setPaused",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_payable",type:"address"}],name:"setPayable",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_state",type:"bool"}],name:"setRevealed",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_uriPrefix",type:"string"}],name:"setUriPrefix",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_uriSuffix",type:"string"}],name:"setUriSuffix",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"_users",type:"address[]"}],name:"setWhitelistedUsers",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"uriPrefix",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"uriSuffix",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"walletOfOwner",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"whitelistedAddresses",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],address:"0xA20c3F980086AC900650B02d2f8DCc59009b1156"},j=Math.pow(10,18),v=function(){function e(){Object(b.a)(this,e),this.walletConnect=void 0,this.walletConnect=new y.ConnectWallet}return Object(m.a)(e,[{key:"initWalletConnect",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.walletConnect.connect(h.provider[t],h.network,{providerType:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAccount",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.walletConnect.getAccounts());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"Web3",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return this.walletConnect.currentWeb3()}))},{key:"eventSubscribe",value:function(){return this.walletConnect.eventSubscriber()}},{key:"getMaticBalance",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.Web3().eth.getBalance(t);case 2:return n=e.sent,e.abrupt("return",+n/j);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"resetConnect",value:function(){this.walletConnect.resetConect()}}]),e}(),g=new v,x=n(279),O=n.n(x),w=function(){function e(){Object(b.a)(this,e),this.Web3=void 0,this.Web3=new O.a(h.network.rpc)}return Object(m.a)(e,[{key:"getContract",value:function(e,t){return new this.Web3.eth.Contract(e,t)}},{key:"resetWeb3",value:function(e){this.Web3=e}}]),e}(),T=new w,k=n(91),M=(n(917),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3,a=arguments.length>3?arguments[3]:void 0,i={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark",className:"notif-custom-css"},r={success:function(){return s.b.success(e,Object(k.a)(Object(k.a)({},i),{},{autoClose:n,onClick:a}))},info:function(){return s.b.info(e,Object(k.a)(Object(k.a)({},i),{},{autoClose:n,onClick:a}))},error:function(){return s.b.error(e,Object(k.a)(Object(k.a)({},i),{},{autoClose:n,onClick:a}))}};r[t]()}),N=n(449),C=n(71),A=n.n(C),S=n(179),E=n.n(S),I=["children","className","align","color"],P=function(e){return function(t){var n=t.children,a=t.className,i=void 0===a?"":a,s=t.align,r=void 0===s?"center":s,o=t.color,l=void 0===o?"main":o,c=Object(N.a)(t,I),u=Object(k.a)({className:A()(E.a["type_".concat(e)],E.a["align_".concat(r)],E.a["color_".concat(l)],E.a.title,i),children:n},c);return p.a.createElement(e,u,n)}},F=(P("h1"),P("h2"),P("h3"),P("h4"),P("h5"),P("h6"),n(123)),W=n.n(F),B=n(2),R=function(e){var t=e.txId;return Object(B.jsxs)("span",{children:["Polygon scaner tx:"," ",Object(B.jsx)("a",{className:W.a.link,target:"_blank",rel:"noreferrer noopener",href:"https://polygonscan.com/tx/".concat(t),children:"".concat(t.slice(0,5),"...").concat(t.slice(-5))})]})},H=function(e){var t=e.type,n=e.nftId;return Object(B.jsx)(B.Fragment,{children:"multiply"===t?Object(B.jsxs)("span",{children:["You can find your NFTs"," ",Object(B.jsx)("a",{className:W.a.link,target:"_blank",rel:"noreferrer noopener",href:"https://opensea.io/account",children:"here"})]}):Object(B.jsxs)("span",{children:["Your NFT is"," ",Object(B.jsx)("a",{className:W.a.link,target:"_blank",rel:"noreferrer noopener",href:"https://opensea.io/assets/mumbai/".concat(_.address,"/").concat(n),children:"here"})]})})},L=function(e){var t=e.tokensLeft,n=e.amountOfTokensToMint;return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)("span",{children:["You cannot mint ",n," tokens, as there are only ",t," left. Would you like to mint ",t," instead? ",Object(B.jsx)("span",{className:W.a.button,children:"YES!"})]})})},U=n(448),D=n.n(U),G=(n.p,n.p,n.p,n.p+"static/media/inst.4ea4c69d.webp"),Y=n.p+"static/media/discrod.16f5b493.webp",V=n.p+"static/media/twitter.2291614f.webp",K=n.p+"static/media/logo.fe3f3d66.webp",Q=n.p+"static/media/arrow_down.51d2cce6.webp",q=n.p+"static/media/about.62addcff.webp",J=n.p+"static/media/about_title.738e63cc.webp",X=n.p+"static/media/roadmap_title.0cb4a86a.webp",Z=n.p+"static/media/team_title.d183d81c.webp",z=n.p+"static/media/avatar.16822dc1.webp",$=n.p+"static/media/mint_bg.b2a7cc45.png";n.p,n.p;n.p;var ee,te=["title","titleId"];function ne(){return ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ne.apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ie(e,t){var n=e.title,a=e.titleId,i=ae(e,te);return u.createElement("svg",ne({width:38,height:38,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff",ref:t,"aria-labelledby":a},i),n?u.createElement("title",{id:a},n):null,ee||(ee=u.createElement("g",{fill:"none",fillRule:"evenodd"},u.createElement("g",{transform:"translate(1 1)",strokeWidth:2},u.createElement("circle",{strokeOpacity:.5,cx:18,cy:18,r:18}),u.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},u.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}))))))}var se=u.forwardRef(ie),re=(n.p,function(e){var t=e.children,n=e.onClick,a=e.className,i=e.loading;return Object(B.jsxs)("button",{disabled:i,className:A()(D.a.button,a),onClick:n,type:"button",children:[t,i&&Object(B.jsx)(se,{height:"20px"})]})}),oe=n(124),le=n.n(oe),ce=function(){return Object(B.jsx)("header",{className:le.a.header,children:Object(B.jsx)("div",{className:le.a.inner,children:Object(B.jsxs)("div",{className:le.a.links_inner,children:[Object(B.jsx)("a",{href:"https://www.instagram.com/ballygangnft/",target:"_blank",rel:"noreferrer noopener",className:le.a.link,children:Object(B.jsx)("img",{src:G,alt:"instagram link"})}),Object(B.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://discord.com/invite/7kBeXAFyUy",className:le.a.link,children:Object(B.jsx)("img",{src:Y,alt:"discord link"})}),Object(B.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://twitter.com/ballygangnft",className:le.a.link,children:Object(B.jsx)("img",{src:V,alt:"twitter link"})})]})})})};n(92),n(55);var ue=Object(u.createContext)({}),pe=function(e){var t=e.children,n=Object(u.useState)(),a=Object(c.a)(n,2),i=a[0],s=a[1],r=Object(u.useState)(),p=Object(c.a)(r,2),b=p[0],m=p[1],y=Object(u.useState)(0),f=Object(c.a)(y,2),j=f[0],v=f[1],x=Object(u.useState)(0),O=Object(c.a)(x,2),w=O[0],k=O[1],N=Object(u.useState)(0),C=Object(c.a)(N,2),A=C[0],S=C[1],E=Object(u.useState)(0),I=Object(c.a)(E,2),P=I[0],F=I[1],W=Object(u.useState)(!1),U=Object(c.a)(W,2),D=U[0],G=U[1],Y=Object(u.useCallback)((function(e){"accountsChanged"===e.name&&(s(e),M("Wallet changed: ".concat(e.address.slice(0,5),"...").concat(e.address.slice(-5))))}),[]),V=Object(u.useCallback)((function(e){console.error(e),4===e.code&&(g.resetConnect(),M("You changed to wrong network. Please choose ".concat(h.network.chainName),"error"),s({}))}),[]),K=Object(u.useCallback)(function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"MetaMask"!==t||window.ethereum||M("Please install MetaMask!","error"),e.next=3,g.initWalletConnect(t);case 3:if(!e.sent){e.next=19;break}return e.prev=5,T.resetWeb3(g.Web3()),e.next=9,g.getAccount();case 9:n=e.sent,M("Wallet connected: ".concat(n.address.slice(0,5),"...").concat(n.address.slice(-5)),"success"),n.address&&(s(n),localStorage.setItem("providerType",n.type)),a=g.eventSubscribe().subscribe(Y,V),m(a),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[5,16]])})));return function(t){return e.apply(this,arguments)}}(),[V,Y]),Q=Object(u.useCallback)((function(){s({}),localStorage.removeItem("providerType"),null===b||void 0===b||b.unsubscribe(),g.resetConnect()}),[b]),q=Object(u.useCallback)(function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,s,r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===i||void 0===i?void 0:i.address){e.next=4;break}return M("Please connect your wallet!"),K("MetaMask"),e.abrupt("return");case 4:return G(!0),e.prev=5,n=T.getContract(_.abi,_.address),e.next=9,n.methods.paused().call();case 9:if(!e.sent){e.next=14;break}return M("Minting is paused now!"),G(!1),e.abrupt("return");case 14:return e.next=16,n.methods.maxSupply().call();case 16:return a=e.sent,e.next=19,n.methods.totalSupply().call();case 19:if(s=e.sent,!((r=a-s)<t)){e.next=25;break}return r<=0?M("All NFTs have been sold!"):M(Object(B.jsx)(L,{tokensLeft:r,amountOfTokensToMint:t}),"info",15e3,(function(){return q(r)})),G(!1),e.abrupt("return");case 25:return e.next=27,g.getMaticBalance(i.address);case 27:if(l=e.sent,!(j*t>=l)){e.next=32;break}return M("You can't mint ".concat(t," tokens, as you don't have enough money")),G(!1),e.abrupt("return");case 32:return e.next=34,n.methods.mint(t).send({from:i.address,value:new d.a(t.toString()).times(new d.a(j)).times(Math.pow(10,18)).toFixed()}).on("transactionHash",(function(e){M(Object(B.jsx)(R,{txId:e}),"info",1e4)})).then((function(e){Array.isArray(e.events.Transfer)?M(Object(B.jsx)(H,{type:"multiply"}),"success",1e4):M(Object(B.jsx)(H,{type:"single",nftId:e.events.Transfer.returnValues.tokenId}),"success",1e4)}));case 34:G(!1),e.next=40;break;case 37:e.prev=37,e.t0=e.catch(5),G(!1);case 40:case"end":return e.stop()}}),e,null,[[5,37]])})));return function(t){return e.apply(this,arguments)}}(),[j,i,K]);return Object(u.useEffect)((function(){var e=T.getContract(_.abi,_.address);e.methods.cost().call().then((function(e){return v(e/Math.pow(10,18))})),e.methods.maxSupply().call().then((function(e){return k(e)})),e.methods.totalSupply().call().then((function(e){return S(e)}));var t=localStorage.getItem("providerType");t&&K(t)}),[K]),Object(u.useEffect)((function(){var e=T.getContract(_.abi,_.address);(null===i||void 0===i?void 0:i.address)&&e.methods.balanceOf(i.address).call().then((function(e){return F(e)}))}),[null===i||void 0===i?void 0:i.address]),Object(B.jsx)(ue.Provider,{value:{connect:K,account:i,disconnect:Q,mint:q,pricePerToken:j,isMinting:D,maxSupply:w,mintedAmount:A,userNftBalance:P},children:t})},de=function(){return Object(u.useContext)(ue)},be=n(283),me=n.n(be),ye=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("section",{className:me.a.block,children:Object(B.jsx)("img",{src:K,alt:"logo"})}),Object(B.jsx)("div",{className:me.a.arrow,children:Object(B.jsx)("img",{src:Q,alt:"arrow_down"})})]})},fe=n(86),he=n.n(fe),_e=function(){return Object(B.jsxs)("section",{className:he.a.about,children:[Object(B.jsxs)("div",{className:he.a.content,children:[Object(B.jsx)("div",{className:he.a.left,children:Object(B.jsx)("img",{src:q,alt:"about_bg"})}),Object(B.jsxs)("div",{className:he.a.right,children:[Object(B.jsx)("img",{className:he.a.right_title,src:J,alt:"about_title"}),Object(B.jsx)("div",{className:he.a.text,children:"The Bally Gang NFT is a collection of 8,888 NFT\u2019s with real life and virtual utilities. With over 300 traits, each NFT is unique and exclusive. Launching on the Ethereum Blockchain the Bally Gang NFT is offering high quality 3D art."})]})]}),Object(B.jsxs)("div",{className:he.a.roadmap,children:[Object(B.jsx)("div",{className:he.a.roadmap_title,children:Object(B.jsx)("img",{src:X,alt:"roadmap_title"})}),Object(B.jsx)("div",{className:he.a.video,children:Object(B.jsx)("iframe",{width:"100%",height:"415",src:"https://www.youtube.com/embed/6TCBjoY8tAM?autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})]})},je=[{title:"Phase one",subtitle:"Take off",list:["Launch of social media, discord & website","Access granted to the limited Whitelist","Release of 8,888 Bally Gang NFT\u2019s"]},{title:"Phase two",subtitle:"ACCESS TO THE GANG",list:["Each holder will now be a part of an exclusive community of creatives, entrepreneurs, industry leaders and powerful networkers in the business and entertainment industry.","Holders will have access to the 1st screening of NEVERLAND in the Metaverse. ","Holders will also have first access to purchase tickets to the live premier screening of NEVERLAND with the cast and crew in Sydney.","Holders will have access to our launch parties where you get the chance to rub shoulders with industry leaders."]},{title:"Phase three",subtitle:"BALLY UP",list:["There will be 8 Diamond Bally Gang NFT\u2019s. Each holder will receive $500AUD IN ETH per month for 1 whole year. You will also receive free access to nightclubs & events for life.","There will be 88 Rose Gold Bally Gang NFT\u2019s that will give you free access to nightclubs and events for life. ","We will hold monthly prize giveaways for holders for the first 12 months.","Holders will have exclusive access to Bally Gang merch."]},{title:"Phase FOUR",subtitle:"BALLY TANK",list:["8 NFT holders will be granted $10K AUD in cash to each pursue their business idea. 2 winners will be chosen every quarter for 12 months. The winners will be chosen by our NFT holders and they will have access to Lowkee and his network. "]},{title:"Phase FIVE",subtitle:"SEND IT",list:["We are launching an independent awards night for independent artists & creatives in the Aus/Nz music industry.","Holders will have priority access to ticket sales to events and festivals.","The Gang will continue building the entertainment scene including music, events, and movies.","We are committed to continue bringing value and utilities to Bally Gang NFT holders!"]},{title:"Phase SIX",subtitle:"META GANG",list:["Our roadmap allows for gradual, executable phases which all lead our holders to the big one. The Metaverse. As Web3 develops further, we'll seek to explore different metaverse avenues in entertainment, business and gaming. Where Bally Gang NFT holders will be able to load their NFT as characters in the metaverse!"]}],ve=n(97),ge=n.n(ve),xe=function(e){var t=e.title,n=e.subtitle,a=e.list;return Object(B.jsxs)("li",{children:[Object(B.jsx)("div",{className:ge.a.title,children:t}),Object(B.jsx)("div",{className:ge.a.subtitle,children:n}),Object(B.jsx)("ul",{className:ge.a.features,children:a.map((function(e){return Object(B.jsx)("li",{className:ge.a.feature,children:e},e)}))})]})},Oe=function(){return Object(B.jsx)("section",{className:ge.a.section,children:Object(B.jsx)("div",{className:ge.a.inner,children:Object(B.jsx)("ul",{className:ge.a.list,children:je.map((function(e){var t=e.title,n=e.subtitle,a=e.list;return Object(B.jsx)(xe,{title:t,subtitle:n,list:a},t)}))})})})},we=[{title:"LOWKEE",subtitle:"FOUNDER",image:z},{title:"KEVIN",subtitle:"LEAD CREATIVE",image:z},{title:"MOONBOY STUDIOS",subtitle:"CREATIVE TEAM",image:z},{title:"JACK",subtitle:"3D ARTIST",image:z},{title:"kunal",subtitle:"LEAD DEVELOPER",image:z},{title:"VEDAMETRIC",subtitle:"DEVELOPMENT TEAM",image:z},{title:"MAZ",subtitle:"OPERATIONS MANAGER",image:z},{title:"NATHAN",subtitle:"OPERATIONS MANAGER",image:z},{title:"TATE",subtitle:"BLOCKCHAIN EXPERT",image:z}],Te=n(98),ke=n.n(Te),Me=function(e){var t=e.title,n=e.subtitle,a=e.image;return Object(B.jsxs)("li",{children:[Object(B.jsx)("div",{className:ke.a.image,children:Object(B.jsx)("img",{src:a,alt:"avatar"})}),Object(B.jsx)("div",{className:ke.a.title,children:t}),Object(B.jsx)("div",{className:ke.a.subtitle,children:n})]})},Ne=function(){return Object(B.jsxs)("section",{className:ke.a.section,children:[Object(B.jsx)("div",{className:ke.a.sectionTitle,children:Object(B.jsx)("img",{src:Z,alt:"team"})}),Object(B.jsx)("div",{className:ke.a.inner,children:Object(B.jsx)("ul",{className:ke.a.list,children:we.map((function(e){var t=e.title,n=e.subtitle,a=e.image;return Object(B.jsx)(Me,{title:t,subtitle:n,image:a},t)}))})})]})},Ce=n(46),Ae=n.n(Ce),Se=function(){var e=Object(u.useState)(1),t=Object(c.a)(e,2),n=t[0],a=t[1],i=de(),s=i.mint,r=i.isMinting,p=i.pricePerToken,d=i.maxSupply,b=i.mintedAmount,m=i.account,y=i.userNftBalance,f=Object(u.useCallback)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(n);case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),M("Something went wrong!");case 9:case"end":return e.stop()}}),e,null,[[0,5]])}))),[s,n]);return Object(B.jsxs)("section",{className:Ae.a.section,children:[Object(B.jsx)("div",{className:Ae.a.left,children:Object(B.jsxs)("div",{className:Ae.a.mint,children:[Object(B.jsx)("div",{className:Ae.a.title,children:"Mint Your Bally Gang NFT! "}),Object(B.jsxs)("div",{className:Ae.a.info,children:[Object(B.jsxs)("div",{className:Ae.a.subtitle,children:["Connected wallet:",Object(B.jsxs)("span",{children:[" ",(null===m||void 0===m?void 0:m.address)?"".concat(null===m||void 0===m?void 0:m.address.slice(0,15),"...").concat(null===m||void 0===m?void 0:m.address.slice(-12)):"Not connected"]})]}),Object(B.jsxs)("div",{className:Ae.a.subtitle,children:["Price:",Object(B.jsxs)("span",{children:[" ",p," MATIC"]})]}),Object(B.jsxs)("div",{className:Ae.a.subtitle,children:["Minted:"," ",Object(B.jsxs)("span",{children:[b,"/",d]})]}),Object(B.jsxs)("div",{className:Ae.a.subtitle,children:["Your balance:",Object(B.jsxs)("span",{children:[" ",y," NFTs"]})]})]}),Object(B.jsxs)("div",{className:Ae.a.amount,children:[Object(B.jsx)("div",{role:"button",tabIndex:0,onKeyDown:function(){},onClick:function(){return a(n-1)},className:Ae.a.change,children:"-"}),Object(B.jsx)("div",{className:Ae.a.value,children:n}),Object(B.jsx)("div",{role:"button",tabIndex:0,onKeyDown:function(){},onClick:function(){return a(n+1)},className:Ae.a.change,children:"+"})]}),Object(B.jsx)("div",{className:Ae.a.center,children:Object(B.jsx)(re,{loading:r,onClick:f,children:(null===m||void 0===m?void 0:m.address)?"Mint now":"Connect"})})]})}),Object(B.jsx)("div",{className:Ae.a.right,children:Object(B.jsx)("img",{src:$,alt:"mint_bg"})})]})},Ee=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(ce,{}),Object(B.jsxs)("main",{children:[Object(B.jsx)(ye,{}),Object(B.jsx)(Se,{}),Object(B.jsx)(_e,{}),Object(B.jsx)(Oe,{}),Object(B.jsx)(Ne,{})]})]})},Ie=function(){return Object(B.jsxs)(pe,{children:[Object(B.jsx)(s.a,{}),Object(B.jsx)(Ee,{})]})},Pe=(n(919),document.getElementById("root")),Fe=Object(B.jsx)(Ie,{});i.a.render(Fe,Pe)},97:function(e,t,n){e.exports={section:"Roadmap_section__1nnTk",inner:"Roadmap_inner__2CTPt",list:"Roadmap_list__pN6Eh",title:"Roadmap_title__3M66w",subtitle:"Roadmap_subtitle__8Hb85",features:"Roadmap_features__31YeS",feature:"Roadmap_feature__36Kdo"}},98:function(e,t,n){e.exports={section:"Team_section__2LXig",inner:"Team_inner__2kf60",sectionTitle:"Team_sectionTitle__2hj7j",list:"Team_list__1ZF1d",title:"Team_title__QAt4-",subtitle:"Team_subtitle__klL3B",image:"Team_image__1xLca"}}},[[920,1,2]]]);
//# sourceMappingURL=main.e2606761.chunk.js.map